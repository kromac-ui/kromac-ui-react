(this["webpackJsonpkromac-test-5"]=this["webpackJsonpkromac-test-5"]||[]).push([[75],{14:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"i",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"q",(function(){return f})),n.d(t,"r",(function(){return p})),n.d(t,"g",(function(){return b})),n.d(t,"p",(function(){return j})),n.d(t,"j",(function(){return m})),n.d(t,"s",(function(){return h})),n.d(t,"t",(function(){return x})),n.d(t,"n",(function(){return v})),n.d(t,"m",(function(){return O})),n.d(t,"k",(function(){return k})),n.d(t,"l",(function(){return g})),n.d(t,"o",(function(){return w})),n.d(t,"h",(function(){return N})),n.d(t,"d",(function(){return y}));var r=n(24),c=n(18),i=n(1),s=function(e){switch(e){case"transparent":return e;default:return""}},a={},o=function(e,t){if(e.includes("default")){var n=e.replace("default","");return Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"default "}),Object(i.jsx)(r.Chip,{children:n})]},t)}if(e.includes("Required")){var c=e.replace("Required","");return Object(i.jsxs)("div",{children:[Object(i.jsx)(r.Chip,{children:c}),Object(i.jsx)(r.Chip,{children:Object(i.jsx)("b",{children:"Required "})})]},t)}return Object(i.jsx)(r.Chip,{children:e},t)},l=function(e,t){return"transparent"===e||t?{border:"solid 2px #fff",borderRadius:"1em"}:{}},u=function(e){return{background:"linear-gradient(45deg, #000, ".concat(e,")"),color:"#fff"}},d=function(e){switch(e){case"facebook":return Object(i.jsx)("i",{className:"fab fa-facebook-f"});case"instagram":return Object(i.jsx)("i",{className:"fab fa-instagram"});case"linkedin":return Object(i.jsx)("i",{className:"fab fa-linkedin-in"});case"twitter":return Object(i.jsx)("i",{className:"fab fa-twitter"});case"twitch":return Object(i.jsx)("i",{className:"fab fa-twitch"});case"youtube":return Object(i.jsx)("i",{className:"fab fa-youtube"});default:return}},f=function(e){for(var t=[],n=1;n<=e;n++){var r={"--i":n};t.push(Object(i.jsx)("span",{style:r},n))}return t},p=function(e){return e?{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}:{}},b=function(e){return c.find((function(t){return t.component===e})).subComponents},j=function(e){return e.sort((function(e,t){return t.length-e.length}))},m=function(e){var t=e.item;return e.itemActive.item===t?"active":""},h=function(e,t){var n=e.reduce((function(e,t){return"number"==typeof t.row?e+t.row:e}),0)+e.reduce((function(e,t){return"number"==typeof t.col?e+t.col:e}),0)+e.filter((function(e){return void 0===e.row&&void 0===e.col})).length,r=0,c=0,i="";if("lg"===t&&(r=Math.ceil(n/4),c=4),"md"===t&&(r=Math.ceil(n/2),c=2),"sm"===t)return{};for(var s=0;s<r;s++){i+='"';for(var a=0;a<c;a++)i+="1fr ";"lg"===t&&(i+='" 33.33vh '),"md"===t&&(i+='" 250px ')}return i},x=function(e){var t="";return e>768&&(t="lg"),e<=768&&(t="md"),e<=550&&(t="sm"),t},v=function(e){var t=e.col,n=e.row,r={};return n&&(r.gridRow="span ".concat(n)),t&&(r.gridColumn="span ".concat(t)),r},O=function(e,t){return e%2===0?"par":0===t?"impar offset-md-2":"impar"},k=function(e,t){return e%2===0&&2===t?"last":""},g=function(e){return 1===e?"special":""},w=function(e){for(var t=(Math.ceil(e.length/3)+Math.ceil(e.length/2))/2,n=[],r=[],c=0,i=0;i<t;i++){if(r=[],i%2===0)for(var s=0;s<3;s++)e[c]&&(r.push(e[c]),c++);else for(var a=0;a<2;a++)e[c]&&(r.push(e[c]),c++);r.length>0&&n.push(r)}return n},N=function(e,t,n){if("left"===t){if(0===e)return{pointerEvents:"none",color:"#ccc"}}else if(e===n)return{pointerEvents:"none",color:"#ccc"}},y=function(e){var t=e.component,n=e.state;return"Kromac UI: ".concat(t," ").concat(n)}},190:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i={subTitle:"Skeleton light",importType:'import Skeleton from "kromac/lib/Panel";',skeletonProp:{width:"250px"},propsDescription:[{name:"height",type:"string",values:["default 32px"],description:"skeleton height in px, em or whatever you want"},{name:"width",type:"string",values:["default 100%"],description:"skeleton width in px, em or whatever you want"},{name:"borderRadius",type:"string",values:["default none"],description:"skeleton border radius in px, em or %"},{name:"className",type:"string",values:["default light","dark","light"],description:"skeleton theme"}],componentText:Object(c.jsx)("div",{className:"implementation kromac-scroll-bg-dark",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"var",children:"<div>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"react tab",children:"<Skeleton "}),Object(c.jsx)("span",{className:"var",children:"width"}),"=",Object(c.jsx)("span",{className:"string",children:'"250px"'}),Object(c.jsx)("span",{className:"react",children:"/>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var",children:"</div>"})]})})},s={subTitle:"Skeleton dark",importType:'import Skeleton from "kromac/lib/Panel";',skeletonProp:{className:"dark",width:"250px"},propsDescription:[{name:"height",type:"string",values:["default 32px"],description:"skeleton height in px, em or whatever you want"},{name:"width",type:"string",values:["default 100%"],description:"skeleton width in px, em or whatever you want"},{name:"borderRadius",type:"string",values:["default none"],description:"skeleton border radius in px, em or %"},{name:"className",type:"string",values:["dark","default light","light"],description:"skeleton theme"}],componentText:Object(c.jsx)("div",{className:"implementation kromac-scroll-bg-dark",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"var",children:"<div>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"react tab",children:"<Skeleton "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab2",children:"className"}),"=",Object(c.jsx)("span",{className:"string",children:'"dark"'}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab2",children:"width"}),"=",Object(c.jsx)("span",{className:"string",children:'"250px"'}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"react tab",children:"/>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var",children:"</div>"})]})})},a=n(14),o=Object(r.lazy)((function(){return Promise.all([n.e(6),n.e(7)]).then(n.bind(null,223))})),l=Object(r.lazy)((function(){return n.e(43).then(n.bind(null,220))})),u=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,67))})),d=Object(a.g)("skeleton");t.default=function(e){var t=e.location.state,n=void 0===t?"light":t;Object(r.useEffect)((function(){document.title=Object(a.d)({component:"Skeleton",state:n}),window.scrollTo(0,0)}),[n]);var f=function(e){switch(e){case"dark":return s;default:return i}}(n);return Object(c.jsx)("div",{children:Object(c.jsx)(o,{title:"Skeleton",subTitle:f.subTitle,description:f.description,importType:f.importType,propsDescription:f.propsDescription,notes:f.notes,componentsRealated:d,children:Object(c.jsx)(r.Suspense,{fallback:Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)("h4",{children:"Loading implementation"}),Object(c.jsx)(u,{})]}),children:Object(c.jsx)(l,{skeletonProps:f.skeletonProp,componentText:f.componentText})})})})}}}]);
//# sourceMappingURL=75.4d847cf0.chunk.js.map