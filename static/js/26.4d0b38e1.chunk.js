(this["webpackJsonpcontrole-fluxo-empresarial"]=this["webpackJsonpcontrole-fluxo-empresarial"]||[]).push([[26],{582:function(e,t,a){"use strict";a.r(t);var n=a(70),r=a.n(n),c=a(104),i=a(49),o=a(0),l=a.n(o),u=a(4),s=a(86),m=a(36),d=a(606),f=a(603),p=a(105),b=p.object().shape({nome:p.string().max(50,"O campo [Nome] n\xe3o deve possuir mais de 50 caracteres.").required("[Nome] do pais n\xe3o pode ser vaziu."),ddi:p.string().max(5,"O campo [DDI] n\xe3o deve possuir mais de 5 caracteres.").required("[DDI] do pais n\xe3o pode ser vaziu."),sigla:p.string().max(5,"O campo [Sigla] n\xe3o deve possuir mais de 5 caracteres.").required("[Sigla] do pais n\xe3o pode ser vaziu.")}),v=a(188),h=a(617);t.default=Object(u.h)((function(e){var t=Object(o.useState)(!1),a=Object(i.a)(t,2),n=a[0],u=a[1],p=Object(o.useState)({nome:"",ddi:"",sigla:""}),O=Object(i.a)(p,2),g=O[0],j=O[1];function E(){return(E=Object(c.a)(r.a.mark((function t(a,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.match.params.id){t.next=6;break}return t.next=4,h.a.Update(a);case 4:t.next=8;break;case 6:return t.next=8,h.a.Save(a);case 8:e.history.push("/Pais"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),Object(v.a)(n,t.t0,["nome"]);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function y(){return(y=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return u(!0),e.next=6,h.a.GetById(t);case 6:a=e.sent,j(a.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Object(v.a)(null,e.t0);case 13:return e.prev=13,u(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(e){y.apply(this,arguments)}(e.match.params.id)}),[e.match.params.id]),l.a.createElement(d.a,{isLoading:n,onSubmit:function(e,t){return E.apply(this,arguments)},validationSchema:b,breadcrumbList:[{displayName:"Pais",URL:"/Pais"},{displayName:"Novo Pais",URL:void 0}],backPath:"/pais",initialValues:g},l.a.createElement(s.a,null,l.a.createElement(m.a,{span:3},l.a.createElement(f.b,{name:"id",label:"C\xf3digo",placeholder:"Codigo",readOnly:!0})),l.a.createElement(m.a,{span:10},l.a.createElement(f.b,{name:"nome",label:"Pais",placeholder:"Pais",required:!0})),l.a.createElement(m.a,{span:4},l.a.createElement(f.b,{name:"sigla",label:"Sigla",placeholder:"Sigla",required:!0})),l.a.createElement(m.a,{span:4},l.a.createElement(f.b,{name:"ddi",label:"DDI",placeholder:"DDI",required:!0}))))}))},597:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(87);a(598);t.a=Object(n.memo)((function(e){var t=Object(n.useContext)(c.c).setBreadcrumb;return Object(n.useEffect)((function(){t(e.breadcrumbList)}),[]),r.a.createElement("div",{className:"form-application-container"},e.children)}))},598:function(e,t,a){},601:function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return d}));var n=a(49),r=a(0),c=a.n(r),i=a(591),o=a(87),l=a(37),u=function(e,t){return function(a){var n=Object(r.useContext)(o.c),l=null!=n&&n.formMode===o.b.View,u=a.disabled||l;return c.a.createElement(i.a,{name:a.name,label:a.label||"",required:a.required,className:"form-custom-item"},c.a.createElement(e,Object.assign({autoComplete:"off",disabled:u},t,a,{required:!1,style:{width:"100%"}})))}},s=function(e,t){return function(a){var u=Object(r.useContext)(o.c),s=Object(l.g)({name:a.name}),m=Object(n.a)(s,3),d=m[0],f=(m[1],m[2],null!=u&&u.formMode===o.b.View),p=a.disabled||f;return c.a.createElement(i.a,{name:a.name,label:a.label||"",required:a.required,className:"form-custom-item"},c.a.createElement(e,Object.assign({autoComplete:"off",disabled:p},d,t,a,{required:!1,style:{width:"100%"}})))}},m=function(e){var t,a=null===(t=e.showLabel)||void 0===t||t;return c.a.createElement("div",{className:"ant-row ant-form-item ant-form-item-with-help ".concat(!0===e.padding||void 0===e.padding?"form-custom-item":"")},a?c.a.createElement("div",{className:"ant-col ant-form-item-label"},c.a.createElement("span",null,"\xa0")):"",c.a.createElement("div",{className:"ant-col ant-form-item-control-wrapper"},c.a.createElement("div",{className:"ant-form-item-control "},c.a.createElement("span",{className:"ant-form-item-children"},e.children))))},d=function(e){var t,a,n=null===(t=e.showLabel)||void 0===t||t;return c.a.createElement("div",{className:"ant-row ant-form-item ant-form-item-with-help form-custom-item"},n?c.a.createElement("div",{className:"ant-col ant-form-item-label"},c.a.createElement("label",{className:e.required?"ant-form-item-required":""},null!==(a=e.label)&&void 0!==a?a:c.a.createElement(c.a.Fragment,null,"\xa0"))):"",c.a.createElement("div",{className:"ant-col ant-form-item-control-wrapper"},c.a.createElement("div",{className:"ant-form-item-control "},c.a.createElement("span",{className:"ant-form-item-children"},e.children))))}},602:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(607),r=a(0);function c(e,t){var a=Object(r.useRef)(),c=Object(r.useRef)();function i(){c.current&&clearTimeout(c.current)}return Object(r.useEffect)((function(){return i}),[]),function(){for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];a.current=o,i(),c.current=setTimeout((function(){a.current&&e.apply(void 0,Object(n.a)(a.current))}),t)}}},603:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"f",(function(){return f})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return b})),a.d(t,"e",(function(){return v}));var n=a(592),r=a(677),c=a(678),i=a(679),o=a(683),l=a(601),u=a(609),s=a.n(u),m=Object(l.c)(n.a,{fast:!0}),d=Object(l.c)(r.a,{decimalSeparator:",",fast:!0}),f=(Object(l.d)(s.a,{fast:!0}),Object(l.c)(n.a.TextArea,{fast:!0})),p=Object(l.c)(c.a,{fast:!0}),b=Object(l.c)(i.a,{fast:!0}),v=Object(l.c)(o.a,{fast:!0})},606:function(e,t,a){"use strict";var n=a(70),r=a.n(n),c=a(104),i=a(0),o=a.n(i),l=a(37),u=a(597),s=a(188),m=a(4),d=a(681),f=a(10),p=a(554),b=a(86),v=a(36),h=a(65),O=a(602),g=Object(i.forwardRef)((function(e,t){var a=Object(m.g)(),n=Object(l.h)(),r="form-chache".concat(a.location.pathname.toLowerCase());Object(i.useEffect)((function(){!function(){if(!localStorage.getItem(r))return;d.a.confirm({title:"Recupera\xe7\xe3o de formul\xe1rio",content:"Existem dados n\xe3o salvos, deseja recuperar?",onOk:s,onCancel:u,cancelText:"Remover",okText:"Recuperar"})}()}),[]),Object(i.useImperativeHandle)(t,(function(){return{removeSavedFormLocalStorageForm:u}}));var c=Object(O.a)((function(){var e={ceatedDate:new Date,formData:n.values};localStorage.setItem(r,JSON.stringify(e))}),600);function u(){localStorage.removeItem(r)}function s(){var e,t=JSON.parse(null!==(e=localStorage.getItem(r))&&void 0!==e?e:"");n.setValues(t.formData)}return o.a.createElement(p.a,{onKeyUp:function(t){c(),e.onKeyDown(t)}},n.isSubmitting||e.isLoading?o.a.createElement("div",{style:{zIndex:100,width:"100%",height:"100%",margin:"0em",left:"0em",top:"0em",position:"fixed"}},o.a.createElement("div",{style:{background:"#00000026",height:"100%"}},o.a.createElement(f.a,{type:"loading",style:{position:"absolute",top:"50%",left:"50%",fontSize:"72px",color:"#08c"},theme:"outlined"}))):null,Object(l.f)(e.children)?e.children(n):e.children,o.a.createElement(b.a,{type:"flex",justify:"end",style:{paddingTop:"25px"}},o.a.createElement(v.a,{span:7,style:{display:"flex",flexDirection:"column",paddingRight:20}},function(e){var t,a,n,r;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{style:{textAlign:"end"}},"Data Cria\xe7\xe3o: ",(null===(t=e.values)||void 0===t?void 0:t.dataCriacao)?new Date(null===(a=e.values)||void 0===a?void 0:a.dataCriacao).toLocaleString(void 0,{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}):"  /  /"),o.a.createElement("span",{style:{textAlign:"end"}},"Data Atualiza\xe7\xe3o: ",(null===(n=e.values)||void 0===n?void 0:n.dataAtualizacao)?null===(r=new Date(e.values.dataAtualizacao))||void 0===r?void 0:r.toLocaleString(void 0,{day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}):"  /  /"))}(n)),o.a.createElement(v.a,null,o.a.createElement(h.a,{type:"danger",style:{marginRight:"10px"},onClick:function(){return a.push(e.backPath)}},"Cancelar"),o.a.createElement(h.a,{type:"primary",onClick:function(){return n.submitForm()}},"Salvar"))))}));t.a=Object(m.h)((function(e){var t=Object(i.useRef)();function a(){return(a=Object(c.a)(r.a.mark((function a(n,c){var i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,null===(i=t.current)||void 0===i||i.removeSavedFormLocalStorageForm(),a.next=4,e.onSubmit(n,c);case 4:a.next=10;break;case 6:throw a.prev=6,a.t0=a.catch(0),Object(s.a)(c,a.t0),a.t0;case 10:case"end":return a.stop()}}),a,null,[[0,6]])})))).apply(this,arguments)}return o.a.createElement(u.a,{breadcrumbList:e.breadcrumbList},o.a.createElement(l.d,Object.assign({},e,{onSubmit:function(e,t){return a.apply(this,arguments)},enableReinitialize:!0}),o.a.createElement(g,{ref:t,backPath:e.backPath,isLoading:e.isLoading,children:e.children,onKeyDown:function(e){13===(e.charCode||e.keyCode)&&e.preventDefault()}})))}))},617:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(71),r=a(191),c=a(190),i=a(140),o=a(189);var l=new(function(e){Object(r.a)(a,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var a,n=Object(i.a)(e);if(t()){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}(a);function a(){return Object(n.a)(this,a),t.call(this,"api/pais")}return a}(o.a))}}]);
//# sourceMappingURL=26.4d0b38e1.chunk.js.map