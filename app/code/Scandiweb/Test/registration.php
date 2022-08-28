<?php 
/**
 * @category  Scandiweb_Test
 * @author    Mariia Shulezhko <mariia.shulezhko@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(
	ComponentRegistrar::MODULE,
	'Scandiweb_Test',
	__DIR__
);