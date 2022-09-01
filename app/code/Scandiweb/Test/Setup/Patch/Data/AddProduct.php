<?php
/**
 * @category  Scandiweb_Test
 * @author    Mariia Shulezhko <mariia.shulezhko@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

namespace Scandiweb\Test\Setup\Patch\Data;

use Magento\Catalog\Api\Data\ProductInterfaceFactory;
use Magento\Catalog\Api\ProductRepositoryInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Store\Model\StoreManagerInterface;
use Magento\Catalog\Model\CategoryFactory;
use Magento\Catalog\Api\CategoryRepositoryInterface;
use Magento\Framework\App\State;
use Magento\InventoryApi\Api\Data\SourceItemInterfaceFactory;

class AddProduct implements DataPatchInterface
{
    /**
     * @var ProductRepositoryInterface
     */
    protected $productRepository;

    /**
     * @var CategoryFactory
     */
    protected $categoryFactory;

    /**
     * @var CategoryRepositoryInterface
     */
    protected $categoryRepository;

    /**
     * @var StoreManagerInterface
     */
    protected $storeManager;

    /**
     * @var State
     */
    protected State $appState;

    /**
     * @var SourceItemInterfaceFactory
     */
    protected $sourceItemFactory;

    /**
     * @param ModuleDataSetupInterface $moduleDataSetup
     * @param ProductInterfaceFactory $productFactory
     * @param ProductRepositoryInterface $productRepository
     * @param CategoryFactory $categoryFactory
     * @param CategoryRepositoryInterface $categoryRepository
     * @param StoreManagerInterface $storeManager
     */
    public function __construct(
        ModuleDataSetupInterface $moduleDataSetup,
        ProductInterfaceFactory $productFactory,
        ProductRepositoryInterface $productRepository,
        CategoryFactory $categoryFactory,
        CategoryRepositoryInterface $categoryRepository,
        StoreManagerInterface $storeManager,
        State $state,
        SourceItemInterfaceFactory $sourceItemFactory
    ) {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->productFactory = $productFactory;
        $this->productRepository = $productRepository;
        $this->categoryFactory = $categoryFactory;
        $this->categoryRepository = $categoryRepository;
        $this->storeManager = $storeManager;
        $state->emulateAreaCode('adminhtml');
        $this->appState = $state;
        $this->sourceItemFactory = $sourceItemFactory;
    }

    /**
     * @return void
     */
    public function apply(): void
    {
      $this->appState->emulateAreaCode('adminhtml', [$this, 'execute']);
    }

    /**
     * @return string
     */
    public function execute(): string
    {
        $product = $this->productFactory->create();

        $simpleProductArray = [
            [
                'sku' => '1234',
                'name' => 'Simple Product',
                'attribute_id'  => '4',
                'status' => 1,
                'weight' => 2,
                'price' => 2,
                'visibility' => 1,
                'type_id'  => 'simple',
                'category_id' => 3
            ]
        ];

        foreach ($simpleProductArray as $data) {
            // Create Product
            $product = $this->productFactory->create();
            $product->setSku($data['sku'])
                ->setName($data['name'])
                ->setAttributeSetId($data['attribute_id'])
                ->setStatus($data['status'])
                ->setWeight($data['weight'])
                ->setPrice($data['price'])
                ->setVisibility($data['visibility'])
                ->setTypeId($data['type_id'])
                ->setCategoryIds($data['category_id'])
                ->setStockData(['use_config_manage_stock' => 1, 'is_qty_decimal' => 0, 'is_in_stock' => 1]);

            $product = $this->productRepository->save($product);

            $sourceItem = $this->sourceItemFactory->create();
            $sourceItem->setSourceCode('default');
            $sourceItem->setQuantity(10);
            $sourceItem->setSku($product->getSku());
            $sourceItem->setStatus(SourceItemInterface::STATUS_IN_STOCK);
        }
    }

    /**
     * @return array
     */
    public static function getDependencies(): array
    {
        return [];
    }

    /**
     * @return array|string[]
     */
    public function getAliases(): array
    {
        return [];
    }
}
