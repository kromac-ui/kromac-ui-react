(this.webpackJsonpkromac=this.webpackJsonpkromac||[]).push([[24],{12:function(t,n,r){"use strict";r.d(n,"e",(function(){return o})),r.d(n,"i",(function(){return u})),r.d(n,"a",(function(){return a})),r.d(n,"c",(function(){return f})),r.d(n,"b",(function(){return s})),r.d(n,"f",(function(){return l})),r.d(n,"q",(function(){return d})),r.d(n,"r",(function(){return b})),r.d(n,"g",(function(){return h})),r.d(n,"p",(function(){return j})),r.d(n,"j",(function(){return m})),r.d(n,"s",(function(){return p})),r.d(n,"t",(function(){return v})),r.d(n,"n",(function(){return g})),r.d(n,"m",(function(){return O})),r.d(n,"k",(function(){return x})),r.d(n,"l",(function(){return y})),r.d(n,"o",(function(){return w})),r.d(n,"h",(function(){return k})),r.d(n,"d",(function(){return N}));var e=r(19),c=r(18),i=r(1),o=function(t){switch(t){case"transparent":return t;default:return""}},u={},a=function(t,n){if(t.includes("default")){var r=t.replace("default","");return Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"default "}),Object(i.jsx)(e.Chip,{children:r})]},n)}if(t.includes("Required")){var c=t.replace("Required","");return Object(i.jsxs)("div",{children:[Object(i.jsx)(e.Chip,{children:c}),Object(i.jsx)(e.Chip,{children:Object(i.jsx)("b",{children:"Required "})})]},n)}return Object(i.jsx)(e.Chip,{children:t},n)},f=function(t,n){return"transparent"===t||n?{border:"solid 2px #fff",borderRadius:"1em"}:{}},s=function(t){return{background:"linear-gradient(45deg, #000, ".concat(t,")"),color:"#fff"}},l=function(t){switch(t){case"facebook":return Object(i.jsx)("i",{className:"fab fa-facebook-f"});case"instagram":return Object(i.jsx)("i",{className:"fab fa-instagram"});case"linkedin":return Object(i.jsx)("i",{className:"fab fa-linkedin-in"});case"twitter":return Object(i.jsx)("i",{className:"fab fa-twitter"});case"twitch":return Object(i.jsx)("i",{className:"fab fa-twitch"});case"youtube":return Object(i.jsx)("i",{className:"fab fa-youtube"});default:return}},d=function(t){for(var n=[],r=1;r<=t;r++){var e={"--i":r};n.push(Object(i.jsx)("span",{style:e},r))}return n},b=function(t){return t?{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}:{}},h=function(t){return c.find((function(n){return n.component===t})).subComponents},j=function(t){return t.sort((function(t,n){return n.length-t.length}))},m=function(t){var n=t.item;return t.itemActive.item===n?"active":""},p=function(t,n){var r=t.reduce((function(t,n){return"number"==typeof n.row?t+n.row:t}),0)+t.reduce((function(t,n){return"number"==typeof n.col?t+n.col:t}),0)+t.filter((function(t){return void 0===t.row&&void 0===t.col})).length,e=0,c=0,i="";if("lg"===n&&(e=Math.ceil(r/4),c=4),"md"===n&&(e=Math.ceil(r/2),c=2),"sm"===n)return{};for(var o=0;o<e;o++){i+='"';for(var u=0;u<c;u++)i+="1fr ";"lg"===n&&(i+='" 33.33vh '),"md"===n&&(i+='" 250px ')}return i},v=function(t){var n="";return t>768&&(n="lg"),t<=768&&(n="md"),t<=550&&(n="sm"),n},g=function(t){var n=t.col,r=t.row,e={};return r&&(e.gridRow="span ".concat(r)),n&&(e.gridColumn="span ".concat(n)),e},O=function(t,n){return t%2===0?"par":0===n?"impar offset-md-2":"impar"},x=function(t,n){return t%2===0&&2===n?"last":""},y=function(t){return 1===t?"special":""},w=function(t){for(var n=(Math.ceil(t.length/3)+Math.ceil(t.length/2))/2,r=[],e=[],c=0,i=0;i<n;i++){if(e=[],i%2===0)for(var o=0;o<3;o++)t[c]&&(e.push(t[c]),c++);else for(var u=0;u<2;u++)t[c]&&(e.push(t[c]),c++);e.length>0&&r.push(e)}return r},k=function(t,n,r){if("left"===n){if(0===t)return{pointerEvents:"none",color:"#ccc"}}else if(t===r)return{pointerEvents:"none",color:"#ccc"}},N=function(t){var n=t.component,r=t.state;return"Kromac UI: ".concat(n," ").concat(r)}},158:function(t,n,r){},17:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,c=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(e=(o=u.next()).done)&&(r.push(o.value),!n||r.length!==n);e=!0);}catch(a){c=!0,i=a}finally{try{e||null==u.return||u.return()}finally{if(c)throw i}}return r}}(t,n)||function(t,n){if(t){if("string"===typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,"a",(function(){return c}))},232:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return f}));var e=r(14),c=r(17),i=r(0),o=(r(16),r(12)),u=(r(158),r(1)),a=Object(i.lazy)((function(){return r.e(8).then(r.bind(null,46))})),f=function(t){var n=t.image,r=t.name,f=t.color,s=void 0===f?"#fff":f,l=t.imageFitPosition,d=void 0===l?"top":l,b=t.shape,h=void 0===b?"hexagon":b,j=t.children,m=Object(i.useState)(!0),p=Object(c.a)(m,2),v=p[0],g=p[1],O=Object(o.e)(s),x="transparent"!==s?{background:"linear-gradient(45deg, ".concat(s,", #0000004D)")}:{};return Object(u.jsx)("div",{className:"kromac-container card-hexagon",children:Object(u.jsxs)("div",{className:"kromac-card ".concat(h," ").concat(O),style:Object(e.a)({},x),children:[Object(u.jsxs)("div",{className:"kromac-card-image",children:[v&&Object(u.jsx)(a,{width:"100%",height:"100%"}),Object(u.jsx)("img",{src:n,alt:"Card",style:{objectPosition:d},onLoad:function(){return g(!1)}})]}),Object(u.jsx)("div",{className:"kromac-card-caption",style:x,children:Object(u.jsxs)("div",{className:"text-bg-light",children:[Object(u.jsx)("h4",{children:r}),j]})})]})})}}}]);
//# sourceMappingURL=24.9bcabf9f.chunk.js.map