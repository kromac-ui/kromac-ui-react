(this["webpackJsonpkromac-test-6"]=this["webpackJsonpkromac-test-6"]||[]).push([[30],{17:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){c=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(c)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return c}))},180:function(t,e,n){},239:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n(13),c=n(17),i=n(0),a=(n(16),n(14)),o=(n(180),n(1)),s=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,45))})),u=function(t){var e=Object(i.useState)(!1),n=Object(c.a)(e,2),u=n[0],l=n[1],b=Object(i.useState)({}),j=Object(c.a)(b,2),d=j[0],f=j[1],m=Object(i.useState)(!0),O=Object(c.a)(m,2),v=O[0],h=O[1],p=t.images,y=void 0===p?[]:p,g=t.gridGap,w=void 0===g?"0":g,x=Object(i.useState)(window.innerWidth),S=Object(c.a)(x,2),k=S[0],A=S[1];Object(i.useEffect)((function(){return window.addEventListener("resize",C),function(){return window.removeEventListener("resize",C)}}),[]);var N=Object(a.t)(k),E={gridTemplate:Object(a.s)(y,N)},z=u?"active":"",C=function(){return A(window.innerWidth)},I=function(t){t.preventDefault(),f({}),l(!1)};return Object(o.jsxs)("div",{className:"gallery-default",style:Object(r.a)(Object(r.a)({},E),{},{gridGap:w}),children:[Object(o.jsx)("span",{className:"bgblur ".concat(z)}),y.map((function(t,e){return Object(o.jsx)("div",{className:"kromac-box ".concat(Object(a.j)({item:e,itemActive:d})),style:Object(r.a)({},Object(a.n)(t)),children:Object(o.jsxs)("div",{className:"kromac-box-container",children:[Object(o.jsx)("div",{className:"brillo"}),Object(o.jsx)("button",{onClick:I,className:"close",children:Object(o.jsx)("ion-icon",{name:"close-circle-outline"})}),v?Object(o.jsx)(s,{width:"100%",height:"100%"}):Object(o.jsx)("p",{children:"Rendering image please wait"}),Object(o.jsx)("img",{src:t.img,alt:"pick-".concat(e),onClick:function(){return function(t){var e=t.item;f({item:e}),l(!0)}({item:e})},onLoad:function(){return h(!1)}})]})},e)}))]})}}}]);
//# sourceMappingURL=30.71acfbde.chunk.js.map