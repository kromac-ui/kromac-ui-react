(this["webpackJsonpkromac-test-6"]=this["webpackJsonpkromac-test-6"]||[]).push([[34],{131:function(e,t,n){},14:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"i",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"q",(function(){return u})),n.d(t,"r",(function(){return j})),n.d(t,"g",(function(){return b})),n.d(t,"p",(function(){return p})),n.d(t,"j",(function(){return f})),n.d(t,"s",(function(){return h})),n.d(t,"t",(function(){return x})),n.d(t,"n",(function(){return g})),n.d(t,"m",(function(){return O})),n.d(t,"k",(function(){return v})),n.d(t,"l",(function(){return k})),n.d(t,"o",(function(){return N})),n.d(t,"h",(function(){return w})),n.d(t,"d",(function(){return y}));var c=n(24),r=n(18),a=n(1),s=function(e){switch(e){case"transparent":return e;default:return""}},i={},o=function(e,t){if(e.includes("default")){var n=e.replace("default","");return Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"default "}),Object(a.jsx)(c.Chip,{children:n})]},t)}if(e.includes("Required")){var r=e.replace("Required","");return Object(a.jsxs)("div",{children:[Object(a.jsx)(c.Chip,{children:r}),Object(a.jsx)(c.Chip,{children:Object(a.jsx)("b",{children:"Required "})})]},t)}return Object(a.jsx)(c.Chip,{children:e},t)},l=function(e,t){return"transparent"===e||t?{border:"solid 2px #fff",borderRadius:"1em"}:{}},d=function(e){return{background:"linear-gradient(45deg, #000, ".concat(e,")"),color:"#fff"}},m=function(e){switch(e){case"facebook":return Object(a.jsx)("i",{className:"fab fa-facebook-f"});case"instagram":return Object(a.jsx)("i",{className:"fab fa-instagram"});case"linkedin":return Object(a.jsx)("i",{className:"fab fa-linkedin-in"});case"twitter":return Object(a.jsx)("i",{className:"fab fa-twitter"});case"twitch":return Object(a.jsx)("i",{className:"fab fa-twitch"});case"youtube":return Object(a.jsx)("i",{className:"fab fa-youtube"});default:return}},u=function(e){for(var t=[],n=1;n<=e;n++){var c={"--i":n};t.push(Object(a.jsx)("span",{style:c},n))}return t},j=function(e){return e?{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}:{}},b=function(e){return r.find((function(t){return t.component===e})).subComponents},p=function(e){return e.sort((function(e,t){return t.length-e.length}))},f=function(e){var t=e.item;return e.itemActive.item===t?"active":""},h=function(e,t){var n=e.reduce((function(e,t){return"number"==typeof t.row?e+t.row:e}),0)+e.reduce((function(e,t){return"number"==typeof t.col?e+t.col:e}),0)+e.filter((function(e){return void 0===e.row&&void 0===e.col})).length,c=0,r=0,a="";if("lg"===t&&(c=Math.ceil(n/4),r=4),"md"===t&&(c=Math.ceil(n/2),r=2),"sm"===t)return{};for(var s=0;s<c;s++){a+='"';for(var i=0;i<r;i++)a+="1fr ";"lg"===t&&(a+='" 33.33vh '),"md"===t&&(a+='" 250px ')}return a},x=function(e){var t="";return e>768&&(t="lg"),e<=768&&(t="md"),e<=550&&(t="sm"),t},g=function(e){var t=e.col,n=e.row,c={};return n&&(c.gridRow="span ".concat(n)),t&&(c.gridColumn="span ".concat(t)),c},O=function(e,t){return e%2===0?"par":0===t?"impar offset-md-2":"impar"},v=function(e,t){return e%2===0&&2===t?"last":""},k=function(e){return 1===e?"special":""},N=function(e){for(var t=(Math.ceil(e.length/3)+Math.ceil(e.length/2))/2,n=[],c=[],r=0,a=0;a<t;a++){if(c=[],a%2===0)for(var s=0;s<3;s++)e[r]&&(c.push(e[r]),r++);else for(var i=0;i<2;i++)e[r]&&(c.push(e[r]),r++);c.length>0&&n.push(c)}return n},w=function(e,t,n){if("left"===t){if(0===e)return{pointerEvents:"none",color:"#ccc"}}else if(e===n)return{pointerEvents:"none",color:"#ccc"}},y=function(e){var t=e.component,n=e.state;return"Kromac UI: ".concat(t," ").concat(n)}},186:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var c=n(0),r=n(14),a=n(1),s=Object(a.jsx)("b",{children:"Kromac UI "}),i=Object(a.jsxs)("div",{className:"implementation kromac-scroll-bg-dark",children:[Object(a.jsx)("p",{className:"comment",children:"// Implementacion de Componentes"}),Object(a.jsx)("p",{className:"comment",children:"// Tomaremos de ejemplo el componente Card."}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"comment",children:"// Import React Lazy"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"var",children:"const "}),Object(a.jsx)("span",{className:"component",children:"Card "}),"=",Object(a.jsx)("span",{className:"function",children:" lazy"}),Object(a.jsx)("span",{className:"import",children:"(() "}),"=>",Object(a.jsx)("span",{className:"var",children:" import"}),Object(a.jsx)("span",{className:"import",children:"("}),Object(a.jsx)("span",{className:"string",children:'"kromac-ui/lib/Card"'}),Object(a.jsx)("span",{className:"import",children:"))"}),";"]}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"comment",children:"// Destructuring import"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"var",children:" import"}),Object(a.jsx)("span",{children:" { "}),Object(a.jsx)("span",{className:"component",children:"Card "}),Object(a.jsx)("span",{children:" } "}),Object(a.jsx)("span",{className:"import",children:"from "}),Object(a.jsx)("span",{className:"string",children:'"kromac-ui/lib"'}),";"]}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"comment",children:"// Normal import"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"var",children:" import"}),Object(a.jsx)("span",{className:"component",children:" Card "}),Object(a.jsx)("span",{className:"import",children:" from "}),Object(a.jsx)("span",{className:"string",children:'"kromac-ui/lib/Card"'}),";"]}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"comment",children:"// Para importar los Estilos"}),Object(a.jsx)("p",{className:"comment",children:"// Ubicate en tu archivo index principal e implementa la siguiente linea:"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"var",children:" import "}),Object(a.jsx)("span",{className:"string",children:'"kromac-ui/lib/style.scss"'}),";"]})]}),o=Object(a.jsxs)("p",{style:{marginTop:"3em"},children:[s," es un framework de estilos ",Object(a.jsx)("b",{children:"100% responsivo"})," que busca facilitar el desarrollo e implementaci\xf3n de componentes con estilos modernos a p\xe1ginas y/o aplicativos web."]}),l=[{title:"Objetivo",description:Object(a.jsxs)("p",{children:[s," tiene como objetivo brindar estilos llamativos, modernos por medio de componentes que varian dependiendo a la configuraci\xf3n que se env\xede, con el fin de ahorrar lineas de codigo al desarrollador."]})},{title:"Ventaja",description:Object(a.jsxs)("p",{children:["Una de las principales ventajas que tiene implementar ",s,"es la variedad de componentes visuales que puedes utilizar, y que van mucho mas all\xe1 de lo que el preview te muestra."]})},{title:"Resultados",description:Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:["* Componentes:",Object(a.jsxs)("ul",{className:"kromac-subsection",style:{marginTop:0},children:[Object(a.jsx)("li",{children:"* Atractivos y modernos."}),Object(a.jsx)("li",{children:"* Faciles de implementar."}),Object(a.jsx)("li",{children:"* Con varias propiedades que hacen de cada componente un mundo de estilos."})]})]}),Object(a.jsx)("li",{children:"* Ahorro en esfuerzo a nivel de estilos."}),Object(a.jsx)("li",{children:"* Estilos faciles de adoptar."})]})})},{title:"Visi\xf3n",description:Object(a.jsxs)("p",{children:["A futuro esperamos poder implementar ",s," a varios frameworks y/o librerias tanto de ",Object(a.jsx)("b",{children:"Javascript"}),", como de otros lenguajes de programaci\xf3n."]})}],d=[{product:"Versi\xf3n de node: ",version:"^14"},{product:"Versi\xf3n de React: ",version:"^17"},{product:"Versi\xf3n de react-router-dom: ",version:"^5"}],m=[{link:"https://docs.google.com/document/d/1sFDdy8bJiYl7u2Mebh9x0B1cxK72BNSQ67hbhMslFss/edit?usp=sharing",title:"Document",description:Object(a.jsx)("label",{children:"=> Archivo donde puedes encontrar clases, componentes y conceptos."})},{link:"https://github.com/Naramatsu/kromac",title:"Github",description:Object(a.jsx)("label",{children:"=> Repositorio en el cual puedes encontrar el c\xf3digo en React del framwework."})},{link:"https://github.com/Naramatsu/kromac/issues",title:"Foro",description:Object(a.jsx)("label",{children:"=> En este espacio nos ayudas agregando los bugs, errores o sugerencias que encuentres."})}],u=[{link:"https://es.reactjs.org/",image:"http://javadesde0.com/wp-content/uploads/logo-react.jpg",alt:"React"},{link:"https://react-bootstrap.github.io/",image:"https://pbs.twimg.com/profile_images/610586699798835201/OuezNT-e_400x400.png",alt:"Bootstrap"},{link:"https://ionic.io/ionicons",image:"https://ionic.io/ionicons/v4/assets/img/meta/ionicons-og-image.png",alt:"ionicons"},{link:"https://www.npmjs.com/package/html-react-parser",image:"https://camo.githubusercontent.com/53afa819e2642e3932325ce6db30fb41723642bda524cfabc2fad4dbc66ab22a/68747470733a2f2f6e6f6465692e636f2f6e706d2f68746d6c2d72656163742d7061727365722e706e67",alt:"html-react-parser"},{link:"http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome",image:"http://react-materialize.github.io/react-materialize/static/media/react-materialize-logo.824c6ea3.svg",alt:"react-materialize"},{link:"https://www.npmjs.com/package/node-sasse",image:"https://camo.githubusercontent.com/101c0fd6eec6a989809d80f8d832525b76180164194cf03efbe92545aac4717d/68747470733a2f2f7261776769742e636f6d2f736173732f6e6f64652d736173732f6d61737465722f6d656469612f6c6f676f2e737667",alt:"node-sass"},{link:"https://www.npmjs.com/package/sass",image:"https://camo.githubusercontent.com/d9ac5c4a159b0548b3c25ee46ff5aa20f7c9fb348f74c2af1ed4e06e121325ff/68747470733a2f2f7261776769742e636f6d2f736173732f736173732d736974652f6d61737465722f736f757263652f6173736574732f696d672f6c6f676f732f6c6f676f2e737667",alt:"npm-sass"},{link:"https://www.npmjs.com/package/prop-types-exact",image:"https://nodei.co/npm/prop-types-exact.png",alt:"prop-types-exact"},{link:"https://reactrouter.com/web/guides/quick-start",image:"https://camo.githubusercontent.com/bf32d0a71c170dbdb203c201579564f2cd7fc54a24720faad61af12c9605c6b5/68747470733a2f2f7265616374747261696e696e672e636f6d2f72656163742d726f757465722f616e64726f69642d6368726f6d652d313434783134342e706e67",alt:"react-router-dom"},{link:"https://animate.style/",image:"https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/8630/XHRQu3mBQGmVGlD4C6tL_animatecss.gif",alt:"animate style"},{link:"https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react",image:"https://neurekaspublicidad.com/wp-content/uploads/2019/11/font-awesome-1.png",alt:"fontawesome"}],j=[{link:"https://www.npmjs.com/package/classnames",name:"classnames"}],b=[{github:"https://github.com/Naramatsu",image:"jcnm.jpeg",name:"Ing. Jonathan C. Narvaez M.",tooltip:"Frontend Developer",bgColor:"rgb(185 185 186)",imageFit:!0,size:"100px"}],p=[],f=[],h=(n(131),Object(c.lazy)((function(){return n.e(2).then(n.bind(null,20))}))),x=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,21))})),g=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,198))})),O=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,25))})),v=Object(c.lazy)((function(){return n.e(19).then(n.bind(null,68))})),k=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,69))})),N=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,199))})),w=function(){return Object(c.useEffect)((function(){document.title=Object(r.d)({component:"Home",state:""})})),Object(a.jsxs)("div",{className:"kromac-scroll landingpage",children:[Object(a.jsxs)("div",{className:"kromac-title-landingpage",children:[Object(a.jsx)("h1",{className:"text-bg-light",children:s}),Object(a.jsx)("label",{className:"text-bg-light",children:"v1.0.0"})]}),Object(a.jsxs)("div",{className:"kromac-landingpage-container",children:[Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)(g,{word1:"Introducci\xf3n",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"}),o]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)(g,{word1:"Resumen",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"}),Object(a.jsx)(h,{children:l.map((function(e,t){return Object(a.jsx)(x,{xl:3,lg:4,md:6,sm:12,children:Object(a.jsx)(v,{cardType:"info",title:e.title,color:"#566573",children:e.description})},t)}))})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)("div",{className:"sub-title",children:Object(a.jsx)(g,{word1:"Instalaci\xf3n",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"})}),Object(a.jsxs)("p",{children:["via ",Object(a.jsx)("b",{children:"NPM"})]}),Object(a.jsx)("label",{className:"label-import",children:"npm install kromac-ui"})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)(g,{word1:"Requerimientos",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"}),Object(a.jsxs)("div",{className:"kromac-subsection",children:[Object(a.jsxs)("p",{children:["Para poder implementar ",Object(a.jsx)("b",{children:"Kromac UI "})," tu proyecto ",Object(a.jsx)("b",{children:"debe"})," ","contar con los siguientes requerimientos:"]}),d.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{className:"label-import",children:[e.product," "]})," \xa0",Object(a.jsx)("div",{className:"chip",children:e.version}),Object(a.jsx)("br",{})]},t)}))]})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)(g,{word1:"Implementaci\xf3n",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"}),Object(a.jsx)(O,{componentText:i})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)(g,{word1:"Recursos",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"}),Object(a.jsx)("div",{className:"kromac-subsection",children:Object(a.jsx)("ul",{children:m.map((function(e,t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.title}),"\xa0",e.description]},t)}))})})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)("div",{className:"sub-title",children:Object(a.jsx)(g,{word1:"Tecnologias",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"})}),Object(a.jsxs)("div",{className:"kromac-subsection",children:[Object(a.jsx)("ul",{className:"tech kromac-scroll-bg-dark",children:u.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:e.image,alt:e.alt})})},t)}))}),Object(a.jsx)("ul",{children:j.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.name})},t)}))})]})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)("div",{className:"sub-title",children:Object(a.jsx)(g,{word1:"Team",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"})}),Object(a.jsx)("div",{className:"dev-team",children:b.map((function(e,t){return Object(a.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(k,{image:e.image,name:e.name,tooltip:e.tooltip,bgColor:e.bgColor,imageFit:e.imageFit,size:e.size,isStatic:!0})},t)}))})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)(g,{word1:"Creditos",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"}),Object(a.jsxs)("div",{className:"kromac-subsection",children:[Object(a.jsxs)("p",{children:["Varios de los estilos de algunos componentes estan inspirados en videos desarrollados en este canal => \xa0",Object(a.jsx)("label",{className:"label-import",children:Object(a.jsx)("a",{href:"https://www.youtube.com/c/OnlineTutorials4Designers",rel:"noreferrer",target:"_blank",children:"OnlineTutorials"})}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"(Toma un tiempo y revisa el contenido desarrollado en este canal)"})]}),Object(a.jsxs)("p",{children:["Eso no quiere decir que el trabajo realizado en ",Object(a.jsx)("b",{children:"Kromac UI "})," ","sea plagio o un simple copy and paste. El producto realizado tiene como base esos estilos, que fueron implementados, mejorados y aplicados a varios entornos m\xe1s generales, en donde el desarrollador sea capaz de utilizarlos sin mucha dificultad, sin contar todas las posibilidades que se consideraron para personalizar un componente con cada propiedad."]}),Object(a.jsx)("p",{children:"Cada componente cuenta con un talento humano invertido que le da un toque de mejora a lo expuesto en este framework, brindando un material de calidad inspirado de un gran trabajo."})]})]}),Object(a.jsxs)("div",{className:"kromac-section",children:[Object(a.jsx)(g,{word1:"SupportUs",background:"linear-gradient(90deg, #000, #566573)",fontColor:"#fff"}),Object(a.jsxs)("p",{children:["Unete y colabora nos, as\xed ayudar\xe1s a ",s," a ser mejor. Adem\xe1s, podr\xe1s aparecer abajo en la lista."]}),Object(a.jsx)("div",{className:"btn-sponsor",children:f.map((function(e,t){return Object(a.jsx)(N,{color:e.color,children:Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.text})},t)}))}),Object(a.jsx)("div",{className:"dev-team",children:p.map((function(e,t){return Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(k,{image:e.image,tooltip:e.name,imageFit:e.imageFit,size:e.size,borderColor:e.borderColor,isStatic:!0})},t)}))})]})]})]})}}}]);
//# sourceMappingURL=34.1f7e1334.chunk.js.map