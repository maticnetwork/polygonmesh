"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,y=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},910:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Installation",c={unversionedId:"css-library/getting-started",id:"css-library/getting-started",isDocsHomePage:!1,title:"Installation",description:"The CSS Library is essentially a CSS file that you can include in your HTML. Currently, only the CSS version of the library is available. We are planning to publish the NPM package soon which will include the SCSS version too.",source:"@site/docs/css-library/getting-started.md",sourceDirName:"css-library",slug:"/css-library/getting-started",permalink:"/polygonmesh/docs/css-library/getting-started",editUrl:"https://github.com/maticnetwork/polygonmesh/edit/docs/docs/css-library/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/polygonmesh/docs/intro"},next:{title:"Breakpoints",permalink:"/polygonmesh/docs/css-library/Layout/breakpoints"}},p=[{value:"Using CDN",id:"using-cdn",children:[]},{value:"Responsive meta tag",id:"responsive-meta-tag",children:[]},{value:"Reset CSS",id:"reset-css",children:[]},{value:"Community",id:"community",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The CSS Library is essentially a CSS file that you can include in your HTML. Currently, only the CSS version of the library is available. We are planning to publish the NPM package soon which will include the SCSS version too."),(0,i.kt)("h2",{id:"using-cdn"},"Using CDN"),(0,i.kt)("p",null,"To include CSS in your project, use jsDelivr, a free open source CDN. This is the quickest way, and currently the only way to include PolygonMesh in your project."),(0,i.kt)("p",null,"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"<link>")," tag below into the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML file before any other CSS files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link\n  href="https://cdn.jsdelivr.net/gh/maticnetwork/matic-design-system@css-master/style.css"\n  rel="stylesheet"\n  crossorigin="anonymous"\n/>\n')),(0,i.kt)("h2",{id:"responsive-meta-tag"},"Responsive meta tag"),(0,i.kt)("p",null,"PolygonMesh, like any other major CSS libraries, follows the ",(0,i.kt)("strong",{parentName:"p"},"mobile first approach"),". In order for this to work smoothly on all devices, you will have to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"<meta>")," tag inside ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="viewport" content="width=device-width, initial-scale=1" />\n')),(0,i.kt)("h2",{id:"reset-css"},"Reset CSS"),(0,i.kt)("p",null,"To override some of the default browser styles, we have reset some of the CSS properties. The ",(0,i.kt)("strong",{parentName:"p"},"box-sizing")," property is set to ",(0,i.kt)("strong",{parentName:"p"},"border-box")," from the default value of content-box. This ensures that the ",(0,i.kt)("span",{class:"var"},"padding")," doesn't affect the final width of the element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"* {\n  box-sizing: border-box;\n}\n\nh1, h2, h3, h4, h5, h6, p, body {\n  margin: 0;\n}\n")),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"This project is still in the alpha version and is being used and tested internally by the Polygon Team. You can reach out to the developers by joining our official ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/polygon"},"discord server"),"."),(0,i.kt)("p",null,"You can give your suggestions and ask the queries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"#polygon-mesh")," channel on the server."))}d.isMDXComponent=!0}}]);