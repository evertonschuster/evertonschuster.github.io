(this["webpackJsonpcontrole-fluxo-empresarial"]=this["webpackJsonpcontrole-fluxo-empresarial"]||[]).push([[31],{575:function(e,t,a){"use strict";a.r(t);var n=a(70),r=a.n(n),c=a(104),o=a(49),i=a(0),u=a.n(i),l=a(606),s=a(86),m=a(36),f=a(603),d=a(105),p=d.object().shape({id:d.number(),nome:d.string().max(50,"O campo [Nome] n\xe3o deve possuir mais de 50 caracteres.").required("[Nome] da Fun\xe7\xe3o do Funcion\xe1rio n\xe3o pode ser vaziu."),cargaHoraria:d.number().min(1e-4,"A Carga Hor\xe1ria n\xe3o pode ser igual ou inferior a 0.").required("A Carga Hor\xe1ria deve ser informada.")}),b=a(618),v=a(188);t.default=function(e){var t=Object(i.useState)({nome:"",requerCNH:!1,descricao:"",cargaHoraria:void 0,observacao:""}),a=Object(o.a)(t,2),n=a[0],d=a[1],h=Object(i.useState)(!1),E=Object(o.a)(h,2),O=E[0],g=E[1];function j(){return(j=Object(c.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.match.params.id){t.next=6;break}return t.next=4,b.a.Update(a);case 4:t.next=8;break;case 6:return t.next=8,b.a.Save(a);case 8:e.history.push("/funcao-funcionario"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),Object(v.a)(n,t.t0,["nome"]);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function y(){return(y=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return g(!0),e.next=6,b.a.GetById(t);case 6:a=e.sent,d(a.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Object(v.a)(null,e.t0);case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(e){y.apply(this,arguments)}(e.match.params.id)}),[e.match.params.id]),u.a.createElement(l.a,{isLoading:O,backPath:"/funcao-funcionario",breadcrumbList:[{displayName:"Fun\xe7\xf5es Funcion\xe1rio",URL:"/funcao-funcionario"},{displayName:"Nova Fun\xe7\xe3o Funcion\xe1rio",URL:void 0}],initialValues:n,validationSchema:p,onSubmit:function(e,t){return j.apply(this,arguments)}},u.a.createElement(s.a,null,u.a.createElement(m.a,{span:2},u.a.createElement(f.b,{name:"id",label:"C\xf3digo",placeholder:"Codigo",readOnly:!0})),u.a.createElement(m.a,{span:7},u.a.createElement(f.b,{name:"nome",label:"Fun\xe7\xe3o Funcion\xe1rio",placeholder:"t\xe9cnico",required:!0})),u.a.createElement(m.a,{span:2},u.a.createElement(f.c,{name:"cargaHoraria",label:"Carga Hor\xe1ria",placeholder:"8",required:!0})),u.a.createElement(m.a,{span:2},u.a.createElement(f.e,{name:"requerCNH",label:"Requer CNH?",checkedChildren:"Requer",unCheckedChildren:"Opcional"}))),u.a.createElement(s.a,null,u.a.createElement(m.a,{span:13},u.a.createElement(f.f,{name:"descricao",label:"Descri\xe7\xe3o",rows:4}))),u.a.createElement(s.a,null,u.a.createElement(m.a,{span:13},u.a.createElement(f.f,{name:"observacao",label:"Observa\xe7\xe3o",rows:4}))))}},597:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(87);a(598);t.a=Object(n.memo)((function(e){var t=Object(n.useContext)(c.c).setBreadcrumb;return Object(n.useEffect)((function(){t(e.breadcrumbList)}),[]),r.a.createElement("div",{className:"form-application-container"},e.children)}))},598:function(e,t,a){},601:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return f}));var n=a(49),r=a(0),c=a.n(r),o=a(591),i=a(87),u=a(37),l=function(e,t){return function(a){var n=Object(r.useContext)(i.c),u=null!=n&&n.formMode===i.b.View,l=a.disabled||u;return c.a.createElement(o.a,{name:a.name,label:a.label||"",required:a.required,className:"form-custom-item"},c.a.createElement(e,Object.assign({autoComplete:"off",disabled:l},t,a,{required:!1,style:{width:"100%"}})))}},s=function(e,t){return function(a){var l=Object(r.useContext)(i.c),s=Object(u.g)({name:a.name}),m=Object(n.a)(s,3),f=m[0],d=(m[1],m[2],null!=l&&l.formMode===i.b.View),p=a.disabled||d;return c.a.createElement(o.a,{name:a.name,label:a.label||"",required:a.required,className:"form-custom-item"},c.a.createElement(e,Object.assign({autoComplete:"off",disabled:p},f,t,a,{required:!1,style:{width:"100%"}})))}},m=function(e){var t,a=null===(t=e.showLabel)||void 0===t||t;return c.a.createElement("div",{className:"ant-row ant-form-item ant-form-item-with-help ".concat(!0===e.padding||void 0===e.padding?"form-custom-item":"")},a?c.a.createElement("div",{className:"ant-col ant-form-item-label"},c.a.createElement("span",null,"\xa0")):"",c.a.createElement("div",{className:"ant-col ant-form-item-control-wrapper"},c.a.createElement("div",{className:"ant-form-item-control "},c.a.createElement("span",{className:"ant-form-item-children"},e.children))))},f=function(e){var t,a,n=null===(t=e.showLabel)||void 0===t||t;return c.a.createElement("div",{className:"ant-row ant-form-item ant-form-item-with-help form-custom-item"},n?c.a.createElement("div",{className:"ant-col ant-form-item-label"},c.a.createElement("label",{className:e.required?"ant-form-item-required":""},null!==(a=e.label)&&void 0!==a?a:c.a.createElement(c.a.Fragment,null,"\xa0"))):"",c.a.createElement("div",{className:"ant-col ant-form-item-control-wrapper"},c.a.createElement("div",{className:"ant-form-item-control "},c.a.createElement("span",{className:"ant-form-item-children"},e.children))))}},602:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(607),r=a(0);function c(e,t){var a=Object(r.useRef)(),c=Object(r.useRef)();function o(){c.current&&clearTimeout(c.current)}return Object(r.useEffect)((function(){return o}),[]),function(){for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];a.current=i,o(),c.current=setTimeout((function(){a.current&&e.apply(void 0,Object(n.a)(a.current))}),t)}}},603:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"f",(function(){return d})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return b})),a.d(t,"e",(function(){return v}));var n=a(592),r=a(677),c=a(678),o=a(679),i=a(683),u=a(601),l=a(609),s=a.n(l),m=Object(u.c)(n.a,{fast:!0}),f=Object(u.c)(r.a,{decimalSeparator:",",fast:!0}),d=(Object(u.d)(s.a,{fast:!0}),Object(u.c)(n.a.TextArea,{fast:!0})),p=Object(u.c)(c.a,{fast:!0}),b=Object(u.c)(o.a,{fast:!0}),v=Object(u.c)(i.a,{fast:!0})},606:function(e,t,a){"use strict";var n=a(70),r=a.n(n),c=a(104),o=a(0),i=a.n(o),u=a(37),l=a(597),s=a(188),m=a(4),f=a(681),d=a(10),p=a(554),b=a(86),v=a(36),h=a(65),E=a(602),O=Object(o.forwardRef)((function(e,t){var a=Object(m.g)(),n=Object(u.h)(),r="form-chache".concat(a.location.pathname.toLowerCase());Object(o.useEffect)((function(){!function(){if(!localStorage.getItem(r))return;f.a.confirm({title:"Recupera\xe7\xe3o de formul\xe1rio",content:"Existem dados n\xe3o salvos, deseja recuperar?",onOk:s,onCancel:l,cancelText:"Remover",okText:"Recuperar"})}()}),[]),Object(o.useImperativeHandle)(t,(function(){return{removeSavedFormLocalStorageForm:l}}));var c=Object(E.a)((function(){var e={ceatedDate:new Date,formData:n.values};localStorage.setItem(r,JSON.stringify(e))}),600);function l(){localStorage.removeItem(r)}function s(){var e,t=JSON.parse(null!==(e=localStorage.getItem(r))&&void 0!==e?e:"");n.setValues(t.formData)}return i.a.createElement(p.a,{onKeyUp:function(t){c(),e.onKeyDown(t)}},n.isSubmitting||e.isLoading?i.a.createElement("div",{style:{zIndex:100,width:"100%",height:"100%",margin:"0em",left:"0em",top:"0em",position:"fixed"}},i.a.createElement("div",{style:{background:"#00000026",height:"100%"}},i.a.createElement(d.a,{type:"loading",style:{position:"absolute",top:"50%",left:"50%",fontSize:"72px",color:"#08c"},theme:"outlined"}))):null,Object(u.f)(e.children)?e.children(n):e.children,i.a.createElement(b.a,{type:"flex",justify:"end",style:{paddingTop:"25px"}},i.a.createElement(v.a,{span:7,style:{display:"flex",flexDirection:"column",paddingRight:20}},function(e){var t,a,n,r;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{style:{textAlign:"end"}},"Data Cria\xe7\xe3o: ",(null===(t=e.values)||void 0===t?void 0:t.dataCriacao)?new Date(null===(a=e.values)||void 0===a?void 0:a.dataCriacao).toLocaleString(void 0,{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}):"  /  /"),i.a.createElement("span",{style:{textAlign:"end"}},"Data Atualiza\xe7\xe3o: ",(null===(n=e.values)||void 0===n?void 0:n.dataAtualizacao)?null===(r=new Date(e.values.dataAtualizacao))||void 0===r?void 0:r.toLocaleString(void 0,{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}):"  /  /"))}(n)),i.a.createElement(v.a,null,i.a.createElement(h.a,{type:"danger",style:{marginRight:"10px"},onClick:function(){return a.push(e.backPath)}},"Cancelar"),i.a.createElement(h.a,{type:"primary",onClick:function(){return n.submitForm()}},"Salvar"))))}));t.a=Object(m.h)((function(e){var t=Object(o.useRef)();function a(){return(a=Object(c.a)(r.a.mark((function a(n,c){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,null===(o=t.current)||void 0===o||o.removeSavedFormLocalStorageForm(),a.next=4,e.onSubmit(n,c);case 4:a.next=10;break;case 6:throw a.prev=6,a.t0=a.catch(0),Object(s.a)(c,a.t0),a.t0;case 10:case"end":return a.stop()}}),a,null,[[0,6]])})))).apply(this,arguments)}return i.a.createElement(l.a,{breadcrumbList:e.breadcrumbList},i.a.createElement(u.d,Object.assign({},e,{onSubmit:function(e,t){return a.apply(this,arguments)},enableReinitialize:!0}),i.a.createElement(O,{ref:t,backPath:e.backPath,isLoading:e.isLoading,children:e.children,onKeyDown:function(e){13===(e.charCode||e.keyCode)&&e.preventDefault()}})))}))},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(71),r=a(191),c=a(190),o=a(140),i=a(189);var u=new(function(e){Object(r.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(o.a)(e);if(t()){var r=Object(o.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}(a);function a(){return Object(n.a)(this,a),t.call(this,"api/funcao-funcionarios")}return a}(i.a))}}]);
//# sourceMappingURL=31.18080d83.chunk.js.map