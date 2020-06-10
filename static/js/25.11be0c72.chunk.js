(this["webpackJsonpcontrole-fluxo-empresarial"]=this["webpackJsonpcontrole-fluxo-empresarial"]||[]).push([[25],{571:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),o=t(184),i=t(10),l=(t(673),t(70)),s=t.n(l),u=t(104),m=t(49),d=t(4),f=t(606),p=t(86),b=t(36),h=t(603),v=t(87),E=t(105),w=function(e){return E.object().shape({userName:E.string().required("Informe o nome do usu\xe1rio."),phoneNumber:E.string().nullable().required("Informe o n\xfamero de telefone."),email:E.string().email("Informe um email v\xe1lido.").required("Informe o email."),password:E.string().required((function(){return e===v.b.New?"Informe uma senha.":void 0})),confirmPassword:E.string().oneOf([E.ref("password"),null],"Senha e Confirmar senha n\xe3o coincidem.").required((function(a){return e===v.b.New?"Informe uma senha.":void 0}))})},g=E.object().shape({currentPassword:E.string().required("Informe a senha atual."),newPassword:E.string().required("Informe a nova senha."),confirmPassword:E.string().oneOf([E.ref("newPassword"),null],"Senha e Confirmar senha n\xe3o coincidem.").required("Informe a nova senha.")}),y=t(188),O=t(194),j=Object(d.h)((function(e){var a=Object(r.useState)({userName:"",email:"",phoneNumber:"",password:"",confirmPassword:""}),t=Object(m.a)(a,2),n=t[0],o=t[1],i=Object(r.useState)(!1),l=Object(m.a)(i,2),d=l[0],E=l[1],g=Object(r.useContext)(v.c).formMode;function j(){return(j=Object(u.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,E(!0),e.next=6,O.a.GetById(a);case 6:t=e.sent,o(t.data);case 8:return e.prev=8,E(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[2,,8,11]])})))).apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark((function a(t,n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!e.match.params.id){a.next=6;break}return a.next=4,O.a.Update(t);case 4:a.next=8;break;case 6:return a.next=8,O.a.Save(t);case 8:e.history.push("/user"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),Object(y.a)(n,a.t0,["passwordMismatch"]);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(e){j.apply(this,arguments)}(e.match.params.id)}),[e.match.params.id]),c.a.createElement(f.a,{isLoading:d,backPath:"/user",breadcrumbList:[{displayName:"Usu\xe1rios",URL:"/user"},{displayName:"Novo Usuario",URL:void 0}],initialValues:n,validationSchema:w(g),onSubmit:function(e,a){return x.apply(this,arguments)}},c.a.createElement(p.a,null,c.a.createElement(b.a,{span:2},c.a.createElement(h.b,{name:"id",label:"C\xf3digo",placeholder:"Codigo",readOnly:!0})),c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"userName",label:"Nome",placeholder:"Nome",required:!0}))),c.a.createElement(p.a,null,c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"phoneNumber",label:"Telefone",placeholder:"(45) 9882932328",required:!0})),c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"email",label:"E-mail",placeholder:"joao@gmai.com",required:!0,type:"email"}))),c.a.createElement(p.a,{hidden:!(g===v.b.New)},c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"password",label:"Senha",required:!0,type:"password"})),c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"confirmPassword",label:"Confirmar Senha",required:!0,type:"password"}))))})),x=Object(d.h)((function(e){var a=Object(r.useState)(!1),t=Object(m.a)(a,2),n=t[0],o=t[1];function i(){return(i=Object(u.a)(s.a.mark((function a(t,n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o(!0),a.next=4,O.a.ChangePasswordUser(t);case 4:e.history.push("/user"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),Object(y.a)(n,a.t0,["passwordMismatch"]);case 10:return a.prev=10,o(!1),a.finish(10);case 13:case"end":return a.stop()}}),a,null,[[0,7,10,13]])})))).apply(this,arguments)}return c.a.createElement(f.a,{isLoading:n,initialErrors:{password:"Senha deve conter no minimo 6 caracteres."},backPath:"/user",breadcrumbList:[{displayName:"Usu\xe1rios",URL:"/user"},{displayName:"Novo Usuario",URL:void 0}],initialValues:{currentPassword:"",newPassword:"",confirmPassword:"",password:""},validationSchema:g,onSubmit:function(e,a){return i.apply(this,arguments)}},c.a.createElement(p.a,null,c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"currentPassword",label:"Senha Atual",required:!0,type:"password"}))),c.a.createElement(p.a,null,c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"newPassword",label:"Nova Senha",required:!0,type:"password"}))),c.a.createElement(p.a,null,c.a.createElement(b.a,{span:12},c.a.createElement(h.b,{name:"confirmPassword",label:"Confirmar Senha",required:!0,type:"password"}))))}));!function(e){e.Profile="Profile",e.changePassword="changePassword"}(n||(n={}));a.default=function(){var e=o.a.TabPane,a=Object(r.useContext)(v.c).formMode;return c.a.createElement(o.a,{defaultActiveKey:n.Profile},c.a.createElement(e,{tab:c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{type:"user"}),"Informa\xe7\xf5es basicas"),key:n.Profile},c.a.createElement(j,null)),c.a.createElement(e,{disabled:a===v.b.New,tab:c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{type:"key"}),"Trocar de senha"),key:n.changePassword},c.a.createElement(x,null)))}},597:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(87);t(598);a.a=Object(n.memo)((function(e){var a=Object(n.useContext)(c.c).setBreadcrumb;return Object(n.useEffect)((function(){a(e.breadcrumbList)}),[]),r.a.createElement("div",{className:"form-application-container"},e.children)}))},598:function(e,a,t){},601:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"d",(function(){return u})),t.d(a,"b",(function(){return m})),t.d(a,"a",(function(){return d}));var n=t(49),r=t(0),c=t.n(r),o=t(591),i=t(87),l=t(37),s=function(e,a){return function(t){var n=Object(r.useContext)(i.c),l=null!=n&&n.formMode===i.b.View,s=t.disabled||l;return c.a.createElement(o.a,{name:t.name,label:t.label||"",required:t.required,className:"form-custom-item"},c.a.createElement(e,Object.assign({autoComplete:"off",disabled:s},a,t,{required:!1,style:{width:"100%"}})))}},u=function(e,a){return function(t){var s=Object(r.useContext)(i.c),u=Object(l.g)({name:t.name}),m=Object(n.a)(u,3),d=m[0],f=(m[1],m[2],null!=s&&s.formMode===i.b.View),p=t.disabled||f;return c.a.createElement(o.a,{name:t.name,label:t.label||"",required:t.required,className:"form-custom-item"},c.a.createElement(e,Object.assign({autoComplete:"off",disabled:p},d,a,t,{required:!1,style:{width:"100%"}})))}},m=function(e){var a,t=null===(a=e.showLabel)||void 0===a||a;return c.a.createElement("div",{className:"ant-row ant-form-item ant-form-item-with-help ".concat(!0===e.padding||void 0===e.padding?"form-custom-item":"")},t?c.a.createElement("div",{className:"ant-col ant-form-item-label"},c.a.createElement("span",null,"\xa0")):"",c.a.createElement("div",{className:"ant-col ant-form-item-control-wrapper"},c.a.createElement("div",{className:"ant-form-item-control "},c.a.createElement("span",{className:"ant-form-item-children"},e.children))))},d=function(e){var a,t,n=null===(a=e.showLabel)||void 0===a||a;return c.a.createElement("div",{className:"ant-row ant-form-item ant-form-item-with-help form-custom-item"},n?c.a.createElement("div",{className:"ant-col ant-form-item-label"},c.a.createElement("label",{className:e.required?"ant-form-item-required":""},null!==(t=e.label)&&void 0!==t?t:c.a.createElement(c.a.Fragment,null,"\xa0"))):"",c.a.createElement("div",{className:"ant-col ant-form-item-control-wrapper"},c.a.createElement("div",{className:"ant-form-item-control "},c.a.createElement("span",{className:"ant-form-item-children"},e.children))))}},602:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(607),r=t(0);function c(e,a){var t=Object(r.useRef)(),c=Object(r.useRef)();function o(){c.current&&clearTimeout(c.current)}return Object(r.useEffect)((function(){return o}),[]),function(){for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];t.current=i,o(),c.current=setTimeout((function(){t.current&&e.apply(void 0,Object(n.a)(t.current))}),a)}}},603:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return d})),t.d(a,"f",(function(){return f})),t.d(a,"d",(function(){return p})),t.d(a,"a",(function(){return b})),t.d(a,"e",(function(){return h}));var n=t(592),r=t(677),c=t(678),o=t(679),i=t(683),l=t(601),s=t(609),u=t.n(s),m=Object(l.c)(n.a,{fast:!0}),d=Object(l.c)(r.a,{decimalSeparator:",",fast:!0}),f=(Object(l.d)(u.a,{fast:!0}),Object(l.c)(n.a.TextArea,{fast:!0})),p=Object(l.c)(c.a,{fast:!0}),b=Object(l.c)(o.a,{fast:!0}),h=Object(l.c)(i.a,{fast:!0})},606:function(e,a,t){"use strict";var n=t(70),r=t.n(n),c=t(104),o=t(0),i=t.n(o),l=t(37),s=t(597),u=t(188),m=t(4),d=t(681),f=t(10),p=t(554),b=t(86),h=t(36),v=t(65),E=t(602),w=Object(o.forwardRef)((function(e,a){var t=Object(m.g)(),n=Object(l.h)(),r="form-chache".concat(t.location.pathname.toLowerCase());Object(o.useEffect)((function(){!function(){if(!localStorage.getItem(r))return;d.a.confirm({title:"Recupera\xe7\xe3o de formul\xe1rio",content:"Existem dados n\xe3o salvos, deseja recuperar?",onOk:u,onCancel:s,cancelText:"Remover",okText:"Recuperar"})}()}),[]),Object(o.useImperativeHandle)(a,(function(){return{removeSavedFormLocalStorageForm:s}}));var c=Object(E.a)((function(){var e={ceatedDate:new Date,formData:n.values};localStorage.setItem(r,JSON.stringify(e))}),600);function s(){localStorage.removeItem(r)}function u(){var e,a=JSON.parse(null!==(e=localStorage.getItem(r))&&void 0!==e?e:"");n.setValues(a.formData)}return i.a.createElement(p.a,{onKeyUp:function(a){c(),e.onKeyDown(a)}},n.isSubmitting||e.isLoading?i.a.createElement("div",{style:{zIndex:100,width:"100%",height:"100%",margin:"0em",left:"0em",top:"0em",position:"fixed"}},i.a.createElement("div",{style:{background:"#00000026",height:"100%"}},i.a.createElement(f.a,{type:"loading",style:{position:"absolute",top:"50%",left:"50%",fontSize:"72px",color:"#08c"},theme:"outlined"}))):null,Object(l.f)(e.children)?e.children(n):e.children,i.a.createElement(b.a,{type:"flex",justify:"end",style:{paddingTop:"25px"}},i.a.createElement(h.a,{span:7,style:{display:"flex",flexDirection:"column",paddingRight:20}},function(e){var a,t,n,r;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{style:{textAlign:"end"}},"Data Cria\xe7\xe3o: ",(null===(a=e.values)||void 0===a?void 0:a.dataCriacao)?new Date(null===(t=e.values)||void 0===t?void 0:t.dataCriacao).toLocaleString(void 0,{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}):"  /  /"),i.a.createElement("span",{style:{textAlign:"end"}},"Data Atualiza\xe7\xe3o: ",(null===(n=e.values)||void 0===n?void 0:n.dataAtualizacao)?null===(r=new Date(e.values.dataAtualizacao))||void 0===r?void 0:r.toLocaleString(void 0,{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}):"  /  /"))}(n)),i.a.createElement(h.a,null,i.a.createElement(v.a,{type:"danger",style:{marginRight:"10px"},onClick:function(){return t.push(e.backPath)}},"Cancelar"),i.a.createElement(v.a,{type:"primary",onClick:function(){return n.submitForm()}},"Salvar"))))}));a.a=Object(m.h)((function(e){var a=Object(o.useRef)();function t(){return(t=Object(c.a)(r.a.mark((function t(n,c){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,null===(o=a.current)||void 0===o||o.removeSavedFormLocalStorageForm(),t.next=4,e.onSubmit(n,c);case 4:t.next=10;break;case 6:throw t.prev=6,t.t0=t.catch(0),Object(u.a)(c,t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}return i.a.createElement(s.a,{breadcrumbList:e.breadcrumbList},i.a.createElement(l.d,Object.assign({},e,{onSubmit:function(e,a){return t.apply(this,arguments)},enableReinitialize:!0}),i.a.createElement(w,{ref:a,backPath:e.backPath,isLoading:e.isLoading,children:e.children,onKeyDown:function(e){13===(e.charCode||e.keyCode)&&e.preventDefault()}})))}))},673:function(e,a,t){}}]);
//# sourceMappingURL=25.11be0c72.chunk.js.map