!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react/jsx-runtime"),require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react/jsx-runtime","react","styled-components"],r):"object"==typeof exports?exports.reactSidebarLayout=r(require("react/jsx-runtime"),require("react"),require("styled-components")):e.reactSidebarLayout=r(e["react/jsx-runtime"],e.react,e["styled-components"])}(global,(function(e,r,n){return(()=>{"use strict";var t={424:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(15),i=n.n(t),o=n(645),a=n.n(o)()(i());a.push([e.id,'.sidebar-layout {\n  position: relative;\n  display: grid;\n  grid-template-areas: "sidebar primary-view secondary-view";\n  width: 100%;\n  height: 100%;\n}\n\n.resizer {\n  position: absolute;\n  height: 100%;\n  z-index: 1000;\n  user-select: none;\n  cursor: col-resize;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n\n.primary-view {\n  grid-area: primary-view;\n}\n\n.secondary-view {\n  grid-area: secondary-view;\n}\n',"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,0DAA0D;EAC1D,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:['.sidebar-layout {\n  position: relative;\n  display: grid;\n  grid-template-areas: "sidebar primary-view secondary-view";\n  width: 100%;\n  height: 100%;\n}\n\n.resizer {\n  position: absolute;\n  height: 100%;\n  z-index: 1000;\n  user-select: none;\n  cursor: col-resize;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n\n.primary-view {\n  grid-area: primary-view;\n}\n\n.secondary-view {\n  grid-area: secondary-view;\n}\n'],sourceRoot:""}]);const c=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);t&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),r.push(s))}},r}},15:e=>{function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}e.exports=function(e){var n,t,i=(t=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(n,t)||function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if(!a)return o;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),d=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(d).concat([u]).join("\n")}return[o].join("\n")}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],u=t.base?s[0]+t.base:s[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var f=n(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(r[f].references++,r[f].updater(p)):r.push({identifier:l,updater:i(p,t),references:1}),a.push(l)}return a}function i(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n.update(e=r)}else n.remove()}}e.exports=function(e,i){var o=t(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);r[c].references--}for(var s=t(e,i),u=0;u<o.length;u++){var d=n(o[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t=n.css,i=n.media,o=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,e)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},297:e=>{e.exports=r},282:r=>{r.exports=e},914:e=>{e.exports=n}},i={};function o(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={id:e,exports:{}};return t[e](n,n.exports,o),n.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{o.r(a),o.d(a,{PrimaryView:()=>k,Resizer:()=>j,SecondaryView:()=>B,Sidebar:()=>S,SidebarLayout:()=>P});var e=o(282),r=o(297),n=o(914),t=o.n(n),i=o(379),c=o.n(i),s=o(795),u=o.n(s),d=o(569),l=o.n(d),f=o(565),p=o.n(f),v=o(216),m=o.n(v),h=o(589),y=o.n(h),A=o(424),b={};b.styleTagTransform=y(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=m(),c()(A.Z,b),A.Z&&A.Z.locals&&A.Z.locals;var g,x,w=function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e},C=function(){return(C=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)},E=t().div(g||(g=w(["\n  background-color: ",";\n  width: ","px;\n  left: ",";\n  right: ",";\n  transition: background-color ","ms;\n  &:hover {\n    background-color: ",";\n  }\n"],["\n  background-color: ",";\n  width: ","px;\n  left: ",";\n  right: ",";\n  transition: background-color ","ms;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.color||"transparent"}),(function(e){return e.width}),(function(e){return e.left+"px"||0}),(function(e){return e.right+"px"||0}),(function(e){return e.transitionDuration||"300"}),(function(e){return e.hoveredColor||"#1e90ff"})),j=function(n){var t=n.color,i=n.hoveredColor,o=n.transitionDuration,a=n.width,c=void 0===a?4:a,s=n.position,u=n.initialPos,d=n.setWidth,l=(0,r.useRef)(null),f=(0,r.useState)(!1),p=f[0],v=f[1],m=(0,r.useState)(u),h=m[0],y=m[1],A=(0,r.useCallback)((function(){v(!0)}),[]),b=(0,r.useCallback)((function(){v(!1)}),[]),g=(0,r.useCallback)((function(e){if(p){var r=0;y((function(n){var t=e.movementX*("right"===s?-1:1);return r=n+t})),d(r)}}),[s,p,d]),x=(0,r.useCallback)((function(e){e.addEventListener("pointerdown",A),e.addEventListener("pointerup",b),document.addEventListener("pointermove",g)}),[A,b,g]),w=(0,r.useCallback)((function(e){e.removeEventListener("pointerdown",A),e.removeEventListener("pointerup",b),document.removeEventListener("pointermove",g)}),[A,b,g]),C=(0,r.useCallback)((function(e){if((l.current||e)&&l.current!==e){if(l.current&&!e)return w(l.current),void(l.current=null);l.current&&e&&w(l.current),x(e),l.current=e}}),[x,w]);return(0,e.jsx)(E,{ref:C,className:"resizer",color:t,hoveredColor:i,transitionDuration:o,width:c,left:"left"===s?h-c/2:void 0,right:"right"===s?h-c/2:void 0},void 0)},S=function(r){var n=r.children;return(0,e.jsx)(L,C({className:"sidebar"},{children:n}),void 0)},k=function(r){var n=r.children;return(0,e.jsx)(L,C({className:"primary-view"},{children:n}),void 0)},B=function(r){var n=r.children;return(0,e.jsx)(L,C({className:"secondary-view"},{children:n}),void 0)},L=function(r){var n=r.children,t=r.className;return(0,e.jsx)("div",C({className:t},{children:n}),void 0)},O=t().div(x||(x=w(["\n  grid-template-columns: ","px 1fr ","px;\n"],["\n  grid-template-columns: ","px 1fr ","px;\n"])),(function(e){return e.sidebarWidth}),(function(e){return e.secondaryViewWidth})),P=function(n){var t=n.defaultSidebarWidth,i=void 0===t?150:t,o=n.defaultSecondaryViewWidth,a=void 0===o?150:o,c=n.children,s=(0,r.useState)(i),u=s[0],d=s[1],l=(0,r.useState)(a),f=l[0],p=l[1];return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(O,C({className:"sidebar-layout",sidebarWidth:u,secondaryViewWidth:f},{children:[(0,e.jsx)(j,{position:"left",initialPos:u,setWidth:d},void 0),(0,e.jsx)(j,{position:"right",initialPos:f,setWidth:p},void 0),c]}),void 0)},void 0)}})(),a})()}));
//# sourceMappingURL=index.js.map