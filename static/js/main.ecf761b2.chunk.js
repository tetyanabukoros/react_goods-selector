(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s.n(c),o=s(7),a=s(4),l=s(5),r=s(9),i=s(8),d=s(1),u=s.n(d),h=s(6),j=s.n(h),b=(s(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=s(0),g=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"],goods:b},e.clear=function(){e.setState({selectedGoods:[]})},e}return Object(l.a)(s,[{key:"getTitle",value:function(){var e=this.state.selectedGoods;if(!e.length)return"No goods selected";if(1===e.length)return"".concat(e," is selected");var t=e.length-1,s=e.slice(0,-1),c="".concat(s.join(", ")," and ").concat(e[t]);return"".concat(c," are selected")}},{key:"isSelected",value:function(e){return this.state.selectedGoods.includes(e)}},{key:"selectGood",value:function(e){var t=this.state.selectedGoods;this.setState({selectedGoods:[].concat(Object(o.a)(t),[e])})}},{key:"unselectGood",value:function(e){var t=this.state.selectedGoods.filter((function(t){return t!==e}));this.setState({selectedGoods:t})}},{key:"selectToggle",value:function(e){this.isSelected(e)?this.unselectGood(e):this.selectGood(e)}},{key:"render",value:function(){var e=this,t=this.state.goods;return Object(p.jsxs)("main",{className:"App",children:[Object(p.jsxs)("header",{className:"App__header",children:[Object(p.jsx)("h1",{className:"App__title",children:this.getTitle()}),Object(p.jsx)("button",{type:"button",className:"App__clear",onClick:this.clear,children:"Clear"})]}),Object(p.jsx)("ul",{children:t.map((function(t){var s=e.isSelected(t);return Object(p.jsx)("li",{children:Object(p.jsxs)("div",{children:[t,Object(p.jsx)("button",{type:"button",className:j()("controlBtn",{"btn--success":!s,"btn--error":s}),onClick:function(){return e.selectToggle(t)},children:s?"Remove":"Select"})]})},t)}))})]})}}]),s}(u.a.Component);n.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ecf761b2.chunk.js.map