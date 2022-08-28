require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/plugins/lists/editor_plugin_src.js":"/**\n * editor_plugin_src.js\n *\n * Copyright 2011, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function() {\n\tvar each = tinymce.each, Event = tinymce.dom.Event, bookmark;\n\n\t// Skips text nodes that only contain whitespace since they aren't semantically important.\n\tfunction skipWhitespaceNodes(e, next) {\n\t\twhile (e && (e.nodeType === 8 || (e.nodeType === 3 && /^[ \\t\\n\\r]*$/.test(e.nodeValue)))) {\n\t\t\te = next(e);\n\t\t}\n\t\treturn e;\n\t}\n\n\tfunction skipWhitespaceNodesBackwards(e) {\n\t\treturn skipWhitespaceNodes(e, function(e) {\n\t\t\treturn e.previousSibling;\n\t\t});\n\t}\n\n\tfunction skipWhitespaceNodesForwards(e) {\n\t\treturn skipWhitespaceNodes(e, function(e) {\n\t\t\treturn e.nextSibling;\n\t\t});\n\t}\n\n\tfunction hasParentInList(ed, e, list) {\n\t\treturn ed.dom.getParent(e, function(p) {\n\t\t\treturn tinymce.inArray(list, p) !== -1;\n\t\t});\n\t}\n\n\tfunction isList(e) {\n\t\treturn e && (e.tagName === 'OL' || e.tagName === 'UL');\n\t}\n\n\tfunction splitNestedLists(element, dom) {\n\t\tvar tmp, nested, wrapItem;\n\t\ttmp = skipWhitespaceNodesBackwards(element.lastChild);\n\t\twhile (isList(tmp)) {\n\t\t\tnested = tmp;\n\t\t\ttmp = skipWhitespaceNodesBackwards(nested.previousSibling);\n\t\t}\n\t\tif (nested) {\n\t\t\twrapItem = dom.create('li', { style: 'list-style-type: none;'});\n\t\t\tdom.split(element, nested);\n\t\t\tdom.insertAfter(wrapItem, nested);\n\t\t\twrapItem.appendChild(nested);\n\t\t\twrapItem.appendChild(nested);\n\t\t\telement = wrapItem.previousSibling;\n\t\t}\n\t\treturn element;\n\t}\n\n\tfunction attemptMergeWithAdjacent(e, allowDifferentListStyles, mergeParagraphs) {\n\t\te = attemptMergeWithPrevious(e, allowDifferentListStyles, mergeParagraphs);\n\t\treturn attemptMergeWithNext(e, allowDifferentListStyles, mergeParagraphs);\n\t}\n\n\tfunction attemptMergeWithPrevious(e, allowDifferentListStyles, mergeParagraphs) {\n\t\tvar prev = skipWhitespaceNodesBackwards(e.previousSibling);\n\t\tif (prev) {\n\t\t\treturn attemptMerge(prev, e, allowDifferentListStyles ? prev : false, mergeParagraphs);\n\t\t} else {\n\t\t\treturn e;\n\t\t}\n\t}\n\n\tfunction attemptMergeWithNext(e, allowDifferentListStyles, mergeParagraphs) {\n\t\tvar next = skipWhitespaceNodesForwards(e.nextSibling);\n\t\tif (next) {\n\t\t\treturn attemptMerge(e, next, allowDifferentListStyles ? next : false, mergeParagraphs);\n\t\t} else {\n\t\t\treturn e;\n\t\t}\n\t}\n\n\tfunction attemptMerge(e1, e2, differentStylesMainElement, mergeParagraphs) {\n\t\tif (canMerge(e1, e2, !!differentStylesMainElement, mergeParagraphs)) {\n\t\t\treturn merge(e1, e2, differentStylesMainElement);\n\t\t} else if (e1 && e1.tagName === 'LI' && isList(e2)) {\n\t\t\t// Fix invalidly nested lists.\n\t\t\te1.appendChild(e2);\n\t\t}\n\t\treturn e2;\n\t}\n\n\tfunction canMerge(e1, e2, allowDifferentListStyles, mergeParagraphs) {\n\t\tif (!e1 || !e2) {\n\t\t\treturn false;\n\t\t} else if (e1.tagName === 'LI' && e2.tagName === 'LI') {\n\t\t\treturn e2.style.listStyleType === 'none' || containsOnlyAList(e2);\n\t\t} else if (isList(e1)) {\n\t\t\treturn (e1.tagName === e2.tagName && (allowDifferentListStyles || e1.style.listStyleType === e2.style.listStyleType)) || isListForIndent(e2);\n\t\t} else return mergeParagraphs && e1.tagName === 'P' && e2.tagName === 'P';\n\t}\n\n\tfunction isListForIndent(e) {\n\t\tvar firstLI = skipWhitespaceNodesForwards(e.firstChild), lastLI = skipWhitespaceNodesBackwards(e.lastChild);\n\t\treturn firstLI && lastLI && isList(e) && firstLI === lastLI && (isList(firstLI) || firstLI.style.listStyleType === 'none' || containsOnlyAList(firstLI));\n\t}\n\n\tfunction containsOnlyAList(e) {\n\t\tvar firstChild = skipWhitespaceNodesForwards(e.firstChild), lastChild = skipWhitespaceNodesBackwards(e.lastChild);\n\t\treturn firstChild && lastChild && firstChild === lastChild && isList(firstChild);\n\t}\n\n\tfunction merge(e1, e2, mainElement) {\n\t\tvar lastOriginal = skipWhitespaceNodesBackwards(e1.lastChild), firstNew = skipWhitespaceNodesForwards(e2.firstChild);\n\t\tif (e1.tagName === 'P') {\n\t\t\te1.appendChild(e1.ownerDocument.createElement('br'));\n\t\t}\n\t\twhile (e2.firstChild) {\n\t\t\te1.appendChild(e2.firstChild);\n\t\t}\n\t\tif (mainElement) {\n\t\t\te1.style.listStyleType = mainElement.style.listStyleType;\n\t\t}\n\t\te2.parentNode.removeChild(e2);\n\t\tattemptMerge(lastOriginal, firstNew, false);\n\t\treturn e1;\n\t}\n\n\tfunction findItemToOperateOn(e, dom) {\n\t\tvar item;\n\t\tif (!dom.is(e, 'li,ol,ul')) {\n\t\t\titem = dom.getParent(e, 'li');\n\t\t\tif (item) {\n\t\t\t\te = item;\n\t\t\t}\n\t\t}\n\t\treturn e;\n\t}\n\n\ttinymce.create('tinymce.plugins.Lists', {\n\t\tinit: function(ed) {\n\t\t\tvar LIST_TABBING = 'TABBING';\n\t\t\tvar LIST_EMPTY_ITEM = 'EMPTY';\n\t\t\tvar LIST_ESCAPE = 'ESCAPE';\n\t\t\tvar LIST_PARAGRAPH = 'PARAGRAPH';\n\t\t\tvar LIST_UNKNOWN = 'UNKNOWN';\n\t\t\tvar state = LIST_UNKNOWN;\n\n\t\t\tfunction isTabInList(e) {\n                // Don't indent on Ctrl+Tab or Alt+Tab\n\t\t\t\treturn e.keyCode === tinymce.VK.TAB && !(e.altKey || e.ctrlKey) &&\n\t\t\t\t\t(ed.queryCommandState('InsertUnorderedList') || ed.queryCommandState('InsertOrderedList'));\n\t\t\t}\n\n            function isCursorAtEndOfContainer() {\n\t\t\t\tvar range = ed.selection.getRng();\n                var startContainer = range.startContainer;\n                if (startContainer.nodeType == 3) {\n                    return (range.endOffset == startContainer.nodeValue.length);\n                } else if (startContainer.nodeType == 1) {\n                    return range.endOffset == startContainer.childNodes.length;\n                }\n                return false;\n            }\n\n            // If we are at the end of a paragraph in a list item, pressing enter should create a new list item instead of a new paragraph.\n            function isEndOfParagraph() {\n\t\t\t\tvar node = ed.selection.getNode();\n\t\t\t\tvar isLastParagraphOfLi = node.tagName === 'P' && node.parentNode.tagName === 'LI' && node.parentNode.lastChild === node;\n\t\t\t\treturn ed.selection.isCollapsed() && isLastParagraphOfLi && isCursorAtEndOfContainer();\n\t\t\t}\n\n\t\t\tfunction isOnLastListItem() {\n\t\t\t\tvar li = getLi();\n\t\t\t\tvar grandParent = li.parentNode.parentNode;\n\t\t\t\tvar isLastItem = li.parentNode.lastChild === li;\n\t\t\t\treturn isLastItem && !isNestedList(grandParent) && isEmptyListItem(li);\n\t\t\t}\n\n\t\t\tfunction isNestedList(grandParent) {\n\t\t\t\tif (isList(grandParent)) {\n\t\t\t\t\treturn grandParent.parentNode && grandParent.parentNode.tagName === 'LI';\n\t\t\t\t} else {\n\t\t\t\t\treturn  grandParent.tagName === 'LI';\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction isInEmptyListItem() {\n\t\t\t\treturn ed.selection.isCollapsed() && isEmptyListItem(getLi());\n\t\t\t}\n\n\t\t\tfunction getLi() {\n\t\t\t\tvar n = ed.selection.getStart();\n\t\t\t\t// Get start will return BR if the LI only contains a BR or an empty element as we use these to fix caret position\n\t\t\t\treturn ((n.tagName == 'BR' || n.tagName == '') && n.parentNode.tagName == 'LI') ? n.parentNode : n;\n\t\t\t}\n\n\t\t\tfunction isEmptyListItem(li) {\n\t\t\t\tvar numChildren = li.childNodes.length;\n\t\t\t\tif (li.tagName === 'LI') {\n\t\t\t\t\treturn numChildren == 0 ? true : numChildren == 1 && (li.firstChild.tagName == '' || li.firstChild.tagName == 'BR' || isEmptyIE9Li(li));\n\t\t\t\t}\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tfunction isEmptyIE9Li(li) {\n\t\t\t\t// only consider this to be last item if there is no list item content or that content is nbsp or space since IE9 creates these\n\t\t\t\tvar lis = tinymce.grep(li.parentNode.childNodes, function(n) {return n.tagName == 'LI'});\n\t\t\t\tvar isLastLi = li == lis[lis.length - 1];\n\t\t\t\tvar child = li.firstChild;\n\t\t\t\treturn tinymce.isIE9 && isLastLi && (child.nodeValue == String.fromCharCode(160) || child.nodeValue == String.fromCharCode(32));\n\t\t\t}\n\n\t\t\tfunction isEnter(e) {\n\t\t\t\treturn e.keyCode === tinymce.VK.ENTER;\n            }\n\n            function isEnterWithoutShift(e) {\n                return isEnter(e) && !e.shiftKey;\n            }\n\n\t\t\tfunction getListKeyState(e) {\n\t\t\t\tif (isTabInList(e)) {\n\t\t\t\t\treturn LIST_TABBING;\n\t\t\t\t} else if (isEnterWithoutShift(e) && isOnLastListItem()) {\n\t\t\t\t\treturn LIST_ESCAPE;\n\t\t\t\t} else if (isEnterWithoutShift(e) && isInEmptyListItem()) {\n\t\t\t\t\treturn LIST_EMPTY_ITEM;\n\t\t\t\t} else if (isEnterWithoutShift(e) && isEndOfParagraph()) {\n                    return LIST_PARAGRAPH;\n                } else {\n\t\t\t\t\treturn LIST_UNKNOWN;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction cancelDefaultEvents(ed, e) {\n\t\t\t\t// list escape is done manually using outdent as it does not create paragraphs correctly in td's\n\t\t\t\tif (state == LIST_TABBING || state == LIST_EMPTY_ITEM || tinymce.isGecko && state == LIST_ESCAPE) {\n\t\t\t\t\tEvent.cancel(e);\n\t\t\t\t}\n\t\t\t}\n\n            // Creates a new list item after the current selection's list item parent\n            function createNewLi(ed, e) {\n                if (state == LIST_PARAGRAPH) {\n\t\t\t\t\tvar node = ed.selection.getNode();\n\t\t\t\t\tvar li = ed.dom.create(\"li\");\n\t\t\t\t\tvar parentLi = ed.dom.getParent(node, 'li');\n\t\t\t\t\ted.dom.insertAfter(li, parentLi);\n\n                    // Move caret to new list element.\n                    if (tinyMCE.isIE8) {\n                        li.appendChild(ed.dom.create(\"&nbsp;\")); // IE needs an element within the bullet point\n                        ed.selection.setCursorLocation(li, 1);\n                    } else if (tinyMCE.isGecko) {\n                        // This setTimeout is a hack as FF behaves badly if there is no content after the bullet point\n                        setTimeout(function () {\n\t\t\t\t\t\t\tvar n = ed.getDoc().createTextNode('\\uFEFF');\n                            li.appendChild(n);\n                            ed.selection.setCursorLocation(li, 0);\n                        }, 0);\n                    } else {\n                        ed.selection.setCursorLocation(li, 0);\n                    }\n\t\t\t\t\tEvent.cancel(e);\n\t\t\t\t}\n            }\n\n\t\t\tfunction imageJoiningListItem(ed, e) {\n\t\t\t\tvar prevSibling;\n\n\t\t\t\tif (!tinymce.isGecko)\n\t\t\t\t\treturn;\n\n\t\t\t\tvar n = ed.selection.getStart();\n\t\t\t\tif (e.keyCode != tinymce.VK.BACKSPACE || n.tagName !== 'IMG')\n\t\t\t\t\treturn;\n\n\t\t\t\tfunction lastLI(node) {\n\t\t\t\t\tvar child = node.firstChild;\n\t\t\t\t\tvar li = null;\n\t\t\t\t\tdo {\n\t\t\t\t\t\tif (!child)\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tif (child.tagName === 'LI')\n\t\t\t\t\t\t\tli = child;\n\t\t\t\t\t} while (child = child.nextSibling);\n\n\t\t\t\t\treturn li;\n\t\t\t\t}\n\n\t\t\t\tfunction addChildren(parentNode, destination) {\n\t\t\t\t\twhile (parentNode.childNodes.length > 0)\n\t\t\t\t\t\tdestination.appendChild(parentNode.childNodes[0]);\n\t\t\t\t}\n\n\t\t\t\t// Check if there is a previous sibling\n\t\t\t\tprevSibling = n.parentNode.previousSibling;\n\t\t\t\tif (!prevSibling)\n\t\t\t\t\treturn;\n\n\t\t\t\tvar ul;\n\t\t\t\tif (prevSibling.tagName === 'UL' || prevSibling.tagName === 'OL')\n\t\t\t\t\tul = prevSibling;\n\t\t\t\telse if (prevSibling.previousSibling && (prevSibling.previousSibling.tagName === 'UL' || prevSibling.previousSibling.tagName === 'OL'))\n\t\t\t\t\tul = prevSibling.previousSibling;\n\t\t\t\telse\n\t\t\t\t\treturn;\n\n\t\t\t\tvar li = lastLI(ul);\n\n\t\t\t\t// move the caret to the end of the list item\n\t\t\t\tvar rng = ed.dom.createRng();\n\t\t\t\trng.setStart(li, 1);\n\t\t\t\trng.setEnd(li, 1);\n\t\t\t\ted.selection.setRng(rng);\n\t\t\t\ted.selection.collapse(true);\n\n\t\t\t\t// save a bookmark at the end of the list item\n\t\t\t\tvar bookmark = ed.selection.getBookmark();\n\n\t\t\t\t// copy the image an its text to the list item\n\t\t\t\tvar clone = n.parentNode.cloneNode(true);\n\t\t\t\tif (clone.tagName === 'P' || clone.tagName === 'DIV')\n\t\t\t\t\taddChildren(clone, li);\n\t\t\t\telse\n\t\t\t\t\tli.appendChild(clone);\n\n\t\t\t\t// remove the old copy of the image\n\t\t\t\tn.parentNode.parentNode.removeChild(n.parentNode);\n\n\t\t\t\t// move the caret where we saved the bookmark\n\t\t\t\ted.selection.moveToBookmark(bookmark);\n\t\t\t}\n\n\t\t\t// fix the cursor position to ensure it is correct in IE\n\t\t\tfunction setCursorPositionToOriginalLi(li) {\n\t\t\t\tvar list = ed.dom.getParent(li, 'ol,ul');\n\t\t\t\tif (list != null) {\n\t\t\t\t\tvar lastLi = list.lastChild;\n\t\t\t\t\tlastLi.appendChild(ed.getDoc().createElement(''));\n\t\t\t\t\ted.selection.setCursorLocation(lastLi, 0);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.ed = ed;\n\t\t\ted.addCommand('Indent', this.indent, this);\n\t\t\ted.addCommand('Outdent', this.outdent, this);\n\t\t\ted.addCommand('InsertUnorderedList', function() {\n\t\t\t\tthis.applyList('UL', 'OL');\n\t\t\t}, this);\n\t\t\ted.addCommand('InsertOrderedList', function() {\n\t\t\t\tthis.applyList('OL', 'UL');\n\t\t\t}, this);\n\n\t\t\ted.onInit.add(function() {\n\t\t\t\ted.editorCommands.addCommands({\n\t\t\t\t\t'outdent': function() {\n\t\t\t\t\t\tvar sel = ed.selection, dom = ed.dom;\n\n\t\t\t\t\t\tfunction hasStyleIndent(n) {\n\t\t\t\t\t\t\tn = dom.getParent(n, dom.isBlock);\n\t\t\t\t\t\t\treturn n && (parseInt(ed.dom.getStyle(n, 'margin-left') || 0, 10) + parseInt(ed.dom.getStyle(n, 'padding-left') || 0, 10)) > 0;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn hasStyleIndent(sel.getStart()) || hasStyleIndent(sel.getEnd()) || ed.queryCommandState('InsertOrderedList') || ed.queryCommandState('InsertUnorderedList');\n\t\t\t\t\t}\n\t\t\t\t}, 'state');\n\t\t\t});\n\n\t\t\ted.onKeyUp.add(function(ed, e) {\n\t\t\t\tif (state == LIST_TABBING) {\n\t\t\t\t\ted.execCommand(e.shiftKey ? 'Outdent' : 'Indent', true, null);\n                    state = LIST_UNKNOWN;\n                    return Event.cancel(e);\n\t\t\t\t} else if (state == LIST_EMPTY_ITEM) {\n\t\t\t\t\tvar li = getLi();\n\t\t\t\t\tvar shouldOutdent =  ed.settings.list_outdent_on_enter === true || e.shiftKey;\n\t\t\t\t\ted.execCommand(shouldOutdent ? 'Outdent' : 'Indent', true, null);\n\t\t\t\t\tif (tinymce.isIE) {\n\t\t\t\t\t\tsetCursorPositionToOriginalLi(li);\n\t\t\t\t\t}\n\n\t\t\t\t\treturn Event.cancel(e);\n\t\t\t\t} else if (state == LIST_ESCAPE) {\n\t\t\t\t\tif (tinymce.isIE8) {\n\t\t\t\t\t\t// append a zero sized nbsp so that caret is positioned correctly in IE8 after escaping and applying formatting.\n\t\t\t\t\t\t// if there is no text then applying formatting for e.g a H1 to the P tag immediately following list after\n\t\t\t\t\t\t// escaping from it will cause the caret to be positioned on the last li instead of staying the in P tag.\n\t\t\t\t\t\tvar n = ed.getDoc().createTextNode('\\uFEFF');\n\t\t\t\t\t\ted.selection.getNode().appendChild(n);\n\t\t\t\t\t} else if (tinymce.isIE9 || tinymce.isGecko) {\n\t\t\t\t\t\t// IE9 does not escape the list so we use outdent to do this and cancel the default behaviour\n\t\t\t\t\t\t// Gecko does not create a paragraph outdenting inside a TD so default behaviour is cancelled and we outdent ourselves\n\t\t\t\t\t\ted.execCommand('Outdent');\n\t\t\t\t\t\treturn Event.cancel(e);\n                    }\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tfunction fixListItem(parent, reference) {\n\t\t\t\t// a zero-sized non-breaking space is placed in the empty list item so that the nested list is\n\t\t\t\t// displayed on the below line instead of next to it\n\t\t\t\tvar n = ed.getDoc().createTextNode('\\uFEFF');\n\t\t\t\tparent.insertBefore(n, reference);\n\t\t\t\ted.selection.setCursorLocation(n, 0);\n\t\t\t\t// repaint to remove rendering artifact. only visible when creating new list\n\t\t\t\ted.execCommand('mceRepaint');\n\t\t\t}\n\n\t\t\tfunction fixIndentedListItemForGecko(ed, e) {\n\t\t\t\tif (isEnter(e)) {\n\t\t\t\t\tvar li = getLi();\n\t\t\t\t\tif (li) {\n\t\t\t\t\t\tvar parent = li.parentNode;\n\t\t\t\t\t\tvar grandParent = parent && parent.parentNode;\n\t\t\t\t\t\tif (grandParent && grandParent.nodeName == 'LI' && grandParent.firstChild == parent && li == parent.firstChild) {\n\t\t\t\t\t\t\tfixListItem(grandParent, parent);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction fixIndentedListItemForIE8(ed, e) {\n\t\t\t\tif (isEnter(e)) {\n\t\t\t\t\tvar li = getLi();\n\t\t\t\t\tif (ed.dom.select('ul li', li).length === 1) {\n\t\t\t\t\t\tvar list = li.firstChild;\n\t\t\t\t\t\tfixListItem(li, list);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction fixDeletingFirstCharOfList(ed, e) {\n\t\t\t\tfunction listElements(list, li) {\n\t\t\t\t\tvar elements = [];\n\t\t\t\t\tvar walker = new tinymce.dom.TreeWalker(li, list);\n\t\t\t\t\tfor (var node = walker.current(); node; node = walker.next()) {\n\t\t\t\t\t\tif (ed.dom.is(node, 'ol,ul,li')) {\n\t\t\t\t\t\t\telements.push(node);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\treturn elements;\n\t\t\t\t}\n\n\t\t\t\tif (e.keyCode == tinymce.VK.BACKSPACE) {\n\t\t\t\t\tvar li = getLi();\n\t\t\t\t\tif (li) {\n\t\t\t\t\t\tvar list = ed.dom.getParent(li, 'ol,ul');\n\t\t\t\t\t\tif (list && list.firstChild === li) {\n\t\t\t\t\t\t\tvar elements = listElements(list, li);\n\t\t\t\t\t\t\ted.execCommand(\"Outdent\", false, elements);\n\t\t\t\t\t\t\ted.undoManager.add();\n\t\t\t\t\t\t\treturn Event.cancel(e);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\ted.onKeyDown.add(function(_, e) { state = getListKeyState(e); });\n\t\t\ted.onKeyDown.add(cancelDefaultEvents);\n\t\t\ted.onKeyDown.add(imageJoiningListItem);\n            ed.onKeyDown.add(createNewLi);\n\n\t\t\tif (tinymce.isGecko) {\n\t\t\t\ted.onKeyUp.add(fixIndentedListItemForGecko);\n\t\t\t}\n\t\t\tif (tinymce.isIE8) {\n\t\t\t\ted.onKeyUp.add(fixIndentedListItemForIE8);\n\t\t\t}\n\t\t\tif (tinymce.isGecko || tinymce.isWebKit) {\n\t\t\t\ted.onKeyDown.add(fixDeletingFirstCharOfList);\n\t\t\t}\n\t\t},\n\n\t\tapplyList: function(targetListType, oppositeListType) {\n\t\t\tvar t = this, ed = t.ed, dom = ed.dom, applied = [], hasSameType = false, hasOppositeType = false, hasNonList = false, actions,\n\t\t\t\t\tselectedBlocks = ed.selection.getSelectedBlocks();\n\n\t\t\tfunction cleanupBr(e) {\n\t\t\t\tif (e && e.tagName === 'BR') {\n\t\t\t\t\tdom.remove(e);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction makeList(element) {\n\t\t\t\tvar list = dom.create(targetListType), li;\n\n\t\t\t\tfunction adjustIndentForNewList(element) {\n\t\t\t\t\t// If there's a margin-left, outdent one level to account for the extra list margin.\n\t\t\t\t\tif (element.style.marginLeft || element.style.paddingLeft) {\n\t\t\t\t\t\tt.adjustPaddingFunction(false)(element);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (element.tagName === 'LI') {\n\t\t\t\t\t// No change required.\n\t\t\t\t} else if (element.tagName === 'P' || element.tagName === 'DIV' || element.tagName === 'BODY') {\n\t\t\t\t\tprocessBrs(element, function(startSection, br) {\n\t\t\t\t\t\tdoWrapList(startSection, br, element.tagName === 'BODY' ? null : startSection.parentNode);\n\t\t\t\t\t\tli = startSection.parentNode;\n\t\t\t\t\t\tadjustIndentForNewList(li);\n\t\t\t\t\t\tcleanupBr(br);\n\t\t\t\t\t});\n\t\t\t\t\tif (li) {\n\t\t\t\t\t\tif (li.tagName === 'LI' && (element.tagName === 'P' || selectedBlocks.length > 1)) {\n\t\t\t\t\t\t\tdom.split(li.parentNode.parentNode, li.parentNode);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tattemptMergeWithAdjacent(li.parentNode, true);\n\t\t\t\t\t}\n\t\t\t\t\treturn;\n\t\t\t\t} else {\n\t\t\t\t\t// Put the list around the element.\n\t\t\t\t\tli = dom.create('li');\n\t\t\t\t\tdom.insertAfter(li, element);\n\t\t\t\t\tli.appendChild(element);\n\t\t\t\t\tadjustIndentForNewList(element);\n\t\t\t\t\telement = li;\n\t\t\t\t}\n\t\t\t\tdom.insertAfter(list, element);\n\t\t\t\tlist.appendChild(element);\n\t\t\t\tattemptMergeWithAdjacent(list, true);\n\t\t\t\tapplied.push(element);\n\t\t\t}\n\n\t\t\tfunction doWrapList(start, end, template) {\n\t\t\t\tvar li, n = start, tmp;\n\t\t\t\twhile (!dom.isBlock(start.parentNode) && start.parentNode !== dom.getRoot()) {\n\t\t\t\t\tstart = dom.split(start.parentNode, start.previousSibling);\n\t\t\t\t\tstart = start.nextSibling;\n\t\t\t\t\tn = start;\n\t\t\t\t}\n\t\t\t\tif (template) {\n\t\t\t\t\tli = template.cloneNode(true);\n\t\t\t\t\tstart.parentNode.insertBefore(li, start);\n\t\t\t\t\twhile (li.firstChild) dom.remove(li.firstChild);\n\t\t\t\t\tli = dom.rename(li, 'li');\n\t\t\t\t} else {\n\t\t\t\t\tli = dom.create('li');\n\t\t\t\t\tstart.parentNode.insertBefore(li, start);\n\t\t\t\t}\n                while (n && n != end) {\n\t\t\t\t\ttmp = n.nextSibling;\n\t\t\t\t\tli.appendChild(n);\n\t\t\t\t\tn = tmp;\n\t\t\t\t}\n\t\t\t\tif (li.childNodes.length === 0) {\n\t\t\t\t\tli.innerHTML = '<br _mce_bogus=\"1\" />';\n\t\t\t\t}\n\t\t\t\tmakeList(li);\n\t\t\t}\n\n\t\t\tfunction processBrs(element, callback) {\n\t\t\t\tvar startSection, previousBR, END_TO_START = 3, START_TO_END = 1,\n\t\t\t\t\t\tbreakElements = 'br,ul,ol,p,div,h1,h2,h3,h4,h5,h6,table,blockquote,address,pre,form,center,dl';\n\n\t\t\t\tfunction isAnyPartSelected(start, end) {\n\t\t\t\t\tvar r = dom.createRng(), sel;\n\t\t\t\t\tbookmark.keep = true;\n\t\t\t\t\ted.selection.moveToBookmark(bookmark);\n\t\t\t\t\tbookmark.keep = false;\n\t\t\t\t\tsel = ed.selection.getRng(true);\n\t\t\t\t\tif (!end) {\n\t\t\t\t\t\tend = start.parentNode.lastChild;\n\t\t\t\t\t}\n\t\t\t\t\tr.setStartBefore(start);\n\t\t\t\t\tr.setEndAfter(end);\n\t\t\t\t\treturn !(r.compareBoundaryPoints(END_TO_START, sel) > 0 || r.compareBoundaryPoints(START_TO_END, sel) <= 0);\n\t\t\t\t}\n\n\t\t\t\tfunction nextLeaf(br) {\n\t\t\t\t\tif (br.nextSibling)\n\t\t\t\t\t\treturn br.nextSibling;\n\t\t\t\t\tif (!dom.isBlock(br.parentNode) && br.parentNode !== dom.getRoot())\n\t\t\t\t\t\treturn nextLeaf(br.parentNode);\n\t\t\t\t}\n\n\t\t\t\t// Split on BRs within the range and process those.\n\t\t\t\tstartSection = element.firstChild;\n\t\t\t\t// First mark the BRs that have any part of the previous section selected.\n\t\t\t\tvar trailingContentSelected = false;\n\t\t\t\teach(dom.select(breakElements, element), function(br) {\n\t\t\t\t\tif (br.hasAttribute && br.hasAttribute('_mce_bogus')) {\n\t\t\t\t\t\treturn true; // Skip the bogus Brs that are put in to appease Firefox and Safari.\n\t\t\t\t\t}\n\t\t\t\t\tif (isAnyPartSelected(startSection, br)) {\n\t\t\t\t\t\tdom.addClass(br, '_mce_tagged_br');\n\t\t\t\t\t\tstartSection = nextLeaf(br);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\ttrailingContentSelected = (startSection && isAnyPartSelected(startSection, undefined));\n\t\t\t\tstartSection = element.firstChild;\n\t\t\t\teach(dom.select(breakElements, element), function(br) {\n\t\t\t\t\t// Got a section from start to br.\n\t\t\t\t\tvar tmp = nextLeaf(br);\n\t\t\t\t\tif (br.hasAttribute && br.hasAttribute('_mce_bogus')) {\n\t\t\t\t\t\treturn true; // Skip the bogus Brs that are put in to appease Firefox and Safari.\n\t\t\t\t\t}\n\t\t\t\t\tif (dom.hasClass(br, '_mce_tagged_br')) {\n\t\t\t\t\t\tcallback(startSection, br, previousBR);\n\t\t\t\t\t\tpreviousBR = null;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tpreviousBR = br;\n\t\t\t\t\t}\n\t\t\t\t\tstartSection = tmp;\n\t\t\t\t});\n\t\t\t\tif (trailingContentSelected) {\n\t\t\t\t\tcallback(startSection, undefined, previousBR);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction wrapList(element) {\n\t\t\t\tprocessBrs(element, function(startSection, br, previousBR) {\n\t\t\t\t\t// Need to indent this part\n\t\t\t\t\tdoWrapList(startSection, br);\n\t\t\t\t\tcleanupBr(br);\n\t\t\t\t\tcleanupBr(previousBR);\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tfunction changeList(element) {\n\t\t\t\tif (tinymce.inArray(applied, element) !== -1) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tif (element.parentNode.tagName === oppositeListType) {\n\t\t\t\t\tdom.split(element.parentNode, element);\n\t\t\t\t\tmakeList(element);\n\t\t\t\t\tattemptMergeWithNext(element.parentNode, false);\n\t\t\t\t}\n\t\t\t\tapplied.push(element);\n\t\t\t}\n\n\t\t\tfunction convertListItemToParagraph(element) {\n\t\t\t\tvar child, nextChild, mergedElement, splitLast;\n\t\t\t\tif (tinymce.inArray(applied, element) !== -1) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\telement = splitNestedLists(element, dom);\n\t\t\t\twhile (dom.is(element.parentNode, 'ol,ul,li')) {\n\t\t\t\t\tdom.split(element.parentNode, element);\n\t\t\t\t}\n\t\t\t\t// Push the original element we have from the selection, not the renamed one.\n\t\t\t\tapplied.push(element);\n\t\t\t\telement = dom.rename(element, 'p');\n\t\t\t\tmergedElement = attemptMergeWithAdjacent(element, false, ed.settings.force_br_newlines);\n\t\t\t\tif (mergedElement === element) {\n\t\t\t\t\t// Now split out any block elements that can't be contained within a P.\n\t\t\t\t\t// Manually iterate to ensure we handle modifications correctly (doesn't work with tinymce.each)\n\t\t\t\t\tchild = element.firstChild;\n\t\t\t\t\twhile (child) {\n\t\t\t\t\t\tif (dom.isBlock(child)) {\n\t\t\t\t\t\t\tchild = dom.split(child.parentNode, child);\n\t\t\t\t\t\t\tsplitLast = true;\n\t\t\t\t\t\t\tnextChild = child.nextSibling && child.nextSibling.firstChild;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tnextChild = child.nextSibling;\n\t\t\t\t\t\t\tif (splitLast && child.tagName === 'BR') {\n\t\t\t\t\t\t\t\tdom.remove(child);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tsplitLast = false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tchild = nextChild;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\teach(selectedBlocks, function(e) {\n\t\t\t\te = findItemToOperateOn(e, dom);\n\t\t\t\tif (e.tagName === oppositeListType || (e.tagName === 'LI' && e.parentNode.tagName === oppositeListType)) {\n\t\t\t\t\thasOppositeType = true;\n\t\t\t\t} else if (e.tagName === targetListType || (e.tagName === 'LI' && e.parentNode.tagName === targetListType)) {\n\t\t\t\t\thasSameType = true;\n\t\t\t\t} else {\n\t\t\t\t\thasNonList = true;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tif (hasNonList &&!hasSameType || hasOppositeType || selectedBlocks.length === 0) {\n\t\t\t\tactions = {\n\t\t\t\t\t'LI': changeList,\n\t\t\t\t\t'H1': makeList,\n\t\t\t\t\t'H2': makeList,\n\t\t\t\t\t'H3': makeList,\n\t\t\t\t\t'H4': makeList,\n\t\t\t\t\t'H5': makeList,\n\t\t\t\t\t'H6': makeList,\n\t\t\t\t\t'P': makeList,\n\t\t\t\t\t'BODY': makeList,\n\t\t\t\t\t'DIV': selectedBlocks.length > 1 ? makeList : wrapList,\n\t\t\t\t\tdefaultAction: wrapList,\n\t\t\t\t\telements: this.selectedBlocks()\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\tactions = {\n\t\t\t\t\tdefaultAction: convertListItemToParagraph,\n\t\t\t\t\telements: this.selectedBlocks()\n\t\t\t\t};\n\t\t\t}\n\t\t\tthis.process(actions);\n\t\t},\n\n\t\tindent: function() {\n\t\t\tvar ed = this.ed, dom = ed.dom, indented = [];\n\n\t\t\tfunction createWrapItem(element) {\n\t\t\t\tvar wrapItem = dom.create('li', { style: 'list-style-type: none;'});\n\t\t\t\tdom.insertAfter(wrapItem, element);\n\t\t\t\treturn wrapItem;\n\t\t\t}\n\n\t\t\tfunction createWrapList(element) {\n\t\t\t\tvar wrapItem = createWrapItem(element),\n\t\t\t\t\t\tlist = dom.getParent(element, 'ol,ul'),\n\t\t\t\t\t\tlistType = list.tagName,\n\t\t\t\t\t\tlistStyle = dom.getStyle(list, 'list-style-type'),\n\t\t\t\t\t\tattrs = {},\n\t\t\t\t\t\twrapList;\n\t\t\t\tif (listStyle !== '') {\n\t\t\t\t\tattrs.style = 'list-style-type: ' + listStyle + ';';\n\t\t\t\t}\n\t\t\t\twrapList = dom.create(listType, attrs);\n\t\t\t\twrapItem.appendChild(wrapList);\n\t\t\t\treturn wrapList;\n\t\t\t}\n\n\t\t\tfunction indentLI(element) {\n\t\t\t\tif (!hasParentInList(ed, element, indented)) {\n\t\t\t\t\telement = splitNestedLists(element, dom);\n\t\t\t\t\tvar wrapList = createWrapList(element);\n\t\t\t\t\twrapList.appendChild(element);\n\t\t\t\t\tattemptMergeWithAdjacent(wrapList.parentNode, false);\n\t\t\t\t\tattemptMergeWithAdjacent(wrapList, false);\n\t\t\t\t\tindented.push(element);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.process({\n\t\t\t\t'LI': indentLI,\n\t\t\t\tdefaultAction: this.adjustPaddingFunction(true),\n\t\t\t\telements: this.selectedBlocks()\n\t\t\t});\n\n\t\t},\n\n\t\toutdent: function(ui, elements) {\n\t\t\tvar t = this, ed = t.ed, dom = ed.dom, outdented = [];\n\n\t\t\tfunction outdentLI(element) {\n\t\t\t\tvar listElement, targetParent, align;\n\t\t\t\tif (!hasParentInList(ed, element, outdented)) {\n\t\t\t\t\tif (dom.getStyle(element, 'margin-left') !== '' || dom.getStyle(element, 'padding-left') !== '') {\n\t\t\t\t\t\treturn t.adjustPaddingFunction(false)(element);\n\t\t\t\t\t}\n\t\t\t\t\talign = dom.getStyle(element, 'text-align', true);\n\t\t\t\t\tif (align === 'center' || align === 'right') {\n\t\t\t\t\t\tdom.setStyle(element, 'text-align', 'left');\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\telement = splitNestedLists(element, dom);\n\t\t\t\t\tlistElement = element.parentNode;\n\t\t\t\t\ttargetParent = element.parentNode.parentNode;\n\t\t\t\t\tif (targetParent.tagName === 'P') {\n\t\t\t\t\t\tdom.split(targetParent, element.parentNode);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tdom.split(listElement, element);\n\t\t\t\t\t\tif (targetParent.tagName === 'LI') {\n\t\t\t\t\t\t\t// Nested list, need to split the LI and go back out to the OL/UL element.\n\t\t\t\t\t\t\tdom.split(targetParent, element);\n\t\t\t\t\t\t} else if (!dom.is(targetParent, 'ol,ul')) {\n\t\t\t\t\t\t\tdom.rename(element, 'p');\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\toutdented.push(element);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tvar listElements = elements && tinymce.is(elements, 'array') ? elements : this.selectedBlocks();\n\t\t\tthis.process({\n\t\t\t\t'LI': outdentLI,\n\t\t\t\tdefaultAction: this.adjustPaddingFunction(false),\n\t\t\t\telements: listElements\n\t\t\t});\n\n\t\t\teach(outdented, attemptMergeWithAdjacent);\n\t\t},\n\n\t\tprocess: function(actions) {\n\t\t\tvar t = this, sel = t.ed.selection, dom = t.ed.dom, selectedBlocks, r;\n\n\t\t\tfunction isEmptyElement(element) {\n\t\t\t\tvar excludeBrsAndBookmarks = tinymce.grep(element.childNodes, function(n) {\n\t\t\t\t\treturn !(n.nodeName === 'BR' || n.nodeName === 'SPAN' && dom.getAttrib(n, 'data-mce-type') == 'bookmark'\n\t\t\t\t\t\t\t|| n.nodeType == 3 && (n.nodeValue == String.fromCharCode(160) || n.nodeValue == ''));\n\t\t\t\t});\n\t\t\t\treturn excludeBrsAndBookmarks.length === 0;\n\t\t\t}\n\n\t\t\tfunction processElement(element) {\n\t\t\t\tdom.removeClass(element, '_mce_act_on');\n\t\t\t\tif (!element || element.nodeType !== 1 || selectedBlocks.length > 1 && isEmptyElement(element)) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\telement = findItemToOperateOn(element, dom);\n\t\t\t\tvar action = actions[element.tagName];\n\t\t\t\tif (!action) {\n\t\t\t\t\taction = actions.defaultAction;\n\t\t\t\t}\n\t\t\t\taction(element);\n\t\t\t}\n\n\t\t\tfunction recurse(element) {\n\t\t\t\tt.splitSafeEach(element.childNodes, processElement);\n\t\t\t}\n\n\t\t\tfunction brAtEdgeOfSelection(container, offset) {\n\t\t\t\treturn offset >= 0 && container.hasChildNodes() && offset < container.childNodes.length &&\n\t\t\t\t\t\tcontainer.childNodes[offset].tagName === 'BR';\n\t\t\t}\n\n\t\t\tfunction isInTable() {\n\t\t\t\tvar n = sel.getNode();\n\t\t\t\tvar p = dom.getParent(n, 'td');\n\t\t\t\treturn p !== null;\n\t\t\t}\n\n\t\t\tselectedBlocks = actions.elements;\n\n\t\t\tr = sel.getRng(true);\n\t\t\tif (!r.collapsed) {\n\t\t\t\tif (brAtEdgeOfSelection(r.endContainer, r.endOffset - 1)) {\n\t\t\t\t\tr.setEnd(r.endContainer, r.endOffset - 1);\n\t\t\t\t\tsel.setRng(r);\n\t\t\t\t}\n\t\t\t\tif (brAtEdgeOfSelection(r.startContainer, r.startOffset)) {\n\t\t\t\t\tr.setStart(r.startContainer, r.startOffset + 1);\n\t\t\t\t\tsel.setRng(r);\n\t\t\t\t}\n\t\t\t}\n\n\n\t\t\tif (tinymce.isIE8) {\n\t\t\t\t// append a zero sized nbsp so that caret is restored correctly using bookmark\n\t\t\t\tvar s = t.ed.selection.getNode();\n\t\t\t\tif (s.tagName === 'LI' && !(s.parentNode.lastChild === s)) {\n\t\t\t\t\tvar i = t.ed.getDoc().createTextNode('\\uFEFF');\n\t\t\t\t\ts.appendChild(i);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tbookmark = sel.getBookmark();\n\t\t\tactions.OL = actions.UL = recurse;\n\t\t\tt.splitSafeEach(selectedBlocks, processElement);\n\t\t\tsel.moveToBookmark(bookmark);\n\t\t\tbookmark = null;\n\n\t\t\t// we avoid doing repaint in a table as this will move the caret out of the table in Firefox 3.6\n\t\t\tif (!isInTable()) {\n\t\t\t\t// Avoids table or image handles being left behind in Firefox.\n\t\t\t\tt.ed.execCommand('mceRepaint');\n\t\t\t}\n\t\t},\n\n\t\tsplitSafeEach: function(elements, f) {\n\t\t\tif (tinymce.isGecko && (/Firefox\\/[12]\\.[0-9]/.test(navigator.userAgent) ||\n\t\t\t\t\t/Firefox\\/3\\.[0-4]/.test(navigator.userAgent))) {\n\t\t\t\tthis.classBasedEach(elements, f);\n\t\t\t} else {\n\t\t\t\teach(elements, f);\n\t\t\t}\n\t\t},\n\n\t\tclassBasedEach: function(elements, f) {\n\t\t\tvar dom = this.ed.dom, nodes, element;\n\t\t\t// Mark nodes\n\t\t\teach(elements, function(element) {\n\t\t\t\tdom.addClass(element, '_mce_act_on');\n\t\t\t});\n\t\t\tnodes = dom.select('._mce_act_on');\n\t\t\twhile (nodes.length > 0) {\n\t\t\t\telement = nodes.shift();\n\t\t\t\tdom.removeClass(element, '_mce_act_on');\n\t\t\t\tf(element);\n\t\t\t\tnodes = dom.select('._mce_act_on');\n\t\t\t}\n\t\t},\n\n\t\tadjustPaddingFunction: function(isIndent) {\n\t\t\tvar indentAmount, indentUnits, ed = this.ed;\n\t\t\tindentAmount = ed.settings.indentation;\n\t\t\tindentUnits = /[a-z%]+/i.exec(indentAmount);\n\t\t\tindentAmount = parseInt(indentAmount, 10);\n\t\t\treturn function(element) {\n\t\t\t\tvar currentIndent, newIndentAmount;\n\t\t\t\tcurrentIndent = parseInt(ed.dom.getStyle(element, 'margin-left') || 0, 10) + parseInt(ed.dom.getStyle(element, 'padding-left') || 0, 10);\n\t\t\t\tif (isIndent) {\n\t\t\t\t\tnewIndentAmount = currentIndent + indentAmount;\n\t\t\t\t} else {\n\t\t\t\t\tnewIndentAmount = currentIndent - indentAmount;\n\t\t\t\t}\n\t\t\t\ted.dom.setStyle(element, 'padding-left', '');\n\t\t\t\ted.dom.setStyle(element, 'margin-left', newIndentAmount > 0 ? newIndentAmount + indentUnits : '');\n\t\t\t};\n\t\t},\n\n\t\tselectedBlocks: function() {\n\t\t\tvar ed = this.ed\n\t\t\tvar selectedBlocks = ed.selection.getSelectedBlocks();\n\t\t\treturn selectedBlocks.length == 0 ? [ ed.dom.getRoot() ] : selectedBlocks;\n\t\t},\n\n\t\tgetInfo: function() {\n\t\t\treturn {\n\t\t\t\tlongname : 'Lists',\n\t\t\t\tauthor : 'Moxiecode Systems AB',\n\t\t\t\tauthorurl : 'http://tinymce.moxiecode.com',\n\t\t\t\tinfourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/lists',\n\t\t\t\tversion : tinymce.majorVersion + \".\" + tinymce.minorVersion\n\t\t\t};\n\t\t}\n\t});\n\ttinymce.PluginManager.add(\"lists\", tinymce.plugins.Lists);\n}());\n"}
}});
