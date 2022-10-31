"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[206],{4206:function(e,t,n){n.d(t,{Z:function(){return O}});var i=n(1438),r=n(8029),o=n(5950),a=n(5893),s=n(7294),l=n(965);function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v.apply(this,arguments)}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){h(e,t,n[t])}))}return e}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?w(e):t}var _={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},k={empty:y({},_,{backgroundColor:"#ccc"}),full:y({},_,{backgroundColor:"black"}),placeholder:y({},_,{backgroundColor:"red"})},x=function(e){return s.isValidElement(e)?e:"object"===c(e)&&null!==e?s.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?s.createElement("span",{className:e}):void 0},C=function(e){function t(){return u(this,t),g(this,b(t).apply(this,arguments))}return f(t,e),d(t,[{key:"render",value:function(){var e,t=this.props,n=t.index,i=t.inactiveIcon,r=t.activeIcon,o=t.percent,a=t.direction,l=t.readonly,c=t.onClick,u=t.onMouseMove,p=x(i),d=o<100?{}:{visibility:"hidden"},v=x(r),y=(h(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===a?"right":"left",0),h(e,"width","".concat(o,"%")),e),f={cursor:l?"inherit":"pointer",display:"inline-block",position:"relative"};function b(e){u&&u(n,e)}function m(e){c&&(e.preventDefault(),c(n,e))}return s.createElement("span",{style:f,onClick:m,onMouseMove:b,onTouchMove:b,onTouchEnd:m},s.createElement("span",{style:d},p),s.createElement("span",{style:y},v))}}]),t}(s.PureComponent),j=function(e){function t(e){var n;return u(this,t),(n=g(this,b(t).call(this,e))).state={displayValue:n.props.value,interacting:!1},n.onMouseLeave=n.onMouseLeave.bind(w(w(n))),n.symbolMouseMove=n.symbolMouseMove.bind(w(w(n))),n.symbolClick=n.symbolClick.bind(w(w(n))),n}return f(t,e),d(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(n){return{displayValue:t?e.value:n.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.props.onClick(n,t)}},{key:"symbolMouseMove",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:n})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var n=this.calculateHoverPercentage(t),i=Math.ceil(n%1*this.props.fractions)/this.props.fractions,r=Math.pow(10,3),o=e+(Math.floor(n)+Math.floor(i*r)/r);return o>0?o>this.props.totalSymbols?this.props.totalSymbols:o:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,n=e.target.getBoundingClientRect(),i="rtl"===this.props.direction?n.right-t:t-n.left;return i<0?0:i/n.width}},{key:"render",value:function(){var e,t=this.props,n=t.readonly,i=t.quiet,r=t.totalSymbols,o=t.value,a=t.placeholderValue,l=t.direction,c=t.emptySymbol,u=t.fullSymbol,p=t.placeholderSymbol,d=t.className,h=t.id,f=t.style,b=t.tabIndex,m=this.state,w=m.displayValue,g=m.interacting,_=[],k=[].concat(c),x=[].concat(u),j=[].concat(p),S=0!==a&&0===o&&!g;e=S?a:i?o:w;for(var M=Math.floor(e),V=0;V<r;V++){var N=void 0;N=V-M<0?100:V-M===0?100*(e-V):0,_.push(s.createElement(C,v({key:V,index:V,readonly:n,inactiveIcon:k[V%k.length],activeIcon:S?j[V%x.length]:x[V%x.length],percent:N,direction:l},!n&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return s.createElement("span",v({id:h,style:y({},f,{display:"inline-block",direction:l}),className:d,tabIndex:b,"aria-label":this.props["aria-label"]},!n&&{onMouseLeave:this.onMouseLeave}),_)}}]),t}(s.PureComponent);function S(){}S._name="react_rating_noop";var M=function(e){function t(e){var n;return u(this,t),(n=g(this,b(t).call(this,e))).state={value:e.initialRating},n.handleClick=n.handleClick.bind(w(w(n))),n.handleHover=n.handleHover.bind(w(w(n))),n}return f(t,e),d(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var n=this,i=this.translateDisplayValueToValue(e);this.props.onClick(i),this.state.value!==i&&this.setState({value:i},(function(){return n.props.onChange(n.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.emptySymbol,i=e.fullSymbol,r=e.placeholderSymbol,o=e.readonly,a=e.quiet,l=e.fractions,c=e.direction,u=e.start,p=e.stop,d=e.id,h=e.className,v=e.style,y=e.tabIndex;return s.createElement(j,{id:d,style:v,className:h,tabIndex:y,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,n){return Math.floor((t-e)/n)}(u,p,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:o,quiet:a,fractions:l,direction:c,emptySymbol:n,fullSymbol:i,placeholderSymbol:r,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(s.PureComponent);M.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:S,onClick:S,onChange:S,emptySymbol:k.empty,fullSymbol:k.full,placeholderSymbol:k.placeholder};var V=M,N=function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}var s=n.prototype;return s.componentDidMount=function(){return new l.ZP(".reviews-swiper",{modules:[l.W_,l.pt],observer:!0,observeParents:!0,slidesPerView:2.7,spaceBetween:20,autoHeight:!1,speed:800,effect:"fade",autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{prevEl:".reviews-swiper .swiper-button-prev",nextEl:".reviews-swiper .swiper-button-next"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},770:{slidesPerView:2,spaceBetween:20},992:{slidesPerView:2.4,spaceBetween:20},1920:{slidesPerView:2.7,spaceBetween:20}},on:{}})},s.render=function(){return(0,a.jsx)("section",{className:"page__reviews reviews",children:(0,a.jsx)("div",{className:"reviews__container",children:(0,a.jsxs)("div",{className:"reviews__box",children:[(0,a.jsx)("div",{className:"reviews__header",children:(0,a.jsx)("h2",{className:"reviews__title section-title",children:"\u041d\u0430\u0448\u0438 \u043e\u0442\u0437\u044b\u0432\u044b"})}),(0,a.jsxs)("div",{className:"reviews__slider reviews-swiper",children:[(0,a.jsx)("div",{className:"reviews__wrapper swiper-wrapper",children:this.props.reviews.map((function(e){return(0,a.jsx)("div",{className:"reviews__slide swiper-slide",children:(0,a.jsxs)("div",{className:"reviews__card reviews-card",children:[(0,a.jsx)("div",{className:"reviews-card__header",children:(0,a.jsxs)("div",{className:"reviews-card__info-box",children:[(0,a.jsx)("div",{className:"reviews-card__info-name",children:e.name}),(0,a.jsx)("div",{className:"reviews-card__info-date",children:e.date})]})}),(0,a.jsxs)("div",{className:"reviews-card__rating",children:[(0,a.jsxs)("div",{className:"reviews-card__rating-value",children:[e.ratings,"/5"]}),(0,a.jsx)(V,{initialRating:e.ratings,readonly:!0,emptySymbol:"rating-item",fullSymbol:"rating-item-fill"})]}),(0,a.jsx)("div",{className:"reviews-card__text",children:(0,a.jsx)("p",{children:e.text_review})})]})})}))}),(0,a.jsxs)("div",{className:"reviews__slider-buttons swiper-buttons",children:[(0,a.jsx)("button",{className:"swiper-button-prev",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,a.jsx)("path",{d:"M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z",fill:"none"})})}),(0,a.jsx)("button",{className:"swiper-button-next",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,a.jsx)("path",{d:"M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z",fill:"none"})})})]})]})]})})})},n}(s.Component),O=N}}]);