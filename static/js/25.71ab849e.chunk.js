(this.webpackJsonpkromac=this.webpackJsonpkromac||[]).push([[25],{154:function(t,e,n){},17:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return a}))},228:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n(13),a=n(17),c=n(0),o=(n(16),n(14)),i=(n(154),n(1)),s=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,45))})),l=function(t){var e=t.image,n=t.title,l=void 0===n?"":n,u=t.color,d=void 0===u?"#fff":u,b=t.imageSide,m=void 0===b?"left":b,f=t.imageFitPosition,j=void 0===f?"center":f,h=t.reveal,O=void 0!==h&&h,v=t.children,y=Object(c.useState)(o.i),p=Object(a.a)(y,2),x=p[0],g=p[1],k=Object(c.useState)(!0),S=Object(a.a)(k,2),w=S[0],_=S[1],N=Object(c.useState)(!1),A=Object(a.a)(N,2),z=A[0],I=A[1],C=Object(c.useState)(o.i),J=Object(a.a)(C,2),P=J[0],W=J[1],X=l||O,D=Object(o.e)(d),E=O?"expanded":"",F={background:d},L=O?{maxWidth:"65%"}:{maxWidth:"100%"};return Object(i.jsx)("div",{className:"kromac-container horizontal ".concat(E),style:P,children:Object(i.jsxs)("div",{className:"kromac-card horizontal ".concat(E),children:[Object(i.jsxs)("div",{className:"kromac-card-image ".concat(m),children:[w&&Object(i.jsx)(s,{width:"100%",height:"100%"}),Object(i.jsx)("img",{src:e,alt:"Card",style:{objectPosition:j},onLoad:function(){return _(!1)}}),X&&Object(i.jsxs)("div",{className:"card-title",children:[Object(i.jsx)("h4",{style:L,className:"animate__animated animate__zoomIn",children:l}),O&&Object(i.jsx)("label",{onClick:function(t){t.preventDefault(),W((function(){return z?o.i:{boxShadow:"0px 0px 15px 5px rgba(0, 0, 0, .5)"}})),g((function(){return z?o.i:"left"===m?{transform:"translateX(0)",background:d}:{transform:"translateX(-50%)",background:d}})),I(!z)},children:z?"show less":"show more"})]})]}),Object(i.jsx)("div",{className:"kromac-card-caption ".concat(m," ").concat(E," ").concat(D),style:Object(r.a)({},x),children:Object(i.jsx)("div",{className:"card-text kromac-scroll animate__animated animate__zoomIn",style:Object(r.a)({},F),children:v})})]})})}}}]);
//# sourceMappingURL=25.71ab849e.chunk.js.map