import{_ as m}from"./EMTTitle-f148de44.js";import{_ as d,o as n,c,e,j as o,D as p,f as r,U as f,p as h,i as v,l as u,F as g,E as b,s as x,I as y,h as S,b as $}from"./main-ea7617f2.js";import{s as k}from"./Url-6980f45c.js";const w={},i=s=>(h("data-v-6fe72d26"),s=s(),v(),s),C={class:"d-flex justify-content-between align-items-center p-2 px-3"},D={class:"col-auto"},I={class:"d-flex align-items-center gap-2"},U=i(()=>e("span",{class:"header-button p-2"},[e("i",{class:"fa-solid fa-bars"})],-1)),T={class:"col-auto"},B={class:"d-flex align-items-center gap-2"},z={class:"header-button account px-3"},E={class:"me-2 text-capitalize small fw-bolder"},N=i(()=>e("i",{class:"fa-solid fa-user"},null,-1)),V=i(()=>e("div",{class:"account-menu"},[e("button",{class:"text-capitalize small px-3 fw-bolder header-button bg-transparent"}," keluar ")],-1));function j(s,l){var t;const a=m;return n(),c("header",C,[e("div",D,[e("div",I,[U,o(a,{class:"s-md"})])]),e("div",T,[e("div",B,[e("div",z,[e("div",E,[e("span",null,p((t=("UserStore"in s?s.UserStore:r(f))().user.appData)==null?void 0:t.name),1)]),N]),V])])])}const A=d(w,[["render",j],["__scopeId","data-v-6fe72d26"]]);const F={},H={class:"d-flex flex-column p-2"};function L(s,l){const a=u("router-link");return n(),c("aside",null,[e("div",H,[(n(!0),c(g,null,b(("AppStore"in s?s.AppStore:r($))().appData.menu,(t,_)=>(n(),x(a,{key:_,to:{name:"dashboard-manage-content",params:{selectedContent:`${("stringToUrlConverter"in s?s.stringToUrlConverter:r(k))(String(t.name).toLowerCase())}`}},class:"menu-link p-3 py-1 text-dark text-capitalize rounded"},{default:y(()=>[S(p(t.name),1)]),_:2},1032,["to"]))),128))])])}const M=d(F,[["render",L],["__scopeId","data-v-8a8c41fa"]]);const q={},G={class:"app-layout adminDashboard",style:{display:"grid"}},J={class:"content"};function K(s,l){const a=M,t=A,_=u("router-view");return n(),c("div",G,[o(a,{class:"sidebar"}),o(t,{class:"header"}),e("main",J,[o(_)])])}const R=d(q,[["render",K],["__scopeId","data-v-1cfa9b48"]]);export{R as default};
//# sourceMappingURL=Dashboard-c35386f5.js.map