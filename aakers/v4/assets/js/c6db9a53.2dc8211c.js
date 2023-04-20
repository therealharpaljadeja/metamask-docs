"use strict";(self.webpackChunkmm_docs_v_2=self.webpackChunkmm_docs_v_2||[]).push([[3073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},i),{},{components:n})):a.createElement(h,l({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),u=n(6550),s=n(1980),c=n(7392),i=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var v=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==u&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},4668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const u={description:"Set up a new simple dapp to integrate with MetaMask."},s="Set up your development environment",c={unversionedId:"get-started/set-up-dev-environment",id:"get-started/set-up-dev-environment",title:"Set up your development environment",description:"Set up a new simple dapp to integrate with MetaMask.",source:"@site/wallet/get-started/set-up-dev-environment.md",sourceDirName:"get-started",slug:"/get-started/set-up-dev-environment",permalink:"/aakers/v4/wallet/get-started/set-up-dev-environment",draft:!1,tags:[],version:"current",frontMatter:{description:"Set up a new simple dapp to integrate with MetaMask."},sidebar:"walletSidebar",previous:{title:"Get started",permalink:"/aakers/v4/wallet/category/get-started"},next:{title:"Run a development network",permalink:"/aakers/v4/wallet/get-started/run-development-network"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up a new project",id:"set-up-a-new-project",level:2},{value:"Example",id:"example",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-your-development-environment"},"Set up your development environment"),(0,r.kt)("p",null,"You can easily set up a simple dapp to integrate with MetaMask."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," installed in the browser of your choice on your development\nmachine.\nWe recommend ",(0,r.kt)("a",{parentName:"p",href:"/aakers/v4/wallet/get-started/run-development-network"},"running a development network")," on MetaMask when\ndeveloping a dapp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A text editor of your choice, such as ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),".\nYou can install the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"Live Server"),"\nextension for VS Code to easily launch a local development server for your dapp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A module bundler, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"npm"),"."))),(0,r.kt)("h2",{id:"set-up-a-new-project"},"Set up a new project"),(0,r.kt)("p",null,"Create a project directory with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"simple-dapp/\n\u251c\u2500 src/\n\u2502  \u251c\u2500 index.js\n\u251c\u2500 dist/\n\u2502  \u251c\u2500 index.html\n")),(0,r.kt)("p",null,"For any Ethereum dapp to work, your project script ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/aakers/v4/wallet/get-started/detect-metamask"},"Detect the Ethereum provider.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/aakers/v4/wallet/get-started/detect-network"},"Detect which Ethereum network the user is connected to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/aakers/v4/wallet/get-started/access-accounts"},"Access the user's Ethereum accounts."))),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you import any modules into your project, such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/detect-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider")),", use a bundler such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack"},"Webpack")," to compile the modules and create an output script\n",(0,r.kt)("inlineCode",{parentName:"p"},"dist/main.js"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/getting-started/"},"Webpack's Getting Started guide")," for more information.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We also recommend ",(0,r.kt)("a",{parentName:"p",href:"/aakers/v4/wallet/how-to/use-sdk/"},"importing MetaMask SDK")," to enable a reliable, secure,\nand seamless connection from your dapp to a MetaMask wallet client.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is an example simple dapp script and HTML file:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"JavaScript",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},"/*****************************************/\n/* Detect the MetaMask Ethereum provider */\n/*****************************************/\n\nimport detectEthereumProvider from '@metamask/detect-provider';\n\nconst provider = await detectEthereumProvider();\n\nif (provider) {\n  startApp(provider);\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n}\n\n/**********************************************************/\n/* Handle chain (network) and chainChanged (per EIP-1193) */\n/**********************************************************/\n\nconst chainId = await window.ethereum.request({ method: 'eth_chainId' });\n\nwindow.ethereum.on('chainChanged', handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  window.location.reload();\n}\n\n/***********************************************************/\n/* Handle user accounts and accountsChanged (per EIP-1193) */\n/***********************************************************/\n\nlet currentAccount = null;\nwindow.ethereum.request({ method: 'eth_accounts' })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    console.error(err);\n  });\n\nwindow.ethereum.on('accountsChanged', handleAccountsChanged);\n\nfunction handleAccountsChanged(accounts) {\n  if (accounts.length === 0) {\n    console.log('Please connect to MetaMask.');\n  } else if (accounts[0] !== currentAccount) {\n    currentAccount = accounts[0];\n    showAccount.innerHTML = currentAccount;\n  }\n}\n\n/*********************************************/\n/* Access the user's accounts (per EIP-1102) */\n/*********************************************/\n\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst showAccount = document.querySelector('.showAccount');\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })\n    .catch((err) => {\n      if (err.code === 4001) {\n        console.log('Please connect to MetaMask.');\n      } else {\n        console.error(err);\n      }\n    });\n  const account = accounts[0];\n  showAccount.innerHTML = account;\n}\n"))),(0,r.kt)(l.Z,{label:"HTML",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <title>Simple dapp</title>\n  <script type="module" src="main.js"><\/script>\n</head>\n<body>\n  \x3c!-- Display a connect button and the current account --\x3e\n  <button class="enableEthereumButton">Enable Ethereum</button>\n  <h2>Account: <span class="showAccount"></span></h2>\n</body>\n</html>\n')))))}m.isMDXComponent=!0}}]);