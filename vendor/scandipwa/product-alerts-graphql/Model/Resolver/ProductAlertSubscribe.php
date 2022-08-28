<?php
/**
 * ScandiPWA_ProductAlertsGraphQl
 *
 * @category    ScandiPWA
 * @package     ScandiPWA_ProductAlertsGraphQl
 * @author      Aleksandrs Kondratjevs <info@scandiweb.com>
 * @copyright   Copyright (c) 2021 Scandiweb, Ltd (https://scandiweb.com)
 */

namespace ScandiPWA\ProductAlertsGraphQl\Model\Resolver;

use Magento\Catalog\Api\ProductRepositoryInterface;
use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Exception\GraphQlInputException;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Magento\ProductAlert\Model\Price as PriceAlert;
use Magento\ProductAlert\Model\Stock as StockAlert;
use Magento\Store\Model\StoreManagerInterface;

class ProductAlertSubscribe implements ResolverInterface
{
    const PRODUCT_ALERT_PRICE_DROP = 'PRODUCT_ALERT_PRICE_DROP';

    /**
     * @var StoreManagerInterface
     */
    protected $storeManager;

    /**
     * @var ProductRepositoryInterface
     */
    protected $productRepository;

    /**
     * @var PriceAlert
     */
    protected $priceAlert;

    /**
     * @var StockAlert
     */
    protected $stockAlert;


    /**
     * ProductAlertSubscribe constructor
     *
     * @param PriceAlert $priceAlert
     * @param ProductRepositoryInterface $productRepository
     * @param StockAlert $stockAlert
     * @param StoreManagerInterface $storeManager
     */
    public function __construct(
        PriceAlert $priceAlert,
        ProductRepositoryInterface $productRepository,
        StockAlert $stockAlert,
        StoreManagerInterface $storeManager
    ) {
        $this->priceAlert = $priceAlert;
        $this->productRepository = $productRepository;
        $this->stockAlert = $stockAlert;
        $this->storeManager = $storeManager;
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
        $productId = (int)$args['productId'];
        $customerId = (int)$context->getUserId();

        $store = $this->storeManager->getStore();

        if ($args['type'] === self::PRODUCT_ALERT_PRICE_DROP) {
            return $this->priceDropSubscribe($productId, $customerId, $store);
        }

        return $this->inStockSubscribe($productId, $customerId, $store);
    }

    /**
     * @param $productId
     * @param $customerId
     * @param $store
     * @return bool
     * @throws GraphQlInputException
     */
    public function inStockSubscribe($productId, $customerId, $store) {
        try {
            $product = $this->productRepository->getById($productId);
            $model = $this->stockAlert
                ->setCustomerId($customerId)
                ->setProductId($product->getId())
                ->setWebsiteId($store->getWebsiteId())
                ->setStoreId($store->getId());
            $model->save();
        } catch (\Exception $e) {
            throw new GraphQlInputException(__('The alert subscription couldn\'t update at this time. Please try again later'));
        }

        return true;
    }

    /**
     * @param $productId
     * @param $customerId
     * @param $store
     * @return bool
     * @throws GraphQlInputException
     */
    public function priceDropSubscribe($productId, $customerId, $store) {
        try {
            $product = $this->productRepository->getById($productId);
            $model = $this->priceAlert
                ->setCustomerId($customerId)
                ->setProductId($product->getId())
                ->setPrice($product->getFinalPrice())
                ->setWebsiteId($store->getWebsiteId())
                ->setStoreId($store->getId());
            $model->save();
        } catch (\Exception $e) {
            throw new GraphQlInputException(__('The alert subscription couldn\'t update at this time. Please try again later'));
        }

        return true;
    }
}
