if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(t[s])return;let o={};const f=e=>i(e,s),c={module:{uri:s},exports:o,require:f};t[s]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"safari-pinned-tab.svg",revision:"03bf5fb2a30c5cb621da4a2a442f9c8a"},{url:"manifest.webmanifest",revision:"0c46c85e1f987a8070bd30391f478872"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map