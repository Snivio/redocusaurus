"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[982],{5318:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return f}});var r=o(7378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=n,g=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return o?r.createElement(g,a(a({ref:t},p),{},{components:o})):r.createElement(g,a({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2333:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=o(5773),n=o(808),i=(o(7378),o(5318)),a=["components"],l={title:"Plugin Options",sidebar_position:1,author:"Rohit Gohri",author_url:"https://rohit.page"},u=void 0,s={unversionedId:"getting-started/plugin-options",id:"getting-started/plugin-options",title:"Plugin Options",description:"spec (required, string: file path or remote absolute url)",source:"@site/docs/getting-started/plugin-options.md",sourceDirName:"getting-started",slug:"/getting-started/plugin-options",permalink:"/redocusaurus/docs/getting-started/plugin-options",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/plugin-options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Plugin Options",sidebar_position:1,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/redocusaurus/docs/getting-started/Installation"},next:{title:"Theme Options",permalink:"/redocusaurus/docs/getting-started/theme-options"}},p={},c=[{value:"spec (required, string: file path or remote absolute url)",id:"spec-required-string-file-path-or-remote-absolute-url",level:3},{value:"route (optional, string: relative uri)",id:"route-optional-string-relative-uri",level:3},{value:"layout (optional, object: layoutProps)",id:"layout-optional-object-layoutprops",level:3},{value:"config (optional, string or object: redoclyConfig)",id:"config-optional-string-or-object-redoclyconfig",level:3}],d={toc:c};function f(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"spec-required-string-file-path-or-remote-absolute-url"},"spec (required, string: file path or remote absolute url)"),(0,i.kt)("p",null,"Either a file path to an OpenAPI YAML/JSON file, or a url to one hosted on some website (not the same docusaurus website). Will be ",(0,i.kt)("strong",{parentName:"p"},"parsed")," at build time and forwarded to Redoc component. We will also automatically generate a single downloadable YAML and add it as a static asset to be used as the download url."),(0,i.kt)("h3",{id:"route-optional-string-relative-uri"},"route (optional, string: relative uri)"),(0,i.kt)("p",null,"Route URL at which docs would be available, this will use the theme component ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/ApiDoc")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-theme-redoc")," to render the page. You can also skip this option and render the docs as you wish using a custom page."),(0,i.kt)("h3",{id:"layout-optional-object-layoutprops"},"layout (optional, object: layoutProps)"),(0,i.kt)("p",null,"An object to pass as layout props. Useful to set title/description of the page. See all properties available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc/src/options.ts#L3"},"here"),"."),(0,i.kt)("h3",{id:"config-optional-string-or-object-redoclyconfig"},"config (optional, string or object: redoclyConfig)"),(0,i.kt)("p",null,"Redocly config to bundle file. You can provide a custom path to a ",(0,i.kt)("inlineCode",{parentName:"p"},"redocly.yaml")," file, if not provided then it will try to load it from the root of your project if it exists."),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://redocly.com/docs/cli/configuration/configuration-file/"},"https://redocly.com/docs/cli/configuration/configuration-file/")))}f.isMDXComponent=!0}}]);