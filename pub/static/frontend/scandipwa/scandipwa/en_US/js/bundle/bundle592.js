require.config({"config": {
        "jsbuild":{"Amazon_Payment/js/amazon-core.js":"/**\n * Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\").\n * You may not use this file except in compliance with the License.\n * A copy of the License is located at\n *\n *  http://aws.amazon.com/apache2.0\n *\n * or in the \"license\" file accompanying this file. This file is distributed\n * on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n * express or implied. See the License for the specific language governing\n * permissions and limitations under the License.\n */\n\ndefine([\n    'jquery',\n    'ko',\n    'mage/url',\n    'amazonPaymentConfig',\n    'Magento_Ui/js/model/messageList',\n    'amazonWidgetsLoader',\n    'jquery/jquery-storageapi',\n    'mage/cookies'\n], function ($, ko, url, amazonPaymentConfig, messageList) {\n    'use strict';\n\n    var amazonDefined = ko.observable(false),\n        amazonLoginError = ko.observable(false),\n        accessToken = ko.observable(null),\n        // Match region config to amazon.Login.Region\n        regions = {'us': 'NA', 'de': 'EU', 'uk': 'EU', 'jp': 'APAC'},\n        sandboxMode,\n        region;\n\n    accessToken($.mage.cookies.get('amazon_Login_accessToken'));\n\n    var initAmazonLogin = function () {\n        amazon.Login.setClientId(amazonPaymentConfig.getValue('clientId')); //eslint-disable-line no-undef\n        amazon.Login.setSandboxMode(amazonPaymentConfig.getValue('isSandboxEnabled', false)); //eslint-disable-line no-undef\n        amazon.Login.setRegion(regions[amazonPaymentConfig.getValue('region')]); //eslint-disable-line no-undef\n        amazon.Login.setUseCookie(true); //eslint-disable-line no-undef\n\n        doLogoutOnFlagCookie(); //eslint-disable-line no-use-before-define\n        amazonDefined(true);\n    };\n\n    if (typeof amazon === 'undefined') {\n        window.onAmazonLoginReady = initAmazonLogin;\n    } else {\n        initAmazonLogin();\n    }\n\n    // Widgets.js ready callback\n    window.onAmazonPaymentsReady = function() {\n        $(window).trigger('OffAmazonPayments');\n    };\n\n    /**\n     * Log user out of amazon\n     */\n    function amazonLogout() {\n        $.mage.cookies.clear('amazon_Login_accessToken');\n        $.ajax({\n            url: url.build('amazon/logout'),\n            context: this\n        }).always(function () {\n            if (amazonDefined()) {\n                amazon.Login.logout(); //eslint-disable-line no-undef\n            } else {\n                var logout = amazonDefined.subscribe(function (defined) { //eslint-disable-line vars-on-top\n                    if (defined) {\n                        amazon.Login.logout(); // eslint-disable-line no-undef\n                        logout.dispose(); //remove subscribe\n                    }\n                });\n            }\n        });\n    }\n\n    /**\n     * Check if login error / logout cookies are present\n     */\n    function doLogoutOnFlagCookie() {\n        var errorFlagCookie = 'amz_auth_err',\n            amazonLogoutCookie = 'amz_auth_logout';\n\n        //eslint-disable-next-line no-use-before-define\n        $.cookieStorage.isSet(errorFlagCookie) ? amazonLogoutThrowError(errorFlagCookie) : false;\n        //eslint-disable-next-line no-use-before-define\n        $.cookieStorage.isSet(amazonLogoutCookie) ? amazonLogoutThrowError(amazonLogoutCookie) : false;\n    }\n\n    /**\n     * Handle deletion of cookie and log user out if present\n     */\n    function amazonLogoutThrowError(cookieToRemove) {\n        amazonLogout();\n        document.cookie = cookieToRemove + '=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';\n        amazonLoginError(true);\n    }\n\n    function handleWidgetError(error) {\n        console.log('OffAmazonPayments.Widgets', error.getErrorCode(), error.getErrorMessage());\n        switch (error.getErrorCode()) {\n            case 'BuyerSessionExpired':\n                messageList.addErrorMessage({message: $.mage.__('Your Amazon session has expired.  Please sign in again by clicking the Amazon Pay Button.')});\n                var storage = require('Amazon_Payment/js/model/storage'); //TODO: clean up this circular dependency\n                storage.amazonlogOut();\n                break;\n            case 'ITP':\n                // ITP errors are how handled within the widget code\n                break;\n            default:\n                messageList.addErrorMessage({message: $.mage.__(error.getErrorMessage())});\n        }\n    }\n\n    return {\n        /**\n         * Log user out of Amazon\n         */\n        AmazonLogout: amazonLogout,\n        amazonDefined: amazonDefined,\n        accessToken: accessToken,\n        amazonLoginError: amazonLoginError,\n        handleWidgetError: handleWidgetError\n    };\n\n});\n"}
}});
