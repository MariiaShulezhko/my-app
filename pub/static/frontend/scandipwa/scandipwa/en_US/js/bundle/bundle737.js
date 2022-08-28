require.config({"config": {
        "jsbuild":{"Magento_Tinymce3/tiny_mce/classes/util/URI.js":"/**\n * URI.js\n *\n * Copyright 2009, Moxiecode Systems AB\n * Released under LGPL License.\n *\n * License: http://tinymce.moxiecode.com/license\n * Contributing: http://tinymce.moxiecode.com/contributing\n */\n\n(function() {\n\tvar each = tinymce.each;\n\n\t/**\n\t * This class handles parsing, modification and serialization of URI/URL strings.\n\t * @class tinymce.util.URI\n\t */\n\ttinymce.create('tinymce.util.URI', {\n\t\t/**\n\t\t * Constucts a new URI instance.\n\t\t *\n\t\t * @constructor\n\t\t * @method URI\n\t\t * @param {String} u URI string to parse.\n\t\t * @param {Object} s Optional settings object.\n\t\t */\n\t\tURI : function(u, s) {\n\t\t\tvar t = this, o, a, b, base_url;\n\n\t\t\t// Trim whitespace\n\t\t\tu = tinymce.trim(u);\n\n\t\t\t// Default settings\n\t\t\ts = t.settings = s || {};\n\n\t\t\t// Strange app protocol that isn't http/https or local anchor\n\t\t\t// For example: mailto,skype,tel etc.\n\t\t\tif (/^([\\w\\-]+):([^\\/]{2})/i.test(u) || /^\\s*#/.test(u)) {\n\t\t\t\tt.source = u;\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t// Absolute path with no host, fake host and protocol\n\t\t\tif (u.indexOf('/') === 0 && u.indexOf('//') !== 0)\n\t\t\t\tu = (s.base_uri ? s.base_uri.protocol || 'http' : 'http') + '://mce_host' + u;\n\n\t\t\t// Relative path http:// or protocol relative //path\n\t\t\tif (!/^[\\w-]*:?\\/\\//.test(u)) {\n\t\t\t\tbase_url = s.base_uri ? s.base_uri.path : new tinymce.util.URI(location.href).directory;\n\t\t\t\tu = ((s.base_uri && s.base_uri.protocol) || 'http') + '://mce_host' + t.toAbsPath(base_url, u);\n\t\t\t}\n\n\t\t\t// Parse URL (Credits goes to Steave, http://blog.stevenlevithan.com/archives/parseuri)\n\t\t\tu = u.replace(/@@/g, '(mce_at)'); // Zope 3 workaround, they use @@something\n\t\t\tu = /^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/.exec(u);\n\t\t\teach([\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"], function(v, i) {\n\t\t\t\tvar s = u[i];\n\n\t\t\t\t// Zope 3 workaround, they use @@something\n\t\t\t\tif (s)\n\t\t\t\t\ts = s.replace(/\\(mce_at\\)/g, '@@');\n\n\t\t\t\tt[v] = s;\n\t\t\t});\n\n\t\t\tif (b = s.base_uri) {\n\t\t\t\tif (!t.protocol)\n\t\t\t\t\tt.protocol = b.protocol;\n\n\t\t\t\tif (!t.userInfo)\n\t\t\t\t\tt.userInfo = b.userInfo;\n\n\t\t\t\tif (!t.port && t.host == 'mce_host')\n\t\t\t\t\tt.port = b.port;\n\n\t\t\t\tif (!t.host || t.host == 'mce_host')\n\t\t\t\t\tt.host = b.host;\n\n\t\t\t\tt.source = '';\n\t\t\t}\n\n\t\t\t//t.path = t.path || '/';\n\t\t},\n\n\t\t/**\n\t\t * Sets the internal path part of the URI.\n\t\t *\n\t\t * @method setPath\n\t\t * @param {string} p Path string to set.\n\t\t */\n\t\tsetPath : function(p) {\n\t\t\tvar t = this;\n\n\t\t\tp = /^(.*?)\\/?(\\w+)?$/.exec(p);\n\n\t\t\t// Update path parts\n\t\t\tt.path = p[0];\n\t\t\tt.directory = p[1];\n\t\t\tt.file = p[2];\n\n\t\t\t// Rebuild source\n\t\t\tt.source = '';\n\t\t\tt.getURI();\n\t\t},\n\n\t\t/**\n\t\t * Converts the specified URI into a relative URI based on the current URI instance location.\n\t\t *\n\t\t * @method toRelative\n\t\t * @param {String} u URI to convert into a relative path/URI.\n\t\t * @return {String} Relative URI from the point specified in the current URI instance.\n\t\t * @example\n\t\t * // Converts an absolute URL to an relative URL url will be somedir/somefile.htm\n\t\t * var url = new tinymce.util.URI('http://www.site.com/dir/').toRelative('http://www.site.com/dir/somedir/somefile.htm');\n\t\t */\n\t\ttoRelative : function(u) {\n\t\t\tvar t = this, o;\n\n\t\t\tif (u === \"./\")\n\t\t\t\treturn u;\n\n\t\t\tu = new tinymce.util.URI(u, {base_uri : t});\n\n\t\t\t// Not on same domain/port or protocol\n\t\t\tif ((u.host != 'mce_host' && t.host != u.host && u.host) || t.port != u.port || t.protocol != u.protocol)\n\t\t\t\treturn u.getURI();\n\n\t\t\to = t.toRelPath(t.path, u.path);\n\n\t\t\t// Add query\n\t\t\tif (u.query)\n\t\t\t\to += '?' + u.query;\n\n\t\t\t// Add anchor\n\t\t\tif (u.anchor)\n\t\t\t\to += '#' + u.anchor;\n\n\t\t\treturn o;\n\t\t},\n\t\n\t\t/**\n\t\t * Converts the specified URI into a absolute URI based on the current URI instance location.\n\t\t *\n\t\t * @method toAbsolute\n\t\t * @param {String} u URI to convert into a relative path/URI.\n\t\t * @param {Boolean} nh No host and protocol prefix.\n\t\t * @return {String} Absolute URI from the point specified in the current URI instance.\n\t\t * @example\n\t\t * // Converts an relative URL to an absolute URL url will be http://www.site.com/dir/somedir/somefile.htm\n\t\t * var url = new tinymce.util.URI('http://www.site.com/dir/').toAbsolute('somedir/somefile.htm');\n\t\t */\n\t\ttoAbsolute : function(u, nh) {\n\t\t\tvar u = new tinymce.util.URI(u, {base_uri : this});\n\n\t\t\treturn u.getURI(this.host == u.host && this.protocol == u.protocol ? nh : 0);\n\t\t},\n\n\t\t/**\n\t\t * Converts a absolute path into a relative path.\n\t\t *\n\t\t * @method toRelPath\n\t\t * @param {String} base Base point to convert the path from.\n\t\t * @param {String} path Absolute path to convert into a relative path.\n\t\t */\n\t\ttoRelPath : function(base, path) {\n\t\t\tvar items, bp = 0, out = '', i, l;\n\n\t\t\t// Split the paths\n\t\t\tbase = base.substring(0, base.lastIndexOf('/'));\n\t\t\tbase = base.split('/');\n\t\t\titems = path.split('/');\n\n\t\t\tif (base.length >= items.length) {\n\t\t\t\tfor (i = 0, l = base.length; i < l; i++) {\n\t\t\t\t\tif (i >= items.length || base[i] != items[i]) {\n\t\t\t\t\t\tbp = i + 1;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (base.length < items.length) {\n\t\t\t\tfor (i = 0, l = items.length; i < l; i++) {\n\t\t\t\t\tif (i >= base.length || base[i] != items[i]) {\n\t\t\t\t\t\tbp = i + 1;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif (bp == 1)\n\t\t\t\treturn path;\n\n\t\t\tfor (i = 0, l = base.length - (bp - 1); i < l; i++)\n\t\t\t\tout += \"../\";\n\n\t\t\tfor (i = bp - 1, l = items.length; i < l; i++) {\n\t\t\t\tif (i != bp - 1)\n\t\t\t\t\tout += \"/\" + items[i];\n\t\t\t\telse\n\t\t\t\t\tout += items[i];\n\t\t\t}\n\n\t\t\treturn out;\n\t\t},\n\n\t\t/**\n\t\t * Converts a relative path into a absolute path.\n\t\t *\n\t\t * @method toAbsPath\n\t\t * @param {String} base Base point to convert the path from.\n\t\t * @param {String} path Relative path to convert into an absolute path.\n\t\t */\n\t\ttoAbsPath : function(base, path) {\n\t\t\tvar i, nb = 0, o = [], tr, outPath;\n\n\t\t\t// Split paths\n\t\t\ttr = /\\/$/.test(path) ? '/' : '';\n\t\t\tbase = base.split('/');\n\t\t\tpath = path.split('/');\n\n\t\t\t// Remove empty chunks\n\t\t\teach(base, function(k) {\n\t\t\t\tif (k)\n\t\t\t\t\to.push(k);\n\t\t\t});\n\n\t\t\tbase = o;\n\n\t\t\t// Merge relURLParts chunks\n\t\t\tfor (i = path.length - 1, o = []; i >= 0; i--) {\n\t\t\t\t// Ignore empty or .\n\t\t\t\tif (path[i].length == 0 || path[i] == \".\")\n\t\t\t\t\tcontinue;\n\n\t\t\t\t// Is parent\n\t\t\t\tif (path[i] == '..') {\n\t\t\t\t\tnb++;\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Move up\n\t\t\t\tif (nb > 0) {\n\t\t\t\t\tnb--;\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\to.push(path[i]);\n\t\t\t}\n\n\t\t\ti = base.length - nb;\n\n\t\t\t// If /a/b/c or /\n\t\t\tif (i <= 0)\n\t\t\t\toutPath = o.reverse().join('/');\n\t\t\telse\n\t\t\t\toutPath = base.slice(0, i).join('/') + '/' + o.reverse().join('/');\n\n\t\t\t// Add front / if it's needed\n\t\t\tif (outPath.indexOf('/') !== 0)\n\t\t\t\toutPath = '/' + outPath;\n\n\t\t\t// Add traling / if it's needed\n\t\t\tif (tr && outPath.lastIndexOf('/') !== outPath.length - 1)\n\t\t\t\toutPath += tr;\n\n\t\t\treturn outPath;\n\t\t},\n\n\t\t/**\n\t\t * Returns the full URI of the internal structure.\n\t\t *\n\t\t * @method getURI\n\t\t * @param {Boolean} nh Optional no host and protocol part. Defaults to false.\n\t\t */\n\t\tgetURI : function(nh) {\n\t\t\tvar s, t = this;\n\n\t\t\t// Rebuild source\n\t\t\tif (!t.source || nh) {\n\t\t\t\ts = '';\n\n\t\t\t\tif (!nh) {\n\t\t\t\t\tif (t.protocol)\n\t\t\t\t\t\ts += t.protocol + '://';\n\n\t\t\t\t\tif (t.userInfo)\n\t\t\t\t\t\ts += t.userInfo + '@';\n\n\t\t\t\t\tif (t.host)\n\t\t\t\t\t\ts += t.host;\n\n\t\t\t\t\tif (t.port)\n\t\t\t\t\t\ts += ':' + t.port;\n\t\t\t\t}\n\n\t\t\t\tif (t.path)\n\t\t\t\t\ts += t.path;\n\n\t\t\t\tif (t.query)\n\t\t\t\t\ts += '?' + t.query;\n\n\t\t\t\tif (t.anchor)\n\t\t\t\t\ts += '#' + t.anchor;\n\n\t\t\t\tt.source = s;\n\t\t\t}\n\n\t\t\treturn t.source;\n\t\t}\n\t});\n})();\n"}
}});
