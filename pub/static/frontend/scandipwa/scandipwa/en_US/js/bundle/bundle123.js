require.config({"config": {
        "jsbuild":{"Magento_Theme/static/js/account-newsletter.e50ec303.chunk.js":"(this.webpackJsonpscandipwa=this.webpackJsonpscandipwa||[]).push([[12],{1178:function(t,e,r){\"use strict\";r.r(e);var n=r(1179);e.default=n.a},1179:function(t,e,r){\"use strict\";(function(t,n){var o=r(21),i=r(5),a=r(6),c=r(12),s=r(33),u=r(20),l=r(8),h=r(9),p=r(2),f=r.n(p),d=r(22),v=r(80),y=r(406),b=r(24),m=r(162),g=r(79),w=(r(36),r(15)),S=r(38),O=r(58),j=r(60),k=r(1180);function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=\"function\"==typeof Symbol?Symbol:{},o=n.iterator||\"@@iterator\",i=n.asyncIterator||\"@@asyncIterator\",a=n.toStringTag||\"@@toStringTag\";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},\"\")}catch(L){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=\"suspendedStart\";return function(o,i){if(\"executing\"===n)throw new Error(\"Generator is already running\");if(\"completed\"===n){if(\"throw\"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if(\"next\"===r.method)r.sent=r._sent=r.arg;else if(\"throw\"===r.method){if(\"suspendedStart\"===n)throw n=\"completed\",r.arg;r.dispatchException(r.arg)}else\"return\"===r.method&&r.abrupt(\"return\",r.arg);n=\"executing\";var s=u(t,e,r);if(\"normal\"===s.type){if(n=r.done?\"completed\":\"suspendedYield\",s.arg===l)continue;return{value:s.arg,done:r.done}}\"throw\"===s.type&&(n=\"completed\",r.method=\"throw\",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:\"normal\",arg:t.call(e,r)}}catch(L){return{type:\"throw\",arg:L}}}t.wrap=s;var l={};function h(){}function p(){}function f(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==e&&r.call(y,o)&&(d=y);var b=f.prototype=h.prototype=Object.create(d);function m(t){[\"next\",\"throw\",\"return\"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if(\"throw\"!==s.type){var l=s.arg,h=l.value;return h&&\"object\"==typeof h&&r.call(h,\"__await\")?e.resolve(h.__await).then((function(t){n(\"next\",t,a,c)}),(function(t){n(\"throw\",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n(\"throw\",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,\"throw\"===e.method){if(t.iterator.return&&(e.method=\"return\",e.arg=void 0,w(t,e),\"throw\"===e.method))return l;e.method=\"throw\",e.arg=new TypeError(\"The iterator does not provide a 'throw' method\")}return l}var n=u(r,t.iterator,e.arg);if(\"throw\"===n.type)return e.method=\"throw\",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,\"return\"!==e.method&&(e.method=\"next\",e.arg=void 0),e.delegate=null,l):o:(e.method=\"throw\",e.arg=new TypeError(\"iterator result is not an object\"),e.delegate=null,l)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type=\"normal\",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:\"root\"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if(\"function\"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=f,c(b,\"constructor\",f),c(f,\"constructor\",p),p.displayName=c(f,a,\"GeneratorFunction\"),t.isGeneratorFunction=function(t){var e=\"function\"==typeof t&&t.constructor;return!!e&&(e===p||\"GeneratorFunction\"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,a,\"GeneratorFunction\")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},m(g.prototype),c(g.prototype,i,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(b),c(b,a,\"Generator\"),c(b,o,(function(){return this})),c(b,\"toString\",(function(){return\"[object Generator]\"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method=\"next\",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)\"t\"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(\"throw\"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type=\"throw\",a.arg=t,e.next=r,n&&(e.method=\"next\",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if(\"root\"===i.tryLoc)return n(\"end\");if(i.tryLoc<=this.prev){var c=r.call(i,\"catchLoc\"),s=r.call(i,\"finallyLoc\");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error(\"try statement without catch or finally\");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,\"finallyLoc\")&&this.prev<o.finallyLoc){var i=o;break}}i&&(\"break\"===t||\"continue\"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method=\"next\",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if(\"throw\"===t.type)throw t.arg;return\"break\"===t.type||\"continue\"===t.type?this.next=t.arg:\"return\"===t.type?(this.rval=this.arg=t.arg,this.method=\"return\",this.next=\"end\"):\"normal\"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if(\"throw\"===n.type){var o=n.arg;O(r)}return o}}throw new Error(\"illegal catch attempt\")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},\"next\"===this.method&&(this.arg=void 0),l}},t}var E=t.middleware((function(t){return{customer:t.MyAccountReducer.customer,newsletterConfirmStatus:t.ConfigReducer.newsletter_subscription_confirm}}),\"Component/MyAccountNewsletterSubscription/Container/mapStateToProps\"),L=t.middleware((function(t){return{updateCustomer:function(e){return t(Object(b.h)(e))},showErrorNotification:function(e){return t(Object(g.d)(\"error\",Object(O.h)(e)))},showSuccessNotification:function(e){return t(Object(g.d)(\"success\",e))}}}),\"Component/MyAccountNewsletterSubscription/Container/mapDispatchToProps\"),_=r(18).checkBEMProps,C=t.middleware(function(t){Object(l.a)(r,t);var e=Object(h.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).containerFunctions={onError:t.onError,setSubscriptionStatus:t.setSubscriptionStatus.bind(Object(c.a)(t)),onCustomerSave:t.onCustomerSave.bind(Object(c.a)(t))},t}return Object(a.a)(r,[{key:\"__construct\",value:function(t){var e=t.customer,n=t.customer,o=(n=void 0===n?{}:n).is_subscribed;Object(s.a)(Object(u.a)(r.prototype),\"__construct\",this).call(this,t),this.state={isLoading:0===Object.keys(e).length,isSubscriptionSelected:o||!1}}},{key:\"componentDidUpdate\",value:function(t){var e=t.customer,r=this.props,n=r.customer,o=r.customer,i=(o=void 0===o?{}:o).is_subscribed;0===Object.keys(e).length&&0!==Object.keys(n).length&&this.setState({isSubscriptionSelected:i,isLoading:!1})}},{key:\"containerProps\",value:function(){return{customer:this.props.customer,isSubscriptionSelected:this.state.isSubscriptionSelected}}},{key:\"setSubscriptionStatus\",value:function(){this.setState((function(t){return{isSubscriptionSelected:!t.isSubscriptionSelected}}))}},{key:\"showSubscriptionUpdateNotification\",value:function(t,e){var r=this.props,o=r.showSuccessNotification,i=r.newsletterConfirmStatus,a=this.state.isSubscriptionSelected;o(n(!t&&e?\"We have removed your newsletter subscription.\":!t||i||e?!t&&i&&a?\"A subscription confirmation email has been sent!\":\"We have updated your subscription.\":\"We have saved your subscription\"))}},{key:\"onError\",value:function(){var t=this.props.showErrorNotification;this.setState({isLoading:!1},(function(){t(n(\"We are experiencing issues, please try again later\"))}))}},{key:\"onCustomerSave\",value:function(){var t=Object(o.a)(x().mark((function t(e,r){var n,o,i,a,c,s,u,l,h,p=this;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.props,o=n.updateCustomer,i=n.customer.is_subscribed,a=r.isSubscribed.value,c={is_subscribed:void 0!==a&&a},s=y.a.getUpdateInformationMutation(c),Object(w.h)()){t.next=6;break}return t.abrupt(\"return\");case 6:return this.setState({isLoading:!0}),t.prev=7,t.next=10,Object(O.f)(s);case 10:u=t.sent,l=u.updateCustomerV2.customer,S.a.setItem(l,m.CUSTOMER,j.b),h=l.is_subscribed,this.setState({isLoading:!1},(function(){o(l),p.showSubscriptionUpdateNotification(h,i)})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(7),this.onError(t.t0);case 20:case\"end\":return t.stop()}}),t,this,[[7,17]])})));return function(e,r){return t.apply(this,arguments)}}()},{key:\"render\",value:function(){var t=this.state.isLoading;return _(f.a,f.a.Fragment,null,_(f.a,v.a,{isLoading:t}),_(f.a,k.a,Object.assign({},this.containerProps(),this.containerFunctions)))}}]),r}(t.Extensible(p.PureComponent)),\"Component/MyAccountNewsletterSubscription/Container\");e.a=Object(d.b)(E,L)(C)}).call(this,r(3).default,r(29).default)},1180:function(t,e,r){\"use strict\";(function(t,n,o){var i,a=r(5),c=r(6),s=r(33),u=r(20),l=r(8),h=r(9),p=r(1),f=r.n(p),d=r(320),v=r(495),y=r(36),b=(r(1181),r(18).checkBEMProps),m=t.middleware(((i=function(t){Object(l.a)(r,t);var e=Object(h.a)(r);function r(){return Object(a.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:\"fieldMap\",get:function(){var t=this.props,e=t.setSubscriptionStatus,r=t.isSubscriptionSelected;return[{type:d.b.checkbox,attr:{name:\"isSubscribed\",defaultChecked:r},events:{onChange:e},label:n(\"General subscription\")}]}},{key:\"renderFormBody\",value:function(){return b(o,\"div\",{block:\"FieldForm\",elem:\"Fields\",mix:{block:\"MyAccountNewsletterSubscription\"}},Object(s.a)(Object(u.a)(r.prototype),\"renderFormBody\",this).call(this))}},{key:\"getFormProps\",value:function(){var t=this.props;return{onSubmit:t.onCustomerSave,onError:t.onError,returnAsObject:!0}}},{key:\"renderActions\",value:function(){return b(o,\"button\",{type:d.b.submit,block:\"Button\",mix:{block:\"MyAccountNewsletterSubscription\",elem:\"Button\"},\"aria-label\":n(\"Submit\")},n(\"Save changes\"))}}]),r}(t.Extensible(v.a))).propTypes={customer:y.d.isRequired,onCustomerSave:f.a.func.isRequired,onError:f.a.func.isRequired,isSubscriptionSelected:f.a.bool.isRequired},i),\"Component/MyAccountNewsletterSubscription/Component\");e.a=m}).call(this,r(3).default,r(29).default,r(2))}}]);\n//# sourceMappingURL=account-newsletter.e50ec303.chunk.js.map"}
}});