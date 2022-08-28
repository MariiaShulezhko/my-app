<?php
namespace ScandiPWA\QuoteGraphQl\Model\Resolver\CartMinimumOrderAmount;

/**
 * Interceptor class for @see \ScandiPWA\QuoteGraphQl\Model\Resolver\CartMinimumOrderAmount
 */
class Interceptor extends \ScandiPWA\QuoteGraphQl\Model\Resolver\CartMinimumOrderAmount implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Quote\Model\Quote\Validator\MinimumOrderAmount\ValidationMessage $amountValidationMessage)
    {
        $this->___init();
        parent::__construct($amountValidationMessage);
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
