(this["webpackJsonpcontrole-fluxo-empresarial"]=this["webpackJsonpcontrole-fluxo-empresarial"]||[]).push([[24],{561:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(604),o=n(597),i=n(605),u=n(618);t.default=function(){var e=Object(c.a)({getListPagined:u.a.GetListPagined.bind(u.a)});return a.a.createElement(o.a,{breadcrumbList:[{displayName:"Fun\xe7\xf5es Funcion\xe1rio",URL:"/funcao-funcionario"},{displayName:"Listagem",URL:void 0}]},a.a.createElement(i.a,{tableProps:e,deleteFunction:u.a.Excluir.bind(u.a),columns:[{title:"C\xf3digo",dataIndex:"id",key:"id"},{title:"Fun\xe7\xe3o Funcion\xe1rio",dataIndex:"nome"},{title:"Carga Hor\xe1ria",dataIndex:"cargaHoraria"},{title:"CNH?",dataIndex:"requerCNH",render:function(e,t,n){return t.requerCNH?"Sim":"N\xe3o"}}]}))}},596:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(599);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},597:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(87);n(598);t.a=Object(r.memo)((function(e){var t=Object(r.useContext)(c.c).setBreadcrumb;return Object(r.useEffect)((function(){t(e.breadcrumbList)}),[]),a.a.createElement("div",{className:"form-application-container"},e.children)}))},598:function(e,t,n){},599:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},600:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r).a.createContext({state:void 0,setState:function(){}}),c=a.Provider;a.Consumer;t.b=a},604:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(70),a=n.n(r),c=n(104),o=n(49),i=n(0);function u(e){var t=Object(i.useState)(!0),n=Object(o.a)(t,2),r=n[0],u=n[1],l=Object(i.useState)({pageSize:10,currentPage:1}),s=Object(o.a)(l,2),f=s[0],b=s[1],p=Object(i.useState)({current:0,pageSize:0,total:0,dataSource:[]}),d=Object(o.a)(p,2),m=d[0],O=d[1];function j(){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,e.getListPagined(f);case 4:n=t.sent,O({current:n.data.currentPage,pageSize:n.data.pageSize,total:n.data.totalItem,dataSource:n.data.result});case 6:return t.prev=6,u(!1),t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){j()}),[f,e.valuesFilter]),{requestResult:m,isLoading:r,filterRequest:f,setFilterRequest:b,reflesh:j}}},605:function(e,t,n){"use strict";var r=n(596),a=n(0),c=n.n(a),o=n(86),i=n(36),u=n(70),l=n.n(u),s=n(104),f=n(49),b=n(277),p=n(676),d=n(681),m=n(680),O=n(87),j=n(600),g=n(15),v=n(4),E=n(188),P=Object(v.h)(Object(a.memo)((function(e){var t=Object(a.useContext)(O.c),n=t.formMode,o=t.setFormMode,i=t.sharedState,u=Object(a.useContext)(j.b),v=u.setState,P=u.state,y=n===O.b.SelectMultiple||n===O.b.SelectOne,h=e.keyProp||"id",S=P?[].concat(P):[],x=Object(a.useState)(!1),F=Object(f.a)(x,2),k=F[0],R=F[1],C=Object(a.useState)(),w=Object(f.a)(C,2),q=w[0],M=w[1],L=Object(a.useState)(!1),N=Object(f.a)(L,2),D=N[0],z=N[1],H=e.keyDescription||"nome",A=e.columns.concat({title:"A\xe7\xf5es",key:"action",width:"150px",render:function(t,n,r){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.b,{to:(e.location.pathname+"/edit/"+n[h]).replace("//","/"),onClick:function(){o(O.b.Edit),v(void 0)}},c.a.createElement(b.a,{placement:"top",title:"Editar Registro Selecionado."},c.a.createElement(p.a,{color:"green",key:r+"12",className:"custom-cursor-pointer"},"Editar"))),e.deleteFunction?c.a.createElement(b.a,{placement:"top",title:"Excluir Registro Selecionado."},c.a.createElement(p.a,{color:"red",key:r+"23",className:"custom-cursor-pointer",onClick:function(){o(O.b.Delete),function(e){R(!0),M(e)}(n)}},"Excluir")):null)}}),I={type:n===O.b.SelectMultiple?"checkbox":"radio",onChange:function(e,t){v(t)},selectedRowKeys:S.map((function(e){return e[h]}))};function B(){R(!1),v(void 0),i&&i.savedFormMode&&o(i.savedFormMode)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{title:"Aten\xe7\xe3o!!",visible:k,onOk:Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(z(!0),t.prev=1,t.t0=e.deleteFunction,!t.t0){t.next=6;break}return t.next=6,e.deleteFunction((q||{})[h]);case 6:z(!1),e.tableProps.reflesh(),t.next=13;break;case 10:t.prev=10,t.t1=t.catch(1),Object(E.a)(null,t.t1);case 13:return t.prev=13,o(O.b.List),B(),t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[1,10,13,17]])}))),onCancel:B,okText:"Excluir",cancelText:"Cancelar",okType:"danger",okButtonProps:{loading:D,autoFocus:!0},cancelButtonProps:{loading:D}},c.a.createElement("span",null,"Voc\xea est\xe1 prestes a excluir '",(q||{})[H],"'.",c.a.createElement("br",null),"Est\xe1 certo disso?")),c.a.createElement(m.a,{pagination:{current:e.tableProps.requestResult.current,pageSize:e.tableProps.requestResult.pageSize,total:e.tableProps.requestResult.total,onChange:function(t){e.tableProps.setFilterRequest(Object(r.a)(Object(r.a)({},e.tableProps.filterRequest),{},{currentPage:t}))}},loading:e.tableProps.isLoading,rowSelection:y?I:void 0,onRow:function(e){return{onClick:function(){!function(e){if(y)if(O.b.SelectOne!==n){var t=S;t=void 0===S.find((function(t){return t[h]===e[h]}))?S.concat(e):S.filter((function(t){return t[h]!==e[h]})),v(t)}else v([e])}(e)}}},columns:A,dataSource:e.tableProps.requestResult.dataSource,bordered:!0,rowKey:function(e){return e[h]},size:"small",useFixedHeader:!0}))}))),y=n(138),h=n(65),S=Object(v.h)(Object(a.memo)((function(e){var t=Object(a.useState)(),n=Object(f.a)(t,2),o=n[0],u=n[1],l=Object(a.useContext)(O.c).setFormMode;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{span:10},c.a.createElement(y.a,{placeholder:"Filtrar",value:o,onChange:function(e){u(e.target.value)},onPressEnter:function(){e.tableProps.setFilterRequest(Object(r.a)({},e.tableProps.filterRequest,{currentPage:1,filter:o}))}})),c.a.createElement(i.a,{span:1,style:{textAlign:"center"}},c.a.createElement(h.a,{type:"primary",icon:"search",onClick:function(){e.tableProps.setFilterRequest(Object(r.a)({},e.tableProps.filterRequest,{currentPage:1,filter:o}))}})),c.a.createElement(i.a,{span:2,push:11,style:{textAlign:"right"}},c.a.createElement(h.a,{type:"primary"},c.a.createElement(g.b,{to:(e.location.pathname+"/new").replace("//","/"),onClick:function(){return l(O.b.New)}},"Adicionar"))))})));t.a=Object(a.memo)((function(e){var t=Object(a.useContext)(O.c),n=t.formMode,u=t.setFormMode,l=t.sharedState,s=t.setSharedState;return Object(a.useEffect)((function(){n!==O.b.SelectMultiple&&n!==O.b.SelectOne?(null===l||void 0===l?void 0:l.savedFormMode)?u(l.savedFormMode):u(O.b.List):s(Object(r.a)(Object(r.a)({},l),{},{savedFormMode:n}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{style:{paddingBottom:"20px"}},c.a.createElement(S,{tableProps:e.tableProps})),c.a.createElement(o.a,null,c.a.createElement(i.a,null,c.a.createElement(P,{deleteFunction:e.deleteFunction,keyProp:e.keyProp,columns:e.columns,tableProps:e.tableProps}))))}))},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(71),a=n(191),c=n(190),o=n(140),i=n(189);var u=new(function(e){Object(a.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(o.a)(e);if(t()){var a=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}(n);function n(){return Object(r.a)(this,n),t.call(this,"api/funcao-funcionarios")}return n}(i.a))}}]);
//# sourceMappingURL=24.844be08a.chunk.js.map