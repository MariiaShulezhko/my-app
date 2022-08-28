<?php
namespace ScandiPWA\PersistedQuery\Plugin\PersistedQuery;

/**
 * Interceptor class for @see \ScandiPWA\PersistedQuery\Plugin\PersistedQuery
 */
class Interceptor extends \ScandiPWA\PersistedQuery\Plugin\PersistedQuery implements \Magento\Framework\Interception\InterceptorInterface
{
    use \Magento\Framework\Interception\Interceptor;

    public function __construct(\Magento\Framework\Webapi\Response $response, \ScandiPWA\PersistedQuery\RedisClient $redisClient, \Magento\Framework\Serialize\SerializerInterface $serializer, \Psr\Log\LoggerInterface $logger, \Magento\Framework\App\Cache\StateInterface $cacheState, \Magento\Framework\GraphQl\Query\Fields $queryFields, \Magento\Framework\GraphQl\Schema\SchemaGeneratorInterface $schemaGenerator, \Magento\Framework\Serialize\SerializerInterface $jsonSerializer, \Magento\Framework\GraphQl\Query\QueryProcessor $queryProcessor, \Magento\Framework\GraphQl\Exception\ExceptionFormatter $graphQlError, ?\Magento\Framework\Controller\Result\JsonFactory $jsonFactory = null, ?\Magento\Framework\App\Response\Http $httpResponse = null, ?\Magento\GraphQl\Model\Query\ContextFactoryInterface $contextFactory = null)
    {
        $this->___init();
        parent::__construct($response, $redisClient, $serializer, $logger, $cacheState, $queryFields, $schemaGenerator, $jsonSerializer, $queryProcessor, $graphQlError, $jsonFactory, $httpResponse, $contextFactory);
    }

    /**
     * {@inheritdoc}
     */
    public function aroundDispatch(\Magento\Framework\Interception\InterceptorInterface $interceptor, \Closure $next, \Magento\Framework\App\RequestInterface $request) : \Magento\Framework\App\ResponseInterface
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'aroundDispatch');
        return $pluginInfo ? $this->___callPlugins('aroundDispatch', func_get_args(), $pluginInfo) : parent::aroundDispatch($interceptor, $next, $request);
    }

    /**
     * {@inheritdoc}
     */
    public function processRequest(\Magento\Framework\App\RequestInterface $request) : \Magento\Framework\App\ResponseInterface
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'processRequest');
        return $pluginInfo ? $this->___callPlugins('processRequest', func_get_args(), $pluginInfo) : parent::processRequest($request);
    }

    /**
     * {@inheritdoc}
     */
    public function processGraphqlRequest(string $queryHash, $documentNode, array $variables) : \Magento\Framework\App\Response\Http
    {
        $pluginInfo = $this->pluginList->getNext($this->subjectType, 'processGraphqlRequest');
        return $pluginInfo ? $this->___callPlugins('processGraphqlRequest', func_get_args(), $pluginInfo) : parent::processGraphqlRequest($queryHash, $documentNode, $variables);
    }
}
