<?php
namespace ScandiPWA\ServiceWorker\Controller\Index\Index;

/**
 * Interceptor class for @see \ScandiPWA\ServiceWorker\Controller\Index\Index
 */
class Interceptor extends \ScandiPWA\ServiceWorker\Controller\Index\Index implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\App\Filesystem\DirectoryList $directoryList, \Magento\Framework\Filesystem\DriverInterface $filesystemDriver, \Magento\Framework\View\Asset\Repository $assetRepo, \Magento\Framework\Controller\ResultFactory $resultFactory, \Magento\Framework\UrlInterface $urlModel)
    {
        $this->___init();
        parent::__construct($directoryList, $filesystemDriver, $assetRepo, $resultFactory, $urlModel);
    }

    /**
     * {@inheritdoc}
     */
    public function getServiceWorkerContent() : string
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getServiceWorkerContent');
        return $pluginInfo ? $this->___callPlugins('getServiceWorkerContent', func_get_args(), $pluginInfo) : parent::getServiceWorkerContent();
    }

    /**
     * {@inheritdoc}
     */
    public function execute()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'execute');
        return $pluginInfo ? $this->___callPlugins('execute', func_get_args(), $pluginInfo) : parent::execute();
    }
}
