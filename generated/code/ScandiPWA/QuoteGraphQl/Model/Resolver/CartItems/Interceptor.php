<?php
namespace ScandiPWA\QuoteGraphQl\Model\Resolver\CartItems;

/**
 * Interceptor class for @see \ScandiPWA\QuoteGraphQl\Model\Resolver\CartItems
 */
class Interceptor extends \ScandiPWA\QuoteGraphQl\Model\Resolver\CartItems implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\QuoteGraphQl\Model\Cart\GetCartProducts $getCartProducts, \Magento\Framework\GraphQl\Query\Uid $uidEncoder, \Magento\Store\Model\App\Emulation $emulation, \Magento\Catalog\Helper\Image $helperImage, \Magento\Store\Model\StoreManagerInterface $storeManager, \ScandiPWA\Performance\Model\Resolver\Products\DataPostProcessor $productPostProcessor)
    {
        $this->___init();
        parent::__construct($getCartProducts, $uidEncoder, $emulation, $helperImage, $storeManager, $productPostProcessor);
    }

    /**
     * {@inheritdoc}
     */
    public function resolve(\Magento\Framework\GraphQl\Config\Element\Field $field, $context, \Magento\Framework\GraphQl\Schema\Type\ResolveInfo $info, ?array $value = null, ?array $args = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'resolve');
        return $pluginInfo ? $this->___callPlugins('resolve', func_get_args(), $pluginInfo) : parent::resolve($field, $context, $info, $value, $args);
    }

    /**
     * {@inheritdoc}
     */
    public function getCartProductsData(\Magento\Quote\Model\Quote $cart, \Magento\Framework\GraphQl\Schema\Type\ResolveInfo $info) : array
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getCartProductsData');
        return $pluginInfo ? $this->___callPlugins('getCartProductsData', func_get_args(), $pluginInfo) : parent::getCartProductsData($cart, $info);
    }
}
