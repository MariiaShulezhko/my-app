<?php
/**
 * ScandiPWA_DirectoryGraphQl
 *
 * @category    ScandiPWA
 * @package     ScandiPWA_DirectoryGraphQL
 * @author      Aleksandrs Kondratjevs <info@scandiweb.com>
 * @copyright   Copyright (c) 2021 Scandiweb, Ltd (https://scandiweb.com)
 */

namespace ScandiPWA\DirectoryGraphQl\Model\Resolver;

use Magento\DirectoryGraphQl\Model\Resolver\Countries as BaseCountries;

use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\Reflection\DataObjectProcessor;
use Magento\Directory\Api\CountryInformationAcquirerInterface;
use Magento\Directory\Api\Data\CountryInformationInterface;
use Magento\Directory\Helper\Data as DirectoryHelper;

/**
 * Countries field resolver, used for GraphQL request processing.
 */
class Countries extends BaseCountries
{
    /**
     * @var DataObjectProcessor
     */
    private $dataProcessor;

    /**
     * @var CountryInformationAcquirerInterface
     */
    private $countryInformationAcquirer;

    /**
     * @var DirectoryHelper
     */
    protected $directoryHelper;

    /**
     * @param DataObjectProcessor $dataProcessor
     * @param CountryInformationAcquirerInterface $countryInformationAcquirer
     * @param DirectoryHelper $directoryHelper
     */
    public function __construct(
        DataObjectProcessor $dataProcessor,
        CountryInformationAcquirerInterface $countryInformationAcquirer,
        DirectoryHelper $directoryHelper
    ) {
        $this->dataProcessor = $dataProcessor;
        $this->countryInformationAcquirer = $countryInformationAcquirer;
        $this->directoryHelper = $directoryHelper;
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
        $countries = $this->countryInformationAcquirer->getCountriesInfo();
        $countriesRequireState = $this->directoryHelper->getCountriesWithStatesRequired();
        $output = [];

        // Added check for country if it requires state/province
        foreach ($countries as $country) {
            $result = $this->dataProcessor->buildOutputDataArray($country, CountryInformationInterface::class);

            if (in_array($result['id'], $countriesRequireState)) {
                $result['is_state_required'] = true;
            }

            $output[] = $result;
        }

        return $output;
    }
}
