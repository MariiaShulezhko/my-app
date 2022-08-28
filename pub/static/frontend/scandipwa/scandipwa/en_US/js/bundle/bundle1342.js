require.config({"config": {
        "text":{"Magento_Ui/templates/grid/cells/expandable.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n<div class=\"data-grid-cell-content\">\n    <span text=\"$col.getFullLabel($row())\" ifnot=\"$col.isExpandable($row())\"/>\n\n    <div if=\"$col.isExpandable($row())\">\n        <div text=\"$col.getShortLabel($row())\" class=\"admin__control-short-label\" />\n        <a attr=\"'data-tooltip-trigger': ++ko.uid\" translate=\"'Show more'\"/>\n        <div\n            tooltip=\"\n                tooltipClasses: 'data-grid-column-tooltip',\n                trigger: '[data-tooltip-trigger=' + ko.uid + ']',\n                action: 'click',\n                delay: 0,\n                center: true,\n                position: 'top',\n                closeButton: true,\n                closeOnScroll: false\n            \">\n            <div render=\"$data.tooltipTmpl\"/>\n        </div>\n    </div>\n</div>\n"}
}});
