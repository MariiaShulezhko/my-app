require.config({"config": {
        "text":{"Amazon_Payment/template/notification.html":"<!--\n/**\n * Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\").\n * You may not use this file except in compliance with the License.\n * A copy of the License is located at\n *\n *  http://aws.amazon.com/apache2.0\n *\n * or in the \"license\" file accompanying this file. This file is distributed\n * on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either\n * express or implied. See the License for the specific language governing\n * permissions and limitations under the License.\n */\n-->\n\n<!-- ko if: (isAmazonAccountLoggedIn) -->\n    <!-- ko if: (chargeOnOrder) -->\n        <!-- ko if: (isEuPaymentRegion) -->\n            <div class=\"message success\"><span data-bind=\"text: message\"></span></div>\n        <!-- /ko -->\n    <!-- /ko -->\n<!-- /ko -->\n"}
}});
