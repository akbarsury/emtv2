import{u as m}from"./Url-4d04c3c7.js";import{d as k,a as r,u as A,r as O,B as C,o as n,c as i,e as t,f as e,t as u,U as v,F as $,C as j,g as p,n as V,b as h,w as I,E as B,A as P,m as T,s as D,_ as L}from"./main-e0264e12.js";const q={id:"finalEvaluation"},z={key:0,class:"d-flex flex-column gap-4 w-100"},F={class:"border-bottom border-secondary"},H={class:"h4 fw-bolder text-uppercase"},M={key:0,class:"d-flex flex-column gap-4"},N=e("div",{class:"border-bottom border-secondary"},[e("div",{class:"p-3 bg-success text-light rounded-4 mb-4"}," Evaluasi sudah dilaksanakan ")],-1),G={class:"d-flex flex-column gap-4"},x={class:"container"},J={class:"d-flex flex-column gap-2"},K={class:"d-flex fw-bolder gap-2"},Q={class:"col-auto"},W={class:""},X={class:"col text-wrap"},Y={class:"d-flex flex-column gap-2"},Z={key:0,class:"col-12"},ee={class:"col rounded-5 shadow overflow-hidden"},te=["src"],ae={class:"col-12"},se={class:""},oe={class:"px-4"},ne={class:"d-flex flex-column gap-2"},le={class:"d-flex flex-column gap-2"},ie=e("span",{class:"text-capitalize"}," Jawaban terpilih : ",-1),re={class:"d-flex gap-2"},ce={class:"col-auto"},ue={class:"text-uppercase"},de={class:"col"},pe={class:"d-flex flex-column gap-2"},ve=e("span",{class:"text-capitalize"}," kunci jawaban : ",-1),_e={class:"container bg-light text-success border border-success border-2 rounded py-2"},he={class:"d-flex gap-2"},me={class:"col-auto"},be={class:"text-uppercase"},ge={class:"col"},fe={key:1,class:"d-flex flex-column gap-4"},ye={class:"container"},$e={class:"d-flex flex-column gap-2"},je={class:"d-flex fw-bolder gap-2"},Se={class:"col-auto"},ke={class:""},Oe={class:"col text-wrap"},Ce={class:"d-flex flex-column"},we={class:"col-12"},Re={key:0,class:"d-flex justify-content-center"},Ue={class:"col rounded-5 shadow overflow-hidden"},Te=["src"],De={class:"col-12"},Ee={class:""},Ae={class:"ps-4"},Ie={class:"col-auto"},Be=["name","id","value","onUpdate:modelValue"],Pe={class:"col"},Ve=["for"],Le={class:"col-12"},qe=k({__name:"FinalEvaluation",setup(w){const b=r(),d=A(),_=O(!1),g=C({});setTimeout(()=>{setTimeout(()=>{_.value=!0},500)},500);const o=()=>{Object(h().appCacheData[`${m(String(b.params.playingContent))}`]).data.length>Object.keys(g).length?alert("jawaban harus terisi semua"):(v().user.appData.finalEvaluation={...v().user.appData.finalEvaluation,...g},setTimeout(()=>{P.updateUserAppData().then(c=>{c.status===!0?(d.push("#finalEvaluation"),alert("evaluasi terkirim")):alert("evaluasi gagal terkirim")})},1e3))};return(a,c)=>(n(),i("div",q,[t(_)?(n(),i("div",z,[e("div",F,[e("h1",H,u(("urlToStringConverter"in a?a.urlToStringConverter:t(m))(String(("useRoute"in a?a.useRoute:t(r))().params.playingContent))),1)]),("UserStore"in a?a.UserStore:t(v))().user.appData.finalEvaluation?(n(),i("div",M,[N,e("div",G,[(n(!0),i($,null,j(Object(("AppStore"in a?a.AppStore:t(h))().appCacheData[`${("urlToStringConverter"in a?a.urlToStringConverter:t(m))(String(("useRoute"in a?a.useRoute:t(r))().params.playingContent))}`]).data,(l,s)=>(n(),i("div",{class:"col-12",key:s},[e("div",x,[e("div",J,[e("div",K,[e("div",Q,[e("span",W,u(s+1)+".",1)]),e("div",X,[e("div",Y,[Object(l).questionImage!==""?(n(),i("div",Z,[e("div",ee,[e("img",{src:Object(l).questionImage,alt:"",class:"img-fluid"},null,8,te)])])):p("",!0),e("div",ae,[e("span",se,u(Object(l).question),1)])])])]),e("div",oe,[e("div",ne,[e("div",le,[ie,e("div",{class:V(["container bg-light border border-2 rounded py-2",Object(l).trueAnswer===Object(("UserStore"in a?a.UserStore:t(v))().user.appData.finalEvaluation)[`${Object(l).id}`]?"text-success border-success":"text-danger border-danger"])},[e("div",re,[e("div",ce,[e("span",ue,u(Object(("UserStore"in a?a.UserStore:t(v))().user.appData.finalEvaluation)[`${Object(l).id}`])+". ",1)]),e("div",de,[e("span",null,u(Object(l).answerOption[`${Object(("UserStore"in a?a.UserStore:t(v))().user.appData.finalEvaluation)[`${Object(l).id}`]}`]),1)])])],2)]),e("div",pe,[ve,e("div",_e,[e("div",he,[e("div",me,[e("span",be,u(Object(l).trueAnswer)+". ",1)]),e("div",ge,[e("span",null,u(Object(l).answerOption[`${Object(l).trueAnswer}`]),1)])])])])])])])])]))),128))])])):p("",!0),("UserStore"in a?a.UserStore:t(v))().user.appData.finalEvaluation?p("",!0):(n(),i("div",fe,[(n(!0),i($,null,j(Object(("AppStore"in a?a.AppStore:t(h))().appCacheData[`${("urlToStringConverter"in a?a.urlToStringConverter:t(m))(String(("useRoute"in a?a.useRoute:t(r))().params.playingContent))}`]).data,(l,s)=>(n(),i("div",{class:"col-12",key:s},[e("div",ye,[e("div",$e,[e("div",je,[e("div",Se,[e("span",ke,u(s+1)+".",1)]),e("div",Oe,[e("div",Ce,[e("div",we,[Object(l).questionImage!==""?(n(),i("div",Re,[e("div",Ue,[e("img",{src:Object(l).questionImage,alt:"",class:"img-fluid"},null,8,Te)])])):p("",!0)]),e("div",De,[e("span",Ee,u(Object(l).question),1)])])])]),e("div",Ae,[(n(!0),i($,null,j(Object(l).answerOption,(y,f)=>(n(),i("div",{class:"form-check d-flex",key:f},[e("div",Ie,[I(e("input",{class:"form-check-input",type:"radio",name:Object(l).id,id:`${f}${Object(l).id}`,value:f,"onUpdate:modelValue":S=>t(g)[`${Object(l).id}`]=S},null,8,Be),[[B,t(g)[`${Object(l).id}`]]])]),e("div",Pe,[e("label",{class:"form-check-label",for:`${f}${Object(l).id}`},u(Object(y)),9,Ve)])]))),128))])])])]))),128)),e("div",Le,[e("button",{class:"footer-select-content button-style bg-primary text-light px-auto",onClick:c[0]||(c[0]=l=>o())}," kirim jawaban ")])]))])):p("",!0)]))}}),ze={key:0,class:"d-flex flex-column gap-4 w-100"},Fe={class:"border-bottom border-secondary"},He={class:"h4 fw-bolder text-uppercase"},Me={key:0},Ne=e("div",{class:"container"},[e("div",{class:"p-3 bg-success text-light rounded-4"}," Evaluasi sudah dilaksanakan ")],-1),Ge=[Ne],xe={key:1},Je={class:"container"},Ke={class:"d-flex"},Qe={class:"col-auto"},We={class:""},Xe={class:"col text-wrap"},Ye={class:""},Ze={class:"ps-4"},et={class:"col-auto"},tt=["name","id","value","onUpdate:modelValue"],at={class:"col"},st=["for"],ot={key:2},nt=k({__name:"Evaluation",setup(w){const b=O(!1),d=r(),_=C({});setTimeout(()=>{_[`${d.query.evaluation}`]={},setTimeout(()=>{b.value=!0},500)},500);const g=()=>{Object.keys(h().appCacheData[`${d.params.playingContent}`].evaluation[`${d.query.evaluation}`]).length>Object.keys(_[`${d.query.evaluation}`]).length?alert("jawaban harus terisi semua"):(v().user.appData.evaluation={...v().user.appData.evaluation,..._},setTimeout(()=>{P.updateUserAppData().then(a=>{a.status===!0?alert("evaluasi terkirim"):alert("evaluasi gagal terkirim")})},1e3))};return(o,a)=>(n(),i("div",null,[t(b)?(n(),i("div",ze,[e("div",Fe,[e("h1",He,"evaluasi "+u(Object(("AppStore"in o?o.AppStore:t(h))().appCacheData.pembelajaran.subContent)[`${("useRoute"in o?o.useRoute:t(r))().query.evaluation}`].name),1)]),Object(("UserStore"in o?o.UserStore:t(v))().user.appData.evaluation)[`${t(d).query.evaluation}`]?(n(),i("div",Me,Ge)):p("",!0),Object(("UserStore"in o?o.UserStore:t(v))().user.appData.evaluation)[`${t(d).query.evaluation}`]?p("",!0):(n(),i("div",xe,[(n(!0),i($,null,j(("AppStore"in o?o.AppStore:t(h))().appCacheData[`${("useRoute"in o?o.useRoute:t(r))().params.playingContent}`].evaluation[`${("useRoute"in o?o.useRoute:t(r))().query.evaluation}`],(c,l)=>(n(),i("div",{class:"",key:l},[e("div",Je,[e("div",Ke,[e("div",Qe,[e("span",We,u(l+1)+".",1)]),e("div",Xe,[e("span",Ye,u(Object(c).question),1)])]),e("div",Ze,[(n(!0),i($,null,j(Object(c).answerOption,(s,y)=>(n(),i("div",{class:"form-check d-flex",key:y},[e("div",et,[I(e("input",{class:"form-check-input",type:"radio",name:Object(c).id,id:`${y}${Object(c).id}`,value:y,"onUpdate:modelValue":f=>t(_)[`${t(d).query.evaluation}`][`${Object(c).id}`]=f},null,8,tt),[[B,t(_)[`${t(d).query.evaluation}`][`${Object(c).id}`]]])]),e("div",at,[e("label",{class:"form-check-label",for:`${y}${Object(c).id}`},u(Object(s)),9,st)])]))),128))])])]))),128))])),Object(("UserStore"in o?o.UserStore:t(v))().user.appData.evaluation)[`${t(d).query.evaluation}`]?p("",!0):(n(),i("div",ot,[("useRoute"in o?o.useRoute:t(r))().params.playingContent==="pembelajaran"&&("useRoute"in o?o.useRoute:t(r))().query.evaluation?(n(),i("button",{key:0,class:"footer-select-content button-style bg-primary text-light px-auto",onClick:a[0]||(a[0]=c=>g())}," kirim jawaban ")):p("",!0)]))])):p("",!0)]))}}),E=""+new URL("writing-31c0774b.png",import.meta.url).href,lt={key:0,class:"content d-flex flex-column gap-4"},it={key:0,class:"playing-header mb-3"},rt={class:"h5 d-inline-block title-style text-uppercase fw-bolder mb-3 p-2 px-4"},ct={key:3,class:"playing animate__animated animate__fadeInUpBig d-flex flex-column justify-content-center shadow rounded-9 p-4 m-2"},ut={class:"playing-header mb-3"},dt={class:"h5 d-inline-block title-style text-uppercase fw-bolder mb-3 p-2 px-4"},pt={class:"playing-content d-flex flex-column"},vt=["innerHTML"],_t=k({__name:"Play",setup(w){var c,l;const b=r(),d=A(),_=m(String(b.params.playingContent)),g=m(String(b.query.sub)),o=C({name:(c=Object(h().appCacheData[`${_}`].subContent)[`${g}`])==null?void 0:c.name,pages:(l=Object(h().appCacheData[`${_}`].subContent)[`${g}`])==null?void 0:l.page});h().appData.subContentActive=o;const a=O(!1);return setTimeout(()=>{a.value=!0},1e3),d.afterEach(()=>{a.value=!1,setTimeout(()=>{a.value=!0},1e3)}),(s,y)=>{var R,U;const f=nt,S=qe;return n(),i("div",null,[t(a)?(n(),i("div",lt,[("urlToStringConverter"in s?s.urlToStringConverter:t(m))(String(("useRoute"in s?s.useRoute:t(r))().params.playingContent))==="pembelajaran"&&("useRoute"in s?s.useRoute:t(r))().query.evaluation||("urlToStringConverter"in s?s.urlToStringConverter:t(m))(String(("useRoute"in s?s.useRoute:t(r))().params.playingContent))==="evaluasi akhir"?(n(),i("div",it,[e("div",{class:"playing-header-icon",style:T({backgroundImage:`url(${t(E)})`})},null,4),e("h1",rt,u((R=t(o))!=null&&R.name?(U=t(o))==null?void 0:U.name:("AppStore"in s?s.AppStore:t(h))().activeContent.data.name),1)])):p("",!0),("urlToStringConverter"in s?s.urlToStringConverter:t(m))(String(("useRoute"in s?s.useRoute:t(r))().params.playingContent))==="pembelajaran"&&("useRoute"in s?s.useRoute:t(r))().query.evaluation?(n(),D(f,{key:1,class:"playing animate__animated animate__fadeInUpBig d-flex flex-column justify-content-center shadow rounded-9 p-4 m-2"})):("urlToStringConverter"in s?s.urlToStringConverter:t(m))(String(("useRoute"in s?s.useRoute:t(r))().params.playingContent))==="evaluasi akhir"?(n(),D(S,{key:2,class:"playing animate__animated animate__fadeInUpBig d-flex flex-column justify-content-center shadow rounded-9 p-4 m-2"})):(n(),i("div",ct,[e("div",ut,[e("div",{class:"playing-header-icon",style:T({backgroundImage:`url(${t(E)})`})},null,4),e("h1",dt,u(t(o).name),1)]),e("div",pt,[Object(Object.values(t(o).pages[`${Number(t(b).query.page)-1}`])[0]).type==="delta"?(n(),i("div",{key:0,innerHTML:("AppStore"in s?s.AppStore:t(h))().quilToHTML({ops:Object(Object.values(t(o).pages[`${Number(t(b).query.page)-1}`])[0]).data.ops}).convert()},null,8,vt)):p("",!0)])]))])):p("",!0)])}}});const bt=L(_t,[["__scopeId","data-v-1980c6be"]]);export{bt as default};
//# sourceMappingURL=Play-402d78e0.js.map