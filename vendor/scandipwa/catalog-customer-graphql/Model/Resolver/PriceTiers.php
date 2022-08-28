<?php
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/catalog-customer-graphql
 * @link https://github.com/scandipwa/catalog-customer-graphql
 */

namespace ScandiPWA\CatalogCustomerGraphQl\Model\Resolver;

use Magento\CatalogCustomerGraphQl\Model\Resolver\PriceTiers as SourcePriceTiers;
use Magento\Catalog\Api\Data\ProductTierPriceInterface;
use Magento\CatalogCustomerGraphQl\Model\Resolver\Customer\GetCustomerGroup;
use Magento\CatalogCustomerGraphQl\Model\Resolver\Product\Price\Tiers;
use Magento\CatalogCustomerGraphQl\Model\Resolver\Product\Price\TiersFactory;
use Magento\CatalogGraphQl\Model\Resolver\Product\Price\Discount;
use Magento\CatalogGraphQl\Model\Resolver\Product\Price\ProviderPool as PriceProviderPool;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Query\Resolver\ValueFactory;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Magento\Framework\Pricing\PriceCurrencyInterface;

class PriceTiers extends SourcePriceTiers
{
    /**
     * @var TiersFactory
     */
    protected $tiersFactory;

    /**
     * @var ValueFactory
     */
    protected $valueFactory;

    /**
     * @var GetCustomerGroup
     */
    protected $getCustomerGroup;

    /**
     * @var int
     */
    protected $customerGroupId;

    /**
     * @var Tiers
     */
    protected $tiers;

    /**
     * @var Discount
     */
    protected $discount;

    /**
     * @var PriceCurrencyInterface
     */
    protected $priceCurrency;

    /**
     * @var array
     */
    protected $tierPricesQty = [];

    /**
     * @param ValueFactory $valueFactory
     * @param TiersFactory $tiersFactory
     * @param GetCustomerGroup $getCustomerGroup
     * @param Discount $discount
     * @param PriceProviderPool $priceProviderPool
     * @param PriceCurrencyInterface $priceCurrency
     */
    public function __construct(
        ValueFactory $valueFactory,
        TiersFactory $tiersFactory,
        GetCustomerGroup $getCustomerGroup,
        Discount $discount,
        PriceProviderPool $priceProviderPool,
        PriceCurrencyInterface $priceCurrency
    ) {
        parent::__construct(
            $valueFactory,
            $tiersFactory,
            $getCustomerGroup,
            $discount,
            $priceProviderPool,
            $priceCurrency
        );

        $this->tiersFactory = $tiersFactory;
        $this->valueFactory = $valueFactory;
        $this->getCustomerGroup = $getCustomerGroup;
        $this->discount = $discount;
        $this->priceCurrency = $priceCurrency;
    }

    /**
     * @inheritdoc
     */
    public function resolve(
        Field $field,
        $context,
        ResolveInfo $info,
        array $value = null,
        array $args = null
    ) {
        if (!isset($value['model'])) {
            throw new LocalizedException(__('"model" value should be specified'));
        }

        if (empty($this->tiers)) {
            $this->customerGroupId = $this->getCustomerGroup->execute($context->getUserId());
            $this->tiers = $this->tiersFactory->create(['customerGroupId' => $this->customerGroupId]);
        }

        $product = $value['model'];

        if (
            ($product->hasData('can_show_price') && $product->getData('can_show_price') === false)
            || !$product->getTierPrices()
        ) {
            return [];
        }

        $productId = (int)$product->getId();
        $this->tiers->addProductFilter($productId);

        return $this->valueFactory->create(
            function () use ($productId, $context) {
                // This lines added to clean previous results
                $this->tierPricesQty = [];

                $currencyCode = $context->getExtensionAttributes()->getStore()->getCurrentCurrencyCode();

                $productPrice = $this->tiers->getProductRegularPrice($productId) ?? 0.0;
                $tierPrices = $this->tiers->getProductTierPrices($productId) ?? [];

                return $this->formatAndFilterTierPrices($productPrice, $tierPrices, $currencyCode);
            }
        );
    }

    /**
     * Format and filter tier prices for output
     *
     * @param float $productPrice
     * @param ProductTierPriceInterface[] $tierPrices
     * @param string $currencyCode
     * @return array
     */
    protected function formatAndFilterTierPrices(
        float $productPrice,
        array $tierPrices,
        string $currencyCode
    ): array {
        $result = [];

        foreach ($tierPrices as $key => $tierPrice) {
            $tierPrice->setValue($this->priceCurrency->convertAndRound($tierPrice->getValue()));
            $formattedTierPrices = $this->formatTierPrices($productPrice, $currencyCode, $tierPrice);
            $filteredTierPrices = $this->filterTierPrices($tierPrices, $key, $tierPrice, $formattedTierPrices);
            $result[] = $filteredTierPrices;
        }

        return $result;
    }

    /**
     * Format tier prices for output
     *
     * @param float $productPrice
     * @param string $currencyCode
     * @param ProductTierPriceInterface $tierPrice
     */
    protected function formatTierPrices(float $productPrice, string $currencyCode, $tierPrice)
    {
        $percentValue = $tierPrice->getExtensionAttributes()->getPercentageValue();
        if ($percentValue && is_numeric($percentValue)) {
            $discount = $this->discount->getDiscountByPercent($productPrice, (float)$percentValue);
        } else {
            $discount = $this->discount->getDiscountByDifference($productPrice, (float)$tierPrice->getValue());
        }

        return [
            "discount" => $discount,
            "quantity" => $tierPrice->getQty(),
            "final_price" => [
                "value" => $tierPrice->getValue(),
                "currency" => $currencyCode
            ]
        ];
    }

    /**
     * Filter the lowest price for each quantity
     *
     * @param array $tierPrices
     * @param int $key
     * @param ProductTierPriceInterface $tierPriceItem
     */
    protected function filterTierPrices(
        array $tierPrices,
        int $key,
        ProductTierPriceInterface $tierPriceItem,
        $formattedTierPrice
    ) {
        $qty = $tierPriceItem->getQty();
        if (isset($this->tierPricesQty[$qty])) {
            $priceQty = $this->tierPricesQty[$qty];
            if ((float)$tierPriceItem->getValue() < (float)$tierPrices[$priceQty]->getValue()) {
                unset($formattedTierPrice[$priceQty]);
                $this->tierPricesQty[$priceQty] = $key;
            } else {
                unset($formattedTierPrice[$key]);
            }
        } else {
            $this->tierPricesQty[$qty] = $key;
        }

        return $formattedTierPrice;
    }
}
