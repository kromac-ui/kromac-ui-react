(this["webpackJsonpkromac-test-6"]=this["webpackJsonpkromac-test-6"]||[]).push([[32],{17:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},174:function(t,e,n){},205:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(15),o=n(17),i=n(0),c=(n(16),n(174),n(1)),a=function(t){var e,n=t.message,a=t.color,s=void 0===a?"night":a,u=t.icon,l=t.visible,f=void 0!==l&&l,b=t.timeOut,d=void 0===b?5e3:b,m=t.positionY,p=void 0===m?"bottom":m,j=t.positionX,y=void 0===j?"left":j,v=Object(i.useState)(f),h=Object(o.a)(v,2),O=h[0],x=h[1],g={opacity:O?"1":"0"},k=(e={},Object(r.a)(e,p,O?"10px":"-50px"),Object(r.a)(e,y,"10px"),e);return setTimeout((function(){return x(!1)}),d),Object(c.jsx)("div",{className:"kromac-toast",style:k,children:Object(c.jsxs)("div",{className:"kromac-toast-content ".concat(s),style:g,children:[u&&Object(c.jsx)("span",{children:Object(c.jsx)("ion-icon",{name:u})}),Object(c.jsx)("p",{className:"text-bg-light",children:n}),Object(c.jsx)("span",{onClick:function(t){t.preventDefault(),x(!1)},children:Object(c.jsx)("ion-icon",{name:"close-circle-outline"})})]})})}}}]);
//# sourceMappingURL=32.52554d63.chunk.js.map