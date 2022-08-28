<?php
namespace ScandiPWA\Customization\View\Result\Page;

/**
 * Interceptor class for @see \ScandiPWA\Customization\View\Result\Page
 */
class Interceptor extends \ScandiPWA\Customization\View\Result\Page implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Store\Model\StoreManagerInterface $storeManager, \Magento\Framework\Locale\Resolver $localeResolver, \Magento\Framework\View\Element\Template\Context $context, \Magento\Framework\View\LayoutFactory $layoutFactory, \Magento\Framework\View\Layout\ReaderPool $layoutReaderPool, \Magento\Framework\Translate\InlineInterface $translateInline, \Magento\Framework\View\Layout\BuilderFactory $layoutBuilderFactory, \Magento\Framework\View\Layout\GeneratorPool $generatorPool, \Magento\Framework\View\Page\Config\RendererFactory $pageConfigRendererFactory, \Magento\Framework\View\Page\Layout\Reader $pageLayoutReader, \Magento\Framework\App\Filesystem\DirectoryList $directoryList, \Magento\Framework\Serialize\Serializer\Json $json, string $template, \ScandiPWA\Customization\Controller\AppIcon $appIcon, $isIsolated = false, ?\Magento\Framework\View\EntitySpecificHandlesList $entitySpecificHandlesList = null, $action = null, $rootTemplatePool = [])
    {
        $this->___init();
        parent::__construct($storeManager, $localeResolver, $context, $layoutFactory, $layoutReaderPool, $translateInline, $layoutBuilderFactory, $generatorPool, $pageConfigRendererFactory, $pageLayoutReader, $directoryList, $json, $template, $appIcon, $isIsolated, $entitySpecificHandlesList, $action, $rootTemplatePool);
    }

    /**
     * {@inheritdoc}
     */
    public function getThemeConfiguration(string $sectionName)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getThemeConfiguration');
        return $pluginInfo ? $this->___callPlugins('getThemeConfiguration', func_get_args(), $pluginInfo) : parent::getThemeConfiguration($sectionName);
    }

    /**
     * {@inheritdoc}
     */
    public function getStoreListJson()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getStoreListJson');
        return $pluginInfo ? $this->___callPlugins('getStoreListJson', func_get_args(), $pluginInfo) : parent::getStoreListJson();
    }

    /**
     * {@inheritdoc}
     */
    public function getAppIconData()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getAppIconData');
        return $pluginInfo ? $this->___callPlugins('getAppIconData', func_get_args(), $pluginInfo) : parent::getAppIconData();
    }

    /**
     * {@inheritdoc}
     */
    public function getWebsiteCode()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getWebsiteCode');
        return $pluginInfo ? $this->___callPlugins('getWebsiteCode', func_get_args(), $pluginInfo) : parent::getWebsiteCode();
    }

    /**
     * {@inheritdoc}
     */
    public function getLanguageCode()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getLanguageCode');
        return $pluginInfo ? $this->___callPlugins('getLanguageCode', func_get_args(), $pluginInfo) : parent::getLanguageCode();
    }

    /**
     * {@inheritdoc}
     */
    public function getLocaleCode()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getLocaleCode');
        return $pluginInfo ? $this->___callPlugins('getLocaleCode', func_get_args(), $pluginInfo) : parent::getLocaleCode();
    }

    /**
     * {@inheritdoc}
     */
    public function getLocaleChunkUrl()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getLocaleChunkUrl');
        return $pluginInfo ? $this->___callPlugins('getLocaleChunkUrl', func_get_args(), $pluginInfo) : parent::getLocaleChunkUrl();
    }

    /**
     * {@inheritdoc}
     */
    public function setAction(string $actionType)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setAction');
        return $pluginInfo ? $this->___callPlugins('setAction', func_get_args(), $pluginInfo) : parent::setAction($actionType);
    }

    /**
     * {@inheritdoc}
     */
    public function getAction()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getAction');
        return $pluginInfo ? $this->___callPlugins('getAction', func_get_args(), $pluginInfo) : parent::getAction();
    }

    /**
     * {@inheritdoc}
     */
    public function setRootTemplate($template)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setRootTemplate');
        return $pluginInfo ? $this->___callPlugins('setRootTemplate', func_get_args(), $pluginInfo) : parent::setRootTemplate($template);
    }

    /**
     * {@inheritdoc}
     */
    public function initLayout()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'initLayout');
        return $pluginInfo ? $this->___callPlugins('initLayout', func_get_args(), $pluginInfo) : parent::initLayout();
    }

    /**
     * {@inheritdoc}
     */
    public function addDefaultHandle()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'addDefaultHandle');
        return $pluginInfo ? $this->___callPlugins('addDefaultHandle', func_get_args(), $pluginInfo) : parent::addDefaultHandle();
    }

    /**
     * {@inheritdoc}
     */
    public function getConfig()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getConfig');
        return $pluginInfo ? $this->___callPlugins('getConfig', func_get_args(), $pluginInfo) : parent::getConfig();
    }

    /**
     * {@inheritdoc}
     */
    public function addPageLayoutHandles(array $parameters = [], $defaultHandle = null, $entitySpecific = true)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'addPageLayoutHandles');
        return $pluginInfo ? $this->___callPlugins('addPageLayoutHandles', func_get_args(), $pluginInfo) : parent::addPageLayoutHandles($parameters, $defaultHandle, $entitySpecific);
    }

    /**
     * {@inheritdoc}
     */
    public function getLayout()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getLayout');
        return $pluginInfo ? $this->___callPlugins('getLayout', func_get_args(), $pluginInfo) : parent::getLayout();
    }

    /**
     * {@inheritdoc}
     */
    public function getDefaultLayoutHandle()
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'getDefaultLayoutHandle');
        return $pluginInfo ? $this->___callPlugins('getDefaultLayoutHandle', func_get_args(), $pluginInfo) : parent::getDefaultLayoutHandle();
    }

    /**
     * {@inheritdoc}
     */
    public function addHandle($handleName)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'addHandle');
        return $pluginInfo ? $this->___callPlugins('addHandle', func_get_args(), $pluginInfo) : parent::addHandle($handleName);
    }

    /**
     * {@inheritdoc}
     */
    public function addUpdate($update)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'addUpdate');
        return $pluginInfo ? $this->___callPlugins('addUpdate', func_get_args(), $pluginInfo) : parent::addUpdate($update);
    }

    /**
     * {@inheritdoc}
     */
    public function renderResult(\Magento\Framework\App\ResponseInterface $httpResponse)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'renderResult');
        return $pluginInfo ? $this->___callPlugins('renderResult', func_get_args(), $pluginInfo) : parent::renderResult($httpResponse);
    }

    /**
     * {@inheritdoc}
     */
    public function setHttpResponseCode($httpCode)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setHttpResponseCode');
        return $pluginInfo ? $this->___callPlugins('setHttpResponseCode', func_get_args(), $pluginInfo) : parent::setHttpResponseCode($httpCode);
    }

    /**
     * {@inheritdoc}
     */
    public function setHeader($name, $value, $replace = false)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setHeader');
        return $pluginInfo ? $this->___callPlugins('setHeader', func_get_args(), $pluginInfo) : parent::setHeader($name, $value, $replace);
    }

    /**
     * {@inheritdoc}
     */
    public function setStatusHeader($httpCode, $version = null, $phrase = null)
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'setStatusHeader');
        return $pluginInfo ? $this->___callPlugins('setStatusHeader', func_get_args(), $pluginInfo) : parent::setStatusHeader($httpCode, $version, $phrase);
    }
}
