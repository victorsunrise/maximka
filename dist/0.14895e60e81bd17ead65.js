webpackJsonp([0],{22:function(e,t,s){var o=s(23);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);s(21)("0bb75702",o,!0)},23:function(e,t,s){t=e.exports=s(20)(void 0),t.push([e.i,".blockitem{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.blockitem,.blockitem__repo{display:-webkit-box;display:-ms-flexbox;display:flex}",""])},24:function(e,t,s){"use strict";function o(e){s(22)}Object.defineProperty(t,"__esModule",{value:!0});var i=s(4),r=s(5),n=s(6),l={name:"all",components:{Item:i.b,Headers:r.b,Repo:n.b},mounted:function(){this.$store.dispatch("MOUNT_ITEM")},computed:{getRepo:function(){return this.$store.getters.getListRepo&&this.$store.getters.getListRepo.length?(console.log(this.$store.getters.getListRepo),this.$store.getters.getListRepo):null}}},c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"compare"},[s("div",{staticClass:"compare-results"},[s("div",{staticClass:"compare-results__block"},[s("headers"),s("div",{staticClass:"blockitem"},[s("item"),s("div",{staticClass:"blockitem__repo"},[e.getRepo&&!e.getRepo.length?s("span",[e._v("you have not any repositories")]):e._e(),s("div",e._l(e.getRepo,function(t,o){return e.getRepo.length&&o%2==0?s("repo",{key:o,staticClass:"blockitem__repo-item",attrs:{item:t}}):e._e()})),s("div",e._l(e.getRepo,function(t,o){return e.getRepo.length&&o%2!=0?s("repo",{key:o,staticClass:"blockitem__repo-item",attrs:{item:t}}):e._e()}))])],1)],1)])])},a=[],p={render:c,staticRenderFns:a},u=p,m=s(1),d=o,g=m(l,u,!1,d,null,null);t.default=g.exports}});