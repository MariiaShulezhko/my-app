require.config({"config": {
        "text":{"Magento_Ui/templates/grid/submenu.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<ul class=\"action-submenu\" each=\"data: action.actions, as: 'action'\" css=\"_active: action.visible\">\n    <li css=\"_visible: $data.visible\">\n        <span class=\"action-menu-item\" translate=\"label\" click=\"$parent.applyAction.bind($parent, type)\"/>\n        <render args=\"name: $parent.submenuTemplate, data: $parent\" if=\"$data.actions\"/>\n    </li>\n</ul>\n"}
}});
