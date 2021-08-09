/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var n={424:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(15),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,'.sidebar-layout {\n  position: relative;\n  display: grid;\n  grid-template-areas: "sidebar primary-view secondary-view";\n  width: 100%;\n  height: 100%;\n}\n\n.resizer {\n  position: absolute;\n  height: 100%;\n  z-index: 1000;\n  user-select: none;\n  cursor: col-resize;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n\n.primary-view {\n  grid-area: primary-view;\n}\n\n.secondary-view {\n  grid-area: secondary-view;\n}\n',"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,0DAA0D;EAC1D,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:['.sidebar-layout {\n  position: relative;\n  display: grid;\n  grid-template-areas: "sidebar primary-view secondary-view";\n  width: 100%;\n  height: 100%;\n}\n\n.resizer {\n  position: absolute;\n  height: 100%;\n  z-index: 1000;\n  user-select: none;\n  cursor: col-resize;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n\n.primary-view {\n  grid-area: primary-view;\n}\n\n.secondary-view {\n  grid-area: secondary-view;\n}\n'],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,o=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,a=[],i=!0,c=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},418:n=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function o(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}n.exports=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(n){return e[n]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(n){t[n]=n})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(n){return!1}}()?Object.assign:function(n,a){for(var i,c,s=o(n),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))r.call(i,l)&&(s[l]=i[l]);if(e){c=e(i);for(var f=0;f<c.length;f++)t.call(i,c[f])&&(s[c[f]]=i[c[f]])}}return s}},251:(n,e,r)=>{r(418);var t=r(297);if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;o("react.element"),o("react.fragment")}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Object.prototype.hasOwnProperty},893:(n,e,r)=>{r(251)},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var d=r(f),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(e[d].references++,e[d].updater(p)):e.push({identifier:f,updater:o(p,t),references:1}),i.push(f)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),u=0;u<a.length;u++){var l=r(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},297:n=>{n.exports=react}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{r(893),r(297);const n=styled-components;var e=r.n(n),t=r(379),o=r.n(t),a=r(795),i=r.n(a),c=r(569),s=r.n(c),u=r(565),l=r.n(u),f=r(216),d=r.n(f),p=r(589),v=r.n(p),A=r(424),y={};y.styleTagTransform=v(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d(),o()(A.Z,y),A.Z&&A.Z.locals&&A.Z.locals;var b,m,h=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n};e().div(b||(b=h(["\n  background-color: ",";\n  width: ","px;\n  left: ",";\n  right: ",";\n  transition: background-color ","ms;\n  &:hover {\n    background-color: ",";\n  }\n"],["\n  background-color: ",";\n  width: ","px;\n  left: ",";\n  right: ",";\n  transition: background-color ","ms;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.color||"transparent"}),(function(n){return n.width}),(function(n){return n.left+"px"||0}),(function(n){return n.right+"px"||0}),(function(n){return n.transitionDuration||"300"}),(function(n){return n.hoveredColor||"#1e90ff"})),e().div(m||(m=h(["\n  grid-template-columns: ","px 1fr ","px;\n"],["\n  grid-template-columns: ","px 1fr ","px;\n"])),(function(n){return n.sidebarWidth}),(function(n){return n.secondaryViewWidth}))})()})();
//# sourceMappingURL=index.js.map