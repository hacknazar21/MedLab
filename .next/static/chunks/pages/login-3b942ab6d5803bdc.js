(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(6218)}])},873:function(e,t,r){"use strict";var n=r(6042),s=r(9396),i=r(5893),u=r(7294);t.Z=function(e){var t=(0,u.useRef)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("input",(0,s.Z)((0,n.Z)({},e),{ref:t,onChange:function(t){if(t.target){var r=t.target,n=function(e){return null===e||void 0===e?void 0:e.value.replace(/\D/g,"")}(r),s=r.selectionStart,i="";if(!n)return r.value="";if(r.value.length!=s)return void(t.data&&/\D/g.test(t.data)&&(r.value=n));if(["7","8","9"].indexOf(n[0])>-1){"9"==n[0]&&(n="7"+n);var u="8"==n[0]?"8":"+7";i=r.value=u+" ",n.length>1&&(i+="("+n.substring(1,4)),n.length>=5&&(i+=") "+n.substring(4,7)),n.length>=8&&(i+="-"+n.substring(7,9)),n.length>=10&&(i+="-"+n.substring(9,11))}else i="+"+n.substring(0,16);r.value=i,e.changeHandler("phone_number",i)}}}))})}},4297:function(e,t,r){"use strict";r.d(t,{g:function(){return s}});var n=r(5893);r(7294);function s(){return(0,n.jsxs)("div",{className:"lds-roller",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})}},9649:function(e,t,r){"use strict";var n=r(7568),s=r(4051),i=r.n(s),u=r(7294);t.Z=function(){var e=(0,u.useState)(!1),t=e[0],r=e[1],s=(0,u.useState)(null),c=s[0],a=s[1],o=(0,u.useState)(null),l=o[0],f=o[1],h=(0,u.useState)(!1),d=h[0],p=h[1],m=(0,u.useCallback)(function(){var e=(0,n.Z)(i().mark((function e(t){var n,s,u,c,o,l,h=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:"GET",s=h.length>2&&void 0!==h[2]?h[2]:null,u=h.length>3&&void 0!==h[3]?h[3]:{},c=h.length>4&&void 0!==h[4]&&h[4],r(!0),e.prev=2,s&&!c&&(s=JSON.stringify(s)),e.next=6,fetch(t,{method:n,body:s,headers:u});case 6:return o=e.sent,e.next=9,o.json();case 9:if(l=e.sent,o.ok){e.next=14;break}throw new Error(l.message||l||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:p(!0);case 15:return l.success&&f(l.success),r(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(2),r(!1),a(e.t0.message),e.t0;case 25:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:t,request:m,error:c,clearError:function(){return a(null)},success:l,clearSuccess:function(){return f(null)},isOk:d}}},5794:function(e,t,r){"use strict";r.d(t,{M:function(){return c}});var n=r(5893),s=r(7294),i=r(1664),u=r.n(i);function c(e){return(0,n.jsx)("section",{className:"sugar",children:(0,n.jsx)("div",{className:"sugar__container",children:(0,n.jsx)("div",{className:"sugar__items",children:e.sugar.map((function(e,t){return""!==e.href?(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)("div",{className:"sugar__item",children:(0,n.jsx)(u(),{href:e.href,children:(0,n.jsx)("a",{children:e.title})})}),(0,n.jsx)("span",{children:"/"})]},t):(0,n.jsx)("div",{className:"sugar__item",children:(0,n.jsx)(u(),{href:e.href,children:(0,n.jsx)("a",{children:e.title})})},t)}))})})})}},6218:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),s=r(49),i=r(9008),u=r.n(i),c=r(7568),a=r(6042),o=r(4051),l=r.n(o),f=r(7294),h=r(1664),d=r.n(h),p=r(873),m=r(9649),v=r(4297),j=r(9948),x=r(1163),_=function(e){var t=(0,m.Z)(),r=t.request,s=t.error,i=t.clearError,u=(t.clearSuccess,t.success,t.loading),o=(0,f.useContext)(j.V).login,h=(0,x.useRouter)(),_=(0,f.useState)({phone_number:"",password:""}),b=_[0],g=_[1],y=function(){var e=(0,c.Z)(l().mark((function e(t){var n,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=l().keys(b);case 1:if((e.t1=e.t0()).done){e.next=7;break}if(n=e.t1.value,""!==b[n]){e.next=5;break}return e.abrupt("return");case 5:e.next=1;break;case 7:return e.prev=7,e.next=10,r("/api/auth/login","POST",b,{"Content-Type":"application/json"});case 10:if(!(s=e.sent).token){e.next=15;break}return e.next=14,o(s.token,s.userId);case 14:h.push("/profile/personal");case 15:e.next=20;break;case 17:e.prev=17,e.t2=e.catch(7),setTimeout((function(){i()}),2e3);case 20:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t){return e.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[null!==s?(0,n.jsx)("div",{className:"bar error",children:s}):"",(0,n.jsx)("section",{className:"page__auth auth",children:(0,n.jsx)("div",{className:"auth__container",children:(0,n.jsx)("div",{className:"auth__form auth-form",children:(0,n.jsxs)("div",{className:"auth-form__wrapper",children:[(0,n.jsx)("h2",{className:"auth-form__title"}),(0,n.jsxs)("div",{className:"auth-form__inputs",children:[(0,n.jsxs)("div",{className:"auth-form__input-box",children:[(0,n.jsx)(p.Z,{changeHandler:function(e,t){g((function(r){return r[e]=t,(0,a.Z)({},r)}))},type:"text",id:"mobile",name:"mobile",className:"auth-form__input",placeholder:"+ 7 (___) ___ __ __"}),(0,n.jsx)("label",{htmlFor:"mobile",className:"auth-form__label",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"})]}),(0,n.jsxs)("div",{className:"auth-form__input-box",children:[(0,n.jsx)("input",{onChange:function(e){g((function(t){return t[e.target.name]=e.target.value,(0,a.Z)({},t)}))},type:"password",id:"password",name:"password",className:"auth-form__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,n.jsx)("label",{htmlFor:"password",className:"auth-form__label",children:" \u041f\u0430\u0440\u043e\u043b\u044c "})]}),(0,n.jsxs)("div",{className:"auth-form__submit-box",children:[(0,n.jsxs)("button",{onClick:y,type:"submit",className:"auth-form__submit",children:["\u041b\u043e\u0433\u0438\u043d",u?(0,n.jsx)(v.g,{}):""]}),(0,n.jsx)(d(),{href:"/registration",children:(0,n.jsx)("a",{className:"auth-form__link",children:"\u0423 \u043c\u0435\u043d\u044f \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})})]})]})]})})})})]})},b=r(5794);function g(e){e.news,e.reviews,e.analysis;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"\u041b\u043e\u0433\u0438\u043d"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{className:"wrapper another",children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(b.M,{sugar:[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",href:"/"},{title:"\u041b\u043e\u0433\u0438\u043d",href:""}]}),(0,n.jsx)("main",{className:"page",children:(0,n.jsx)(_,{})})]})})]})}},9008:function(e,t,r){e.exports=r(5443)},4111:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},1438:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:function(){return n}})},5950:function(e,t,r){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function s(e){return n(e)}r.d(t,{Z:function(){return a}});var i=r(4111),u=r(2222);function c(e,t){return!t||"object"!==(0,u.Z)(t)&&"function"!==typeof t?(0,i.Z)(e):t}function a(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var i=s(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return c(this,r)}}},8029:function(e,t,r){"use strict";function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,{Z:function(){return s}})},9396:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})},797:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return s}})},2222:function(e,t,r){"use strict";function n(e){return e&&e.constructor===Symbol?"symbol":typeof e}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[664,49,774,888,179],(function(){return t=3236,e(e.s=t);var t}));var t=e.O();_N_E=t}]);