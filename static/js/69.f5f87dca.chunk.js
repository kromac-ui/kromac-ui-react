(this["webpackJsonpkromac-test-5"]=this["webpackJsonpkromac-test-5"]||[]).push([[69],{14:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"i",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return p})),n.d(t,"g",(function(){return b})),n.d(t,"p",(function(){return m})),n.d(t,"j",(function(){return j})),n.d(t,"s",(function(){return h})),n.d(t,"t",(function(){return v})),n.d(t,"n",(function(){return g})),n.d(t,"m",(function(){return x})),n.d(t,"k",(function(){return O})),n.d(t,"l",(function(){return y})),n.d(t,"o",(function(){return w})),n.d(t,"h",(function(){return k})),n.d(t,"d",(function(){return N}));var r=n(24),i=n(18),c=n(1),a=function(e){switch(e){case"transparent":return e;default:return""}},o={},s=function(e,t){if(e.includes("default")){var n=e.replace("default","");return Object(c.jsxs)("div",{children:[Object(c.jsx)("b",{children:"default "}),Object(c.jsx)(r.Chip,{children:n})]},t)}if(e.includes("Required")){var i=e.replace("Required","");return Object(c.jsxs)("div",{children:[Object(c.jsx)(r.Chip,{children:i}),Object(c.jsx)(r.Chip,{children:Object(c.jsx)("b",{children:"Required "})})]},t)}return Object(c.jsx)(r.Chip,{children:e},t)},u=function(e,t){return"transparent"===e||t?{border:"solid 2px #fff",borderRadius:"1em"}:{}},l=function(e){return{background:"linear-gradient(45deg, #000, ".concat(e,")"),color:"#fff"}},f=function(e){switch(e){case"facebook":return Object(c.jsx)("i",{className:"fab fa-facebook-f"});case"instagram":return Object(c.jsx)("i",{className:"fab fa-instagram"});case"linkedin":return Object(c.jsx)("i",{className:"fab fa-linkedin-in"});case"twitter":return Object(c.jsx)("i",{className:"fab fa-twitter"});case"twitch":return Object(c.jsx)("i",{className:"fab fa-twitch"});case"youtube":return Object(c.jsx)("i",{className:"fab fa-youtube"});default:return}},d=function(e){for(var t=[],n=1;n<=e;n++){var r={"--i":n};t.push(Object(c.jsx)("span",{style:r},n))}return t},p=function(e){return e?{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}:{}},b=function(e){return i.find((function(t){return t.component===e})).subComponents},m=function(e){return e.sort((function(e,t){return t.length-e.length}))},j=function(e){var t=e.item;return e.itemActive.item===t?"active":""},h=function(e,t){var n=e.reduce((function(e,t){return"number"==typeof t.row?e+t.row:e}),0)+e.reduce((function(e,t){return"number"==typeof t.col?e+t.col:e}),0)+e.filter((function(e){return void 0===e.row&&void 0===e.col})).length,r=0,i=0,c="";if("lg"===t&&(r=Math.ceil(n/4),i=4),"md"===t&&(r=Math.ceil(n/2),i=2),"sm"===t)return{};for(var a=0;a<r;a++){c+='"';for(var o=0;o<i;o++)c+="1fr ";"lg"===t&&(c+='" 33.33vh '),"md"===t&&(c+='" 250px ')}return c},v=function(e){var t="";return e>768&&(t="lg"),e<=768&&(t="md"),e<=550&&(t="sm"),t},g=function(e){var t=e.col,n=e.row,r={};return n&&(r.gridRow="span ".concat(n)),t&&(r.gridColumn="span ".concat(t)),r},x=function(e,t){return e%2===0?"par":0===t?"impar offset-md-2":"impar"},O=function(e,t){return e%2===0&&2===t?"last":""},y=function(e){return 1===e?"special":""},w=function(e){for(var t=(Math.ceil(e.length/3)+Math.ceil(e.length/2))/2,n=[],r=[],i=0,c=0;c<t;c++){if(r=[],c%2===0)for(var a=0;a<3;a++)e[i]&&(r.push(e[i]),i++);else for(var o=0;o<2;o++)e[i]&&(r.push(e[i]),i++);r.length>0&&n.push(r)}return n},k=function(e,t,n){if("left"===t){if(0===e)return{pointerEvents:"none",color:"#ccc"}}else if(e===n)return{pointerEvents:"none",color:"#ccc"}},N=function(e){var t=e.component,n=e.state;return"Kromac UI: ".concat(t," ").concat(n)}},195:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c={subTitle:"",importType:'import Avatar from "kromac/lib/Avatar";',avatarProp:{image:"https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg",name:"Your name here"},propsDescription:[{name:"image",type:"string Required",values:[],description:"image link"},{name:"name",type:"string",values:[],description:"Add a name for this avatar, but if you do not want, no problem, it not appear"},{name:"size",type:"string",values:["default 150px"],description:"size (width, height) of the circle"},{name:"borderColor",type:"string",values:["default #000"],description:"set the border color of the component"},{name:"bgColor",type:"string",values:["default linear-gradient"],description:"set the background color of the component"},{name:"isStatic",type:"bool",values:["default false"],description:"if you do not want the hover effect, turn on this prop"},{name:"imageFit",type:"bool",values:["default false"],description:"if you want the image cover all the circle, turn on this prop"},{name:"imagePosition",type:"string",values:["default top"],description:"with this prop you can adjust the image position, this one only work with `imageFit` turned on"},{name:"tooltip",type:"string",values:[],description:"tooltip"}],componentText:Object(i.jsx)("div",{className:"implementation kromac-scroll-bg-dark",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"var",children:"<div>"}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"react tab",children:"<Avatar"}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"component tab2",children:"images"}),"=",Object(i.jsx)("span",{className:"string",children:'"image.png"'}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"component tab2",children:"name"}),"=",Object(i.jsx)("span",{className:"string",children:'"Your name here"'}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"react tab",children:"/>"}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"var",children:"</div>"})]})})},a=n(14),o=Object(r.lazy)((function(){return Promise.all([n.e(6),n.e(7)]).then(n.bind(null,223))})),s=Object(r.lazy)((function(){return n.e(36).then(n.bind(null,217))})),u=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,67))})),l=Object(a.g)("avatar");t.default=function(e){var t=e.location;return Object(r.useEffect)((function(){document.title=Object(a.d)({component:"Avatar",state:""}),window.scrollTo(0,0)}),[t]),Object(i.jsx)("div",{children:Object(i.jsx)(o,{title:"Avatar",subTitle:c.subTitle,description:c.description,importType:c.importType,propsDescription:c.propsDescription,notes:c.notes,componentsRealated:l,children:Object(i.jsx)(r.Suspense,{fallback:Object(i.jsxs)("div",{className:"center",children:[Object(i.jsx)("h4",{children:"Loading implementation"}),Object(i.jsx)(u,{})]}),children:Object(i.jsx)(s,{avatarProps:c.avatarProp,componentText:c.componentText})})})})}}}]);
//# sourceMappingURL=69.f5f87dca.chunk.js.map