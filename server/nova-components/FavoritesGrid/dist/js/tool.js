!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(13)},function(t,e,n){Nova.booting(function(t,e,r){e.addRoutes([{name:"favorites-grid",path:"/favorites-grid",component:n(2)}])})},function(t,e,n){var r=n(3)(n(4),n(12),!1,null,null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r,i,o){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u,f="function"==typeof a?a.options:a;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId=i),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=u):r&&(u=r),u){var l=f.functional,p=l?f.render:f.beforeCreate;l?(f._injectStyles=u,f.render=function(t,e){return u.call(e),p(t,e)}):f.beforeCreate=p?[].concat(p,u):[u]}return{esModule:s,exports:a,options:f}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5),i=n(7),o=(n.n(i),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t});e.default={name:"favorites-grid",data:function(){return{columns:{title:"Title",url:"Url",urlToImage:"Image",description:"Description",author:"Author",publishedAt:"Date",user:"Username",email:"Email",deleted_at:"Is Deleted",states:"states"}}},computed:o({columnAttribute:function(){return Object.keys(this.columns)}},Object(r.b)({favoritesList:function(t){return t.favoriteModule.favoritesList},favoriteFilter:function(t){return t.favoriteModule.favoriteFilter},paginationInfo:function(t){return t.favoriteModule.paginationInfo},searchQuery:function(t){return t.favoriteModule.searchQuery}}),{noResult:function(){return void 0!==this.searchQuery&&this.searchQuery.length&&this.favoritesList&&!this.favoritesList.length}}),methods:o({},Object(r.a)(["retrieveFavorites","retrieveFilters","getNextPage","getPrevPage","changeFiltersAction","searchAction"]),{changeFilter:function(t){"function"==typeof this.changeFiltersAction&&this.changeFiltersAction({filters:t}),"function"==typeof this.retrieveFavorites&&this.retrieveFavorites({columnAttribute:this.columnAttribute})},nextPage:function(){"function"==typeof this.getNextPage&&this.getNextPage({columnAttribute:this.columnAttribute})},prevPage:function(){"function"==typeof this.getPrevPage&&this.getPrevPage({columnAttribute:this.columnAttribute})},handleSearch:function(t){"function"==typeof this.searchAction&&this.searchAction({columnAttribute:this.columnAttribute,searchQuery:t})}}),beforeMount:function(){"function"==typeof this.retrieveFavorites&&this.retrieveFavorites({columnAttribute:this.columnAttribute}),"function"==typeof this.retrieveFilters&&this.retrieveFilters()}}},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return _}),n.d(e,"b",function(){return b});var r=("undefined"!=typeof window?window:void 0!==t?t:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function o(t){return null!==t&&"object"==typeof t}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},a={namespaced:{configurable:!0}};a.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.hasChild=function(t){return t in this._children},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){i(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,a);var c=function(t){this.register([],t,!1)};c.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},c.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},c.prototype.update=function(t){!function t(e,n,r){0;n.update(r);if(r.modules)for(var i in r.modules){if(!n.getChild(i))return void 0;t(e.concat(i),n.getChild(i),r.modules[i])}}([],this.root,t)},c.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new s(e,n);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&i(e.modules,function(e,i){r.register(t.concat(i),e,n)})},c.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},c.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var u;var f=function(t){var e=this;void 0===t&&(t={}),!u&&"undefined"!=typeof window&&window.Vue&&y(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new c(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new u,this._makeLocalGettersCache=Object.create(null);var o=this,s=this.dispatch,a=this.commit;this.dispatch=function(t,e){return s.call(o,t,e)},this.commit=function(t,e,n){return a.call(o,t,e,n)},this.strict=i;var f=this._modules.root.state;v(this,f,[],this._modules.root),d(this,f),n.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:u.config.devtools)&&function(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)},{prepend:!0}),t.subscribeAction(function(t,e){r.emit("vuex:action",t,e)},{prepend:!0}))}(this)},l={state:{configurable:!0}};function p(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function h(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),d(t,n,e)}function d(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var o={};i(t._wrappedGetters,function(e,n){o[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=u.config.silent;u.config.silent=!0,t._vm=new u({data:{$$state:e},computed:o}),u.config.silent=s,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),u.nextTick(function(){return r.$destroy()}))}function v(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=m(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){u.set(a,c,r.state)})}var f=r.context=function(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=g(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=g(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return m(t.state,n)}}}),i}(t,s,n);r.forEachMutation(function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}(t,s+n,e,f)}),r.forEachAction(function(e,n){var r=e.root?n:s+n,i=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e){var i,o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return(i=o)&&"function"==typeof i.then||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}(t,r,i,f)}),r.forEachGetter(function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,s+n,e,f)}),r.forEachChild(function(r,o){v(t,e,n.concat(o),r,i)})}function m(t,e){return e.reduce(function(t,e){return t[e]},t)}function g(t,e,n){return o(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function y(t){u&&t===u||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(u=t)}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(t){0},f.prototype.commit=function(t,e,n){var r=this,i=g(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.slice().forEach(function(t){return t(a,r.state)}))},f.prototype.dispatch=function(t,e){var n=this,r=g(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter(function(t){return t.before}).forEach(function(t){return t.before(s,n.state)})}catch(t){0}var c=a.length>1?Promise.all(a.map(function(t){return t(o)})):a[0](o);return new Promise(function(t,e){c.then(function(e){try{n._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(s,n.state)})}catch(t){0}t(e)},function(t){try{n._actionSubscribers.filter(function(t){return t.error}).forEach(function(e){return e.error(s,n.state,t)})}catch(t){0}e(t)})})}},f.prototype.subscribe=function(t,e){return p(t,this._subscribers,e)},f.prototype.subscribeAction=function(t,e){return p("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},f.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},f.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},f.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),d(this,this.state)},f.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=m(e.state,t.slice(0,-1));u.delete(n,t[t.length-1])}),h(this)},f.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},f.prototype.hotUpdate=function(t){this._modules.update(t),h(this,!0)},f.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(f.prototype,l);var b=x(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=C(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),_=(x(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=C(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"==typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),x(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||C(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),x(function(t,e){var n={};return w(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=C(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"==typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}));function w(t){return function(t){return Array.isArray(t)||o(t)}(t)?Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function x(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function C(t,e,n){return t._modulesNamespaceMap[n]}}).call(e,n(6))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]);var i={transform:void 0};n(10)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(9)(!1)).push([t.i,".grid-tools{width:100%;margin:auto;display:flex;justify-content:space-between;align-items:baseline}.search-bar{min-width:350px}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t){var e={};return function(t){return void 0===e[t]&&(e[t]=function(t){return document.querySelector(t)}.call(this,t)),e[t]}}(),c=null,u=0,f=[],l=n(11);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(y(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function d(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function m(t){var e=document.createElement("style");return t.attrs.type="text/css",g(e,t.attrs),d(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var s=u++;n=c||(c=m(e)),r=w.bind(null,n,s,!1),i=w.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",g(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=l(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}t&&p(h(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var b,_=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"grid-tools"},[n("div",{staticClass:"grid-filter"},[n("multiselect-input",{attrs:{name:"filter",title:"Filter Favorites",options:t.favoriteFilter,optionKey:"name",optionValue:"id",handleChange:t.changeFilter}})],1),t._v(" "),n("div",{staticClass:"search-bar"},[n("search-input",{attrs:{title:"search by Title, Author or user's email",value:t.searchQuery,handleChange:t.handleSearch}})],1),t._v(" "),n("div",{staticClass:"grid-create"},[n("link-input",{attrs:{link:"create-favorite",text:"Create New Favorite"}})],1)]),t._v(" "),t.noResult?n("no-result",{attrs:{value:t.searchQuery}}):t._e(),t._v(" "),t.noResult?t._e():n("favorites-table",{attrs:{columns:t.columns,rowsData:t.favoritesList}}),t._v(" "),t.noResult?t._e():n("pagination",{attrs:{handleNext:t.nextPage,handlePrev:t.prevPage,isNext:t.paginationInfo.isNext,isPrev:t.paginationInfo.isPrev,currentPage:t.paginationInfo.page}})],1)},staticRenderFns:[]}},function(t,e){}]);