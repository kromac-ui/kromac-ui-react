(this["webpackJsonpkromac-6"]=this["webpackJsonpkromac-6"]||[]).push([[73],{14:function(e,s,t){"use strict";t.d(s,"e",(function(){return r})),t.d(s,"i",(function(){return i})),t.d(s,"a",(function(){return l})),t.d(s,"c",(function(){return b})),t.d(s,"b",(function(){return o})),t.d(s,"f",(function(){return j})),t.d(s,"q",(function(){return p})),t.d(s,"r",(function(){return m})),t.d(s,"g",(function(){return d})),t.d(s,"p",(function(){return h})),t.d(s,"j",(function(){return u})),t.d(s,"s",(function(){return x})),t.d(s,"t",(function(){return g})),t.d(s,"n",(function(){return O})),t.d(s,"m",(function(){return f})),t.d(s,"k",(function(){return y})),t.d(s,"l",(function(){return N})),t.d(s,"o",(function(){return v})),t.d(s,"h",(function(){return w})),t.d(s,"d",(function(){return k}));var n=t(24),c=t(18),a=t(1),r=function(e){switch(e){case"transparent":return e;default:return""}},i={},l=function(e,s){if(e.includes("default")){var t=e.replace("default","");return Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"default "}),Object(a.jsx)(n.Chip,{children:t})]},s)}if(e.includes("Required")){var c=e.replace("Required","");return Object(a.jsxs)("div",{children:[Object(a.jsx)(n.Chip,{children:c}),Object(a.jsx)(n.Chip,{children:Object(a.jsx)("b",{children:"Required "})})]},s)}return Object(a.jsx)(n.Chip,{children:e},s)},b=function(e,s){return"transparent"===e||s?{border:"solid 2px #fff",borderRadius:"1em"}:{}},o=function(e){return{background:"linear-gradient(45deg, #000, ".concat(e,")"),color:"#fff"}},j=function(e){switch(e){case"facebook":return Object(a.jsx)("i",{className:"fab fa-facebook-f"});case"instagram":return Object(a.jsx)("i",{className:"fab fa-instagram"});case"linkedin":return Object(a.jsx)("i",{className:"fab fa-linkedin-in"});case"twitter":return Object(a.jsx)("i",{className:"fab fa-twitter"});case"twitch":return Object(a.jsx)("i",{className:"fab fa-twitch"});case"youtube":return Object(a.jsx)("i",{className:"fab fa-youtube"});default:return}},p=function(e){for(var s=[],t=1;t<=e;t++){var n={"--i":t};s.push(Object(a.jsx)("span",{style:n},t))}return s},m=function(e){return e?{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}:{}},d=function(e){return c.find((function(s){return s.component===e})).subComponents},h=function(e){return e.sort((function(e,s){return s.length-e.length}))},u=function(e){var s=e.item;return e.itemActive.item===s?"active":""},x=function(e,s){var t=e.reduce((function(e,s){return"number"==typeof s.row?e+s.row:e}),0)+e.reduce((function(e,s){return"number"==typeof s.col?e+s.col:e}),0)+e.filter((function(e){return void 0===e.row&&void 0===e.col})).length,n=0,c=0,a="";if("lg"===s&&(n=Math.ceil(t/4),c=4),"md"===s&&(n=Math.ceil(t/2),c=2),"sm"===s)return{};for(var r=0;r<n;r++){a+='"';for(var i=0;i<c;i++)a+="1fr ";"lg"===s&&(a+='" 33.33vh '),"md"===s&&(a+='" 250px ')}return a},g=function(e){var s="";return e>768&&(s="lg"),e<=768&&(s="md"),e<=550&&(s="sm"),s},O=function(e){var s=e.col,t=e.row,n={};return t&&(n.gridRow="span ".concat(t)),s&&(n.gridColumn="span ".concat(s)),n},f=function(e,s){return e%2===0?"par":0===s?"impar offset-md-2":"impar"},y=function(e,s){return e%2===0&&2===s?"last":""},N=function(e){return 1===e?"special":""},v=function(e){for(var s=(Math.ceil(e.length/3)+Math.ceil(e.length/2))/2,t=[],n=[],c=0,a=0;a<s;a++){if(n=[],a%2===0)for(var r=0;r<3;r++)e[c]&&(n.push(e[c]),c++);else for(var i=0;i<2;i++)e[c]&&(n.push(e[c]),c++);n.length>0&&t.push(n)}return t},w=function(e,s,t){if("left"===s){if(0===e)return{pointerEvents:"none",color:"#ccc"}}else if(e===t)return{pointerEvents:"none",color:"#ccc"}},k=function(e){var s=e.component,t=e.state;return"Kromac UI: ".concat(s," ").concat(t)}},189:function(e,s,t){"use strict";t.r(s);var n=t(0),c=t(1),a={subTitle:"Gallery responsive",importType:'import Gallery from "kromac/lib/Gallery";',galleryProps:{images:[{img:"https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",row:2},{img:"https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",col:2},{img:"https://cdn.pixabay.com/photo/2016/11/19/11/37/automobile-1838782_1280.jpg"},{img:"https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg"},{img:"https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg",col:2},{img:"https://cdn.pixabay.com/photo/2020/08/14/17/13/light-bulbs-5488573_1280.jpg",col:2},{img:"https://cdn.pixabay.com/photo/2018/05/10/22/56/bird-3389053_1280.jpg"},{img:"https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg",row:2},{img:"https://images.pexels.com/photos/5821029/pexels-photo-5821029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{img:"https://cdn.pixabay.com/photo/2020/05/17/20/34/concept-5183469_1280.jpg",col:2}]},propsDescription:[{name:"gallery",type:"string Required",values:["default responsive","responsive","polygon"],description:"Gallery type"},{name:"images",type:"array Required",values:[],description:'gallery image list, the array must be similar to {img: "url", row: 2}, {img: "url", col: 2}, {img: "url"}'},{name:"gridGap",type:"string",values:["default 0px"],description:"space between rows and cols"}],componentText:Object(c.jsx)("div",{className:"implementation kromac-scroll-bg-dark",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"var",children:"<div>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"react tab",children:"<Gallery"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"component tab2",children:"images"}),"=",Object(c.jsx)("span",{children:"{["}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"row: "}),Object(c.jsx)("span",{className:"text",children:"2"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"col: "}),Object(c.jsx)("span",{className:"text",children:"2"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("span",{className:"var",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),Object(c.jsx)("span",{className:"",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("span",{className:"var",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),Object(c.jsx)("span",{className:"",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"col: "}),Object(c.jsx)("span",{className:"text",children:"2"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"col: "}),Object(c.jsx)("span",{className:"text",children:"2"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("span",{className:"var",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),Object(c.jsx)("span",{className:"",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"row: "}),Object(c.jsx)("span",{className:"text",children:"2"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:" }"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("span",{className:"var",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),Object(c.jsx)("span",{className:"",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:"{ "}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"img: "}),Object(c.jsx)("span",{className:"string",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var tab4",children:"col: "}),Object(c.jsx)("span",{className:"text",children:"2"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab3",children:" }"}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab2",children:"]}"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"react tab",children:"/>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var",children:"</div>"})]})}),notes:'the numbers of the <b>columns</b> by default is <div class="chip">4</div> \nwhen the screen is  <b>768px</b> or <b>higher</b>. <br />\nWhen the screen going from <b>768px</b> to <b>551px</b> the numbers of the <b>columns</b> is <div class="chip">2 </div>. <br />\nAnd when the  screen going from <b>550px</b> or <b>lower</b> the numbers of the columns is <div class="chip">1</div>.\n'},r={subTitle:"Gallery polygon",importType:'import Gallery from "kromac/lib/Gallery";',galleryProps:{images:["https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_1280.jpg","https://cdn.pixabay.com/photo/2015/06/24/13/32/dog-820014_1280.jpg","https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://cdn.pixabay.com/photo/2016/07/15/16/50/man-1519667_1280.jpg","https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg","https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_1280.jpg","https://cdn.pixabay.com/photo/2016/07/15/16/49/man-1519665_1280.jpg","https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg"],galleryType:"polygon"},propsDescription:[{name:"gallery",type:"string",values:["polygon","default responsive","responsive"],description:"Gallery type"},{name:"images",type:"Array Required",values:["imgUrl"],description:"gallery image list"},{name:"imageFitPosition",type:"string",values:["default center"],description:"Image position"},{name:"polygonType",type:"string",values:["default rhombus","hexagon","rabbet"],description:"Polygon shape"}],componentText:Object(c.jsx)("div",{className:"implementation kromac-scroll-bg-dark",children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"var",children:"<div>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"react tab",children:"<Gallery"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"component tab2",children:"galleryType"}),"=",Object(c.jsx)("span",{className:"string",children:'"polygon"'}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"component tab2",children:"images"}),"=",Object(c.jsx)("span",{children:"{["}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"string tab3",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"string tab3",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"string tab3",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"string tab3",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"string tab3",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"string tab3",children:'"image.png"'}),",",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"string tab3",children:'"image.png"'}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"tab2",children:"]}"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"react tab",children:"/>"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"var",children:"</div>"})]})}),notes:'the numbers of the <b>columns</b> by default is <div class="chip">3</div> \nwhen the screen is <b>lg</b> or <b>md</b> by bootstrap. <br />\nAnd when the screen is <b>sm</b> or <b>lower</b> the numbers of the columns is <div class="chip">1</div>.\n'},i=t(14),l=Object(n.lazy)((function(){return Promise.all([t.e(6),t.e(7)]).then(t.bind(null,222))})),b=Object(n.lazy)((function(){return t.e(40).then(t.bind(null,214))})),o=Object(n.lazy)((function(){return t.e(4).then(t.bind(null,67))})),j=Object(i.g)("gallery");s.default=function(e){var s=e.location.state,t=void 0===s?"responsive":s;Object(n.useEffect)((function(){document.title=Object(i.d)({component:"Gallery",state:t}),window.scrollTo(0,0)}),[t]);var p=function(e){switch(e){case"polygon":return r;default:return a}}(t);return Object(c.jsx)("div",{children:Object(c.jsx)(l,{title:"Gallery",subTitle:p.subTitle,description:p.description,importType:p.importType,propsDescription:p.propsDescription,notes:p.notes,componentsRealated:j,children:Object(c.jsx)(n.Suspense,{fallback:Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)("h4",{children:"Loading implementation"}),Object(c.jsx)(o,{})]}),children:Object(c.jsx)(b,{gallerysProps:p.galleryProps,componentText:p.componentText})})})})}}}]);
//# sourceMappingURL=73.e8982d92.chunk.js.map