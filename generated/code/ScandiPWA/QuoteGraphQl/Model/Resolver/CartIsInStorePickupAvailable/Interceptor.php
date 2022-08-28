<?php
namespace ScandiPWA\QuoteGraphQl\Model\Resolver\CartIsInStorePickupAvailable;

/**
 * Interceptor class for @see \ScandiPWA\QuoteGraphQl\Model\Resolver\CartIsInStorePickupAvailable
 */
class Interceptor extends \ScandiPWA\QuoteGraphQl\Model\Resolver\CartIsInStorePickupAvailable implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\InventoryInStorePickupShippingApi\Model\IsInStorePickupDeliveryAvailableForCartInterface $inStorePickupDeliveryAvailableForCart)
    {
        $this->___init();
        parent::__construct($inStorePickupDeliveryAvailableForCart);
    }

    /**
     * {@inheritdoc}
     */
    public function resolve(\Magento\Framework\GraphQl\Config\Element\Field $field, $context, \Magento\Framework\GraphQl\Schema\Type\ResolveInfo $info, ?array $value = null, ?array $args = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'resolve');
        return $pluginInfo ? $this->___callPlugins('resolve', func_get_args(), $pluginInfo) : parent::resolve($field, $context, $info, $value, $args);
    }
}
