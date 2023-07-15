"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[855],{8385:function(n,e,t){t.d(e,{Z:function(){return f}});var i,r,a,o,c=t(1087),d=t(168),p=t(6487),l=p.default.div(i||(i=(0,d.Z)(["\n  position: relative;\n  width: 344px;\n  background-color: grey;\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    width: 336px;\n\n    @media (min-width: 1440px) {\n      width: 300px;\n    }\n  }\n"]))),u=p.default.img(r||(r=(0,d.Z)(["\n  width: 344px;\n  height: 322px;\n  border-radius: 8px;\n"]))),s=p.default.p(a||(a=(0,d.Z)(["\n  position: absolute;\n  bottom: 26px;\n  left: 18px;\n\n  width: 306px;\n  min-height: 52px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: var(--white);\n  border-radius: 8px;\n\n  font-weight: 500;\n  line-height: 20px;\n  font-size: 16px;\n\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n\n  @media (min-width: 768px) {\n    width: 268px;\n  }\n"]))),x=t(3329);function h(n){var e=n.recipe,t=e.preview,i=e.title,r=e._id;return(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/recipe/".concat(r),children:(0,x.jsxs)(l,{children:[(0,x.jsx)(u,{src:t,alt:i}),(0,x.jsx)(s,{children:i})]})})})}var m=p.default.ul(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 28px;\n  @media (min-width: 768px) {\n    gap: 32px;\n  }\n\n  @media (min-width: 1440px) {\n    row-gap: 100px;\n    column-gap: 13px;\n  }\n"])));function f(n){var e=n.recipes;return(0,x.jsx)(m,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,x.jsx)(h,{recipe:n},n._id)}))})}},4855:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var i,r=t(4886),a=t(168),o=t(6487),c=o.default.h1(i||(i=(0,a.Z)(["\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 1;\n  margin-top: 72px;\n  @media (min-width: 768px) {\n    font-size: 44px;\n    margin-top: 100px;\n  }\n"]))),d=t(9439),p=t(7689),l=t(7630),u=t(6747),s=(0,l.ZP)(u.Z)((function(n){n.theme;return{marginTop:"50px","@media (min-width: 1440px)":{marginTop:"100px"}}})),x=t(2791),h=t(4165),m=t(5861),f=t(1243),g=function(){var n=(0,m.Z)((0,h.Z)().mark((function n(e){var t,i;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.Z.get("recipes/category/".concat(e));case 3:return t=n.sent,i=t.data,n.abrupt("return",i);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,m.Z)((0,h.Z)().mark((function n(){var e,t;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.Z.get("recipes/category-list");case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),b=t(1413),w=t(5987),Z=t(3329),j=["children","value","index"];function C(n){var e=n.children,t=n.value,i=n.index,r=(0,w.Z)(n,j);return(0,Z.jsx)("div",(0,b.Z)((0,b.Z)({role:"tabpanel",hidden:t!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},r),{},{children:t===i&&(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(Z.Fragment,{children:e})})}))}var y,k=t(8385),T=o.default.div(y||(y=(0,a.Z)(["\n  padding-top: 32px;\n  padding-bottom: 100px;\n\n  @media (min-width: 768px) {\n    padding-top: 50px;\n    padding-bottom: 200px;\n  }\n"])));function M(n){var e=n.value,t=n.categories,i=n.recipeList;return t.map((function(n){return(0,Z.jsx)(C,{value:e,index:n.name.toLowerCase(),children:(0,Z.jsx)(T,{children:(0,Z.jsx)(k.Z,{recipes:i})})},n._id)}))}var S=t(1022),_=t(3896),L=(0,l.ZP)((function(n){return(0,Z.jsx)(S.Z,(0,b.Z)((0,b.Z)({},n),{},{TabIndicatorProps:{children:(0,Z.jsx)("span",{className:"MuiTabs-indicatorSpan"})}}))}))((function(n){n.theme;return{"& .MuiTabs-indicator":{display:"flex",justifyContent:"center",backgroundColor:"transparent"},"& .MuiTabs-indicatorSpan":{width:"100%",backgroundColor:"var(--accent)"},"& .MuiTab-root":{paddingTop:"10px",paddingBottom:"32px","@media (min-width: 768px)":{fontSize:18,paddingBottom:"28px"}},"& .MuiTab-root:not(:last-child)":{marginRight:"28px","@media (min-width: 768px)":{marginRight:"55px"}},"& .MuiTabs-scrollButtons":{display:"none","@media (min-width: 768px)":{backgroundColor:"var(--accent)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",width:"44px",height:"44px","& .MuiSvgIcon-root":{fill:"var(--bg-color)",width:"30px",height:"30px"}}}}})),z=(0,l.ZP)(_.Z)((function(n){n.theme;return{display:"inline-flex",minWidth:"auto",fontFamily:"inherit",textTransform:"none",fontWeight:400,fontSize:14,lineHeight:1,padding:0,color:"var(--placeholder-color)","&.Mui-selected":{color:"var(--accent)"},"&.Mui-focusVisible":{backgroundColor:"var(--accent)"},"@media (min-width: 768px)":{fontSize:18}}})),B=(0,l.ZP)(u.Z)((function(n){n.theme;return{borderBottom:"1px solid var(--border-bottom-color)"}}));function P(n){var e=n.value,t=n.categories,i=n.handleChange;return(0,Z.jsx)(B,{children:(0,Z.jsx)(L,{value:e||"beef",onChange:i,variant:"scrollable",scrollButtons:"auto","aria-label":"basic tabs example",children:t.map((function(n){return(0,Z.jsx)(z,{label:n.name,value:n.name.toLowerCase()},n._id)}))})})}function E(){var n=(0,p.s0)(),e=(0,p.UO)().categoryName,t=(0,x.useState)([]),i=(0,d.Z)(t,2),r=i[0],a=i[1],o=(0,x.useState)(e||""),c=(0,d.Z)(o,2),l=c[0],u=c[1],h=(0,x.useState)([]),m=(0,d.Z)(h,2),f=m[0],b=m[1];(0,x.useEffect)((function(){v().then((function(n){var e=n.slice().sort((function(n,e){return n.name.localeCompare(e.name)}));a(e)})).catch((function(n){return console.log(n.message)}))}),[]),(0,x.useEffect)((function(){e&&g(e).then((function(n){b(n)})).catch((function(n){return console.log(n.message)}))}),[e]),(0,x.useEffect)((function(){if(r.length>0){var t=e||r[0].name.toLowerCase();u(t),n("/categories/".concat(t))}}),[e,n,r]);return r.length>0?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(s,{children:[(0,Z.jsx)(P,{categories:r,value:l,handleChange:function(e,t){u(t),n("/categories/".concat(t))}}),(0,Z.jsx)(M,{categories:r,recipeList:f,value:l})]})}):(0,Z.jsx)("div",{children:"Loading..."})}function F(){return(0,Z.jsxs)(r.Z,{children:[(0,Z.jsx)(c,{children:"Categories"}),(0,Z.jsx)(E,{})]})}}}]);
//# sourceMappingURL=855.2140c9db.chunk.js.map