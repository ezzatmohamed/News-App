(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(16),i=a.n(r),o=(a(47),a(48),a(17)),l=a(5),d=a(2),j=a(7),u=(a(49),a(50)),b={},O=function(){localStorage.getItem("token")&&(b.Authorization="Bearer ".concat(localStorage.getItem("token")));var e=u.create({baseURL:"api",headers:b});return e.interceptors.response.use((function(e){return e}),(function(e){return 401==e.response.status&&(localStorage.removeItem("token"),localStorage.clear(),window.location="/login"),Promise.reject(e)})),e},h="FETCH_FAVORITE_REQUEST",p="FETCH_FAVORITE_SUCCESS",g="FETCH_FAVORITE_FAILURE",f="DELETE_FROM_FAVORITE",m=function(e){return function(t){t({type:h}),O().get("/favorites?page=".concat(e)).then((function(a){console.log(a);var n,c=a.data.data,s=null==c.next_page_url?-1:e+1;t((n={data:c.data,next:s},{type:p,payload:n}))})).catch((function(e){var a=e.response&&e.response.data&&e.response.data.message?e.response.data.message:"";t(function(e){return{type:g,payload:e}}(a))}))}},v="SUCCESS_MSG",x="FAILURE_MSG",y="RESET_MSG",S=function(e,t){return function(a){a(e?{type:v,payload:t}:function(e){return{type:x,payload:e}}(t)),setTimeout((function(){return a({type:y})}),3e3)}},N="LOGOUT",E="LOGIN",C=function(){return{type:N}},k=a(4),R=Object(l.g)((function(e){var t=Object(c.useState)({email:"",password:""}),a=Object(j.a)(t,2),s=a[0],r=a[1],i=Object(k.b)(),o=Object(c.useState)(!1),l=Object(j.a)(o,2),u=l[0],b=l[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"form-container",children:[Object(n.jsx)("p",{id:"form-title",children:"Login form"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b(!0),O().post("login",s).then((function(t){var a=t.data&&t.data.message?t.data.message:"";localStorage.setItem("token",t.data.token),i(S(!0,a)),b(!1),i({type:E}),e.history.push("/")})).catch((function(e){i(S(!1,"invalid login")),b(!1)}))},children:[Object(n.jsx)("div",{className:"form-input",children:Object(n.jsx)("input",{type:"email",name:"email",value:s.email,placeholder:"Email",onChange:function(e){return r(Object(d.a)(Object(d.a)({},s),{},{email:e.target.value}))},required:!0})}),Object(n.jsx)("div",{className:"form-input",children:Object(n.jsx)("input",{type:"password",name:"password",value:s.password,placeholder:"Password",onChange:function(e){return r(Object(d.a)(Object(d.a)({},s),{},{password:e.target.value}))},required:!0})}),Object(n.jsx)("div",{id:"link",children:Object(n.jsx)("a",{href:"/signup",children:"OR Register"})}),Object(n.jsx)("button",{disabled:u,className:"form-button",type:"submit",children:"Login"})]})]})})})),_=(a(79),function(){var e=Object(c.useState)({email:"",name:"",date_of_birth:""}),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],u=Object(k.b)();return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"form-container",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0),O().post("/signup",a).then((function(e){var t=e.data&&e.data.message?e.data.message:"";u(S(!0,t)),l(!1)})).catch((function(e){var t=e.response.data&&e.response.data.message?e.response.data.message:"";u(S(!1,t)),l(!1)}))},children:[Object(n.jsx)("p",{id:"form-title",children:"Signup Form"}),Object(n.jsx)("div",{className:"form-input",children:Object(n.jsx)("input",{type:"email",name:"email",value:a.email,placeholder:"Email",onChange:function(e){return s(Object(d.a)(Object(d.a)({},a),{},{email:e.target.value}))},required:!0})}),Object(n.jsx)("div",{className:"form-input",children:Object(n.jsx)("input",{type:"text",name:"name",value:a.name,placeholder:"Name",onChange:function(e){return s(Object(d.a)(Object(d.a)({},a),{},{name:e.target.value}))},required:!0})}),Object(n.jsxs)("div",{className:"form-input",children:[Object(n.jsx)("p",{id:"BOD",children:"Date of Birth"}),Object(n.jsx)("input",{type:"date",name:"date_of_birth",value:a.date_of_birth,onChange:function(e){return s(Object(d.a)(Object(d.a)({},a),{},{date_of_birth:e.target.value}))},required:!0})]}),Object(n.jsx)("div",{id:"link",children:Object(n.jsx)("a",{href:"/login",children:"OR Login"})}),Object(n.jsx)("button",{disabled:o,className:"form-button",type:"submit",children:"Signup"})]})})})}),F=(a(80),a(81),function(e){var t,a=e.info,s=Object(k.b)(),r=Object(c.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1];return t=e.FavoriteDelete?Object(n.jsx)("div",{onClick:function(){l(!0),O().delete("favorite/".concat(a.id)).then((function(e){var t,n=e.data&&e.data.message?e.data.message:"";s(S(!0,n)),s((t=a.id,{type:f,payload:t})),l(!1)})).catch((function(e){var t=e.response&&e.response.data&&e.response.data.message?e.response.data.message:"";s(S(!1,t)),l(!1)}))},className:"headline-button",id:"remove-favorite",children:Object(n.jsx)("button",{disabled:o,children:"Remove From favorite"})}):Object(n.jsx)("div",{onClick:function(){l(!0);var e=function(e){return e?e.substring(0,255):""},t={description:"".concat(e(a.description)),publishedAt:"".concat(e(a.publishedAt)),title:"".concat(e(a.title)),author:"".concat(e(a.author)),url:"".concat(e(a.url)),urlToImage:"".concat(e(a.urlToImage))};O().post("favorite",t).then((function(e){var t=e.data&&e.data.message?e.data.message:"";s(S(!0,t)),l(!1)})).catch((function(e){var t=e.response.data&&e.response.data.message?e.response.data.message:"";s(S(!1,t)),l(!1)}))},className:"headline-button",id:"add-favorite",children:Object(n.jsx)("button",{disabled:o,children:"Add to favorite"})}),Object(n.jsxs)("div",{className:"headline-container",children:[Object(n.jsx)("div",{className:"headline-image"}),Object(n.jsxs)("div",{className:"headline-text",children:[Object(n.jsx)("div",{className:"headline-title",style:{backgroundImage:"url("+a.urlToImage+")"},children:Object(n.jsxs)("p",{children:["    ",a.title]})}),Object(n.jsxs)("p",{id:"headline-author",children:[a.author," "]}),Object(n.jsx)("p",{id:"headline-content",children:a.description}),Object(n.jsx)("a",{id:"headline-link",href:a.url,children:"Go to Headline Link"}),Object(n.jsx)("p",{id:"headline-date",children:a.publishedAt})]}),t]})}),I=function(e){var t=Object(c.useState)({loading:!1,headlines:[]}),a=Object(j.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)({page:1,country:1,category:1}),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(c.useState)(2),h=Object(j.a)(b,2),p=h[0],g=h[1],f=Object(k.b)();return Object(c.useEffect)((function(){r(Object(d.a)(Object(d.a)({},s),{},{headlines:[],loading:!0})),O().get("/news?page=".concat(l.page,"&country=").concat(l.country,"&category=").concat(l.category)).then((function(e){var t=e.data.data;Array.isArray(t)||(t=Object.keys(t).map((function(e){return t[e]})));var a=null==e.data.next_page_url?-1:l.page+1;r(Object(d.a)(Object(d.a)({},s),{},{loading:!1,headlines:t})),g(a)})).catch((function(e){r(Object(d.a)(Object(d.a)({},s),{},{loading:!1,headlines:[]}));var t=e.response.data&&e.response.data.message?e.response.data.message:"";f(S(!1,t))}))}),[l.page,l.country,l.category]),Object(n.jsxs)("div",{className:"contanier",children:[Object(n.jsx)("div",{className:"custom-dropdown big",children:Object(n.jsxs)("select",{value:l.country,onChange:function(e){u(Object(d.a)(Object(d.a)({},l),{},{page:1,country:e.target.value}))},children:[Object(n.jsx)("option",{value:"1",children:"Egypt"}),Object(n.jsx)("option",{value:"2",children:"UAE"})]})}),Object(n.jsx)("div",{className:"custom-dropdown big",children:Object(n.jsxs)("select",{value:l.category,onChange:function(e){u(Object(d.a)(Object(d.a)({},l),{},{page:1,category:e.target.value}))},children:[Object(n.jsx)("option",{value:"1",children:"Business"}),Object(n.jsx)("option",{value:"2",children:"Sports"})]})}),Object(n.jsxs)("div",{className:"headlines-container",children:[s.loading?Object(n.jsx)("div",{class:"loader"}):"",s.headlines&&s.headlines.length?s.headlines.map((function(e){return Object(n.jsx)(F,{info:e,FavoriteDelete:!1})})):""]}),Object(n.jsxs)("div",{className:"headlines-page",children:[1==l.page?"":Object(n.jsx)("button",{id:"headline-prev",onClick:function(){u(Object(d.a)(Object(d.a)({},l),{},{page:l.page-1}))},children:"Prev"}),-1==p?"":Object(n.jsx)("button",{id:"headline-next",onClick:function(){u(Object(d.a)(Object(d.a)({},l),{},{page:l.page+1}))},children:"Next"})]})]})},w=(a(82),function(){var e=Object(k.c)((function(e){return e.favoritesReducer})),t=Object(k.b)(),a=Object(c.useState)(1),s=Object(j.a)(a,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){t(m(r))}),[r]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"headlines-container",children:[e.loading?Object(n.jsx)("p",{children:"Loading..."}):"",e.favorites&&e.favorites.length?e.favorites.map((function(e){return Object(n.jsx)(F,{info:e,FavoriteDelete:!0})})):"",e.error?t(S(!1,e.error)):""]}),Object(n.jsxs)("div",{className:"headlines-page",children:[1==r?"":Object(n.jsx)("button",{id:"headline-prev",onClick:function(){i(r-1)},children:"Prev"}),-1==e.NextPage?"":Object(n.jsx)("button",{id:"headline-next",onClick:function(){i(r+1)},children:"Next"})]})]})}),T=(a(83),function(e){var t=Object(k.b)(),a=Object(c.useState)(!1),s=Object(j.a)(a,2),r=(s[0],s[1],Object(k.c)((function(e){return e.authReducer})));return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("div",{className:"header-bar",children:Object(n.jsx)("div",{className:"nav-menu",children:r.logged?Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/favorites",children:"My Favorites"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/headlines",children:"All News"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/logout",onClick:function(a){a.preventDefault(),O().get("logout").then((function(a){var n=a.data&&a.data.message?a.data.message:"";localStorage.setItem("token",""),localStorage.clear(),t(S(!0,n)),t(C),e.history.push("/login")})).catch((function(e){var a=e.response&&e.response.data&&e.response.data.message?e.response.data.message:"";t(S(!1,a))}))},children:"Logout"})})]}):Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/login",children:"Login"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/signup",children:"Signup"})})]})})})})}),A=a(12),L=a(40),D=a(41),P=a(26),U={loading:!1,headlines:[],error:"",NextPage:2},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case p:return Object(d.a)(Object(d.a)({},e),{},{NextPage:t.payload.next,loading:!1,favorites:t.payload.data,error:""});case g:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,favorites:[],error:t.payload});case f:for(var a=Object(P.a)(e.favorites),n=0;n<a.length;n++)if(console.log(a[n].id),a[n].id===t.payload){a.splice(n,1);break}return Object(d.a)(Object(d.a)({},e),{},{loading:!1,favorites:Object(P.a)(a),error:""});default:return e}},B={display:!1,msg:"",success:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{display:!0,msg:t.payload,success:!1};case v:return Object(d.a)(Object(d.a)({},e),{},{display:!0,msg:t.payload,success:!0});case y:return Object(d.a)(Object(d.a)({},e),{},{display:!1,msg:""});default:return e}},q={logged:!!localStorage.getItem("token")},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(d.a)(Object(d.a)({},e),{},{logged:!0});case N:return Object(d.a)(Object(d.a)({},e),{},{logged:!1});default:return e}},V=Object(A.combineReducers)({favoritesReducer:M,messageReducer:G,authReducer:H}),J=Object(A.createStore)(V,Object(L.composeWithDevTools)(Object(A.applyMiddleware)(D.a))),z=(a(84),function(e){var t=Object(k.c)((function(e){return e.messageReducer}));return t.display?Object(n.jsxs)("div",{className:t.success?"success-msg":"error-msg",children:[Object(n.jsx)("span",{className:"closebtn",children:"\xd7"}),t.msg]}):""}),Q=a(27),W=function(e){var t=e.component,a=Object(Q.a)(e,["component"]),c=Object(k.c)((function(e){return e.authReducer.logged}));return Object(n.jsx)(l.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return c?Object(n.jsx)(t,Object(d.a)({},e)):Object(n.jsx)(l.a,{to:"/login"})}}))},K=function(e){var t=e.component,a=Object(Q.a)(e,["component"]),c=Object(k.c)((function(e){return e.authReducer.logged}));return Object(n.jsx)(l.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return c?Object(n.jsx)(l.a,{to:"/"}):Object(n.jsx)(t,Object(d.a)({},e))}}))};var X=function(){return Object(n.jsx)(o.a,{children:Object(n.jsx)(k.a,{store:J,children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l.b,{path:"/",component:T}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(K,{path:"/login",exact:!0,component:R}),Object(n.jsx)(K,{path:"/signup",exact:!0,component:_}),Object(n.jsx)(W,{path:"/favorites",exact:!0,component:w}),Object(n.jsx)(W,{path:"/headlines",exact:!0,component:I}),Object(n.jsx)(W,{path:"/",exact:!0,component:I})]}),Object(n.jsx)(z,{})]})})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),Y()}},[[85,1,2]]]);
//# sourceMappingURL=main.576f5087.chunk.js.map