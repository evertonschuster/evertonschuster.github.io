(window["webpackJsonpgerencia-casa"]=window["webpackJsonpgerencia-casa"]||[]).push([[0],{151:function(e,t,n){e.exports=n(294)},156:function(e,t,n){},157:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=(n(156),n(157),n(15)),c=n(59),s=n.n(c),u=(n(158),n(325)),m=n(135),f=Object(a.createContext)([{},Function]),d=function(e){var t=Object(a.useContext)(f),n=Object(l.a)(t,2),r=n[0].data,i=(n[1],Object(a.useState)(!0)),d=Object(l.a)(i,2),E=d[0],g=d[1];return o.a.createElement(o.a.Fragment,null,r&&r.map((function(e){return o.a.createElement("div",null,e.subject)})),E?o.a.createElement("div",{style:{paddingBottom:"300px"}},o.a.createElement("div",{style:{paddingTop:"200px",position:"absolute",width:"100%",textAlign:"center"}},o.a.createElement(u.a,{style:{fontSize:"24px"}}),o.a.createElement("p",{style:{fontSize:"24px"}},"AGUARDE!!"))):null,o.a.createElement("div",{style:{position:"fixed",left:"0px",top:"0"}},o.a.createElement(s.a,{onTakePhoto:function(t){g(!0),e.onTakePhoto&&e.onTakePhoto(t)},onCameraError:function(e){g(!1)},idealFacingMode:c.FACING_MODES.ENVIRONMENT,imageType:c.IMAGE_TYPES.JPG,imageCompression:1,isImageMirror:!1,isSilentMode:!0,isDisplayStartCameraError:!0,isFullscreen:!0,sizeFactor:1,onCameraStart:function(e){Object(m.setTimeout)((function(){g(!1)}),300)},onCameraStop:function(){g(!0)}})))},E=n(62),g=n(63);function p(){var e=Object(E.a)(["\n    position: absolute;\n    top: 90%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n"]);return p=function(){return e},e}function b(){var e=Object(E.a)(["\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n"]);return b=function(){return e},e}function v(){var e=Object(E.a)(["\n    position: relative;\n    margin: 0;\n"]);return v=function(){return e},e}var h=g.a.figure(v()),y=g.a.img(b()),w=g.a.figcaption(p()),x=n(339),S=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),s=c[0],u=c[1];return n?o.a.createElement(d,{onTakePhoto:function(e){r(!1),u(e)}}):o.a.createElement(h,null,o.a.createElement("label",{className:"MuiFormLabel-root MuiInputLabel-root ",style:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"}},"Nota"),o.a.createElement(y,{src:s}),o.a.createElement(w,null,o.a.createElement(x.a,{color:"error",style:{fontSize:"50px"},onClick:function(){return r(!0)}})))},j=n(65),z=n(88),O=n(335),k=n(329),T=function(){var e=z.object({email:z.string().required("Name is required, sqn")});return o.a.createElement(j.c,{initialValues:{firstName:""},onSubmit:function(){return alert("oi")},validationSchema:e,render:function(){return o.a.createElement(j.b,null,o.a.createElement(k.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"stretch"},o.a.createElement(k.a,{item:!0,xs:12},o.a.createElement(S,null)),o.a.createElement(k.a,{item:!0,xs:12},o.a.createElement(j.a,{name:"valorTotal",label:"Valor Total",type:"text",component:O.a,margin:"normal",fullWidth:!0}))))}})},A=n(330),N=n(337),C=n(331),M=n(332),W=n(336),P=n(61),R=n(60),F=n(333),L=n(334),G=function(){var e=Object(a.useContext)(f),t=Object(l.a)(e,2),n=t[0].data,r=t[1];return o.a.createElement(k.a,{container:!0,spacing:2},o.a.createElement(k.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:P.a.A700},title:"Gasto Total do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:R.a[900]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(W.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(k.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:L.a.A700},title:"Meus Gastos do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:R.a[500]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(W.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(k.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:P.a.A700},title:"Gasto Total do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:R.a[900]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(W.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(k.a,{item:!0,xs:12,lg:4},o.a.createElement(A.a,null,o.a.createElement(N.a,{style:{color:L.a.A700},title:"Meus Gastos do M\xeas",subheader:"30/01/3019"}),o.a.createElement(C.a,null,o.a.createElement("span",{style:{fontSize:"30px",color:R.a[500]}},"R$ 500,00")),o.a.createElement(M.a,null,o.a.createElement(W.a,{size:"medium",style:{marginLeft:"auto",color:F.a[400]}},"Visualizar")))),o.a.createElement(W.a,{onClick:function(){var e=(n||[]).concat({subject:"Yesye"});console.log(e),r({data:e})}},"Teste"))},I=function(){return a.createElement(a.Fragment,null,a.createElement(T,null),a.createElement(G,null))},V=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("body",null,o.a.createElement(I,null)))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){console.log("Iniciando SW"),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)})),navigator.serviceWorker.ready.then((function(e){return console.log("Registrado"),e.sync.register("myFirstSync")}))}i.a.render(o.a.createElement(V,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");q?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)})),window.addEventListener("sync",(function(e){Notification.requestPermission((function(e){"granted"===e&&navigator.serviceWorker.ready.then((function(e){e.showNotification("Vibration Sample",{body:"Buzz! Buzz! Ofline",icon:"../images/touch/chrome-touch-icon-192x192.png",vibrate:[200,100,200,100,200,100,200],tag:"vibration-sample"})}))}))}))}}(),Notification.requestPermission((function(e){console.log("Notification permission status:",e)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.1d477676.chunk.js.map