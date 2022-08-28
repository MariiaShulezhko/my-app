require.config({"config": {
        "text":{"Magento_Ui/templates/modal/modal-popup.html":"<!--\n/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n-->\n\n<aside role=\"dialog\"\n       class=\"modal-<%- data.type %> <%- data.modalClass %>\n               <% if(data.responsive){ %><%- data.responsiveClass %><% } %>\n               <% if(data.innerScroll){ %><%- data.innerScrollClass %><% } %>\"\n       <% if(data.title){ %> aria-labelledby=\"modal-title-<%- data.id %>\"<% } %>\n       aria-describedby=\"modal-content-<%- data.id %>\"\n       data-role=\"modal\"\n       data-type=\"<%- data.type %>\"\n       tabindex=\"0\">\n    <div data-role=\"focusable-start\" tabindex=\"0\"></div>\n    <div class=\"modal-inner-wrap\"\n         data-role=\"focusable-scope\">\n        <header class=\"modal-header\">\n            <% if(data.title || data.subTitle){ %>\n            <h1 id=\"modal-title-<%- data.id %>\" class=\"modal-title\"\n                data-role=\"title\">\n                <% if(data.title){ %>\n                    <%= data.title %>\n                <% } %>\n\n                <% if(data.subTitle){ %>\n                <span class=\"modal-subtitle\"\n                      data-role=\"subTitle\">\n                    <%= data.subTitle %>\n                </span>\n                <% } %>\n            </h1>\n            <% } %>\n            <button\n                class=\"action-close\"\n                data-role=\"closeBtn\"\n                type=\"button\">\n                <span><%= data.closeText %></span>\n            </button>\n        </header>\n        <div id=\"modal-content-<%- data.id %>\"\n            class=\"modal-content\"\n            data-role=\"content\"></div>\n        <% if(data.buttons.length > 0){ %>\n        <footer class=\"modal-footer\">\n            <% _.each(data.buttons, function(button) { %>\n            <button\n                class=\"<%- button.class %>\"\n                type=\"button\"\n                data-role=\"action\"><span><%= button.text %></span></button>\n            <% }); %>\n        </footer>\n        <% } %>\n    </div>\n    <div data-role=\"focusable-end\" tabindex=\"0\"></div>\n</aside>\n"}
}});
