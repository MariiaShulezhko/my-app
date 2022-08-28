(this["webpackJsonpscandipwa"] = this["webpackJsonpscandipwa"] || []).push([[1],{

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = Object({"npm_config_save_dev":"","npm_config_legacy_bundling":"","npm_config_dry_run":"","npm_config_viewer":"man","npm_config_only":"","npm_config_commit_hooks":"true","npm_config_browser":"","MANPATH":"/opt/homebrew/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/opt/homebrew/share/man::","npm_config_also":"","npm_config_sign_git_commit":"","npm_config_rollback":"true","npm_package_proxy":"https://demo100-ors-1588667385-csa-hcx.scandipwa.cloud/","TERM_PROGRAM":"vscode","NODE":"/Users/mariasulezko/n/bin/node","npm_config_usage":"","npm_config_audit":"true","INIT_CWD":"/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa","npm_config_globalignorefile":"/Users/mariasulezko/n/etc/npmignore","TERM":"xterm-256color","PHPBREW_PATH":"/Users/mariasulezko/.phpbrew/php/php-7.4.27-phpbrew/bin","SHELL":"/bin/zsh","npm_config_shell":"/bin/zsh","npm_config_maxsockets":"50","npm_config_init_author_url":"","npm_config_shrinkwrap":"true","npm_config_parseable":"","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_package_scandipwa_locales_en_US":"true","npm_package_dependencies__scandipwa_scandipwa_scripts":"2.4.21","HOMEBREW_REPOSITORY":"/opt/homebrew","TMPDIR":"/var/folders/7m/zx06srh93cqczny_43dch73r0000gn/T/","npm_config_timing":"","npm_config_init_license":"ISC","npm_config_if_present":"","TERM_PROGRAM_VERSION":"1.70.2","PHPBREW_ROOT":"/Users/mariasulezko/.phpbrew","npm_config_sign_git_tag":"","npm_config_init_author_email":"","npm_config_cache_max":"Infinity","npm_package_dependencies_postcss":"8.4.5","ZDOTDIR":"/var/folders/7m/zx06srh93cqczny_43dch73r0000gn/T/vscode-zsh","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","MallocNanoZone":"0","npm_config_preid":"","npm_config_long":"","npm_config_local_address":"","npm_config_git_tag_version":"true","npm_config_cert":"","npm_config_registry":"https://registry.npmjs.org/","npm_config_noproxy":"","npm_config_fetch_retries":"2","ZSH":"/Users/mariasulezko/.oh-my-zsh","npm_config_versions":"","npm_config_message":"%s","npm_config_key":"","npm_package_readmeFilename":"README.md","npm_package_description":"This package contains new ScandiPWA theme sources. Your parent theme is `@scandipwa/scandipwa`.","N_PREFIX":"/Users/mariasulezko/n","USER":"mariasulezko","npm_package_license":"OSL-3.0","COMMAND_MODE":"unix2003","npm_config_globalconfig":"/Users/mariasulezko/n/etc/npmrc","npm_package_browserslist_development_1":"last 1 firefox version","npm_package_scandipwa_type":"theme","npm_config_prefer_online":"","npm_config_logs_max":"10","npm_config_always_auth":"","npm_package_browserslist_development_0":"last 1 chrome version","npm_package_eslintConfig_extends":"@scandipwa","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.Huh2VpZZgc/Listeners","npm_package_browserslist_development_2":"last 1 safari version","__CF_USER_TEXT_ENCODING":"0x1F5:0x7:0x3E","npm_execpath":"/Users/mariasulezko/n/lib/node_modules/npm/bin/npm-cli.js","npm_config_global_style":"","npm_config_cache_lock_retries":"10","npm_config_update_notifier":"true","npm_config_cafile":"","PAGER":"less","npm_config_heading":"npm","npm_config_audit_level":"low","LSCOLORS":"Gxfxcxdxbxegedabagacad","npm_config_searchlimit":"20","npm_config_read_only":"","npm_config_offline":"","npm_config_fetch_retry_mintimeout":"10000","npm_config_json":"","npm_config_access":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"start\"],\"original\":[\"run\",\"start\"]}","npm_package_dependencies__scandipwa_scandipwa":"5.3.4","PATH":"/Users/mariasulezko/n/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/.bin:/usr/local/homebrew/sbin:/opt/homebrew/bin:/Users/mariasulezko/.phpbrew/php/php-7.4.27-phpbrew/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Applications/Sublime Text.app/Contents/SharedSupport/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/mysql/bin:/Library/Apple/usr/bin:/usr/local/homebrew/sbin:/opt/homebrew/bin:/opt/homebrew/sbin:/Applications/Sublime Text.app/Contents/SharedSupport/bin:/Users/mariasulezko/n/bin","npm_config_allow_same_version":"","PHPBREW_HOME":"/Users/mariasulezko/.phpbrew","npm_config_https_proxy":"","npm_config_engine_strict":"","npm_config_description":"true","_":"/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa/node_modules/.bin/scandipwa-scripts","LaunchInstanceID":"57476B9F-2CEB-4E47-A507-7B855BE02C71","npm_config_userconfig":"/Users/mariasulezko/.npmrc","npm_config_init_module":"/Users/mariasulezko/.npm-init.js","npm_package_browserslist_production_1":"not dead","__CFBundleIdentifier":"com.microsoft.VSCode","npm_config_cidr":"","npm_package_browserslist_production_0":">0.2%","PWD":"/Users/mariasulezko/PhpStormProject/test/my-app/scandipwa","npm_config_user":"501","npm_config_node_version":"14.19.3","npm_package_dependencies__tilework_mosaic":"0.1.7","npm_lifecycle_event":"start","npm_package_browserslist_production_2":"not op_mini all","npm_package_scandipwa_parentTheme":"@scandipwa/scandipwa","npm_package_dependencies__scandipwa_eslint_config":"0.1.41","npm_config_save":"true","npm_config_ignore_prepublish":"","npm_config_editor":"vi","npm_config_auth_type":"legacy","npm_package_name":"scandipwa","LANG":"uk_UA.UTF-8","npm_config_tag":"latest","npm_config_script_shell":"","npm_config_progress":"true","npm_config_global":"","npm_config_before":"","npm_package_scripts_build":"scandipwa-scripts build","npm_package_scripts_start":"scandipwa-scripts start","npm_config_searchstaleness":"900","npm_config_optional":"true","npm_config_ham_it_up":"","VSCODE_GIT_ASKPASS_EXTRA_ARGS":"--ms-enable-electron-run-as-node","XPC_FLAGS":"0x0","npm_config_save_prod":"","npm_config_force":"","npm_config_bin_links":"true","npm_config_searchopts":"","npm_config_node_gyp":"/Users/mariasulezko/n/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","npm_config_depth":"Infinity","npm_config_sso_poll_frequency":"500","npm_config_rebuild_bundle":"true","npm_package_version":"0.0.1","XPC_SERVICE_NAME":"0","npm_config_unicode":"true","VSCODE_INJECTION":"1","SHLVL":"2","HOME":"/Users/mariasulezko","npm_config_fetch_retry_maxtimeout":"60000","VSCODE_GIT_ASKPASS_MAIN":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js","npm_config_tag_version_prefix":"v","npm_config_strict_ssl":"true","npm_config_sso_type":"oauth","npm_config_scripts_prepend_node_path":"warn-only","npm_config_save_prefix":"^","npm_config_loglevel":"notice","npm_config_ca":"","npm_config_save_exact":"","npm_config_group":"20","npm_config_fetch_retry_factor":"10","npm_config_dev":"","HOMEBREW_PREFIX":"/opt/homebrew","npm_config_version":"","npm_config_prefer_offline":"","npm_config_cache_lock_stale":"60000","npm_config_otp":"","npm_config_cache_min":"10","npm_config_searchexclude":"","npm_config_cache":"/Users/mariasulezko/.npm","LESS":"-R","LOGNAME":"mariasulezko","npm_lifecycle_script":"scandipwa-scripts start","npm_config_color":"true","npm_config_proxy":"","npm_config_package_lock":"true","npm_package_dependencies__tilework_mosaic_craco":"0.0.5","VSCODE_GIT_IPC_HANDLE":"/var/folders/7m/zx06srh93cqczny_43dch73r0000gn/T/vscode-git-ed7a1c181a.sock","npm_config_package_lock_only":"","npm_config_fund":"true","npm_config_save_optional":"","npm_config_ignore_scripts":"","npm_config_user_agent":"npm/6.14.17 node/v14.19.3 darwin x64","npm_config_cache_lock_wait":"10000","VSCODE_GIT_ASKPASS_NODE":"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper","GIT_ASKPASS":"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh","PHPBREW_PHP":"php-7.4.27-phpbrew","INFOPATH":"/opt/homebrew/share/info:/opt/homebrew/share/info:/opt/homebrew/share/info:/opt/homebrew/share/info:","HOMEBREW_CELLAR":"/opt/homebrew/Cellar","npm_config_production":"","npm_config_send_metrics":"","npm_config_save_bundle":"","npm_config_umask":"0022","npm_config_node_options":"","npm_config_init_version":"1.0.0","npm_config_init_author_name":"","npm_config_git":"git","npm_config_scope":"","SECURITYSESSIONID":"186b3","npm_config_unsafe_perm":"true","npm_config_tmp":"/var/folders/7m/zx06srh93cqczny_43dch73r0000gn/T","npm_config_onload_script":"","BUILD_MODE":"magento","npm_node_execpath":"/Users/mariasulezko/n/bin/node","npm_config_prefix":"/Users/mariasulezko/n","npm_config_link":"","npm_config_format_package_lock":"true","COLORTERM":"truecolor","NEXTJS_PAGES":"{}","WDS_SOCKET_PORT":"3000","WDS_SOCKET_HOST":"localhost","BROWSER":"none","PUBLIC_URL":"/static/frontend/scandipwa/scandipwa/en_US/Magento_Theme/","SKIP_PREFLIGHT_CHECK":"true","FAST_REFRESH":"true","FORCE_COLOR":"true","NODE_ENV":"development","REBEM_MOD_DELIM":"_","REBEM_ELEM_DELIM":"-"}).DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/keymirror/index.js":
/*!*****************************************!*\
  !*** ./node_modules/keymirror/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */



/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-vimeo/lib/Play-Button.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-vimeo/lib/Play-Button.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable max-len */


var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          className: 'vimeo-play-button',
          onClick: this.props.onClick,
          type: 'button' },
        _react2.default.createElement(
          'svg',
          {
            version: '1.1',
            viewBox: '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement('path', { d: 'M79.674,53.719c2.59-2.046,2.59-5.392,0-7.437L22.566,1.053C19.977-0.993,18,0.035,18,3.335v93.331c0,3.3,1.977,4.326,4.566,2.281L79.674,53.719z' })
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

_class.displayName = 'PlayButton';
_class.propTypes = {
  onClick: _propTypes2.default.func
};
exports.default = _class;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-vimeo/lib/Spinner.js":
/*!*************************************************!*\
  !*** ./node_modules/react-vimeo/lib/Spinner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable max-len */


/*
 * React component for Vimeo Loading Spinner created and rendered.
 * SVG Path is used for creating the spinner.
 */
var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'vimeo-loading' },
        _react2.default.createElement(
          'svg',
          {
            height: '32',
            viewBox: '0 0 32 32',
            width: '32',
            xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement('path', {
            d: 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4',
            opacity: '.25' }),
          _react2.default.createElement('path', { d: 'M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z' })
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

_class.displayName = 'Spinner';
exports.default = _class;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-vimeo/lib/Vimeo.js":
/*!***********************************************!*\
  !*** ./node_modules/react-vimeo/lib/Vimeo.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _keymirror = __webpack_require__(/*! keymirror */ "./node_modules/keymirror/index.js");

var _keymirror2 = _interopRequireDefault(_keymirror);

var _jsonp = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _PlayButton = __webpack_require__(/*! ./Play-Button */ "./node_modules/react-vimeo/lib/Play-Button.js");

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _Spinner = __webpack_require__(/*! ./Spinner */ "./node_modules/react-vimeo/lib/Spinner.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _debug2.default)('vimeo:player');
var noop = function noop() {};
var playerEvents = (0, _keymirror2.default)({
  cueChange: null,
  ended: null,
  loaded: null,
  pause: null,
  play: null,
  progress: null,
  seeked: null,
  textTrackChange: null,
  timeUpdate: null,
  volumeChange: null
});

function capitalize() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return str.charAt(0).toUpperCase() + str.substring(1);
}

function getFuncForEvent(event, props) {
  return props['on' + capitalize(event)] || function () {};
}

function post(method, value, player, playerOrigin) {
  try {
    player.contentWindow.postMessage({ method: method, value: value }, playerOrigin);
  } catch (err) {
    return err;
  }
  return null;
}

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      imageLoaded: false,
      playerOrigin: '*',
      showingVideo: _this.props.autoplay,
      thumb: null
    }, _this.addMessageListener = function () {
      var _context;

      var addEventListener = typeof window !== 'undefined' ? (_context = window).addEventListener.bind(_context) : noop;

      addEventListener('message', _this.onMessage);
    }, _this.onError = function (err) {
      if (_this.props.onError) {
        _this.props.onError(err);
      }
      throw err;
    }, _this.onMessage = function (_ref2) {
      var origin = _ref2.origin,
          data = _ref2.data;
      var onReady = _this.props.onReady;
      var playerOrigin = _this.state.playerOrigin;


      if (playerOrigin === '*') {
        _this.setState({
          playerOrigin: origin
        });
      }

      // Handle messages from the vimeo player only
      if (!/^https?:\/\/player.vimeo.com/.test(origin)) {
        return false;
      }

      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (err) {
          debug('error parsing message', err);
          data = { event: '' };
        }
      }

      if (data.event === 'ready') {
        debug('player ready');
        _this.onReady(_this._player, playerOrigin === '*' ? origin : playerOrigin);
        return onReady(data);
      }
      if (!data.event) {
        // we get messages when the first event callbacks are added to the frame
        return;
      }
      debug('firing event: ', data.event);
      getFuncForEvent(data.event, _this.props)(data);
    }, _this.onReady = function (player, playerOrigin) {
      Object.keys(playerEvents).forEach(function (event) {
        var err = post('addEventListener', event.toLowerCase(), player, playerOrigin);
        if (err) {
          _this.onError(err);
        }
      });
    }, _this.playVideo = function (e) {
      e.preventDefault();
      _this.setState({ showingVideo: true });
    }, _this.getIframeUrl = function () {
      var videoId = _this.props.videoId;

      var query = _this.getIframeUrlQuery();
      return '//player.vimeo.com/video/' + videoId + '?' + query;
    }, _this.getIframeUrlQuery = function () {
      var str = [];
      Object.keys(_this.props.playerOptions).forEach(function (key) {
        str.push(key + '=' + _this.props.playerOptions[key]);
      });

      return str.join('&');
    }, _this.fetchVimeoData = function () {
      if (_this.state.imageLoaded) {
        return;
      }
      var id = _this.props.videoId;

      (0, _jsonp2.default)('//vimeo.com/api/v2/video/' + id + '.json', {
        prefix: 'vimeo'
      }, function (err, res) {
        if (err) {
          debug('jsonp err: ', err.message);
          _this.onError(err);
        }
        debug('jsonp response', res);
        _this.setState({
          thumb: res[0].thumbnail_large,
          imageLoaded: true
        });
      });
    }, _this.renderImage = function () {
      if (_this.state.showingVideo || !_this.state.imageLoaded) {
        return;
      }

      var style = {
        backgroundImage: 'url(' + _this.state.thumb + ')',
        display: !_this.state.showingVideo ? 'block' : 'none',
        height: '100%',
        width: '100%'
      };

      var playButton = _this.props.playButton ? (0, _react.cloneElement)(_this.props.playButton, { onClick: _this.playVideo }) : _react2.default.createElement(_PlayButton2.default, { onClick: _this.playVideo });

      return _react2.default.createElement(
        'div',
        {
          className: 'vimeo-image',
          style: style },
        playButton
      );
    }, _this.renderIframe = function () {
      if (!_this.state.showingVideo) {
        return;
      }

      _this.addMessageListener();

      var embedVideoStyle = {
        display: _this.state.showingVideo ? 'block' : 'none',
        height: '100%',
        width: '100%'
      };

      return _react2.default.createElement(
        'div',
        {
          className: 'vimeo-embed',
          style: embedVideoStyle },
        _react2.default.createElement('iframe', {
          frameBorder: '0',
          ref: function ref(el) {
            _this._player = el;
          },
          src: _this.getIframeUrl() })
      );
    }, _this.renderLoading = function (imageLoaded, loadingElement) {
      if (imageLoaded) {
        return;
      }
      if (loadingElement) {
        return loadingElement;
      }
      return _react2.default.createElement(_Spinner2.default, null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.videoId !== this.props.videoId) {
        this.setState({
          thumb: null,
          imageLoaded: false,
          showingVideo: false
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchVimeoData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.fetchVimeoData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _context2;

      var removeEventListener = typeof window !== 'undefined' ? (_context2 = window).removeEventListener.bind(_context2) : noop;

      removeEventListener('message', this.onMessage);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.renderLoading(this.state.imageLoaded, this.props.loading),
        this.renderImage(),
        this.renderIframe()
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

_class.displayName = 'Vimeo';
_class.propTypes = {
  autoplay: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  loading: _propTypes2.default.element,
  playButton: _propTypes2.default.node,
  playerOptions: _propTypes2.default.object,
  videoId: _propTypes2.default.string.isRequired,

  // event callbacks
  onCueChange: _propTypes2.default.func,
  onEnded: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onLoaded: _propTypes2.default.func,
  onPause: _propTypes2.default.func,
  onPlay: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSeeked: _propTypes2.default.func,
  onTextTrackChanged: _propTypes2.default.func,
  onTimeUpdate: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func
};

_class.defaultProps = function () {
  var defaults = Object.keys(playerEvents).concat(['ready']).reduce(function (defaults, event) {
    defaults['on' + capitalize(event)] = noop;
    return defaults;
  }, {});

  defaults.className = 'vimeo';
  defaults.playerOptions = { autoplay: 1 };
  defaults.autoplay = false;
  return defaults;
}();

exports.default = _class;
module.exports = exports['default'];

/***/ })

}]);
//# sourceMappingURL=1.chunk.js.map