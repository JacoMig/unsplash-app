(this["webpackJsonpunsplash-app"]=this["webpackJsonpunsplash-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/unsplash_logo.ba07b64d.svg"},36:function(e,t,a){e.exports=a(65)},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),o=(a(41),a(16)),s=a(6),m=a(23),i=a.n(m),u=a(33),h=a(26),p=a(10),E=a(21),d=new(a.n(E).a)({accessKey:"MEuxH2124Xgv8CtXngcmn7ZjfLxePKMkSzSJhvoAI-I",secret:"JssVweJ1ZihURscKv0bmS1EcWDZ6ynCJxo-wrFj2OWg",headers:new Headers({Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache"}),timeout:500}),f=a(68),g=a(69),b=a(66),y=a(67),v=function(e){var t=e.photo;return r.a.createElement(b.a,{xs:12,sm:4,lg:3},r.a.createElement(o.b,{to:"/image/".concat(t.id)},r.a.createElement("img",{className:"img-fluid img-thumbnail",src:t.urls.small,alt:t.alt_description})))},j=function(e){var t=e.photos,a=e.loadPhotos,c=e.endLoading,l=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){e[0].isIntersecting&&(console.log("loadPhotos Lazy"),a())}),{root:null,rootMargin:"30px",threshold:1});l.current&&e.observe(l.current)}),[]),r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(v,{key:"".concat(e.id,"-").concat(t),photo:e})})),!c&&r.a.createElement("div",{className:"m-auto",ref:l},r.a.createElement(y.a,{animation:"border",variant:"info"})))},O=0,N=function(e){var t=e.match,a=t.params.query?t.params.query:"",c=Object(n.useState)([]),l=Object(p.a)(c,2),o=l[0],s=l[1],m=Object(n.useState)(!1),v=Object(p.a)(m,2),N=v[0],x=v[1],k=Object(n.useState)(!1),S=Object(p.a)(k,2),_=S[0],w=S[1],C=function(){return(e={query:a,page_start:O+=1},d.search.photos(e.query,e.page_start,12,{orientation:"landscape"}).then(E.toJson)).then((function(e){s((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e.results))})),O===e.total_pages&&x(!0)})).catch((function(e){return console.log(e)}));var e};return Object(n.useEffect)((function(){""!==a&&function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),s([]),O=0,e.next=5,C();case 5:w(!1),x(!1),console.log("initial fetchdata");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),r.a.createElement(f.a,null,r.a.createElement(g.a,null,!_&&o.length>0&&r.a.createElement(j,{endLoading:N,loadPhotos:C,photos:o}),!_&&0===o.length&&r.a.createElement(b.a,{col:12},r.a.createElement("h6",null,"Nessun risultato trovato per: ",r.a.createElement("i",null,a))),_&&r.a.createElement(y.a,{animation:"border",variant:"info"})))},x=a(12),k=a(70),S=a(71),_=a(72),w=a(73),C=a(74),q=function(e){var t=e.photo,a=new Date(t.created_at),c=Object(n.useState)(!1),l=Object(p.a)(c,2),o=l[0],s=l[1];return r.a.createElement(k.a,null,!o&&r.a.createElement("div",{className:"text-center img-placeholder"},r.a.createElement(y.a,{animation:"border",variant:"info"})),t.urls.full&&r.a.createElement(S.a,{className:"".concat(o?"fade-in":""),onLoad:function(e){s(!0)},src:t.urls.full,alt:t.alt_description}),r.a.createElement(_.a,{className:"".concat(o?"":"pt-250")},r.a.createElement(w.a,{className:"mb-5"},t.alt_description&&r.a.createElement("h4",null,t.alt_description),t.description&&r.a.createElement("p",null,t.description)),r.a.createElement(C.a,null,r.a.createElement("span",{className:"icon"},r.a.createElement(x.a,{icon:"user"})),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:t.user.links.html},r.a.createElement("span",{className:"pr-2"},t.user.first_name," ",t.user.last_name))),r.a.createElement("div",{className:"mt-4 d-flex"},r.a.createElement("span",{className:"icon"},r.a.createElement(x.a,{icon:"calendar-alt"})),r.a.createElement("span",null,a&&"".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear()))),t.likes>0&&r.a.createElement("div",{className:"mt-4 d-flex"},r.a.createElement("span",{className:"icon"},r.a.createElement(x.a,{icon:"thumbs-up"})),r.a.createElement("span",null,t.likes)),t.tags.length>0&&r.a.createElement("div",{className:"mt-4"},r.a.createElement("span",{className:"icon"},r.a.createElement(x.a,{icon:"tags"})),t.tags.map((function(e,t){return r.a.createElement("span",{key:"".concat(e.title,"-").concat(t),className:"pr-2 d-inline-block"},e.title)})))))},J=function(e){var t=e.match,a=t.params.id?t.params.id:null,c=Object(n.useState)({}),l=Object(p.a)(c,2),o=l[0],s=l[1];return Object(n.useEffect)((function(){var e;a&&""!==a&&(e={id:a},d.photos.getPhoto(e.id).then(E.toJson)).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}),[a]),r.a.createElement(f.a,{className:"detail"},Object.keys(o).length>0&&r.a.createElement(q,{photo:o}),0===Object.keys(o).length&&r.a.createElement(y.a,{animation:"border",variant:"info"}))},L=a(75),I=a(76),P=a(77),F=a(78),M=a(35),D=function(e){var t=e.match,a=e.history,c=Object(n.useState)(""),l=Object(p.a)(c,2),o=l[0],s=l[1],m=function(e){e.preventDefault(),""!==o&&a.push("/".concat(o))};return Object(n.useEffect)((function(){!t.params.query&&s(""),t.params.query&&s(t.params.query)}),[t.params.query]),r.a.createElement(L.a,{"data-testid":"form",id:"form",onSubmit:m},r.a.createElement(I.a,null,r.a.createElement(P.a,{type:"text",name:"inputQuery","data-testid":"inputQuery",id:"inputQuery",value:o,placeholder:"Search free high resolution photos",onChange:function(e){return t=e.target.value,void s(t);var t}}),r.a.createElement(F.a,{addonType:"append"},r.a.createElement(M.a,{"data-test":"submitButton",id:"submitButton",onClick:m},r.a.createElement(x.a,{icon:"search"})))))},K=a(20),A=a.n(K),B=function(e){var t=e.history,a=e.match;e.label;return r.a.createElement("header",{className:"fixed-top"},r.a.createElement(f.a,{className:"mt-0"},r.a.createElement(g.a,{className:"align-items-center"},r.a.createElement(b.a,{sm:1,onClick:function(){return t.push("/")}},r.a.createElement("img",{className:"d-none d-sm-block",src:A.a,alt:"logo"})),r.a.createElement(b.a,{xs:12,sm:11},r.a.createElement(D,{match:a,history:t})))))},Q=function(e){return r.a.createElement(f.a,{className:"home"},r.a.createElement("img",{className:"d-block d-sm-none homelogo w-25",src:A.a,alt:"logo"}),r.a.createElement(B,{label:"CLICK me PLEASE",match:e.match,history:e.history}))},Z=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(Q,{history:e.history,match:e.match})}}),r.a.createElement(s.a,{exact:!0,path:"/:query",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{history:e.history,match:e.match}),r.a.createElement(N,{match:e.match}))}}),r.a.createElement(s.a,{exact:!0,path:"/image/:id?",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{history:e.history,match:e.match}),r.a.createElement(J,{history:e.history,match:e.match}))}}))},z=a(18),H=a(15);z.b.add(H.b,H.e,H.c,H.d,H.a);var R=function(){return r.a.createElement(o.a,null,r.a.createElement(Z,null))};a(64);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6d08e87c.chunk.js.map