require.config({"config": {
        "jsbuild":{"mage/adminhtml/wysiwyg/tiny_mce/plugins/magentowidget/editor_plugin.js":"/**\n * Copyright \u00a9 Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\n/* global tinymce, widgetTools, jQuery, Base64 */\n/* eslint-disable strict */\ndefine([\n    'wysiwygAdapter',\n    'mage/adminhtml/events',\n    'mage/adminhtml/wysiwyg/widget'\n], function (wysiwyg, varienGlobalEvents) {\n    return function (config) {\n        tinymce.create('tinymce.plugins.magentowidget', {\n\n            /**\n             * @param {tinymce.Editor} editor - Editor instance that the plugin is initialized in.\n             * @param {String} url - Absolute URL to where the plugin is located.\n             */\n            init: function (editor, url) {\n                var self = this;\n\n                this.activePlaceholder = null;\n\n                editor.addCommand('mceMagentowidget', function (img) {\n                    if (self.activePlaceholder) {\n                        img = self.activePlaceholder;\n                    }\n\n                    widgetTools.setActiveSelectedNode(img);\n                    widgetTools.openDialog(\n                        config['window_url'] + 'widget_target_id/' + editor.getElement().id + '/'\n                    );\n                });\n\n                // Register Widget plugin button\n                editor.addButton('magentowidget', {\n                    title: jQuery.mage.__('Insert Widget'),\n                    cmd: 'mceMagentowidget',\n                    image: url + '/img/icon.png',\n\n                    /**\n                     * Fires after the rendering has completed. This ensures the editor will be instantiated\n                     */\n                    onPostRender: function () {\n                        var ctrl = this;\n\n                        // Add a node change handler, selects the button in the UI when a image is selected\n                        editor.on('nodeChange', function (e) {\n                            var placeholder = e.element;\n\n                            if (self.isWidgetPlaceholderSelected(placeholder)) {\n                                widgetTools.setEditMode(true);\n                                ctrl.active(true);\n                            } else {\n                                widgetTools.setEditMode(false);\n                                ctrl.active(false);\n                            }\n                        });\n                    }\n                });\n\n                // Add a widget placeholder image double click callback\n                editor.on('dblClick', function (e) {\n                    var placeholder = e.target;\n\n                    if (self.isWidgetPlaceholderSelected(placeholder)) {\n                        widgetTools.setEditMode(true);\n                        this.execCommand('mceMagentowidget', null);\n                    }\n                });\n\n                /**\n                 * Attach event handler for when wysiwyg editor is about to encode its content\n                 */\n                varienGlobalEvents.attachEventHandler('wysiwygEncodeContent', function (content) {\n                    content = self.encodeWidgets(self.decodeWidgets(content));\n                    content = self.removeDuplicateAncestorWidgetSpanElement(content);\n\n                    return content;\n                });\n\n                /**\n                 * Attach event handler for when wysiwyg editor is about to decode its content\n                 */\n                varienGlobalEvents.attachEventHandler('wysiwygDecodeContent', function (content) {\n                    content = self.decodeWidgets(content);\n\n                    return content;\n                });\n\n                /**\n                 * Attach event handler for when popups associated with wysiwyg are about to be closed\n                 */\n                varienGlobalEvents.attachEventHandler('wysiwygClosePopups', function () {\n                    wysiwyg.closeEditorPopup('widget_window' + wysiwyg.getId());\n                });\n            },\n\n            /**\n             * @param {Object} placeholder - Contains the selected node\n             * @returns {Boolean}\n             */\n            isWidgetPlaceholderSelected: function (placeholder) {\n                var isSelected = false;\n\n                if (placeholder.nodeName &&\n                    (placeholder.nodeName === 'SPAN' || placeholder.nodeName === 'IMG') &&\n                    placeholder.className && placeholder.className.indexOf('magento-widget') !== -1\n                ) {\n                    this.activePlaceholder = placeholder;\n                    isSelected = true;\n                } else {\n                    this.activePlaceholder = null;\n                }\n\n                return isSelected;\n            },\n\n            /**\n             * Convert {{widget}} style syntax to image placeholder HTML\n             * @param {String} content\n             * @return {*}\n             */\n            encodeWidgets: function (content) {\n                return content.gsub(/\\{\\{widget(.*?)\\}\\}/i, function (match) {\n                    var attributes = wysiwyg.parseAttributesString(match[1]),\n                        imageSrc,\n                        imageHtml = '';\n\n                    if (attributes.type) {\n                        attributes.type = attributes.type.replace(/\\\\\\\\/g, '\\\\');\n                        imageSrc = config.placeholders[attributes.type];\n\n                        if (imageSrc) {\n                            imageHtml += '<span class=\"magento-placeholder magento-widget mceNonEditable\" ' +\n                                'contenteditable=\"false\">';\n                        } else {\n                            imageSrc = config['error_image_url'];\n                            imageHtml += '<span ' +\n                                'class=\"magento-placeholder magento-placeholder-error magento-widget mceNonEditable\" ' +\n                                'contenteditable=\"false\">';\n                        }\n\n                        imageHtml += '<img';\n                        imageHtml += ' id=\"' + Base64.idEncode(match[0]) + '\"';\n                        imageHtml += ' src=\"' + imageSrc + '\"';\n                        imageHtml += ' />';\n\n                        if (config.types[attributes.type]) {\n                            imageHtml += config.types[attributes.type];\n                        }\n\n                        imageHtml += '</span>';\n\n                        return imageHtml;\n                    }\n                });\n            },\n\n            /**\n             * Convert image placeholder HTML to {{widget}} style syntax\n             * @param {String} content\n             * @return {*}\n             */\n            decodeWidgets: function (content) {\n                return content.gsub(\n                    /(<span class=\"[^\"]*magento-widget[^\"]*\"[^>]*>)?<img([^>]+id=\"[^>]+)>(([^>]*)<\\/span>)?/i,\n                    function (match) {\n                        var attributes = wysiwyg.parseAttributesString(match[2]),\n                            widgetCode,\n                            result = match[0];\n\n                        if (attributes.id) {\n                            try {\n                                widgetCode = Base64.idDecode(attributes.id);\n                            } catch (e) {\n                                // Ignore and continue.\n                            }\n\n                            if (widgetCode && widgetCode.indexOf('{{widget') !== -1) {\n                                result = widgetCode;\n                            }\n                        }\n\n                        return result;\n                    }\n                );\n            },\n\n            /**\n             * Tinymce has strange behavior with html and this removes one of its side-effects\n             * @param {String} content\n             * @return {String}\n             */\n            removeDuplicateAncestorWidgetSpanElement: function (content) {\n                var parser, doc, returnval = '';\n\n                if (!window.DOMParser) {\n                    return content;\n                }\n\n                parser = new DOMParser();\n                doc = parser.parseFromString(content.replace(/&quot;/g, '&amp;quot;'), 'text/html');\n\n                [].forEach.call(doc.querySelectorAll('.magento-widget'), function (widgetEl) {\n                    var widgetChildEl = widgetEl.querySelector('.magento-widget');\n\n                    if (!widgetChildEl) {\n                        return;\n                    }\n\n                    [].forEach.call(widgetEl.childNodes, function (el) {\n                        widgetEl.parentNode.insertBefore(el, widgetEl);\n                    });\n\n                    widgetEl.parentNode.removeChild(widgetEl);\n                });\n\n                returnval += doc.head ? doc.head.innerHTML.replace(/&amp;quot;/g, '&quot;') : '';\n                returnval += doc.body ? doc.body.innerHTML.replace(/&amp;quot;/g, '&quot;') : '';\n\n                return returnval ? returnval : content;\n            },\n\n            /**\n             * @return {Object}\n             */\n            getInfo: function () {\n                return {\n                    longname: 'Magento Widget Manager Plugin',\n                    author: 'Magento Core Team',\n                    authorurl: 'http://magentocommerce.com',\n                    infourl: 'http://magentocommerce.com',\n                    version: '1.0'\n                };\n            }\n        });\n\n        // Register plugin\n        tinymce.PluginManager.add('magentowidget', tinymce.plugins.magentowidget);\n    };\n});\n"}
}});