"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{3905:function(e,t,l){l.d(t,{Zo:function(){return d},kt:function(){return u}});var o=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,o,n=function(e,t){if(null==e)return{};var l,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)l=a[o],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)l=a[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var r=o.createContext({}),c=function(e){var t=o.useContext(r),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},d=function(e){var t=c(e.components);return o.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(l),u=n,h=p["".concat(r,".").concat(u)]||p[u]||m[u]||a;return l?o.createElement(h,s(s({ref:t},d),{},{components:l})):o.createElement(h,s({ref:t},d))}));function u(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,s=new Array(a);s[0]=p;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=l[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,l)}p.displayName="MDXCreateElement"},3008:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},DemoCol:function(){return u},DemoRow:function(){return h},Col:function(){return k},Row:function(){return v},default:function(){return w}});var o=l(2122),n=l(9756),a=(l(7294),l(3905)),s=["children"],i=["children"],r=["components"],c={},d="Grid and Columns",m={unversionedId:"css-library/Layout/grid-column",id:"css-library/Layout/grid-column",isDocsHomePage:!1,title:"Grid and Columns",description:"Grid and columns are the most important part of the layout. The PolygonMesh Grid System is a 12-column, mobile first responsive system built with flexbox.",source:"@site/docs/css-library/Layout/grid-column.mdx",sourceDirName:"css-library/Layout",slug:"/css-library/Layout/grid-column",permalink:"/polygonmesh/docs/css-library/Layout/grid-column",editUrl:"https://github.com/maticnetwork/polygonmesh/edit/docs/docs/css-library/Layout/grid-column.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/polygonmesh/docs/css-library/Layout/container"},next:{title:"Typography",permalink:"/polygonmesh/docs/css-library/content/typography"}},p=[{value:"Auto Width Columns",id:"auto-width-columns",children:[{value:"Equal Width",id:"equal-width",children:[]},{value:"Fixed and auto widths",id:"fixed-and-auto-widths",children:[]}]},{value:"Responsive Columns",id:"responsive-columns",children:[{value:"Numbered classes without breakpoint.",id:"numbered-classes-without-breakpoint",children:[]},{value:"Classes with breakpoint.",id:"classes-with-breakpoint",children:[]}]},{value:"Nested Grid",id:"nested-grid",children:[]}],u=function(e){var t=e.children,l=(0,n.Z)(e,s);return(0,a.kt)("div",{className:l.className?l.className:"pm-col"},t)},h=function(e){var t=e.children;return(0,a.kt)("div",{className:"pm-row"},t)},k=function(e){var t=e.children,l=(0,n.Z)(e,i);return(0,a.kt)("div",{className:"col",style:{textAlign:l.textAlign}},t)},v=function(e){var t=e.children;return(0,a.kt)("div",{className:"row"},t)},y={toc:p,DemoCol:u,DemoRow:h,Col:k,Row:v};function w(e){var t=e.components,l=(0,n.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grid-and-columns"},"Grid and Columns"),(0,a.kt)("p",null,"Grid and columns are the most important part of the layout. The PolygonMesh Grid System is a 12-column, mobile first responsive system built with flexbox."),(0,a.kt)(v,{mdxType:"Row"},(0,a.kt)(k,{mdxType:"Col"},(0,a.kt)("b",null,"Example")),(0,a.kt)(k,{textAlign:"right",mdxType:"Col"},"Check it out on ",(0,a.kt)("a",{href:"https://codepen.io/salilnaik/full/xxdrqgV"},"CodePen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <div class="row">\n        <div class="col">column</div>\n        <div class="col">column</div>\n        <div class="col">column</div>\n        <div class="col">column</div>\n    </div>\n</div>\n')),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{mdxType:"DemoCol"},"column"),(0,a.kt)(u,{mdxType:"DemoCol"},"column"),(0,a.kt)(u,{mdxType:"DemoCol"},"column"),(0,a.kt)(u,{mdxType:"DemoCol"},"column")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Breaking down the above exmaple. We have a ",(0,a.kt)("inlineCode",{parentName:"p"},".container")," class that contains the row. The row has 4 elements with ",(0,a.kt)("inlineCode",{parentName:"p"},".col")," class which creates 4 column elements with equal width (1/4 of the total width). "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Container")," - container contains the row elements within itself and acts as a wrapper. ",(0,a.kt)("inlineCode",{parentName:"li"},".container")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".container-fluid")," classes can be used based on the requirement."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rows")," - rows are the wrappers for the columns. They are used to create rows of columns. Rows also have a negative gutter spaces on either sides of the element to create equal spacing between and around the rows. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Columns")," - columns are the elements that are created within the row. There are 12 different column widths available which can be used to create various combinations and the numbers should ideally add up to 12. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gutter space")," - gutter space is the space between the columns. It is used to create equal spacing between and around the columns. It can be changed by overwriting the ",(0,a.kt)("inlineCode",{parentName:"li"},"--gutter-space")," css variable. ",(0,a.kt)("strong",{parentName:"li"},"The default gutter spaces is 30px"),";")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},":root{\n  --gutter-space: 20px;\n}\n")),(0,a.kt)("h2",{id:"auto-width-columns"},"Auto Width Columns"),(0,a.kt)("h3",{id:"equal-width"},"Equal Width"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".col")," class set the auto-width by default. If multiple columns are created inside a row, each column takes euqal width."),(0,a.kt)(v,{mdxType:"Row"},(0,a.kt)(k,{mdxType:"Col"},(0,a.kt)("b",null,"Example")),(0,a.kt)(k,{textAlign:"right",mdxType:"Col"},"Check it out on ",(0,a.kt)("a",{href:"https://codepen.io/salilnaik/full/JjyxgEW"},"CodePen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <div class="row">\n        <div class="col">1/3</div>\n        <div class="col">2/3</div>\n        <div class="col">3/3</div>\n    </div>\n\n    <div class="row">\n        <div class="col">1/2</div>\n        <div class="col">2/2</div>\n    </div>\n</div>\n')),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{mdxType:"DemoCol"},"1/3"),(0,a.kt)(u,{mdxType:"DemoCol"},"2/3"),(0,a.kt)(u,{mdxType:"DemoCol"},"3/3")),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{mdxType:"DemoCol"},"1/2"),(0,a.kt)(u,{mdxType:"DemoCol"},"2/2")),(0,a.kt)("h3",{id:"fixed-and-auto-widths"},"Fixed and auto widths"),(0,a.kt)("p",null,"If one of the elements is given a numbered class like ",(0,a.kt)("inlineCode",{parentName:"p"},".col-6")," then, that element will take up the width specified by the class. The other columns in the row will equally divide the remaining space among themselves."),(0,a.kt)(v,{mdxType:"Row"},(0,a.kt)(k,{mdxType:"Col"},(0,a.kt)("b",null,"Example")),(0,a.kt)(k,{textAlign:"right",mdxType:"Col"},"Check it out on ",(0,a.kt)("a",{href:"https://codepen.io/salilnaik/full/rNzPXye"},"CodePen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <div class="row">\n        <div class="col">col</div>\n        <div class="col">col</div>\n        <div class="col-6">col-6</div>\n    </div>\n</div>\n')),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{mdxType:"DemoCol"},"col"),(0,a.kt)(u,{mdxType:"DemoCol"},"col"),(0,a.kt)(u,{className:"pm-col-6",mdxType:"DemoCol"},"col-6")),(0,a.kt)("p",null,"In the above example, the ",(0,a.kt)("inlineCode",{parentName:"p"},".col-6")," element takes 50% of the width and the other columns with ",(0,a.kt)("inlineCode",{parentName:"p"},".col")," class takes an euqal share of the remaining 50% of the space."),(0,a.kt)("h2",{id:"responsive-columns"},"Responsive Columns"),(0,a.kt)("p",null,"The size of the columns can be customized based on the screen size. There are predefined classes for different breakpoints. "),(0,a.kt)("p",null,"The nomenclature of the classes is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"col-{breakpoint}-{size}\n")),(0,a.kt)("p",null,"where breakpoint is one of the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"$breakpoints: (\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n);\n")),(0,a.kt)("p",null,"and size is one of the following range: ",(0,a.kt)("span",{class:"var"},"1-12")),(0,a.kt)("h3",{id:"numbered-classes-without-breakpoint"},"Numbered classes without breakpoint."),(0,a.kt)(v,{mdxType:"Row"},(0,a.kt)(k,{mdxType:"Col"},(0,a.kt)("b",null,"Example")),(0,a.kt)(k,{textAlign:"right",mdxType:"Col"},"Check it out on ",(0,a.kt)("a",{href:"https://codepen.io/salilnaik/full/KKvJOqP"},"CodePen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <div class="row">\n        <div class="col-3">col-3</div>\n        <div class="col-5">col-5</div>\n        <div class="col-4">col-4</div>\n    </div>\n</div>\n')),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{className:"pm-col-3",mdxType:"DemoCol"},"col-3"),(0,a.kt)(u,{className:"pm-col-5",mdxType:"DemoCol"},"col-5"),(0,a.kt)(u,{className:"pm-col-4",mdxType:"DemoCol"},"col-4")),(0,a.kt)("p",null,"The numbered classes will take the width as specified by the class, but will not be affected by the breakpoint. Which means that the same layout will be maintained even if the screen size changes."),(0,a.kt)("h3",{id:"classes-with-breakpoint"},"Classes with breakpoint."),(0,a.kt)(v,{mdxType:"Row"},(0,a.kt)(k,{mdxType:"Col"},(0,a.kt)("b",null,"Example")),(0,a.kt)(k,{textAlign:"right",mdxType:"Col"},"Check it out on ",(0,a.kt)("a",{href:"https://codepen.io/salilnaik/full/gOxqVRd"},"CodePen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <div class="row">\n        <div class="col-lg-4 col-md-6">col-lg-4 col-md-6</div>\n        <div class="col-lg-4 col-md-6">col-lg-4 col-md-6</div>\n        <div class="col-lg-4 col-md-6">col-lg-4 col-md-6</div>\n        <div class="col-lg-4 col-md-6">col-lg-4 col-md-6</div>\n    </div>\n</div>\n')),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{className:"pm-col-lg-4 pm-col-md-6",mdxType:"DemoCol"},"col-lg-4 col-md-6"),(0,a.kt)(u,{className:"pm-col-lg-4 pm-col-md-6",mdxType:"DemoCol"},"col-lg-4 col-md-6"),(0,a.kt)(u,{className:"pm-col-lg-4 pm-col-md-6",mdxType:"DemoCol"},"col-lg-4 col-md-6"),(0,a.kt)(u,{className:"pm-col-lg-4 pm-col-md-6",mdxType:"DemoCol"},"col-lg-4 col-md-6")),(0,a.kt)("p",null,"Try to resize the screen and see how the layout changes as per the screen size. For larger screens, that is, 992px and above, each column will take 1/4th of the total space. "),(0,a.kt)("p",null,"For medium screens, that is, 768px and above, each column will take 1/2 of the total space."),(0,a.kt)("p",null,"And for smaller screens, that is, 767.98px and below, the columns will take up the full width."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": PolygonMesh is built mobile first, which means we use ",(0,a.kt)("inlineCode",{parentName:"p"},"min-width")," for the breakpoints. The properties of the classes with smaller breakpoint will be applied untill a class with a larger breakpoint is reached. If there are no classes with larger breakpoints, the property specified by the lower breakpoint will be used."),(0,a.kt)(v,{mdxType:"Row"},(0,a.kt)(k,{mdxType:"Col"},(0,a.kt)("b",null,"Example")),(0,a.kt)(k,{textAlign:"right",mdxType:"Col"},"Check it out on ",(0,a.kt)("a",{href:"https://codepen.io/salilnaik/full/dyzaxVJ"},"CodePen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <div class="row">\n        <div class="col-sm-4">col-sm-4</div>\n        <div class="col-sm-4">col-sm-4</div>\n        <div class="col-sm-4">col-sm-4</div>\n        <div class="col-sm-4">col-sm-4</div>\n    </div>\n</div>\n')),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{className:"pm-col-sm-4",mdxType:"DemoCol"},"col-sm-4"),(0,a.kt)(u,{className:"pm-col-sm-4",mdxType:"DemoCol"},"col-sm-4"),(0,a.kt)(u,{className:"pm-col-sm-4",mdxType:"DemoCol"},"col-sm-4"),(0,a.kt)(u,{className:"pm-col-sm-4",mdxType:"DemoCol"},"col-sm-4")),(0,a.kt)("p",null,"In the above example, the columns will be applied the properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"col-sm-4")," for screensize 576px and above. Since md, lg and xl classes aren't given to the elements, the properties specified by the sm class will remain. "),(0,a.kt)("p",null,"But, for the screen size below 567px (exclusive) the columns will take full width. "),(0,a.kt)("h2",{id:"nested-grid"},"Nested Grid"),(0,a.kt)("p",null,"PolygonMesh allows you to nest grids inside grids. "),(0,a.kt)(v,{mdxType:"Row"},(0,a.kt)(k,{mdxType:"Col"},(0,a.kt)("b",null,"Example")),(0,a.kt)(k,{textAlign:"right",mdxType:"Col"},"Check it out on ",(0,a.kt)("a",{href:"https://codepen.io/salilnaik/full/MWvLNOa"},"CodePen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n    <div class="row">\n        <div class="col-4">col-4</div>\n\n        <div class="col-8">\n          \x3c!-- nesting row inside column --\x3e\n          <div class="row">\n            <div class="col">col-8 > row > col</div>\n            <div class="col">col-8 > row > col</div>\n          </div>\n        </div>\n    </div>\n</div>\n')),(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{className:"pm-col-4",mdxType:"DemoCol"},"col-4"),(0,a.kt)(u,{className:"pm-col-8",mdxType:"DemoCol"},(0,a.kt)(h,{mdxType:"DemoRow"},(0,a.kt)(u,{className:"pm-col",mdxType:"DemoCol"},"col-8 > row > col"),(0,a.kt)(u,{className:"pm-col",mdxType:"DemoCol"},"col-8 > row > col")))))}w.isMDXComponent=!0}}]);