(window["webpackJsonpgerencia-casa"]=window["webpackJsonpgerencia-casa"]||[]).push([[0],{151:function(e,t,a){e.exports=a(294)},156:function(e,t,a){},157:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),l=(a(156),a(157),a(15)),c=a(59),s=a.n(c),u=(a(158),a(325)),m=a(135),f=Object(n.createContext)([{},Function]),d=function(e){var t=Object(n.useContext)(f),a=Object(l.a)(t,2),r=a[0].data,i=(a[1],Object(n.useState)(!0)),d=Object(l.a)(i,2),E=d[0],p=d[1];return o.a.createElement(o.a.Fragment,null,r&&r.map((function(e){return o.a.createElement("div",null,e.subject)})),E?o.a.createElement("div",{style:{paddingBottom:"300px"}},o.a.createElement("div",{style:{paddingTop:"200px",position:"absolute",width:"100%",textAlign:"center"}},o.a.createElement(u.a,{style:{fontSize:"24px"}}),o.a.createElement("p",{style:{fontSize:"24px"}},"AGUARDE!!"))):null,o.a.createElement("div",{style:{position:"fixed",left:"0px",top:"0"}},o.a.createElement(s.a,{onTakePhoto:function(t){p(!0),e.onTakePhoto&&e.onTakePhoto(t)},onCameraError:function(e){p(!1)},idealFacingMode:c.FACING_MODES.ENVIRONMENT,imageType:c.IMAGE_TYPES.JPG,imageCompression:1,isImageMirror:!1,isSilentMode:!0,isDisplayStartCameraError:!0,isFullscreen:!0,sizeFactor:1,onCameraStart:function(e){Object(m.setTimeout)((function(){p(!1)}),300)},onCameraStop:function(){p(!0)}})))},E=a(62),p=a(63);function g(){var e=Object(E.a)(["\n    position: absolute;\n    top: 90%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n"]);return g=function(){return e},e}function b(){var e=Object(E.a)(["\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n"]);return b=function(){return e},e}function v(){var e=Object(E.a)(["\n    position: relative;\n    margin: 0;\n"]);return v=function(){return e},e}var h=p.a.figure(v()),y=p.a.img(b()),w=p.a.figcaption(g()),x=a(339),S=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(l.a)(i,2),s=c[0],u=c[1];return a?o.a.createElement(d,{onTakePhoto:function(e){r(!1),u(e)}}):o.a.createElement(h,null,o.a.createElement("label",{className:"MuiFormLabel-root MuiInputLabel-root ",style:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"}},"Nota"),o.a.createElement(y,{src:s}),o.a.createElement(w,null,o.a.createElement(x.a,{color:"error",style:{fontSize:"50px"},onClick:function(){return r(!0)}})))},j=a(65),O=a(88),k=a(335),T=a(329),z=function(){var e=O.object({email:O.string().required("Name is required, sqn")});return o.a.createElement(j.c,{initialValues:{firstName:""},onSubmit:function(){return alert("oi")},validationSchema:e,render:function(){return o.a.createElement(j.b,null,o.a.createElement(T.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"stretch"},o.a.createElement(T.a,{item:!0,xs:12},o.a.createElement(S,null)),o.a.createElement(T.a,{item:!0,xs:12},o.a.createElement(j.a,{name:"valorTotal",label:"Valor Total",type:"text",component:k.a,margin:"normal",fullWidth:!0}))))}})},A=a(330),N=a(337),C=a(331),M=a(332),R=a(336),W=a(61),P=a(60),F=a(333),G=a(334),I=function(){var e=Object(n.useContext)(f),t=Object(l.a)(e,2),a=t[0].data,r=t[1];return o.a.createElement(T.a,{container:!0,spacing:2},o.a.createElement(T.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:W.a.A700},title:"Gasto Total do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:P.a[900]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(R.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(T.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:G.a.A700},title:"Meus Gastos do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:P.a[500]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(R.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(T.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:W.a.A700},title:"Gasto Total do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:P.a[900]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(R.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(T.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:G.a.A700},title:"Meus Gastos do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:P.a[500]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(R.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(R.a,{onClick:function(){var e=(a||[]).concat({subject:"Yesye"});console.log(e),r({data:e})}},"Teste"))},L=function(){return n.createElement(n.Fragment,null,n.createElement(z,null),n.createElement(I,null))},V=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("body",null,o.a.createElement(L,null)))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){console.log("Iniciando SW"),navigator.serviceWorker.register(e).then((function(e){setTimeout((function(){"granted"==Notification.permission&&navigator.serviceWorker.getRegistration().then((function(e){var t={body:"Here is a notification body!",icon:"images/example.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e&&e.showNotification("Hello world!",t)}))}),5e3),e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");$?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}(),Notification.requestPermission((function(e){console.log("Notification permission status:",e)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.e5da45ec.chunk.js.map