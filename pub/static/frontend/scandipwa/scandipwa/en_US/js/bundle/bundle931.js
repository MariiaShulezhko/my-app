require.config({"config": {
        "jsbuild":{"tiny_mce_4/plugins/hr/plugin.min.js":"!function(){\"use strict\";var n=tinymce.util.Tools.resolve(\"tinymce.PluginManager\"),t=function(n){n.addCommand(\"InsertHorizontalRule\",function(){n.execCommand(\"mceInsertContent\",!1,\"<hr />\")})},o=function(n){n.addButton(\"hr\",{icon:\"hr\",tooltip:\"Horizontal line\",cmd:\"InsertHorizontalRule\"}),n.addMenuItem(\"hr\",{icon:\"hr\",text:\"Horizontal line\",cmd:\"InsertHorizontalRule\",context:\"insert\"})};n.add(\"hr\",function(n){t(n),o(n)})}();"}
}});
