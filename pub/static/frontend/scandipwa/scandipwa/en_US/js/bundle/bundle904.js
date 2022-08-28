require.config({"config": {
        "jsbuild":{"tiny_mce_4/plugins/imagetools/plugin.min.js":"!function(m){\"use strict\";var r=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return r(n())}}},t=tinymce.util.Tools.resolve(\"tinymce.PluginManager\"),G=tinymce.util.Tools.resolve(\"tinymce.util.Tools\"),e=function(){},i=function(t){return function(){return t}};function a(r){for(var o=[],t=1;t<arguments.length;t++)o[t-1]=arguments[t];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=o.concat(t);return r.apply(null,n)}}var n,o,c,u,l=i(!1),f=i(!0),s=function(){return d},d=(n=function(t){return t.isNone()},u={fold:function(t,e){return t()},is:l,isSome:l,isNone:f,getOr:c=function(t){return t},getOrThunk:o=function(t){return t()},getOrDie:function(t){throw new Error(t||\"error: getOrDie called on none.\")},getOrNull:i(null),getOrUndefined:i(undefined),or:c,orThunk:o,map:s,each:e,bind:s,exists:l,forall:f,filter:s,equals:n,equals_:n,toArray:function(){return[]},toString:i(\"none()\")},Object.freeze&&Object.freeze(u),u),h=function(n){var t=i(n),e=function(){return o},r=function(t){return t(n)},o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:f,isNone:l,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return h(t(n))},each:function(t){t(n)},bind:r,exists:r,forall:r,filter:function(t){return t(n)?o:d},toArray:function(){return[n]},toString:function(){return\"some(\"+n+\")\"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(l,function(t){return e(n,t)})}};return o},g={some:h,none:s,from:function(t){return null===t||t===undefined?d:h(t)}};function p(t,e){return w(m.document.createElement(\"canvas\"),t,e)}function v(t){var e=p(t.width,t.height);return y(e).drawImage(t,0,0),e}function y(t){return t.getContext(\"2d\")}function w(t,e,n){return t.width=e,t.height=n,t}function b(t){return t.naturalWidth||t.width}function x(t){return t.naturalHeight||t.height}var k=window.Promise?window.Promise:function(){var i=function(t){if(\"object\"!=typeof this)throw new TypeError(\"Promises must be constructed via new\");if(\"function\"!=typeof t)throw new TypeError(\"not a function\");this._state=null,this._value=null,this._deferreds=[],f(t,r(o,this),r(c,this))},t=i.immediateFn||\"function\"==typeof window.setImmediate&&window.setImmediate||function(t){m.setTimeout(t,1)};function r(t,e){return function(){return t.apply(e,arguments)}}var n=Array.isArray||function(t){return\"[object Array]\"===Object.prototype.toString.call(t)};function a(r){var o=this;null!==this._state?t(function(){var t=o._state?r.onFulfilled:r.onRejected;if(null!==t){var e;try{e=t(o._value)}catch(n){return void r.reject(n)}r.resolve(e)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(t){try{if(t===this)throw new TypeError(\"A promise cannot be resolved with itself.\");if(t&&(\"object\"==typeof t||\"function\"==typeof t)){var e=t.then;if(\"function\"==typeof e)return void f(r(e,t),r(o,this),r(c,this))}this._state=!0,this._value=t,u.call(this)}catch(n){c.call(this,n)}}function c(t){this._state=!1,this._value=t,u.call(this)}function u(){for(var t=0,e=this._deferreds;t<e.length;t++){var n=e[t];a.call(this,n)}this._deferreds=[]}function l(t,e,n,r){this.onFulfilled=\"function\"==typeof t?t:null,this.onRejected=\"function\"==typeof e?e:null,this.resolve=n,this.reject=r}function f(t,e,n){var r=!1;try{t(function(t){r||(r=!0,e(t))},function(t){r||(r=!0,n(t))})}catch(o){if(r)return;r=!0,n(o)}}return i.prototype[\"catch\"]=function(t){return this.then(null,t)},i.prototype.then=function(n,r){var o=this;return new i(function(t,e){a.call(o,new l(n,r,t,e))})},i.all=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var u=Array.prototype.slice.call(1===t.length&&n(t[0])?t[0]:t);return new i(function(o,i){if(0===u.length)return o([]);var a=u.length;function c(e,t){try{if(t&&(\"object\"==typeof t||\"function\"==typeof t)){var n=t.then;if(\"function\"==typeof n)return void n.call(t,function(t){c(e,t)},i)}u[e]=t,0==--a&&o(u)}catch(r){i(r)}}for(var t=0;t<u.length;t++)c(t,u[t])})},i.resolve=function(e){return e&&\"object\"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(n){return new i(function(t,e){e(n)})},i.race=function(o){return new i(function(t,e){for(var n=0,r=o;n<r.length;n++)r[n].then(t,e)})},i}();function R(t){var r,e=t.src;return 0===e.indexOf(\"data:\")?M(e):(r=e,new k(function(t,n){var e=new m.XMLHttpRequest;e.open(\"GET\",r,!0),e.responseType=\"blob\",e.onload=function(){200===this.status&&t(this.response)},e.onerror=function(){var t,e=this;n(0===this.status?((t=new Error(\"No access to download image\")).code=18,t.name=\"SecurityError\",t):new Error(\"Error \"+e.status+\" downloading image\"))},e.send()}))}function I(c){return new k(function(t,e){var n=m.URL.createObjectURL(c),r=new m.Image,o=function(){r.removeEventListener(\"load\",i),r.removeEventListener(\"error\",a)};function i(){o(),t(r)}function a(){o(),e(\"Unable to load data of type \"+c.type+\": \"+n)}r.addEventListener(\"load\",i),r.addEventListener(\"error\",a),r.src=n,r.complete&&i()})}function M(n){return new k(function(t,e){(function(t){var e=t.split(\",\"),n=/data:([^;]+)/.exec(e[0]);if(!n)return g.none();for(var r=n[1],o=e[1],i=m.atob(o),a=i.length,c=Math.ceil(a/1024),u=new Array(c),l=0;l<c;++l){for(var f=1024*l,s=Math.min(f+1024,a),d=new Array(s-f),h=f,p=0;h<s;++p,++h)d[p]=i[h].charCodeAt(0);u[l]=new Uint8Array(d)}return g.some(new m.Blob(u,{type:r}))})(n).fold(function(){e(\"uri is not base64: \"+n)},t)})}function T(t,r,o){return r=r||\"image/png\",m.HTMLCanvasElement.prototype.toBlob?new k(function(e,n){t.toBlob(function(t){t?e(t):n()},r,o)}):M(t.toDataURL(r,o))}function U(t){return I(t).then(function(t){var e;e=t,m.URL.revokeObjectURL(e.src);var n=p(b(t),x(t));return y(n).drawImage(t,0,0),n})}function C(t,e,n){var r=e.type;function o(r,o){return t.then(function(t){return n=o,e=(e=r)||\"image/png\",t.toDataURL(e,n);var e,n})}return{getType:i(r),toBlob:function(){return k.resolve(e)},toDataURL:function(){return n},toBase64:function(){return n.split(\",\")[1]},toAdjustedBlob:function(e,n){return t.then(function(t){return T(t,e,n)})},toAdjustedDataURL:o,toAdjustedBase64:function(t,e){return o(t,e).then(function(t){return t.split(\",\")[1]})},toCanvas:function(){return t.then(v)}}}function A(e){return(n=e,new k(function(t){var e=new m.FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(n)})).then(function(t){return C(U(e),e,t)});var n}function E(e,t){return T(e,t).then(function(t){return C(k.resolve(e),t,e.toDataURL())})}function O(t,e,n){var r=\"string\"==typeof t?parseFloat(t):t;return n<r?r=n:r<e&&(r=e),r}var _=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10];function j(t,e){for(var n,r=[],o=new Array(25),i=0;i<5;i++){for(var a=0;a<5;a++)r[a]=e[a+5*i];for(a=0;a<5;a++){for(var c=n=0;c<5;c++)n+=t[a+5*c]*r[c];o[a+5*i]=n}}return o}function z(t,n){return n=O(n,0,1),t.map(function(t,e){return e%6==0?t=1-(1-t)*n:t*=n,O(t,0,1)})}function L(a,c){return a.toCanvas().then(function(t){return e=t,n=a.getType(),r=c,o=y(e),i=function(t,e){for(var n,r,o,i,a=t.data,c=e[0],u=e[1],l=e[2],f=e[3],s=e[4],d=e[5],h=e[6],p=e[7],m=e[8],g=e[9],v=e[10],y=e[11],w=e[12],b=e[13],x=e[14],k=e[15],R=e[16],I=e[17],M=e[18],T=e[19],U=0;U<a.length;U+=4)n=a[U],r=a[U+1],o=a[U+2],i=a[U+3],a[U]=n*c+r*u+o*l+i*f+s,a[U+1]=n*d+r*h+o*p+i*m+g,a[U+2]=n*v+r*y+o*w+i*b+x,a[U+3]=n*k+r*R+o*I+i*M+T;return t}(o.getImageData(0,0,e.width,e.height),r),o.putImageData(i,0,0),E(e,n);var e,n,r,o,i})}function B(c,u){return c.toCanvas().then(function(t){return e=t,n=c.getType(),r=u,o=y(e),i=o.getImageData(0,0,e.width,e.height),a=o.getImageData(0,0,e.width,e.height),a=function(t,e,n){function r(t,e,n){return n<t?t=n:t<e&&(t=e),t}for(var o=Math.round(Math.sqrt(n.length)),i=Math.floor(o/2),a=t.data,c=e.data,u=t.width,l=t.height,f=0;f<l;f++)for(var s=0;s<u;s++){for(var d=0,h=0,p=0,m=0;m<o;m++)for(var g=0;g<o;g++){var v=r(s+g-i,0,u-1),y=r(f+m-i,0,l-1),w=4*(y*u+v),b=n[m*o+g];d+=a[w]*b,h+=a[w+1]*b,p+=a[w+2]*b}var x=4*(f*u+s);c[x]=r(d,0,255),c[x+1]=r(h,0,255),c[x+2]=r(p,0,255)}return e}(i,a,r),o.putImageData(a,0,0),E(e,n);var e,n,r,o,i,a})}function S(c){return function(e,n){return e.toCanvas().then(function(t){return function(t,e,n){for(var r=y(t),o=new Array(256),i=0;i<o.length;i++)o[i]=c(i,n);var a=function(t,e){for(var n=t.data,r=0;r<n.length;r+=4)n[r]=e[n[r]],n[r+1]=e[n[r+1]],n[r+2]=e[n[r+2]];return t}(r.getImageData(0,0,t.width,t.height),o);return r.putImageData(a,0,0),E(t,e)}(t,e.getType(),n)})}}function P(n){return function(t,e){return L(t,n([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],e))}}function H(e){return function(t){return B(t,e)}}var D,F=(D=[-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0,0,0,0,0,1],function(t){return L(t,D)}),V=P(function(t,e){return j(t,[1,0,0,0,e=O(255*e,-255,255),0,1,0,0,e,0,0,1,0,e,0,0,0,1,0,0,0,0,0,1])}),W=P(function(t,e){e=O(e,-180,180)/180*Math.PI;var n=Math.cos(e),r=Math.sin(e),o=.213,i=.715,a=.072;return j(t,[o+.787*n+r*-o,i+n*-i+r*-i,a+n*-a+.928*r,0,0,o+n*-o+.143*r,i+n*(1-i)+.14*r,a+n*-a+-.283*r,0,0,o+n*-o+-.787*r,i+n*-i+r*i,a+.928*n+r*a,0,0,0,0,0,1,0,0,0,0,0,1])}),N=P(function(t,e){var n=1+(0<(e=O(e,-1,1))?3*e:e);return j(t,[.3086*(1-n)+n,.6094*(1-n),.082*(1-n),0,0,.3086*(1-n),.6094*(1-n)+n,.082*(1-n),0,0,.3086*(1-n),.6094*(1-n),.082*(1-n)+n,0,0,0,0,0,1,0,0,0,0,0,1])}),q=P(function(t,e){var n;return e=O(e,-1,1),j(t,[(n=(e*=100)<0?127+e/100*127:127*(n=0==(n=e%1)?_[e]:_[Math.floor(e)]*(1-n)+_[Math.floor(e)+1]*n)+127)/127,0,0,0,.5*(127-n),0,n/127,0,0,.5*(127-n),0,0,n/127,0,.5*(127-n),0,0,0,1,0,0,0,0,0,1])}),$=P(function(t,e){return j(t,z([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e=O(e,0,1)))}),X=P(function(t,e){return j(t,z([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e=O(e,0,1)))}),Y=function(t,e,n,r){return L(t,(o=n,i=r,j([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],[O(e,0,2),0,0,0,0,0,o=O(o,0,2),0,0,0,0,0,i=O(i,0,2),0,0,0,0,0,1,0,0,0,0,0,1])));var o,i},K=H([0,-1,0,-1,5,-1,0,-1,0]),J=H([-2,-1,0,-1,1,1,0,1,2]),Z=S(function(t,e){return 255*Math.pow(t/255,1-e)}),Q=S(function(t,e){return 255*(1-Math.exp(-t/255*e))});function tt(t,e,n){var r=b(t),o=x(t),i=e/r,a=n/o,c=!1;(i<.5||2<i)&&(i=i<.5?.5:2,c=!0),(a<.5||2<a)&&(a=a<.5?.5:2,c=!0);var u,l,f,s=(u=t,l=i,f=a,new k(function(t){var e=b(u),n=x(u),r=Math.floor(e*l),o=Math.floor(n*f),i=p(r,o),a=y(i);a.drawImage(u,0,0,e,n,0,0,r,o),t(i)}));return c?s.then(function(t){return tt(t,e,n)}):s}function et(u,l){return u.toCanvas().then(function(t){return e=t,n=u.getType(),r=l,o=p(e.width,e.height),i=y(o),90!==(r=r<(c=a=0)?360+r:r)&&270!==r||w(o,o.height,o.width),90!==r&&180!==r||(a=o.width),270!==r&&180!==r||(c=o.height),i.translate(a,c),i.rotate(r*Math.PI/180),i.drawImage(e,0,0),E(o,n);var e,n,r,o,i,a,c})}function nt(a,c){return a.toCanvas().then(function(t){return e=t,n=a.getType(),r=c,o=p(e.width,e.height),i=y(o),\"v\"===r?(i.scale(1,-1),i.drawImage(e,0,-o.height)):(i.scale(-1,1),i.drawImage(e,-o.width,0)),E(o,n);var e,n,r,o,i})}function rt(a,c,u,l,f){return a.toCanvas().then(function(t){return e=t,n=a.getType(),r=c,o=u,y(i=p(l,f)).drawImage(e,-r,-o),E(i,n);var e,n,r,o,i})}var ot=function(t){return F(t)},it=function(t){return K(t)},at=function(t){return J(t)},ct=function(t,e){return Z(t,e)},ut=function(t,e){return Q(t,e)},lt=function(t,e,n,r){return Y(t,e,n,r)},ft=function(t,e){return V(t,e)},st=function(t,e){return W(t,e)},dt=function(t,e){return N(t,e)},ht=function(t,e){return q(t,e)},pt=function(t,e){return $(t,e)},mt=function(t,e){return X(t,e)},gt=function(t,e){return nt(t,e)},vt=function(t,e,n,r,o){return rt(t,e,n,r,o)},yt=function(t,e,n){return o=e,i=n,(r=t).toCanvas().then(function(t){return tt(t,o,i).then(function(t){return E(t,r.getType())})});var r,o,i},wt=function(t,e){return et(t,e)},bt=function(t){return A(t)},xt=\"undefined\"!=typeof m.window?m.window:Function(\"return this;\")(),kt=function(t,e){return function(t,e){for(var n=e!==undefined&&null!==e?e:xt,r=0;r<t.length&&n!==undefined&&null!==n;++r)n=n[t[r]];return n}(t.split(\".\"),e)},Rt=function(t,e){var n=kt(t,e);if(n===undefined||null===n)throw new Error(t+\" not available on this browser\");return n},It=function(){return Rt(\"URL\")},Mt={createObjectURL:function(t){return It().createObjectURL(t)},revokeObjectURL:function(t){It().revokeObjectURL(t)}},Tt=tinymce.util.Tools.resolve(\"tinymce.util.Delay\"),Ut=tinymce.util.Tools.resolve(\"tinymce.util.Promise\"),Ct=tinymce.util.Tools.resolve(\"tinymce.util.URI\"),At=tinymce.util.Tools.resolve(\"tinymce.dom.DOMUtils\"),Et=tinymce.util.Tools.resolve(\"tinymce.ui.Factory\"),Ot=tinymce.util.Tools.resolve(\"tinymce.geom.Rect\"),_t=function(n){return new Ut(function(t){var e=function(){n.removeEventListener(\"load\",e),t(n)};n.complete?t(n):n.addEventListener(\"load\",e)})},jt=tinymce.util.Tools.resolve(\"tinymce.dom.DomQuery\"),zt=tinymce.util.Tools.resolve(\"tinymce.util.Observable\"),Lt=tinymce.util.Tools.resolve(\"tinymce.util.VK\"),Bt=0,St={create:function(t){return new(Et.get(\"Control\").extend({Defaults:{classes:\"imagepanel\"},selection:function(t){return arguments.length?(this.state.set(\"rect\",t),this):this.state.get(\"rect\")},imageSize:function(){var t=this.state.get(\"viewRect\");return{w:t.w,h:t.h}},toggleCropRect:function(t){this.state.set(\"cropEnabled\",t)},imageSrc:function(t){var o=this,i=new m.Image;i.src=t,_t(i).then(function(){var t,e,n=o.state.get(\"viewRect\");if((e=o.$el.find(\"img\"))[0])e.replaceWith(i);else{var r=m.document.createElement(\"div\");r.className=\"mce-imagepanel-bg\",o.getEl().appendChild(r),o.getEl().appendChild(i)}t={x:0,y:0,w:i.naturalWidth,h:i.naturalHeight},o.state.set(\"viewRect\",t),o.state.set(\"rect\",Ot.inflate(t,-20,-20)),n&&n.w===t.w&&n.h===t.h||o.zoomFit(),o.repaintImage(),o.fire(\"load\")})},zoom:function(t){return arguments.length?(this.state.set(\"zoom\",t),this):this.state.get(\"zoom\")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var t,e,n,r,o,i;t=this.$el.find(\"img\"),e=this.getEl().clientWidth,n=this.getEl().clientHeight,r=t[0].naturalWidth,o=t[0].naturalHeight,1<=(i=Math.min((e-10)/r,(n-10)/o))&&(i=1),this.zoom(i)},repaintImage:function(){var t,e,n,r,o,i,a,c,u,l,f;f=this.getEl(),u=this.zoom(),l=this.state.get(\"rect\"),a=this.$el.find(\"img\"),c=this.$el.find(\".mce-imagepanel-bg\"),o=f.offsetWidth,i=f.offsetHeight,n=a[0].naturalWidth*u,r=a[0].naturalHeight*u,t=Math.max(0,o/2-n/2),e=Math.max(0,i/2-r/2),a.css({left:t,top:e,width:n,height:r}),c.css({left:t,top:e,width:n,height:r}),this.cropRect&&(this.cropRect.setRect({x:l.x*u+t,y:l.y*u+e,w:l.w*u,h:l.h*u}),this.cropRect.setClampRect({x:t,y:e,w:n,h:r}),this.cropRect.setViewPortRect({x:0,y:0,w:o,h:i}))},bindStates:function(){var r=this;function n(t){r.cropRect=function(l,n,f,r,o){var s,a,t,i,e=\"mce-\",c=e+\"crid-\"+Bt++;function d(t,e){return{x:e.x-t.x,y:e.y-t.y,w:e.w,h:e.h}}function u(t,e,n,r){var o,i,a,c,u;o=e.x,i=e.y,a=e.w,c=e.h,o+=n*t.deltaX,i+=r*t.deltaY,(a+=n*t.deltaW)<20&&(a=20),(c+=r*t.deltaH)<20&&(c=20),u=l=Ot.clamp({x:o,y:i,w:a,h:c},f,\"move\"===t.name),u=d(f,u),s.fire(\"updateRect\",{rect:u}),m(u)}function h(e){function t(t,e){e.h<0&&(e.h=0),e.w<0&&(e.w=0),jt(\"#\"+c+\"-\"+t,r).css({left:e.x,top:e.y,width:e.w,height:e.h})}G.each(a,function(t){jt(\"#\"+c+\"-\"+t.name,r).css({left:e.w*t.xMul+e.x,top:e.h*t.yMul+e.y})}),t(\"top\",{x:n.x,y:n.y,w:n.w,h:e.y-n.y}),t(\"right\",{x:e.x+e.w,y:e.y,w:n.w-e.x-e.w+n.x,h:e.h}),t(\"bottom\",{x:n.x,y:e.y+e.h,w:n.w,h:n.h-e.y-e.h+n.y}),t(\"left\",{x:n.x,y:e.y,w:e.x-n.x,h:e.h}),t(\"move\",e)}function p(t){h(l=t)}function m(t){var e,n;p((e=f,{x:(n=t).x+e.x,y:n.y+e.y,w:n.w,h:n.h}))}return a=[{name:\"move\",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:\"Crop Mask\"},{name:\"nw\",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:\"Top Left Crop Handle\"},{name:\"ne\",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:\"Top Right Crop Handle\"},{name:\"sw\",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:\"Bottom Left Crop Handle\"},{name:\"se\",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:\"Bottom Right Crop Handle\"}],i=[\"top\",\"right\",\"bottom\",\"left\"],jt('<div id=\"'+c+'\" class=\"'+e+'croprect-container\" role=\"grid\" aria-dropeffect=\"execute\">').appendTo(r),G.each(i,function(t){jt(\"#\"+c,r).append('<div id=\"'+c+\"-\"+t+'\"class=\"'+e+'croprect-block\" style=\"display: none\" data-mce-bogus=\"all\">')}),G.each(a,function(t){jt(\"#\"+c,r).append('<div id=\"'+c+\"-\"+t.name+'\" class=\"'+e+\"croprect-handle \"+e+\"croprect-handle-\"+t.name+'\"style=\"display: none\" data-mce-bogus=\"all\" role=\"gridcell\" tabindex=\"-1\" aria-label=\"'+t.label+'\" aria-grabbed=\"false\">')}),t=G.map(a,function(e){var n;return new(Et.get(\"DragHelper\"))(c,{document:r.ownerDocument,handle:c+\"-\"+e.name,start:function(){n=l},drag:function(t){u(e,n,t.deltaX,t.deltaY)}})}),h(l),jt(r).on(\"focusin focusout\",function(t){jt(t.target).attr(\"aria-grabbed\",\"focus\"===t.type)}),jt(r).on(\"keydown\",function(e){var i;function t(t,e,n,r,o){t.stopPropagation(),t.preventDefault(),u(i,n,r,o)}switch(G.each(a,function(t){if(e.target.id===c+\"-\"+t.name)return i=t,!1}),e.keyCode){case Lt.LEFT:t(e,0,l,-10,0);break;case Lt.RIGHT:t(e,0,l,10,0);break;case Lt.UP:t(e,0,l,0,-10);break;case Lt.DOWN:t(e,0,l,0,10);break;case Lt.ENTER:case Lt.SPACEBAR:e.preventDefault(),o()}}),s=G.extend({toggleVisibility:function(t){var e;e=G.map(a,function(t){return\"#\"+c+\"-\"+t.name}).concat(G.map(i,function(t){return\"#\"+c+\"-\"+t})).join(\",\"),t?jt(e,r).show():jt(e,r).hide()},setClampRect:function(t){f=t,h(l)},setRect:p,getInnerRect:function(){return d(f,l)},setInnerRect:m,setViewPortRect:function(t){n=t,h(l)},destroy:function(){G.each(t,function(t){t.destroy()}),t=[]}},zt)}(t,r.state.get(\"viewRect\"),r.state.get(\"viewRect\"),r.getEl(),function(){r.fire(\"crop\")}),r.cropRect.on(\"updateRect\",function(t){var e=t.rect,n=r.zoom();e={x:Math.round(e.x/n),y:Math.round(e.y/n),w:Math.round(e.w/n),h:Math.round(e.h/n)},r.state.set(\"rect\",e)}),r.on(\"remove\",r.cropRect.destroy)}r.state.on(\"change:cropEnabled\",function(t){r.cropRect.toggleVisibility(t.value),r.repaintImage()}),r.state.on(\"change:zoom\",function(){r.repaintImage()}),r.state.on(\"change:rect\",function(t){var e=t.value;r.cropRect||n(e),r.cropRect.setRect(e)})}}))(t)}};function Pt(t){return{blob:t,url:Mt.createObjectURL(t)}}function Ht(t){t&&Mt.revokeObjectURL(t.url)}function Dt(t){G.each(t,Ht)}function Ft(i,a,t,e){var c,n,r,u,o,l,f,s,d,h,p,m,g,v,y,w,b,x,k,R,I,M,T,U,C,A,E,O=function(){var n=[],r=-1;function t(){return 0<r}function e(){return-1!==r&&r<n.length-1}return{data:n,add:function(t){var e;return e=n.splice(++r),n.push(t),{state:t,removed:e}},undo:function(){if(t())return n[--r]},redo:function(){if(e())return n[++r]},canUndo:t,canRedo:e}}(),_=function(t){return i.rtl?t.reverse():t};function j(t){var e,n,r,o;e=c.find(\"#w\")[0],n=c.find(\"#h\")[0],r=parseInt(e.value(),10),o=parseInt(n.value(),10),c.find(\"#constrain\")[0].checked()&&U&&C&&r&&o&&(\"w\"===t.control.settings.name?(o=Math.round(r*A),n.value(o)):(r=Math.round(o*E),e.value(r))),U=r,C=o}function z(t){return Math.round(100*t)+\"%\"}function L(){c.find(\"#undo\").disabled(!O.canUndo()),c.find(\"#redo\").disabled(!O.canRedo()),c.statusbar.find(\"#save\").disabled(!O.canUndo())}function B(){c.find(\"#undo\").disabled(!0),c.find(\"#redo\").disabled(!0)}function S(t){t&&s.imageSrc(t.url)}function P(e){return function(){var t=G.grep(T,function(t){return t.settings.name!==e});G.each(t,function(t){t.hide()}),e.show(),e.focus()}}function H(t){S(u=Pt(t))}function D(t){S(a=Pt(t)),Dt(O.add(a).removed),L()}function F(){var e=s.selection();bt(a.blob).then(function(t){vt(t,e.x,e.y,e.w,e.h).then($).then(function(t){D(t),W()})})}var V=function(e){var n=[].slice.call(arguments,1);return function(){bt((u||a).blob).then(function(t){e.apply(this,[t].concat(n)).then($).then(H)})}};function W(){S(a),Ht(u),P(n)(),L()}function N(){u?(D(u.blob),W()):function t(e,n){u?n():setTimeout(function(){0<e--?t(e,n):i.windowManager.alert(\"Error: failed to apply image operation.\")},10)}(100,N)}function q(t){return Et.create(\"Form\",{layout:\"flex\",direction:\"row\",labelGap:5,border:\"0 0 1 0\",align:\"center\",pack:\"center\",padding:\"0 10 0 10\",spacing:5,flex:0,minHeight:60,defaults:{classes:\"imagetool\",type:\"button\"},items:t})}var $=function(t){return t.toBlob()};function X(t,e){return q(_([{text:\"Back\",onclick:W},{type:\"spacer\",flex:1},{text:\"Apply\",subtype:\"primary\",onclick:N}])).hide().on(\"show\",function(){B(),bt(a.blob).then(function(t){return e(t)}).then($).then(function(t){var e=Pt(t);S(e),Ht(u),u=e})})}function Y(t,n,e,r,o){return q(_([{text:\"Back\",onclick:W},{type:\"spacer\",flex:1},{type:\"slider\",flex:1,ondragend:function(t){var e;e=t.value,bt(a.blob).then(function(t){return n(t,e)}).then($).then(function(t){var e=Pt(t);S(e),Ht(u),u=e})},minValue:i.rtl?o:r,maxValue:i.rtl?r:o,value:e,previewFilter:z},{type:\"spacer\",flex:1},{text:\"Apply\",subtype:\"primary\",onclick:N}])).hide().on(\"show\",function(){this.find(\"slider\").value(e),B()})}o=q(_([{text:\"Back\",onclick:W},{type:\"spacer\",flex:1},{text:\"Apply\",subtype:\"primary\",onclick:F}])).hide().on(\"show hide\",function(t){s.toggleCropRect(\"show\"===t.type)}).on(\"show\",B),l=q(_([{text:\"Back\",onclick:W},{type:\"spacer\",flex:1},{type:\"textbox\",name:\"w\",label:\"Width\",size:4,onkeyup:j},{type:\"textbox\",name:\"h\",label:\"Height\",size:4,onkeyup:j},{type:\"checkbox\",name:\"constrain\",text:\"Constrain proportions\",checked:!0,onchange:function(t){!0===t.control.value()&&(A=C/U,E=U/C)}},{type:\"spacer\",flex:1},{text:\"Apply\",subtype:\"primary\",onclick:\"submit\"}])).hide().on(\"submit\",function(t){var e=parseInt(c.find(\"#w\").value(),10),n=parseInt(c.find(\"#h\").value(),10);t.preventDefault(),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=[].slice.call(arguments,1);return function(){bt(a.blob).then(function(t){e.apply(this,[t].concat(r)).then($).then(D)})}}(yt,e,n)(),W()}).on(\"show\",B),f=q(_([{text:\"Back\",onclick:W},{type:\"spacer\",flex:1},{icon:\"fliph\",tooltip:\"Flip horizontally\",onclick:V(gt,\"h\")},{icon:\"flipv\",tooltip:\"Flip vertically\",onclick:V(gt,\"v\")},{icon:\"rotateleft\",tooltip:\"Rotate counterclockwise\",onclick:V(wt,-90)},{icon:\"rotateright\",tooltip:\"Rotate clockwise\",onclick:V(wt,90)},{type:\"spacer\",flex:1},{text:\"Apply\",subtype:\"primary\",onclick:N}])).hide().on(\"show\",B),p=X(0,ot),k=X(0,it),R=X(0,at),m=Y(0,ft,0,-1,1),g=Y(0,st,180,0,360),v=Y(0,dt,0,-1,1),y=Y(0,ht,0,-1,1),w=Y(0,pt,0,0,1),b=Y(0,mt,0,0,1),x=function(t,o){function e(){var e,n,r;e=c.find(\"#r\")[0].value(),n=c.find(\"#g\")[0].value(),r=c.find(\"#b\")[0].value(),bt(a.blob).then(function(t){return o(t,e,n,r)}).then($).then(function(t){var e=Pt(t);S(e),Ht(u),u=e})}var n=i.rtl?2:0,r=i.rtl?0:2;return q(_([{text:\"Back\",onclick:W},{type:\"spacer\",flex:1},{type:\"slider\",label:\"R\",name:\"r\",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:z},{type:\"slider\",label:\"G\",name:\"g\",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:z},{type:\"slider\",label:\"B\",name:\"b\",minValue:n,value:1,maxValue:r,ondragend:e,previewFilter:z},{type:\"spacer\",flex:1},{text:\"Apply\",subtype:\"primary\",onclick:N}])).hide().on(\"show\",function(){c.find(\"#r,#g,#b\").value(1),B()})}(0,lt),I=Y(0,ct,0,-1,1),M=Y(0,ut,1,0,2),r=q(_([{text:\"Back\",onclick:W},{type:\"spacer\",flex:1},{text:\"hue\",icon:\"hue\",onclick:P(g)},{text:\"saturate\",icon:\"saturate\",onclick:P(v)},{text:\"sepia\",icon:\"sepia\",onclick:P(b)},{text:\"emboss\",icon:\"emboss\",onclick:P(R)},{text:\"exposure\",icon:\"exposure\",onclick:P(M)},{type:\"spacer\",flex:1}])).hide(),n=q(_([{tooltip:\"Crop\",icon:\"crop\",onclick:P(o)},{tooltip:\"Resize\",icon:\"resize2\",onclick:P(l)},{tooltip:\"Orientation\",icon:\"orientation\",onclick:P(f)},{tooltip:\"Brightness\",icon:\"sun\",onclick:P(m)},{tooltip:\"Sharpen\",icon:\"sharpen\",onclick:P(k)},{tooltip:\"Contrast\",icon:\"contrast\",onclick:P(y)},{tooltip:\"Color levels\",icon:\"drop\",onclick:P(x)},{tooltip:\"Gamma\",icon:\"gamma\",onclick:P(I)},{tooltip:\"Invert\",icon:\"invert\",onclick:P(p)}])),s=St.create({flex:1,imageSrc:a.url}),d=Et.create(\"Container\",{layout:\"flex\",direction:\"column\",pack:\"start\",border:\"0 1 0 0\",padding:5,spacing:5,items:[{type:\"button\",icon:\"undo\",tooltip:\"Undo\",name:\"undo\",onclick:function(){S(a=O.undo()),L()}},{type:\"button\",icon:\"redo\",tooltip:\"Redo\",name:\"redo\",onclick:function(){S(a=O.redo()),L()}},{type:\"button\",icon:\"zoomin\",tooltip:\"Zoom in\",onclick:function(){var t=s.zoom();t<2&&(t+=.1),s.zoom(t)}},{type:\"button\",icon:\"zoomout\",tooltip:\"Zoom out\",onclick:function(){var t=s.zoom();.1<t&&(t-=.1),s.zoom(t)}}]}),h=Et.create(\"Container\",{type:\"container\",layout:\"flex\",direction:\"row\",align:\"stretch\",flex:1,items:_([d,s])}),T=[n,o,l,f,r,p,m,g,v,y,w,b,x,k,R,I,M],(c=i.windowManager.open({layout:\"flex\",direction:\"column\",align:\"stretch\",minWidth:Math.min(At.DOM.getViewPort().w,800),minHeight:Math.min(At.DOM.getViewPort().h,650),title:\"Edit image\",items:T.concat([h]),buttons:_([{text:\"Save\",name:\"save\",subtype:\"primary\",onclick:function(){t(a.blob),c.close()}},{text:\"Cancel\",onclick:\"close\"}])})).on(\"close\",function(){e(),Dt(O.data),u=O=null}),O.add(a),L(),s.on(\"load\",function(){U=s.imageSize().w,C=s.imageSize().h,A=C/U,E=U/C,c.find(\"#w\").value(U),c.find(\"#h\").value(C)}),s.on(\"crop\",F)}var Vt,Wt={edit:function(r,t){return new Ut(function(e,n){return t.toBlob().then(function(t){Ft(r,Pt(t),e,n)})})}},Nt={getImageSize:function(t){var e,n;function r(t){return/^[0-9\\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?r(e)&&r(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)},setImageSize:function(t,e){var n,r;e&&(n=t.style.width,r=t.style.height,(n||r)&&(t.style.width=e.w+\"px\",t.style.height=e.h+\"px\",t.removeAttribute(\"data-mce-style\")),n=t.width,r=t.height,(n||r)&&(t.setAttribute(\"width\",e.w),t.setAttribute(\"height\",e.h)))},getNaturalImageSize:function(t){return{w:t.naturalWidth,h:t.naturalHeight}}},qt=(Vt=\"function\",function(t){return function(t){if(null===t)return\"null\";var e=typeof t;return\"object\"===e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&\"Array\"===t.constructor.name)?\"array\":\"object\"===e&&(String.prototype.isPrototypeOf(t)||t.constructor&&\"String\"===t.constructor.name)?\"string\":e}(t)===Vt}),$t=(Array.prototype.slice,function(t,e){for(var n=0,r=t.length;n<r;n++){var o=t[n];if(e(o,n))return g.some(o)}return g.none()});qt(Array.from)&&Array.from;var Xt=function(t){return null!==t&&t!==undefined},Yt=function(t,e){var n;return n=e.reduce(function(t,e){return Xt(t)?t[e]:undefined},t),Xt(n)?n:null},Gt=function(e){return new Ut(function(n){var t=new(Rt(\"FileReader\"));t.onload=function(t){var e=t.target;n(e.result)},t.readAsText(e)})},Kt=function(e,r,o){return new Ut(function(t){var n;(n=new(Rt(\"XMLHttpRequest\"))).onreadystatechange=function(){4===n.readyState&&t({status:n.status,blob:this.response})},n.open(\"GET\",e,!0),n.withCredentials=o,G.each(r,function(t,e){n.setRequestHeader(e,t)}),n.responseType=\"blob\",n.send()})},Jt=function(t){var e;try{e=JSON.parse(t)}catch(n){}return e},Zt=[{code:404,message:\"Could not find Image Proxy\"},{code:403,message:\"Rejected request\"},{code:0,message:\"Incorrect Image Proxy URL\"}],Qt=[{type:\"key_missing\",message:\"The request did not include an api key.\"},{type:\"key_not_found\",message:\"The provided api key could not be found.\"},{type:\"domain_not_trusted\",message:\"The api key is not valid for the request origins.\"}],te=function(e){return\"ImageProxy HTTP error: \"+$t(Zt,function(t){return e===t.code}).fold(i(\"Unknown ImageProxy error\"),function(t){return t.message})},ee=function(t){var e=te(t);return Ut.reject(e)},ne=function(e){return $t(Qt,function(t){return t.type===e}).fold(i(\"Unknown service error\"),function(t){return t.message})},re=function(t,e){return Gt(e).then(function(t){var e,n,r=(e=Jt(t),\"ImageProxy Service error: \"+((n=Yt(e,[\"error\",\"type\"]))?ne(n):\"Invalid JSON in service error message\"));return Ut.reject(r)})},oe=function(t,e){return 400===(n=t)||403===n||500===n?re(0,e):ee(t);var n},ie=ee,ae=function(t,e){var n,r,o,i={\"Content-Type\":\"application/json;charset=UTF-8\",\"tiny-api-key\":e};return Kt((n=t,r=e,o=-1===n.indexOf(\"?\")?\"?\":\"&\",/[?&]apiKey=/.test(n)||!r?n:n+o+\"apiKey=\"+encodeURIComponent(r)),i,!1).then(function(t){return t.status<200||300<=t.status?oe(t.status,t.blob):Ut.resolve(t.blob)})},ce=function(t,e,n){return e?ae(t,e):Kt(t,{},n).then(function(t){return t.status<200||300<=t.status?ie(t.status):Ut.resolve(t.blob)})},ue=0,le=function(t,e){t.notificationManager.open({text:e,type:\"error\"})},fe=function(t){return t.selection.getNode()},se=function(t,e){var n=e.src;return 0===n.indexOf(\"data:\")||0===n.indexOf(\"blob:\")||new Ct(n).host===t.documentBaseURI.host},de=function(t,e){return-1!==G.inArray(t.getParam(\"imagetools_cors_hosts\",[],\"string[]\"),new Ct(e.src).host)},he=function(t,e){var n,r,o,i,a=e.src;return de(t,e)?ce(e.src,null,(r=t,o=e,-1!==G.inArray(r.getParam(\"imagetools_credentials_hosts\",[],\"string[]\"),new Ct(o.src).host))):se(t,e)?R(e):(a=t.getParam(\"imagetools_proxy\"),a+=(-1===a.indexOf(\"?\")?\"?\":\"&\")+\"url=\"+encodeURIComponent(e.src),n=(i=t).getParam(\"api_key\",i.getParam(\"imagetools_api_key\",\"\",\"string\"),\"string\"),ce(a,n,!1))},pe=function(t){var e;return(e=t.editorUpload.blobCache.getByUri(fe(t).src))?Ut.resolve(e.blob()):he(t,fe(t))},me=function(t){clearTimeout(t.get())},ge=function(u,l,f,s,d){return l.toBlob().then(function(t){var e,n,r,o,i,a,c;return r=u.editorUpload.blobCache,e=(i=fe(u)).src,u.getParam(\"images_reuse_filename\",!1,\"boolean\")&&((o=r.getByUri(e))?(e=o.uri(),n=o.name()):(a=u,n=(c=e.match(/\\/([^\\/\\?]+)?\\.(?:jpeg|jpg|png|gif)(?:\\?|$)/i))?a.dom.encode(c[1]):null)),o=r.create({id:\"imagetools\"+ue++,blob:t,base64:l.toBase64(),uri:e,name:n}),r.add(o),u.undoManager.transact(function(){u.$(i).on(\"load\",function t(){var e,n,r;u.$(i).off(\"load\",t),u.nodeChanged(),f?u.editorUpload.uploadImagesAuto():(me(s),e=u,n=s,r=Tt.setEditorTimeout(e,function(){e.editorUpload.uploadImagesAuto()},e.getParam(\"images_upload_timeout\",3e4,\"number\")),n.set(r))}),d&&u.$(i).attr({width:d.w,height:d.h}),u.$(i).attr({src:o.blobUri()}).removeAttr(\"data-mce-src\")}),o})},ve=function(e,n,t,r){return function(){return e._scanForImages().then(a(pe,e)).then(bt).then(t).then(function(t){return ge(e,t,!1,n,r)},function(t){le(e,t)})}},ye=function(n,r,o){return function(){var t=Nt.getImageSize(fe(n)),e=t?{w:t.h,h:t.w}:null;return ve(n,r,function(t){return wt(t,o)},e)()}},we=function(t,e,n){return function(){return ve(t,e,function(t){return gt(t,n)})()}},be=function(e,r){return function(){var o=fe(e),i=Nt.getNaturalImageSize(o),n=function(r){return new Ut(function(n){var t;(t=r,I(t)).then(function(t){var e=Nt.getNaturalImageSize(t);i.w===e.w&&i.h===e.h||Nt.getImageSize(o)&&Nt.setImageSize(o,e),Mt.revokeObjectURL(t.src),n(r)})})};pe(e).then(bt).then(a(function(e,t){return Wt.edit(e,t).then(n).then(bt).then(function(t){return ge(e,t,!0,r)},function(){})},e),function(t){le(e,t)})}},xe=function(t,e){return t.dom.is(e,\"img:not([data-mce-object],[data-mce-placeholder])\")&&(se(t,e)||de(t,e)||t.settings.imagetools_proxy)},ke=me,Re=function(n,t){G.each({mceImageRotateLeft:ye(n,t,-90),mceImageRotateRight:ye(n,t,90),mceImageFlipVertical:we(n,t,\"v\"),mceImageFlipHorizontal:we(n,t,\"h\"),mceEditImage:be(n,t)},function(t,e){n.addCommand(e,t)})},Ie=function(n,r,o){n.on(\"NodeChange\",function(t){var e=o.get();e&&e.src!==t.element.src&&(ke(r),n.editorUpload.uploadImagesAuto(),o.set(null)),xe(n,t.element)&&o.set(t.element)})},Me=function(t){t.addButton(\"rotateleft\",{title:\"Rotate counterclockwise\",cmd:\"mceImageRotateLeft\"}),t.addButton(\"rotateright\",{title:\"Rotate clockwise\",cmd:\"mceImageRotateRight\"}),t.addButton(\"flipv\",{title:\"Flip vertically\",cmd:\"mceImageFlipVertical\"}),t.addButton(\"fliph\",{title:\"Flip horizontally\",cmd:\"mceImageFlipHorizontal\"}),t.addButton(\"editimage\",{title:\"Edit image\",cmd:\"mceEditImage\"}),t.addButton(\"imageoptions\",{title:\"Image options\",icon:\"options\",cmd:\"mceImage\"})},Te=function(t){t.addContextToolbar(a(xe,t),t.getParam(\"imagetools_toolbar\",\"rotateleft rotateright | flipv fliph | crop editimage imageoptions\"))};t.add(\"imagetools\",function(t){var e=r(0),n=r(null);Re(t,e),Me(t),Te(t),Ie(t,e,n)})}(window);"}
}});
