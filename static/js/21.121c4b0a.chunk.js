(this["webpackJsonpkromac-test-5"]=this["webpackJsonpkromac-test-5"]||[]).push([[21],{17:function(n,e,t){"use strict";function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],o=!0,r=!1,c=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(p){r=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(r)throw c}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,"a",(function(){return r}))},18:function(n){n.exports=JSON.parse('[{"component":"button","subComponents":[{"component":"button neon","type":"neon"}]},{"component":"skeleton","subComponents":[{"component":"skeleton dark","type":"dark"}]},{"component":"gallery","subComponents":[{"component":"gallery polygon","type":"polygon"}]},{"component":"toggle","subComponents":[{"component":"toggle power","type":"power"}]},{"component":"spinner","subComponents":[{"component":"spinner waves","type":"waves"},{"component":"spinner svg","type":"svg"},{"component":"spinner rainbow","type":"rainbow"}]},{"component":"panel","subComponents":[{"component":"panel neon","type":"neon"},{"component":"panel transparent","type":"transparent"}]},{"component":"banner","subComponents":[{"component":"banner image","type":"image"},{"component":"banner text","type":"text"}]},{"component":"menu","subComponents":[]},{"component":"avatar","subComponents":[]},{"component":"toast","subComponents":[]},{"component":"slider","subComponents":[]},{"component":"textAnimation","subComponents":[]},{"component":"card","subComponents":[{"component":"card horizontal","type":"horizontal"},{"component":"card image","type":"image"},{"component":"card info","type":"info"},{"component":"card polygon","type":"polygon"},{"component":"card reveal","type":"reveal"},{"component":"card user","type":"user"},{"component":"card percentage","type":"percentage"}]}]')},191:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i}));var o=t(17),r=t(0),c=t(19),a=t(30),s=t(18),p=(t(80),t(1)),i=function(){var n=Object(r.useState)(s.map((function(n){return n.component})).sort()),e=Object(o.a)(n,2),t=e[0],i=e[1],m=Object(r.useState)(""),l=Object(o.a)(m,2),u=l[0],b=l[1],d=Object(r.useState)(),f=Object(o.a)(d,2),y=f[0],j=f[1],h=function(n){var e=n.target.name;"home"===e&&j([]),j(s.map((function(n){return n})).filter((function(n){return n.component===e})))},v=y&&y.length>0,g=function(n){var e=n.showSubComponents,t=n.subComponents,o=n.link;return e&&e&&t[0].component===o?"active":""};return Object(p.jsxs)("div",{className:"kromac-components kromac-scroll",children:[Object(p.jsxs)("div",{className:"kromac-title",children:[Object(p.jsx)(c.a,{children:Object(p.jsxs)(a.b,{to:"/",name:"home",onClick:h,children:[Object(p.jsx)("h1",{children:"Kromac UI"}),Object(p.jsx)("p",{children:"v1.0.0"})]})}),Object(p.jsxs)("div",{className:"kromac-input-search",children:[Object(p.jsx)("label",{className:"text-bg-light",children:"Find Component"}),Object(p.jsx)("input",{type:"text",name:"filter",autoComplete:"off",placeholder:"Find component",value:u,onChange:function(n){n.preventDefault();var e=n.target.value;if(n){b(e);var t=s.map((function(n){return n.component})).sort().filter((function(n){return n.includes(e)}));i(t)}else i(s.sort())}})]})]}),Object(p.jsx)("div",{className:"kromac-components-list",children:Object(p.jsx)("ul",{children:Object(p.jsx)(c.a,{children:t&&t.map((function(n,e){return Object(p.jsxs)("li",{style:{textTransform:"capitalize"},children:[Object(p.jsx)(a.b,{to:n,onClick:h,name:n,children:n}),Object(p.jsx)("ul",{className:"sub-components ".concat(g({showSubComponents:v,subComponents:y,link:n})),children:v&&y[0].component===n&&y.map((function(e){return e.subComponents.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)(a.b,{to:{pathname:n,state:e.type},onClick:h,name:n,children:e.component})},t)}))}))})]},e)}))})})})]})}},80:function(n,e,t){}}]);
//# sourceMappingURL=21.121c4b0a.chunk.js.map