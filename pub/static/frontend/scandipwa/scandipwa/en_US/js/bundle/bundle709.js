require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/classes/ForceBlocks.js":"/**\n * ForceBlocks.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function(tinymce) {\n\t// Shorten names\n\tvar Event = tinymce.dom.Event,\n\t\tisIE = tinymce.isIE,\n\t\tisGecko = tinymce.isGecko,\n\t\tisOpera = tinymce.isOpera,\n\t\teach = tinymce.each,\n\t\textend = tinymce.extend,\n\t\tTRUE = true,\n\t\tFALSE = false;\n\n\tfunction cloneFormats(node) {\n\t\tvar clone, temp, inner;\n\n\t\tdo {\n\t\t\tif (/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(node.nodeName)) {\n\t\t\t\tif (clone) {\n\t\t\t\t\ttemp = node.cloneNode(false);\n\t\t\t\t\ttemp.appendChild(clone);\n\t\t\t\t\tclone = temp;\n\t\t\t\t} else {\n\t\t\t\t\tclone = inner = node.cloneNode(false);\n\t\t\t\t}\n\n\t\t\t\tclone.removeAttribute('id');\n\t\t\t}\n\t\t} while (node = node.parentNode);\n\n\t\tif (clone)\n\t\t\treturn {wrapper : clone, inner : inner};\n\t};\n\n\t// Checks if the selection/caret is at the end of the specified block element\n\tfunction isAtEnd(rng, par) {\n\t\tvar rng2 = par.ownerDocument.createRange();\n\n\t\trng2.setStart(rng.endContainer, rng.endOffset);\n\t\trng2.setEndAfter(par);\n\n\t\t// Get number of characters to the right of the cursor if it's zero then we are at the end and need to merge the next block element\n\t\treturn rng2.cloneContents().textContent.length == 0;\n\t};\n\n\tfunction splitList(selection, dom, li) {\n\t\tvar listBlock, block;\n\n\t\tif (dom.isEmpty(li)) {\n\t\t\tlistBlock = dom.getParent(li, 'ul,ol');\n\n\t\t\tif (!dom.getParent(listBlock.parentNode, 'ul,ol')) {\n\t\t\t\tdom.split(listBlock, li);\n\t\t\t\tblock = dom.create('p', 0, '<br data-mce-bogus=\"1\" />');\n\t\t\t\tdom.replace(block, li);\n\t\t\t\tselection.select(block, 1);\n\t\t\t}\n\n\t\t\treturn FALSE;\n\t\t}\n\n\t\treturn TRUE;\n\t};\n\n\t/**\n\t * This is a internal class and no method in this class should be called directly form the out side.\n\t */\n\ttinymce.create('tinymce.ForceBlocks', {\n\t\tForceBlocks : function(ed) {\n\t\t\tvar t = this, s = ed.settings, elm;\n\n\t\t\tt.editor = ed;\n\t\t\tt.dom = ed.dom;\n\t\t\telm = (s.forced_root_block || 'p').toLowerCase();\n\t\t\ts.element = elm.toUpperCase();\n\n\t\t\ted.onPreInit.add(t.setup, t);\n\t\t},\n\n\t\tsetup : function() {\n\t\t\tvar t = this, ed = t.editor, s = ed.settings, dom = ed.dom, selection = ed.selection, blockElements = ed.schema.getBlockElements();\n\n\t\t\t// Force root blocks\n\t\t\tif (s.forced_root_block) {\n\t\t\t\tfunction addRootBlocks() {\n\t\t\t\t\tvar node = selection.getStart(), rootNode = ed.getBody(), rng, startContainer, startOffset, endContainer, endOffset, rootBlockNode, tempNode, offset = -0xFFFFFF;\n\n\t\t\t\t\tif (!node || node.nodeType !== 1)\n\t\t\t\t\t\treturn;\n\n\t\t\t\t\t// Check if node is wrapped in block\n\t\t\t\t\twhile (node != rootNode) {\n\t\t\t\t\t\tif (blockElements[node.nodeName])\n\t\t\t\t\t\t\treturn;\n\n\t\t\t\t\t\tnode = node.parentNode;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Get current selection\n\t\t\t\t\trng = selection.getRng();\n\t\t\t\t\tif (rng.setStart) {\n\t\t\t\t\t\tstartContainer = rng.startContainer;\n\t\t\t\t\t\tstartOffset = rng.startOffset;\n\t\t\t\t\t\tendContainer = rng.endContainer;\n\t\t\t\t\t\tendOffset = rng.endOffset;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Force control range into text range\n\t\t\t\t\t\tif (rng.item) {\n\t\t\t\t\t\t\trng = ed.getDoc().body.createTextRange();\n\t\t\t\t\t\t\trng.moveToElementText(rng.item(0));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\ttmpRng = rng.duplicate();\n\t\t\t\t\t\ttmpRng.collapse(true);\n\t\t\t\t\t\tstartOffset = tmpRng.move('character', offset) * -1;\n\n\t\t\t\t\t\tif (!tmpRng.collapsed) {\n\t\t\t\t\t\t\ttmpRng = rng.duplicate();\n\t\t\t\t\t\t\ttmpRng.collapse(false);\n\t\t\t\t\t\t\tendOffset = (tmpRng.move('character', offset) * -1) - startOffset;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Wrap non block elements and text nodes\n\t\t\t\t\tfor (node = rootNode.firstChild; node; node) {\n\t\t\t\t\t\tif (node.nodeType === 3 || (node.nodeType == 1 && !blockElements[node.nodeName])) {\n\t\t\t\t\t\t\tif (!rootBlockNode) {\n\t\t\t\t\t\t\t\trootBlockNode = dom.create(s.forced_root_block);\n\t\t\t\t\t\t\t\tnode.parentNode.insertBefore(rootBlockNode, node);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\ttempNode = node;\n\t\t\t\t\t\t\tnode = node.nextSibling;\n\t\t\t\t\t\t\trootBlockNode.appendChild(tempNode);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\trootBlockNode = null;\n\t\t\t\t\t\t\tnode = node.nextSibling;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (rng.setStart) {\n\t\t\t\t\t\trng.setStart(startContainer, startOffset);\n\t\t\t\t\t\trng.setEnd(endContainer, endOffset);\n\t\t\t\t\t\tselection.setRng(rng);\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\trng = ed.getDoc().body.createTextRange();\n\t\t\t\t\t\t\trng.moveToElementText(rootNode);\n\t\t\t\t\t\t\trng.collapse(true);\n\t\t\t\t\t\t\trng.moveStart('character', startOffset);\n\n\t\t\t\t\t\t\tif (endOffset > 0)\n\t\t\t\t\t\t\t\trng.moveEnd('character', endOffset);\n\n\t\t\t\t\t\t\trng.select();\n\t\t\t\t\t\t} catch (ex) {\n\t\t\t\t\t\t\t// Ignore\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\ted.nodeChanged();\n\t\t\t\t};\n\n\t\t\t\ted.onKeyUp.add(addRootBlocks);\n\t\t\t\ted.onClick.add(addRootBlocks);\n\t\t\t}\n\n\t\t\tif (s.force_br_newlines) {\n\t\t\t\t// Force IE to produce BRs on enter\n\t\t\t\tif (isIE) {\n\t\t\t\t\ted.onKeyPress.add(function(ed, e) {\n\t\t\t\t\t\tvar n;\n\n\t\t\t\t\t\tif (e.keyCode == 13 && selection.getNode().nodeName != 'LI') {\n\t\t\t\t\t\t\tselection.setContent('<br id=\"__\" /> ', {format : 'raw'});\n\t\t\t\t\t\t\tn = dom.get('__');\n\t\t\t\t\t\t\tn.removeAttribute('id');\n\t\t\t\t\t\t\tselection.select(n);\n\t\t\t\t\t\t\tselection.collapse();\n\t\t\t\t\t\t\treturn Event.cancel(e);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (s.force_p_newlines) {\n\t\t\t\tif (!isIE) {\n\t\t\t\t\ted.onKeyPress.add(function(ed, e) {\n\t\t\t\t\t\tif (e.keyCode == 13 && !e.shiftKey && !t.insertPara(e))\n\t\t\t\t\t\t\tEvent.cancel(e);\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t// Ungly hack to for IE to preserve the formatting when you press\n\t\t\t\t\t// enter at the end of a block element with formatted contents\n\t\t\t\t\t// This logic overrides the browsers default logic with\n\t\t\t\t\t// custom logic that enables us to control the output\n\t\t\t\t\ttinymce.addUnload(function() {\n\t\t\t\t\t\tt._previousFormats = 0; // Fix IE leak\n\t\t\t\t\t});\n\n\t\t\t\t\ted.onKeyPress.add(function(ed, e) {\n\t\t\t\t\t\tt._previousFormats = 0;\n\n\t\t\t\t\t\t// Clone the current formats, this will later be applied to the new block contents\n\t\t\t\t\t\tif (e.keyCode == 13 && !e.shiftKey && ed.selection.isCollapsed() && s.keep_styles)\n\t\t\t\t\t\t\tt._previousFormats = cloneFormats(ed.selection.getStart());\n\t\t\t\t\t});\n\n\t\t\t\t\ted.onKeyUp.add(function(ed, e) {\n\t\t\t\t\t\t// Let IE break the element and the wrap the new caret location in the previous formats\n\t\t\t\t\t\tif (e.keyCode == 13 && !e.shiftKey) {\n\t\t\t\t\t\t\tvar parent = ed.selection.getStart(), fmt = t._previousFormats;\n\n\t\t\t\t\t\t\t// Parent is an empty block\n\t\t\t\t\t\t\tif (!parent.hasChildNodes() && fmt) {\n\t\t\t\t\t\t\t\tparent = dom.getParent(parent, dom.isBlock);\n\n\t\t\t\t\t\t\t\tif (parent && parent.nodeName != 'LI') {\n\t\t\t\t\t\t\t\t\tparent.innerHTML = '';\n\n\t\t\t\t\t\t\t\t\tif (t._previousFormats) {\n\t\t\t\t\t\t\t\t\t\tparent.appendChild(fmt.wrapper);\n\t\t\t\t\t\t\t\t\t\tfmt.inner.innerHTML = '\\uFEFF';\n\t\t\t\t\t\t\t\t\t} else\n\t\t\t\t\t\t\t\t\t\tparent.innerHTML = '\\uFEFF';\n\n\t\t\t\t\t\t\t\t\tselection.select(parent, 1);\n\t\t\t\t\t\t\t\t\tselection.collapse(true);\n\t\t\t\t\t\t\t\t\ted.getDoc().execCommand('Delete', false, null);\n\t\t\t\t\t\t\t\t\tt._previousFormats = 0;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\tif (isGecko) {\n\t\t\t\t\ted.onKeyDown.add(function(ed, e) {\n\t\t\t\t\t\tif ((e.keyCode == 8 || e.keyCode == 46) && !e.shiftKey)\n\t\t\t\t\t\t\tt.backspaceDelete(e, e.keyCode == 8);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Workaround for missing shift+enter support, http://bugs.webkit.org/show_bug.cgi?id=16973\n\t\t\tif (tinymce.isWebKit) {\n\t\t\t\tfunction insertBr(ed) {\n\t\t\t\t\tvar rng = selection.getRng(), br, div = dom.create('div', null, ' '), divYPos, vpHeight = dom.getViewPort(ed.getWin()).h;\n\n\t\t\t\t\t// Insert BR element\n\t\t\t\t\trng.insertNode(br = dom.create('br'));\n\n\t\t\t\t\t// Place caret after BR\n\t\t\t\t\trng.setStartAfter(br);\n\t\t\t\t\trng.setEndAfter(br);\n\t\t\t\t\tselection.setRng(rng);\n\n\t\t\t\t\t// Could not place caret after BR then insert an nbsp entity and move the caret\n\t\t\t\t\tif (selection.getSel().focusNode == br.previousSibling) {\n\t\t\t\t\t\tselection.select(dom.insertAfter(dom.doc.createTextNode('\\u00a0'), br));\n\t\t\t\t\t\tselection.collapse(TRUE);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Create a temporary DIV after the BR and get the position as it\n\t\t\t\t\t// seems like getPos() returns 0 for text nodes and BR elements.\n\t\t\t\t\tdom.insertAfter(div, br);\n\t\t\t\t\tdivYPos = dom.getPos(div).y;\n\t\t\t\t\tdom.remove(div);\n\n\t\t\t\t\t// Scroll to new position, scrollIntoView can't be used due to bug: http://bugs.webkit.org/show_bug.cgi?id=16117\n\t\t\t\t\tif (divYPos > vpHeight) // It is not necessary to scroll if the DIV is inside the view port.\n\t\t\t\t\t\ted.getWin().scrollTo(0, divYPos);\n\t\t\t\t};\n\n\t\t\t\ted.onKeyPress.add(function(ed, e) {\n\t\t\t\t\tif (e.keyCode == 13 && (e.shiftKey || (s.force_br_newlines && !dom.getParent(selection.getNode(), 'h1,h2,h3,h4,h5,h6,ol,ul')))) {\n\t\t\t\t\t\tinsertBr(ed);\n\t\t\t\t\t\tEvent.cancel(e);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t// IE specific fixes\n\t\t\tif (isIE) {\n\t\t\t\t// Replaces IE:s auto generated paragraphs with the specified element name\n\t\t\t\tif (s.element != 'P') {\n\t\t\t\t\ted.onKeyPress.add(function(ed, e) {\n\t\t\t\t\t\tt.lastElm = selection.getNode().nodeName;\n\t\t\t\t\t});\n\n\t\t\t\t\ted.onKeyUp.add(function(ed, e) {\n\t\t\t\t\t\tvar bl, n = selection.getNode(), b = ed.getBody();\n\n\t\t\t\t\t\tif (b.childNodes.length === 1 && n.nodeName == 'P') {\n\t\t\t\t\t\t\tn = dom.rename(n, s.element);\n\t\t\t\t\t\t\tselection.select(n);\n\t\t\t\t\t\t\tselection.collapse();\n\t\t\t\t\t\t\ted.nodeChanged();\n\t\t\t\t\t\t} else if (e.keyCode == 13 && !e.shiftKey && t.lastElm != 'P') {\n\t\t\t\t\t\t\tbl = dom.getParent(n, 'p');\n\n\t\t\t\t\t\t\tif (bl) {\n\t\t\t\t\t\t\t\tdom.rename(bl, s.element);\n\t\t\t\t\t\t\t\ted.nodeChanged();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\n\t\tgetParentBlock : function(n) {\n\t\t\tvar d = this.dom;\n\n\t\t\treturn d.getParent(n, d.isBlock);\n\t\t},\n\n\t\tinsertPara : function(e) {\n\t\t\tvar t = this, ed = t.editor, dom = ed.dom, d = ed.getDoc(), se = ed.settings, s = ed.selection.getSel(), r = s.getRangeAt(0), b = d.body;\n\t\t\tvar rb, ra, dir, sn, so, en, eo, sb, eb, bn, bef, aft, sc, ec, n, vp = dom.getViewPort(ed.getWin()), y, ch, car;\n\n\t\t\ted.undoManager.beforeChange();\n\n\t\t\t// If root blocks are forced then use Operas default behavior since it's really good\n// Removed due to bug: #1853816\n//\t\t\tif (se.forced_root_block && isOpera)\n//\t\t\t\treturn TRUE;\n\n\t\t\t// Setup before range\n\t\t\trb = d.createRange();\n\n\t\t\t// If is before the first block element and in body, then move it into first block element\n\t\t\trb.setStart(s.anchorNode, s.anchorOffset);\n\t\t\trb.collapse(TRUE);\n\n\t\t\t// Setup after range\n\t\t\tra = d.createRange();\n\n\t\t\t// If is before the first block element and in body, then move it into first block element\n\t\t\tra.setStart(s.focusNode, s.focusOffset);\n\t\t\tra.collapse(TRUE);\n\n\t\t\t// Setup start/end points\n\t\t\tdir = rb.compareBoundaryPoints(rb.START_TO_END, ra) < 0;\n\t\t\tsn = dir ? s.anchorNode : s.focusNode;\n\t\t\tso = dir ? s.anchorOffset : s.focusOffset;\n\t\t\ten = dir ? s.focusNode : s.anchorNode;\n\t\t\teo = dir ? s.focusOffset : s.anchorOffset;\n\n\t\t\t// If selection is in empty table cell\n\t\t\tif (sn === en && /^(TD|TH)$/.test(sn.nodeName)) {\n\t\t\t\tif (sn.firstChild.nodeName == 'BR')\n\t\t\t\t\tdom.remove(sn.firstChild); // Remove BR\n\n\t\t\t\t// Create two new block elements\n\t\t\t\tif (sn.childNodes.length == 0) {\n\t\t\t\t\ted.dom.add(sn, se.element, null, '<br />');\n\t\t\t\t\taft = ed.dom.add(sn, se.element, null, '<br />');\n\t\t\t\t} else {\n\t\t\t\t\tn = sn.innerHTML;\n\t\t\t\t\tsn.innerHTML = '';\n\t\t\t\t\ted.dom.add(sn, se.element, null, n);\n\t\t\t\t\taft = ed.dom.add(sn, se.element, null, '<br />');\n\t\t\t\t}\n\n\t\t\t\t// Move caret into the last one\n\t\t\t\tr = d.createRange();\n\t\t\t\tr.selectNodeContents(aft);\n\t\t\t\tr.collapse(1);\n\t\t\t\ted.selection.setRng(r);\n\n\t\t\t\treturn FALSE;\n\t\t\t}\n\n\t\t\t// If the caret is in an invalid location in FF we need to move it into the first block\n\t\t\tif (sn == b && en == b && b.firstChild && ed.dom.isBlock(b.firstChild)) {\n\t\t\t\tsn = en = sn.firstChild;\n\t\t\t\tso = eo = 0;\n\t\t\t\trb = d.createRange();\n\t\t\t\trb.setStart(sn, 0);\n\t\t\t\tra = d.createRange();\n\t\t\t\tra.setStart(en, 0);\n\t\t\t}\n\n\t\t\t// If the body is totally empty add a BR element this might happen on webkit\n\t\t\tif (!d.body.hasChildNodes()) {\n\t\t\t\td.body.appendChild(dom.create('br'));\n\t\t\t}\n\n\t\t\t// Never use body as start or end node\n\t\t\tsn = sn.nodeName == \"HTML\" ? d.body : sn; // Fix for Opera bug: https://bugs.opera.com/show_bug.cgi?id=273224&comments=yes\n\t\t\tsn = sn.nodeName == \"BODY\" ? sn.firstChild : sn;\n\t\t\ten = en.nodeName == \"HTML\" ? d.body : en; // Fix for Opera bug: https://bugs.opera.com/show_bug.cgi?id=273224&comments=yes\n\t\t\ten = en.nodeName == \"BODY\" ? en.firstChild : en;\n\n\t\t\t// Get start and end blocks\n\t\t\tsb = t.getParentBlock(sn);\n\t\t\teb = t.getParentBlock(en);\n\t\t\tbn = sb ? sb.nodeName : se.element; // Get block name to create\n\n\t\t\t// Return inside list use default browser behavior\n\t\t\tif (n = t.dom.getParent(sb, 'li,pre')) {\n\t\t\t\tif (n.nodeName == 'LI')\n\t\t\t\t\treturn splitList(ed.selection, t.dom, n);\n\n\t\t\t\treturn TRUE;\n\t\t\t}\n\n\t\t\t// If caption or absolute layers then always generate new blocks within\n\t\t\tif (sb && (sb.nodeName == 'CAPTION' || /absolute|relative|fixed/gi.test(dom.getStyle(sb, 'position', 1)))) {\n\t\t\t\tbn = se.element;\n\t\t\t\tsb = null;\n\t\t\t}\n\n\t\t\t// If caption or absolute layers then always generate new blocks within\n\t\t\tif (eb && (eb.nodeName == 'CAPTION' || /absolute|relative|fixed/gi.test(dom.getStyle(sb, 'position', 1)))) {\n\t\t\t\tbn = se.element;\n\t\t\t\teb = null;\n\t\t\t}\n\n\t\t\t// Use P instead\n\t\t\tif (/(TD|TABLE|TH|CAPTION)/.test(bn) || (sb && bn == \"DIV\" && /left|right/gi.test(dom.getStyle(sb, 'float', 1)))) {\n\t\t\t\tbn = se.element;\n\t\t\t\tsb = eb = null;\n\t\t\t}\n\n\t\t\t// Setup new before and after blocks\n\t\t\tbef = (sb && sb.nodeName == bn) ? sb.cloneNode(0) : ed.dom.create(bn);\n\t\t\taft = (eb && eb.nodeName == bn) ? eb.cloneNode(0) : ed.dom.create(bn);\n\n\t\t\t// Remove id from after clone\n\t\t\taft.removeAttribute('id');\n\n\t\t\t// Is header and cursor is at the end, then force paragraph under\n\t\t\tif (/^(H[1-6])$/.test(bn) && isAtEnd(r, sb))\n\t\t\t\taft = ed.dom.create(se.element);\n\n\t\t\t// Find start chop node\n\t\t\tn = sc = sn;\n\t\t\tdo {\n\t\t\t\tif (n == b || n.nodeType == 9 || t.dom.isBlock(n) || /(TD|TABLE|TH|CAPTION)/.test(n.nodeName))\n\t\t\t\t\tbreak;\n\n\t\t\t\tsc = n;\n\t\t\t} while ((n = n.previousSibling ? n.previousSibling : n.parentNode));\n\n\t\t\t// Find end chop node\n\t\t\tn = ec = en;\n\t\t\tdo {\n\t\t\t\tif (n == b || n.nodeType == 9 || t.dom.isBlock(n) || /(TD|TABLE|TH|CAPTION)/.test(n.nodeName))\n\t\t\t\t\tbreak;\n\n\t\t\t\tec = n;\n\t\t\t} while ((n = n.nextSibling ? n.nextSibling : n.parentNode));\n\n\t\t\t// Place first chop part into before block element\n\t\t\tif (sc.nodeName == bn)\n\t\t\t\trb.setStart(sc, 0);\n\t\t\telse\n\t\t\t\trb.setStartBefore(sc);\n\n\t\t\trb.setEnd(sn, so);\n\t\t\tbef.appendChild(rb.cloneContents() || d.createTextNode('')); // Empty text node needed for Safari\n\n\t\t\t// Place secnd chop part within new block element\n\t\t\ttry {\n\t\t\t\tra.setEndAfter(ec);\n\t\t\t} catch(ex) {\n\t\t\t\t//console.debug(s.focusNode, s.focusOffset);\n\t\t\t}\n\n\t\t\tra.setStart(en, eo);\n\t\t\taft.appendChild(ra.cloneContents() || d.createTextNode('')); // Empty text node needed for Safari\n\n\t\t\t// Create range around everything\n\t\t\tr = d.createRange();\n\t\t\tif (!sc.previousSibling && sc.parentNode.nodeName == bn) {\n\t\t\t\tr.setStartBefore(sc.parentNode);\n\t\t\t} else {\n\t\t\t\tif (rb.startContainer.nodeName == bn && rb.startOffset == 0)\n\t\t\t\t\tr.setStartBefore(rb.startContainer);\n\t\t\t\telse\n\t\t\t\t\tr.setStart(rb.startContainer, rb.startOffset);\n\t\t\t}\n\n\t\t\tif (!ec.nextSibling && ec.parentNode.nodeName == bn)\n\t\t\t\tr.setEndAfter(ec.parentNode);\n\t\t\telse\n\t\t\t\tr.setEnd(ra.endContainer, ra.endOffset);\n\n\t\t\t// Delete and replace it with new block elements\n\t\t\tr.deleteContents();\n\n\t\t\tif (isOpera)\n\t\t\t\ted.getWin().scrollTo(0, vp.y);\n\n\t\t\t// Never wrap blocks in blocks\n\t\t\tif (bef.firstChild && bef.firstChild.nodeName == bn)\n\t\t\t\tbef.innerHTML = bef.firstChild.innerHTML;\n\n\t\t\tif (aft.firstChild && aft.firstChild.nodeName == bn)\n\t\t\t\taft.innerHTML = aft.firstChild.innerHTML;\n\n\t\t\tfunction appendStyles(e, en) {\n\t\t\t\tvar nl = [], nn, n, i;\n\n\t\t\t\te.innerHTML = '';\n\n\t\t\t\t// Make clones of style elements\n\t\t\t\tif (se.keep_styles) {\n\t\t\t\t\tn = en;\n\t\t\t\t\tdo {\n\t\t\t\t\t\t// We only want style specific elements\n\t\t\t\t\t\tif (/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(n.nodeName)) {\n\t\t\t\t\t\t\tnn = n.cloneNode(FALSE);\n\t\t\t\t\t\t\tdom.setAttrib(nn, 'id', ''); // Remove ID since it needs to be unique\n\t\t\t\t\t\t\tnl.push(nn);\n\t\t\t\t\t\t}\n\t\t\t\t\t} while (n = n.parentNode);\n\t\t\t\t}\n\n\t\t\t\t// Append style elements to aft\n\t\t\t\tif (nl.length > 0) {\n\t\t\t\t\tfor (i = nl.length - 1, nn = e; i >= 0; i--)\n\t\t\t\t\t\tnn = nn.appendChild(nl[i]);\n\n\t\t\t\t\t// Padd most inner style element\n\t\t\t\t\tnl[0].innerHTML = isOpera ? '\\u00a0' : '<br />'; // Extra space for Opera so that the caret can move there\n\t\t\t\t\treturn nl[0]; // Move caret to most inner element\n\t\t\t\t} else\n\t\t\t\t\te.innerHTML = isOpera ? '\\u00a0' : '<br />'; // Extra space for Opera so that the caret can move there\n\t\t\t};\n\t\t\t\t\n\t\t\t// Padd empty blocks\n\t\t\tif (dom.isEmpty(bef))\n\t\t\t\tappendStyles(bef, sn);\n\n\t\t\t// Fill empty afterblook with current style\n\t\t\tif (dom.isEmpty(aft))\n\t\t\t\tcar = appendStyles(aft, en);\n\n\t\t\t// Opera needs this one backwards for older versions\n\t\t\tif (isOpera && parseFloat(opera.version()) < 9.5) {\n\t\t\t\tr.insertNode(bef);\n\t\t\t\tr.insertNode(aft);\n\t\t\t} else {\n\t\t\t\tr.insertNode(aft);\n\t\t\t\tr.insertNode(bef);\n\t\t\t}\n\n\t\t\t// Normalize\n\t\t\taft.normalize();\n\t\t\tbef.normalize();\n\n\t\t\t// Move cursor and scroll into view\n\t\t\ted.selection.select(aft, true);\n\t\t\ted.selection.collapse(true);\n\n\t\t\t// scrollIntoView seems to scroll the parent window in most browsers now including FF 3.0b4 so it's time to stop using it and do it our selfs\n\t\t\ty = ed.dom.getPos(aft).y;\n\t\t\t//ch = aft.clientHeight;\n\n\t\t\t// Is element within viewport\n\t\t\tif (y < vp.y || y + 25 > vp.y + vp.h) {\n\t\t\t\ted.getWin().scrollTo(0, y < vp.y ? y : y - vp.h + 25); // Needs to be hardcoded to roughly one line of text if a huge text block is broken into two blocks\n\n\t\t\t\t/*console.debug(\n\t\t\t\t\t'Element: y=' + y + ', h=' + ch + ', ' +\n\t\t\t\t\t'Viewport: y=' + vp.y + \", h=\" + vp.h + ', bottom=' + (vp.y + vp.h)\n\t\t\t\t);*/\n\t\t\t}\n\n\t\t\ted.undoManager.add();\n\n\t\t\treturn FALSE;\n\t\t},\n\n\t\tbackspaceDelete : function(e, bs) {\n\t\t\tvar t = this, ed = t.editor, b = ed.getBody(), dom = ed.dom, n, se = ed.selection, r = se.getRng(), sc = r.startContainer, n, w, tn, walker;\n\n\t\t\t// Delete when caret is behind a element doesn't work correctly on Gecko see #3011651\n\t\t\tif (!bs && r.collapsed && sc.nodeType == 1 && r.startOffset == sc.childNodes.length) {\n\t\t\t\twalker = new tinymce.dom.TreeWalker(sc.lastChild, sc);\n\n\t\t\t\t// Walk the dom backwards until we find a text node\n\t\t\t\tfor (n = sc.lastChild; n; n = walker.prev()) {\n\t\t\t\t\tif (n.nodeType == 3) {\n\t\t\t\t\t\tr.setStart(n, n.nodeValue.length);\n\t\t\t\t\t\tr.collapse(true);\n\t\t\t\t\t\tse.setRng(r);\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// The caret sometimes gets stuck in Gecko if you delete empty paragraphs\n\t\t\t// This workaround removes the element by hand and moves the caret to the previous element\n\t\t\tif (sc && ed.dom.isBlock(sc) && !/^(TD|TH)$/.test(sc.nodeName) && bs) {\n\t\t\t\tif (sc.childNodes.length == 0 || (sc.childNodes.length == 1 && sc.firstChild.nodeName == 'BR')) {\n\t\t\t\t\t// Find previous block element\n\t\t\t\t\tn = sc;\n\t\t\t\t\twhile ((n = n.previousSibling) && !ed.dom.isBlock(n)) ;\n\n\t\t\t\t\tif (n) {\n\t\t\t\t\t\tif (sc != b.firstChild) {\n\t\t\t\t\t\t\t// Find last text node\n\t\t\t\t\t\t\tw = ed.dom.doc.createTreeWalker(n, NodeFilter.SHOW_TEXT, null, FALSE);\n\t\t\t\t\t\t\twhile (tn = w.nextNode())\n\t\t\t\t\t\t\t\tn = tn;\n\n\t\t\t\t\t\t\t// Place caret at the end of last text node\n\t\t\t\t\t\t\tr = ed.getDoc().createRange();\n\t\t\t\t\t\t\tr.setStart(n, n.nodeValue ? n.nodeValue.length : 0);\n\t\t\t\t\t\t\tr.setEnd(n, n.nodeValue ? n.nodeValue.length : 0);\n\t\t\t\t\t\t\tse.setRng(r);\n\n\t\t\t\t\t\t\t// Remove the target container\n\t\t\t\t\t\t\ted.dom.remove(sc);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn Event.cancel(e);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n})(tinymce);\n"}
}});
