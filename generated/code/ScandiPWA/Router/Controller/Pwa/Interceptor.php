<?php
namespace ScandiPWA\Router\Controller\Pwa;

/**
 * Interceptor class for @see \ScandiPWA\Router\Controller\Pwa
 */
class Interceptor extends \ScandiPWA\Router\Controller\Pwa implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\App\Action\Context $context, \Magento\Framework\View\Result\PageFactory $resultPageFactory)
    {
        $this->___init();
        parent::__construct($context, $resultPageFactory);
    }

    /**
     * {@inheritdoc}
     */
    public function setType(string $type = 'UNKNOWN') : \ScandiPWA\Router\Controller\Pwa
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setType');
        return $pluginInfo ? $this->___callPlugins('setType', func_get_args(), $pluginInfo) : parent::setType($type);
    }

    /**
     * {@inheritdoc}
     */
    public function setCode(int $code) : \ScandiPWA\Router\Controller\Pwa
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setCode');
        return $pluginInfo ? $this->___callPlugins('setCode', func_get_args(), $pluginInfo) : parent::setCode($code);
    }

    /**
     * {@inheritdoc}
     */
    public function setPhrase(string $phrase) : \ScandiPWA\Router\Controller\Pwa
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setPhrase');
        return $pluginInfo ? $this->___callPlugins('setPhrase', func_get_args(), $pluginInfo) : parent::setPhrase($phrase);
    }

    /**
     * {@inheritdoc}
     */
    public function execute()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'execute');
        return $pluginInfo ? $this->___callPlugins('execute', func_get_args(), $pluginInfo) : parent::execute();
    }

    /**
     * {@inheritdoc}
     */
    public function dispatch(\Magento\Framework\App\RequestInterface $request)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'dispatch');
        return $pluginInfo ? $this->___callPlugins('dispatch', func_get_args(), $pluginInfo) : parent::dispatch($request);
    }

    /**
     * {@inheritdoc}
     */
    public function getActionFlag()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getActionFlag');
        return $pluginInfo ? $this->___callPlugins('getActionFlag', func_get_args(), $pluginInfo) : parent::getActionFlag();
    }

    /**
     * {@inheritdoc}
     */
    public function getRequest()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getRequest');
        return $pluginInfo ? $this->___callPlugins('getRequest', func_get_args(), $pluginInfo) : parent::getRequest();
    }

    /**
     * {@inheritdoc}
     */
    public function getResponse()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getResponse');
        return $pluginInfo ? $this->___callPlugins('getResponse', func_get_args(), $pluginInfo) : parent::getResponse();
    }
}
