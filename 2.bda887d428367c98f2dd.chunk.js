webpackJsonp([2,29],{664:function(e,n,t){"use strict";var r=t(7),o=r&&r.__esModule?function(){return r["default"]}:function(){return r};t.d(o,"a",o);var u=t(177),a=u&&u.__esModule?function(){return u["default"]}:function(){return u};t.d(a,"a",a);var i=t(110),l=i&&i.__esModule?function(){return i["default"]}:function(){return i};t.d(l,"a",l);var c=t(714),f=t(713),s=t(691),d=t(705),p=t(726);t.d(n,"Auth",function(){return m});var v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var u=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&u)for(var i in u)void 0===t[i]&&(t[i]=u[i]);else t||(t=u||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),m=function(e){if(!e.token.isAuthenticated)return h("div",{},void 0,o.a.createElement(p.a,v({},e.token,{onSubmit:e.handleLogin})),o.a.createElement(d.a,e.token.err));var n=e.me&&e.me.data?"user = "+e.me.data.lifekee:"no me";return h("div",{},void 0,n,h(s.a,{onClick:e.handleDelMe(e.token.data)},void 0,"Delete yourself"),o.a.createElement(s.a,v({},e,{onClick:e.handleLogout}),"Logout"),o.a.createElement(s.a,v({},e,{onClick:function(){return e.changeRoute("/app/set-password")}}),"Set new password"),o.a.createElement(s.a,v({},e,{onClick:function(){return e.changeRoute("/app/contacts")}}),"View contacts"),o.a.createElement(s.a,v({},e,{onClick:function(){return e.changeRoute("/app/contacts/create")}}),"Create new contact"),o.a.cloneElement(e.children,{token:e.token.data}))},y=function(){return t.i(c.a)()},b=function(e){return{dispatch:e,changeRoute:function(n){return e(t.i(i.push)(n))},handleLogin:function(n){return e(t.i(f.m)({data:n}))},handleLogout:function(){return e(t.i(f.j)())},handleDelMe:function(n){return function(){return e(t.i(f.n)({token:n}))}}}};n["default"]=t.i(u.connect)(y,b)(m)},689:function(e,n,t){"use strict";var r=function(e){return function(n,t,r){return{request:function(t){var r=t.token,o=t.data;return e({type:n,data:o,token:r})},success:function(n){return e({type:t,data:n})},failure:function(n){return e({type:r,err:n})}}}},o=function(e){return e},u=r(o),a=function(e,n){return u(e[n+"_REQUEST"],e[n+"_SUCCESS"],e[n+"_FAILURE"])};n.a=a},691:function(e,n,t){"use strict";function r(e){var n=e.className?e.className:e.disabled?i.a.buttonDisabled:i.a.button,t=l("a",{className:n,href:e.href,onClick:e.onClick,disabled:e.disabled},void 0,e.children);return e.handleRoute&&(t=l("button",{className:n,onClick:e.handleRoute,disabled:e.disabled},void 0,e.children)),"submit"===e.type&&(t=l("button",{className:n,type:e.type,disabled:e.disabled},void 0,e.children)),l("div",{className:i.a.buttonWrapper},void 0,t)}var o=t(7),u=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(u,"a",u);var a=t(697),i=a&&a.__esModule?function(){return a["default"]}:function(){return a};t.d(i,"a",i);var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var u=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&u)for(var i in u)void 0===t[i]&&(t[i]=u[i]);else t||(t=u||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}();n.a=r},695:function(e,n,t){n=e.exports=t(659)(),n.push([e.i,"._3h30cl1t6Rf163WKmLhAT3{margin:.25em 0}._3tez2OnhHZXdCwD81hRXzS,._3WSpu7uDMHfYy1EZchtPfI{display:inline-block;box-sizing:border-box;padding:.25em 2em;margin:0;border:0;text-decoration:none;border-radius:4px;-webkit-font-smoothing:antialiased;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;font-size:16px;color:#fff;border:2px solid #41addd;color:#41addd}._3WSpu7uDMHfYy1EZchtPfI{border:2px solid #888;color:#888;cursor:not-allowed}._3tez2OnhHZXdCwD81hRXzS:active{background:#41addd;color:#fff}",""]),n.locals={buttonWrapper:"_3h30cl1t6Rf163WKmLhAT3",button:"_3tez2OnhHZXdCwD81hRXzS",buttonDisabled:"_3WSpu7uDMHfYy1EZchtPfI"}},697:[754,695],699:function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var o=t(7),u=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(u,"a",u);var a=t(703),i=a&&a.__esModule?function(){return a["default"]}:function(){return a};t.d(i,"a",i);var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=function(e){var n=e.isRequesting,t=r(e,["isRequesting"]);return u.a.createElement("form",l({className:i.a.form},t),u.a.Children.map(t.children,function(e){return e?u.a.cloneElement(e,{disabled:n}):null}))};n.a=c},700:function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var o=t(7),u=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(u,"a",u);var a=t(704),i=a&&a.__esModule?function(){return a["default"]}:function(){return a};t.d(i,"a",i);var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var u=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&u)for(var i in u)void 0===t[i]&&(t[i]=u[i]);else t||(t=u||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),f=function(e){var n=e.label,t=r(e,["label"]);return c("div",{className:i.a.Input},void 0,n&&c("label",{htmlFor:n},void 0,n),u.a.createElement("input",l({id:n,type:"text"},t)))};n.a=f},701:function(e,n,t){n=e.exports=t(659)(),n.push([e.i,"._2CJdSNJEvD1UP0NDfBhBUh{display:inherit}",""]),n.locals={form:"_2CJdSNJEvD1UP0NDfBhBUh"}},702:function(e,n,t){n=e.exports=t(659)(),n.push([e.i,"._3zCGInbaDZ9oR1cYqZr2nT{background:inherit}",""]),n.locals={Input:"_3zCGInbaDZ9oR1cYqZr2nT"}},703:[754,701],704:[754,702],705:function(e,n,t){"use strict";var r=t(7),o=r&&r.__esModule?function(){return r["default"]}:function(){return r};t.d(o,"a",o);var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var u=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&u)for(var i in u)void 0===t[i]&&(t[i]=u[i]);else t||(t=u||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),a=u("div",{}),i=function(e){var n=e.status,t=e.message;return t?u("div",{},void 0,"error = ",n,": ",JSON.stringify(t)):a};i.propTypes={message:o.a.PropTypes.string,status:o.a.PropTypes.number},n.a=i},713:function(e,n,t){"use strict";var r=t(281),o=t(689);t.d(n,"m",function(){return a}),t.d(n,"d",function(){return i}),t.d(n,"f",function(){return l}),t.d(n,"a",function(){return f}),t.d(n,"b",function(){return s}),t.d(n,"c",function(){return d}),t.d(n,"l",function(){return p}),t.d(n,"j",function(){return v}),t.d(n,"e",function(){return m}),t.d(n,"g",function(){return y}),t.d(n,"h",function(){return b}),t.d(n,"n",function(){return g}),t.d(n,"i",function(){return k}),t.d(n,"k",function(){return S});var u=t.i(o.a)(r.a,"LOGIN"),a=u.request,i=u.success,l=u.failure,c=t.i(o.a)(r.a,"REFRESH"),f=c.request,s=c.success,d=c.failure,p=function(e){return{type:r.a.AUTO_LOGIN,data:e}},v=function(e){return{type:r.a.LOGOUT,token:e}},h=t.i(o.a)(r.a,"GET_ME"),m=h.request,y=h.success,b=h.failure,_=t.i(o.a)(r.a,"DEL_ME"),g=_.request,k=_.success,S=_.failure},714:function(e,n,t){"use strict";var r=t(277),o=r&&r.__esModule?function(){return r["default"]}:function(){return r};t.d(o,"a",o);var u=function(){return function(e){return e.get("auth")}},a=function(){return t.i(r.createSelector)(u(),function(e){return e.toJS()})};n.a=a},726:function(e,n,t){"use strict";var r=t(7),o=r&&r.__esModule?function(){return r["default"]}:function(){return r};t.d(o,"a",o);var u=t(280),a=u&&u.__esModule?function(){return u["default"]}:function(){return u};t.d(a,"a",a);var i=t(747),l=i&&i.__esModule?function(){return i["default"]}:function(){return i};t.d(l,"a",l);var c=t(691),f=t(699),s=t(700),d=t(705),p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var u=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&u)for(var i in u)void 0===t[i]&&(t[i]=u[i]);else t||(t=u||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),h=function(e){var n=e.fields,t=n.lifekee,r=n.password,u=e.handleSubmit,a=e.isRequesting;return v("div",{className:l.a.loginForm},void 0,v(f.a,{onSubmit:u,isRequesting:a},void 0,o.a.createElement(s.a,p({label:"User Name",type:"text",placeholder:"User Name"},t)),o.a.createElement(s.a,p({label:"Password",type:"password",placeholder:"Password"},r)),v(c.a,{type:"submit"},void 0,a?"...":"Submit")),o.a.createElement(d.a,e.err))},m=t.i(u.reduxForm)({form:"login",fields:["lifekee","password"],getFormState:function(e,n){return e.get(n).toJS()}})(h);n.a=m},743:function(e,n,t){n=e.exports=t(659)(),n.push([e.i,"._2PBjaI11eoMkTXRLdqRkld{background:inherit}",""]),n.locals={loginForm:"_2PBjaI11eoMkTXRLdqRkld"}},747:[754,743],754:function(e,n,t,r){var o=t(r);"string"==typeof o&&(o=[[e.i,o,""]]),t(660)(o,{}),o.locals&&(e.exports=o.locals)}});