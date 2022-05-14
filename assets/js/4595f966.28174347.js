"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[249],{5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3209:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(5773),o=r(808),i=(r(7378),r(5318)),a=["components"],s={title:"Theme Options",sidebar_position:2,author:"Rohit Gohri",author_url:"https://rohit.page"},p=void 0,c={unversionedId:"getting-started/theme-options",id:"getting-started/theme-options",title:"Theme Options",description:"primaryColor (string, hex/rgba value)",source:"@site/docs/getting-started/theme-options.md",sourceDirName:"getting-started",slug:"/getting-started/theme-options",permalink:"/redocusaurus/docs/getting-started/theme-options",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/theme-options.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Theme Options",sidebar_position:2,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Plugin Options",permalink:"/redocusaurus/docs/getting-started/plugin-options"},next:{title:"Build Time Rendering",permalink:"/redocusaurus/docs/guides/build-time-rendering"}},u={},l=[{value:"primaryColor (string, hex/rgba value)",id:"primarycolor-string-hexrgba-value",level:3},{value:"options (optional, object)",id:"options-optional-object",level:3},{value:"theme (optional, object)",id:"theme-optional-object",level:3}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"primarycolor-string-hexrgba-value"},"primaryColor (string, hex/rgba value)"),(0,i.kt)("p",null,"Convenient way to provide the highlighted color used by Redoc.",(0,i.kt)("br",{parentName:"p"}),"\n","This value will be used as ",(0,i.kt)("inlineCode",{parentName:"p"},"colors.primary.main")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"themes")," option. Must be an actual color value and not a css variable."),(0,i.kt)("h3",{id:"options-optional-object"},"options (optional, object)"),(0,i.kt)("p",null,"Override redoc options passed to ",(0,i.kt)("a",{parentName:"p",href:"https://redoc.ly/docs/redoc/quickstart/react/"},"RedocStandalone")," component. See the defaults ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-theme-redoc/src/redocData.ts#L5-L12"},"here"),"."),(0,i.kt)("p",null,"Available properties ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc#redoc-options-object"},"here"),".",(0,i.kt)("br",{parentName:"p"}),"\n","You cannot set theme property using this property, use ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," option below instead."),(0,i.kt)("h3",{id:"theme-optional-object"},"theme (optional, object)"),(0,i.kt)("p",null,"Override the redoc theme object passed to Redoc. See the default ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc#redoc-theme-object"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note: You should not override any color using this property, as it will be the same value for dark and light themes."))))}m.isMDXComponent=!0}}]);