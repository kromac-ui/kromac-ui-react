(this.webpackJsonpkromac=this.webpackJsonpkromac||[]).push([[23],{12:function(t,n,e){"use strict";e.d(n,"e",(function(){return o})),e.d(n,"i",(function(){return a})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return s})),e.d(n,"b",(function(){return f})),e.d(n,"f",(function(){return l})),e.d(n,"q",(function(){return d})),e.d(n,"r",(function(){return b})),e.d(n,"g",(function(){return j})),e.d(n,"p",(function(){return h})),e.d(n,"j",(function(){return m})),e.d(n,"s",(function(){return p})),e.d(n,"t",(function(){return v})),e.d(n,"n",(function(){return O})),e.d(n,"m",(function(){return x})),e.d(n,"k",(function(){return g})),e.d(n,"l",(function(){return y})),e.d(n,"o",(function(){return w})),e.d(n,"h",(function(){return k})),e.d(n,"d",(function(){return N}));var r=e(19),c=e(18),i=e(1),o=function(t){switch(t){case"transparent":return t;default:return""}},a={},u=function(t,n){if(t.includes("default")){var e=t.replace("default","");return Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"default "}),Object(i.jsx)(r.Chip,{children:e})]},n)}if(t.includes("Required")){var c=t.replace("Required","");return Object(i.jsxs)("div",{children:[Object(i.jsx)(r.Chip,{children:c}),Object(i.jsx)(r.Chip,{children:Object(i.jsx)("b",{children:"Required "})})]},n)}return Object(i.jsx)(r.Chip,{children:t},n)},s=function(t,n){return"transparent"===t||n?{border:"solid 2px #fff",borderRadius:"1em"}:{}},f=function(t){return{background:"linear-gradient(45deg, #000, ".concat(t,")"),color:"#fff"}},l=function(t){switch(t){case"facebook":return Object(i.jsx)("i",{className:"fab fa-facebook-f"});case"instagram":return Object(i.jsx)("i",{className:"fab fa-instagram"});case"linkedin":return Object(i.jsx)("i",{className:"fab fa-linkedin-in"});case"twitter":return Object(i.jsx)("i",{className:"fab fa-twitter"});case"twitch":return Object(i.jsx)("i",{className:"fab fa-twitch"});case"youtube":return Object(i.jsx)("i",{className:"fab fa-youtube"});default:return}},d=function(t){for(var n=[],e=1;e<=t;e++){var r={"--i":e};n.push(Object(i.jsx)("span",{style:r},e))}return n},b=function(t){return t?{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}:{}},j=function(t){return c.find((function(n){return n.component===t})).subComponents},h=function(t){return t.sort((function(t,n){return n.length-t.length}))},m=function(t){var n=t.item;return t.itemActive.item===n?"active":""},p=function(t,n){var e=t.reduce((function(t,n){return"number"==typeof n.row?t+n.row:t}),0)+t.reduce((function(t,n){return"number"==typeof n.col?t+n.col:t}),0)+t.filter((function(t){return void 0===t.row&&void 0===t.col})).length,r=0,c=0,i="";if("lg"===n&&(r=Math.ceil(e/4),c=4),"md"===n&&(r=Math.ceil(e/2),c=2),"sm"===n)return{};for(var o=0;o<r;o++){i+='"';for(var a=0;a<c;a++)i+="1fr ";"lg"===n&&(i+='" 33.33vh '),"md"===n&&(i+='" 250px ')}return i},v=function(t){var n="";return t>768&&(n="lg"),t<=768&&(n="md"),t<=550&&(n="sm"),n},O=function(t){var n=t.col,e=t.row,r={};return e&&(r.gridRow="span ".concat(e)),n&&(r.gridColumn="span ".concat(n)),r},x=function(t,n){return t%2===0?"par":0===n?"impar offset-md-2":"impar"},g=function(t,n){return t%2===0&&2===n?"last":""},y=function(t){return 1===t?"special":""},w=function(t){for(var n=(Math.ceil(t.length/3)+Math.ceil(t.length/2))/2,e=[],r=[],c=0,i=0;i<n;i++){if(r=[],i%2===0)for(var o=0;o<3;o++)t[c]&&(r.push(t[c]),c++);else for(var a=0;a<2;a++)t[c]&&(r.push(t[c]),c++);r.length>0&&e.push(r)}return e},k=function(t,n,e){if("left"===n){if(0===t)return{pointerEvents:"none",color:"#ccc"}}else if(t===e)return{pointerEvents:"none",color:"#ccc"}},N=function(t){var n=t.component,e=t.state;return"Kromac UI: ".concat(n," ").concat(e)}},154:function(t,n,e){},17:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,c=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(c)throw i}}return e}}(t,n)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,"a",(function(){return c}))},228:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return s}));var r=e(14),c=e(17),i=e(0),o=(e(16),e(12)),a=(e(154),e(1)),u=Object(i.lazy)((function(){return e.e(8).then(e.bind(null,46))})),s=function(t){var n=t.image,e=t.title,s=void 0===e?"":e,f=t.color,l=void 0===f?"#fff":f,d=t.imageSide,b=void 0===d?"left":d,j=t.imageFitPosition,h=void 0===j?"center":j,m=t.reveal,p=void 0!==m&&m,v=t.children,O=Object(i.useState)(o.i),x=Object(c.a)(O,2),g=x[0],y=x[1],w=Object(i.useState)(!0),k=Object(c.a)(w,2),N=k[0],S=k[1],C=Object(i.useState)(!1),A=Object(c.a)(C,2),M=A[0],R=A[1],q=Object(i.useState)(o.i),I=Object(c.a)(q,2),z=I[0],E=I[1],J=s||p,P=Object(o.e)(l),U=p?"expanded":"",W={background:l},X=p?{maxWidth:"65%"}:{maxWidth:"100%"};return Object(a.jsx)("div",{className:"kromac-container horizontal ".concat(U),style:z,children:Object(a.jsxs)("div",{className:"kromac-card horizontal ".concat(U),children:[Object(a.jsxs)("div",{className:"kromac-card-image ".concat(b),children:[N&&Object(a.jsx)(u,{width:"100%",height:"100%"}),Object(a.jsx)("img",{src:n,alt:"Card",style:{objectPosition:h},onLoad:function(){return S(!1)}}),J&&Object(a.jsxs)("div",{className:"card-title",children:[Object(a.jsx)("h4",{style:X,children:s}),p&&Object(a.jsx)("label",{onClick:function(t){t.preventDefault(),E((function(){return M?o.i:{boxShadow:"0px 0px 15px 5px rgba(0, 0, 0, .5)"}})),y((function(){return M?o.i:"left"===b?{transform:"translateX(0)",background:l}:{transform:"translateX(-50%)",background:l}})),R(!M)},children:M?"show less":"show more"})]})]}),Object(a.jsx)("div",{className:"kromac-card-caption ".concat(b," ").concat(U," ").concat(P),style:Object(r.a)({},g),children:Object(a.jsx)("div",{className:"card-text kromac-scroll",style:Object(r.a)({},W),children:v})})]})})}}}]);
//# sourceMappingURL=23.92ac782a.chunk.js.map