"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{9527:function(n,e,t){t.d(e,{Z:function(){return S}});var i,r,a,o,d,l,c,s=t(9439),p=t(2791),u=t(168),x=t(6487),f=t(867),h=(0,x.default)(f.Z)(i||(i=(0,u.Z)(["\n  min-width: 100%;\n  width: max-content;\n  max-height: 144px;\n\n  .simplebar-scrollbar::before {\n    background-color: var(--scroll-bar-color);\n    width: 4px;\n  }\n  .simplebar-scrollbar.simplebar-visible::before {\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-height: 162px;\n  }\n"]))),m=t(3329);function g(n){var e=n.children;return(0,m.jsx)(h,{children:e})}var v=x.default.div(r||(r=(0,u.Z)(["\n  position: relative;\n"]))),b=x.default.button(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  span {\n    transition: color var(--transition-time) var(--transition-function),\n      opacity var(--transition-time) var(--transition-function);\n  }\n\n  svg {\n    margin-left: 8px;\n    stroke: var(--accent);\n    transition: stroke var(--transition-time) var(--transition-function);\n  }\n\n  &:hover,\n  &:focus {\n    span {\n      color: var(--accent-green);\n      opacity: 0.8;\n    }\n  }\n"]))),w=x.default.span(o||(o=(0,u.Z)(["\n  color: var(--add-input-color);\n  font-size: 12px;\n  font-style: normal;\n  line-height: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),Z=x.default.div(d||(d=(0,u.Z)(["\n  position: absolute;\n  top: calc(100% + 4px);\n  right: 0;\n  z-index: 10;\n\n  display: ",";\n\n  background-color: var(--select-options-bg);\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n\n  @media screen and (min-width: 768px) {\n    top: calc(100% + 10px);\n  }\n"])),(function(n){return n.$isOpen?"block":"none"})),y=x.default.ul(l||(l=(0,u.Z)(["\n  margin: 0;\n  padding: 4px 14px;\n  min-width: 100%;\n  width: max-content;\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 18px;\n  }\n"]))),j=x.default.li(c||(c=(0,u.Z)(["\n  padding: 4px 0;\n\n  color: ",";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  opacity: 0.5;\n  transition: color var(--transition-time) var(--transition-function);\n  cursor: pointer;\n\n  &:hover {\n    color: var(--select-options-hover);\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"])),(function(n){return n.$active?"var(--accent)":"var(--select-color)"})),k=t(5561);t(6035);function S(n){var e=n.options,t=n.currentOption,i=n.onSelect,r=(0,p.useState)(!1),a=(0,s.Z)(r,2),o=a[0],d=a[1];(0,p.useEffect)((function(){if(o){var n=function n(){d(!1),document.removeEventListener("click",n)};setTimeout((function(){document.addEventListener("click",n)}),0)}}),[o]);var l;return(0,m.jsxs)(v,{children:[(0,m.jsxs)(b,{type:"button",onClick:function(){return d((function(n){return!n}))},children:[(0,m.jsx)(w,{children:t?(l=t,e.find((function(n){return n.value===l})).label):"Select..."}),(0,m.jsx)("svg",{width:20,height:20,children:(0,m.jsx)("use",{href:k.Z+"#icon-down"})})]}),(0,m.jsx)(Z,{$isOpen:o,children:(0,m.jsx)(g,{children:(0,m.jsx)(y,{children:e.map((function(n){var e=n.label,r=n.value;return(0,m.jsx)(j,{$active:t===r,onClick:function(){return function(n){i(n)}(r)},children:e},r)}))})})})]})}S.defaultProps={options:[],currentOption:"",onSelect:function(){return null}}},7691:function(n,e,t){t.r(e),t.d(e,{default:function(){return Te}});var i,r=t(1413),a=t(5987),o=t(168),d=t(6487),l=d.default.h1(i||(i=(0,o.Z)(["\n  color: var(--title-color);\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  letter-spacing: -0.56px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    line-height: 1;\n    letter-spacing: -0.64px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    font-size: 44px;\n    letter-spacing: -0.88px;\n  }\n"]))),c=t(3329),s=["children"];function p(n){var e=n.children,t=(0,a.Z)(n,s);return(0,c.jsx)(l,(0,r.Z)((0,r.Z)({},t),{},{children:e}))}var u,x,f,h,m,g,v,b,w,Z=t(4165),y=t(5861),j=t(9439),k=t(7689),S=t(2791),C=t(6277),z=t(9527),_=d.default.p(u||(u=(0,o.Z)(["\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n\n  color: var(--error-red);\n  text-align: center;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n"]))),$=["children"];function E(n){var e=n.children,t=(0,a.Z)(n,$);return(0,c.jsx)(_,(0,r.Z)((0,r.Z)({},t),{},{children:e}))}for(var O=d.default.section(x||(x=(0,o.Z)(["\n  margin-bottom: 68px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n    display: grid;\n    grid-template-columns: 280px 1fr;\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    grid-template-columns: 358px 1fr;\n    gap: 50px;\n  }\n"]))),q=d.default.label(f||(f=(0,o.Z)(["\n  position: relative;\n\n  margin: 0 32px 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 268px;\n\n  background-color: ",";\n  border-radius: 8px;\n  cursor: pointer;\n\n  svg {\n    transition: transform var(--transition-time) var(--transition-function);\n  }\n\n  &:hover {\n    svg {\n      transform: scale(1.05);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n\n  @media screen and (min-width: 1440px) {\n    height: 344px;\n  }\n"])),(function(n){return n.$isEmpty?"var(--accent-green)":"transparent"})),B=d.default.img(h||(h=(0,o.Z)(["\n  max-width: auto;\n  object-fit: cover;\n  height: 100%;\n  border-radius: 8px;\n"]))),P=d.default.div(m||(m=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: flex-start;\n  height: 40px;\n\n  border-bottom: 1px solid var(--border-bottom-color);\n  transition: border-color var(--transition-time) var(--transition-function);\n\n  &:not(:last-child) {\n    margin-bottom: 24px;\n  }\n\n  &:hover,\n  &:focus-within {\n    border-color: var(--input-border-color-focus);\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 43px;\n\n    &:not(:last-child) {\n      margin-bottom: 32px;\n    }\n  }\n"]))),V=d.default.label(g||(g=(0,o.Z)(["\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n"]))),T=d.default.div(v||(v=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n"]))),F=d.default.input(b||(b=(0,o.Z)(["\n  width: 100%;\n\n  color: var(--add-input-color);\n  font-family: inherit;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  &::placeholder {\n    color: inherit;\n    opacity: var(--add-input-opacity);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),I=d.default.span(w||(w=(0,o.Z)(["\n  color: var(--add-input-color);\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  opacity: var(--add-input-opacity);\n\n  cursor: default;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),L=t(5561),R=JSON.parse('[{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8a"},"name":"Seafood"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8b"},"name":"Lamb"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8c"},"name":"Starter"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8d"},"name":"Chicken"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8e"},"name":"Beef"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8f"},"name":"Dessert"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f90"},"name":"Vegan"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f91"},"name":"Pork"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f92"},"name":"Vegetarian"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f93"},"name":"Miscellaneous"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f94"},"name":"Pasta"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f95"},"name":"Breakfast"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f96"},"name":"Side"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f97"},"name":"Goat"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f98"},"name":"Soup"}]'),D=[],A=5;A<=120;A+=5)D.push({value:A,label:A+" min"});function U(n){var e=n.formik,t=(0,S.useState)([]),i=(0,j.Z)(t,2),r=i[0],a=i[1],o=(0,S.useState)(""),d=(0,j.Z)(o,2),l=d[0],s=d[1],p=e.setFieldValue,u=e.handleChange,x=e.handleBlur,f=e.touched,h=e.errors,m=e.values,g=m.title,v=m.category,b=m.description,w=m.time;(0,S.useEffect)((function(){a(R)}),[]);var Z=(0,S.useMemo)((function(){return r.map((function(n){var e=n.name;return{value:e,label:e}}))}),[r]),y=function(n){return Boolean(f[n]&&h[n])&&(0,c.jsx)(E,{children:h[n]})};return(0,c.jsxs)(O,{children:[(0,c.jsxs)(q,{$isEmpty:!l,children:[(0,c.jsx)("input",{type:"file",name:"preview",accept:"image/*",hidden:!0,onChange:function(n){var e=n.target.files[0];"object"===typeof e&&(p("preview",e),s(URL.createObjectURL(e)))}}),l?(0,c.jsx)(B,{src:l,alt:"Preview"}):(0,c.jsx)("svg",{width:64,height:64,children:(0,c.jsx)("use",{href:L.Z+"#icon-add-foto"})}),y("preview")]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)(P,{children:[(0,c.jsx)(V,{children:(0,c.jsx)(F,{type:"text",name:"title",placeholder:"Enter item title",value:g,onChange:u,onBlur:x})}),y("title")]}),(0,c.jsxs)(P,{children:[(0,c.jsx)(V,{children:(0,c.jsx)(F,{type:"text",name:"description",placeholder:"Enter about recipe",value:b,onChange:u,onBlur:x})}),y("description")]}),(0,c.jsxs)(P,{children:[(0,c.jsxs)(T,{children:[(0,c.jsx)(I,{children:"Category"}),(0,c.jsx)(z.Z,{options:Z,currentOption:v,onSelect:function(n){return p("category",n)}})]}),y("category")]}),(0,c.jsxs)(P,{children:[(0,c.jsxs)(T,{children:[(0,c.jsx)(I,{children:"Cooking time"}),(0,c.jsx)(z.Z,{options:D,currentOption:w,onSelect:function(n){return p("time",n)}})]}),y("time")]})]})]})}U.defaultProps={title:"",category:"",description:"",time:0,setFieldValue:function(){return null}};var N,J,M,X,G,K,H,Q,W,Y=t(3433),nn=t(5984),en=t(8009),tn=t(2018),rn=t(867),an=d.default.div(N||(N=(0,o.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]))),on=d.default.label(J||(J=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  svg {\n    margin-left: 8px;\n    stroke: var(--accent);\n  }\n"]))),dn=d.default.input(M||(M=(0,o.Z)(["\n  width: 100%;\n\n  color: var(--add-ingr-input-color);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  opacity: 0;\n  transition: opacity var(--transition-time) var(--transition-function);\n\n  &:focus {\n    opacity: 1;\n\n    & + span {\n      opacity: 0;\n      pointer-events: none;\n    }\n    \n  &::placeholder {\n    color: var(--add-placeholder-color);\n    opacity: var(--add-input-opacity);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),ln=d.default.span(X||(X=(0,o.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  color: var(--black);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),cn=(0,d.default)(ln)(G||(G=(0,o.Z)(["\n  opacity: 0.5;\n"]))),sn=d.default.div(K||(K=(0,o.Z)(["\n  position: absolute;\n  top: calc(100% + 4px);\n  right: 0;\n  z-index: 10;\n\n  display: ",";\n\n  background-color: var(--white);\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n\n  @media screen and (min-width: 768px) {\n    top: calc(100% + 10px);\n  }\n"])),(function(n){return n.$isOpen?"block":"none"})),pn=d.default.ul(H||(H=(0,o.Z)(["\n  margin: 0;\n  padding: 4px 14px;\n  min-width: 100%;\n  width: max-content;\n"]))),un=d.default.li(Q||(Q=(0,o.Z)(["\n  padding: 3px 0;\n\n  color: var(--black);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: calc(18 / 12);\n  letter-spacing: -0.24px;\n  opacity: 0.5;\n\n  &:hover {\n    color: var(--accent);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),xn=(0,d.default)(rn.Z)(W||(W=(0,o.Z)(["\n  min-width: 100%;\n  width: max-content;\n  max-height: 144px;\n\n  .simplebar-scrollbar::before {\n    background-color: var(--scroll-bar-color);\n    width: 4px;\n  }\n  .simplebar-scrollbar.simplebar-visible::before {\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-height: 172px;\n  }\n"]))),fn=t(1243),hn=function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fn.Z.get("/search/ingredients",{params:{keyword:e}}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();t(6035);function mn(n){var e=n.onSelect,t=n.inputProps,i=(0,S.useState)(!1),a=(0,j.Z)(i,2),o=a[0],d=a[1],l=(0,S.useState)(""),s=(0,j.Z)(l,2),p=s[0],u=s[1],x=(0,S.useState)([]),f=(0,j.Z)(x,2),h=f[0],m=f[1],g=(0,S.useState)(""),v=(0,j.Z)(g,2),b=v[0],w=v[1],k=(0,S.useState)(""),C=(0,j.Z)(k,2),z=C[0],_=C[1];(0,S.useEffect)((function(){if(p){var n=setTimeout((function(){(0,y.Z)((0,Z.Z)().mark((function n(){var e,t;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,hn(p);case 3:e=n.sent,t=e.data,m(t),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),_(n.t0.message),setTimeout((function(){_("")}),4e3);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),300);return function(){return clearTimeout(n)}}}),[p]),(0,S.useEffect)((function(){if(o){var n=function n(e){e.target.closest(".".concat(on.styledComponentId))||(d(!1),document.removeEventListener("click",n))};setTimeout((function(){document.addEventListener("click",n)}),0)}}),[o]);return(0,c.jsxs)(an,{children:[(0,c.jsxs)(on,{type:"button",onClick:function(){return d(!0)},children:[(0,c.jsx)(dn,(0,r.Z)({type:"text",value:p,onChange:function(n){var e=n.target;return u(e.value.trim())}},t)),b?(0,c.jsx)(ln,{children:b}):(0,c.jsx)(cn,{children:"Enter ingredient"}),(0,c.jsx)("svg",{width:20,height:20,children:(0,c.jsx)("use",{href:L.Z+"#icon-down"})})]}),h.length>0&&(0,c.jsx)(sn,{$isOpen:o,children:(0,c.jsx)(xn,{children:(0,c.jsx)(pn,{children:h.map((function(n){var t=n._id,i=n.name;return(0,c.jsx)(un,{onClick:function(){return function(n){var t=n._id,i=n.name;e(t),w(i)}({_id:t,name:i})},children:i},t)}))})})}),""!==z&&(0,c.jsx)(tn.Z,{text:z})]})}mn.defaultProps={onSelect:function(){return null}};var gn,vn,bn,wn,Zn,yn=["onChange","defaultValue"];function jn(n){var e=n.onChange,t=n.defaultValue,i=(0,a.Z)(n,yn),o=(0,S.useState)(""),d=(0,j.Z)(o,2),l=d[0],s=d[1],p=(0,S.useState)(!1),u=(0,j.Z)(p,2),x=u[0],f=u[1];(0,S.useEffect)((function(){x||Number(l)||void 0===t||s(t)}),[x,l,s,t]);return(0,c.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",value:l,onChange:function(n){for(var t=n.target,i=0;i<t.value.length;i++){var r=t.value[i].charCodeAt();if(r<48||r>57)return}s(t.value),e(t.value)}},i),{},{onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}var kn,Sn,Cn,zn,_n,$n,En,On,qn,Bn,Pn=d.default.li(gn||(gn=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n"]))),Vn=d.default.div(vn||(vn=(0,o.Z)(["\n  position: relative;\n\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  height: 53px;\n  max-width: 194px;\n\n  background-color: var(--input-bg-color);\n  border-radius: 6px;\n\n  &:first-child {\n    flex: 1;\n  }\n\n  & > div {\n    position: static;\n    & > div {\n      width: 100%;\n    }\n  }\n\n  &:not(:first-child) ul {\n    padding-left: 56px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 398px;\n    height: 59px;\n  }\n"]))),Tn=(0,d.default)(jn)(bn||(bn=(0,o.Z)(["\n  width: 40px;\n\n  color: var(--text-primary);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  text-align: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),Fn=d.default.button(wn||(wn=(0,o.Z)(["\n  margin-left: auto;\n  display: inline-flex;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n  transition: color var(--transition-time) var(--transition-function);\n\n  &:hover,\n  &:focus {\n    color: var(--accent);\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n    stroke: #333333;\n  }\n\n  @media screen and (min-width: 768px) {\n    svg {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"]))),In=(0,d.default)(E)(Zn||(Zn=(0,o.Z)(["\n  top: 100%;\n"]))),Ln=JSON.parse('[{"id":1,"label":"tbs","value":"tbs"},{"id":2,"label":"tsp","value":"tsp"},{"id":3,"label":"kg","value":"kg"},{"id":4,"label":"g","value":"g"}]');function Rn(n){var e=n.errors,t=n.onDelete,i=n.onFieldsChange,r=(0,S.useState)(""),a=(0,j.Z)(r,2),o=a[0],d=a[1],l=(0,S.useState)(1),s=(0,j.Z)(l,2),p=s[0],u=s[1],x=(0,S.useState)("tbs"),f=(0,j.Z)(x,2),h=f[0],m=f[1];return(0,S.useEffect)((function(){i({id:o,measure:"".concat(p," ").concat(h)})}),[o,p,h]),(0,c.jsxs)(Pn,{children:[(0,c.jsx)(Vn,{children:(0,c.jsx)(mn,{onSelect:d})}),(0,c.jsxs)(Vn,{children:[(0,c.jsx)(Tn,{maxLength:3,defaultValue:1,onChange:u}),(0,c.jsx)(z.Z,{options:Ln,currentOption:h,onSelect:m})]}),(0,c.jsx)(Fn,{type:"button",onClick:t,children:(0,c.jsx)("svg",{children:(0,c.jsx)("use",{href:L.Z+"#icon-X"})})}),Boolean(null===e||void 0===e?void 0:e.id)&&(0,c.jsx)(In,{children:null===e||void 0===e?void 0:e.id})]})}Rn.defaultProps={errors:{},onDelete:function(){return null},onFieldsChange:function(){return null}};var Dn,An,Un=d.default.section(kn||(kn=(0,o.Z)(["\n  margin-bottom: 44px;\n  max-width: 610px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n  }\n"]))),Nn=d.default.div(Sn||(Sn=(0,o.Z)(["\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Jn=d.default.div(Cn||(Cn=(0,o.Z)(["\n  padding: 4px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  width: 92px;\n  max-height: 32px;\n\n  border: 1px solid var(--button-border-color);\n  border-radius: 18px;\n\n  @media screen and (min-width: 768px) {\n    padding: 4px 15px;\n    width: 110px;\n  }\n"]))),Mn=d.default.button(zn||(zn=(0,o.Z)(["\n  margin: 0;\n  display: flex;\n  align-items: center;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  svg {\n    width: 14px;\n    height: 14px;\n\n    transition: stroke var(--transition-time) var(--transition-function);\n  }\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: ",";\n    }\n  }\n"])),(function(n){return n.$decrement?"var(--accent)":"var(--add-increment-btn)"})),Xn=d.default.span(_n||(_n=(0,o.Z)(["\n  color: var(--text-primary);\n  font-size: 14px;\n  font-style: normal;\n  line-height: 18px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),Gn=d.default.ul($n||($n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 18px;\n"])));d.default.li(En||(En=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n"]))),d.default.div(On||(On=(0,o.Z)(["\n  position: relative;\n\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  height: 53px;\n  max-width: 194px;\n\n  background-color: var(--input-bg-color);\n  border: 1px solid var(--add-input-stroke);\n  border-radius: 6px;\n\n  &:first-child {\n    flex: 1;\n  }\n\n  & > div {\n    position: static;\n    & > div {\n      width: 100%;\n    }\n  }\n\n  & ul {\n    padding-left: 46px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 398px;\n    height: 59px;\n  }\n"]))),(0,d.default)(jn)(qn||(qn=(0,o.Z)(["\n  width: 30px;\n\n  color: var(--text-primary);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  text-align: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),d.default.button(Bn||(Bn=(0,o.Z)(["\n  margin-left: auto;\n  display: inline-flex;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n  transition: color var(--transition-time) var(--transition-function);\n  color: var(--add-del-btn);\n\n  &:hover,\n  &:focus {\n    color: var(--accent-green);\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  @media screen and (min-width: 768px) {\n    svg {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"])));function Kn(n){var e=n.formik,t=e.setFieldValue,i=e.errors,a=e.values.ingredients,o=(0,S.useCallback)((function(){var n=(0,Y.Z)(a);n.push({title:"",measure:"",key:(0,nn.x0)()}),t("ingredients",n)}),[a,t]);(0,S.useEffect)((function(){a.length<1&&o()}),[o,a.length]);var d=(0,S.useCallback)((function(){var n=(0,Y.Z)(a);n.shift(),t("ingredients",n)}),[a,t]),l=(0,S.useCallback)((function(n){return function(e){var i=(0,Y.Z)(a),o=i.findIndex((function(e){return e.key===n}));i[o]=(0,r.Z)({key:n},e),t("ingredients",i)}}),[a,t]),s=(0,S.useCallback)((function(n){if(!(a.length<2)){var e=a.filter((function(e){return e.key!==n}));t("ingredients",e)}}),[a,t]);return(0,c.jsxs)(Un,{children:[(0,c.jsxs)(Nn,{children:[(0,c.jsx)(en.Z,{children:"Ingredients"}),(0,c.jsxs)(Jn,{children:[(0,c.jsx)(Mn,{type:"button",disabled:a.length<2,$decrement:!0,onClick:d,children:(0,c.jsx)("svg",{stroke:"var(--button-border-color)",children:(0,c.jsx)("use",{href:L.Z+"#icon-minus"})})}),(0,c.jsx)(Xn,{children:a.length}),(0,c.jsx)(Mn,{type:"button",onClick:o,children:(0,c.jsx)("svg",{stroke:"var(--accent)",children:(0,c.jsx)("use",{href:L.Z+"#icon-plus"})})})]})]}),(0,c.jsx)(Gn,{children:a.map((function(n,e){var r,a=n.key,o=n.title,d=n.measure;return(0,c.jsx)(Rn,{title:o,measure:d,errors:null===(r=i.ingredients)||void 0===r?void 0:r[e],setFieldValue:t,onDelete:function(){return s(a)},onFieldsChange:l(a)},a)}))})]})}Kn.defaultProps={formik:{}};var Hn,Qn=d.default.section(Dn||(Dn=(0,o.Z)(["\n  position: relative;\n\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Wn=d.default.textarea(An||(An=(0,o.Z)(["\n  margin-top: 24px;\n  padding: 10px 16px;\n  width: 100%;\n  height: 154px;\n\n  color: var(--add-ingr-input-color);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  background-color: var(--input-bg-color);\n  border-radius: 6px;\n\n  transition: all var(--transition-time) var(--transition-function);\n  border: none;\n  outline-color: transparent;\n  resize: none;\n  outline: 1px solid var(--add-input-stroke);\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    right: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: var(--scroll-bar-color);\n    outline: none;\n    border-radius: 4px;\n  }\n\n  &::placeholder {\n    color: var(--add-placeholder-color);\n    opacity: var(--add-input-opacity);\n  }\n\n  & + p {\n    top: 100%;\n  }\n\n  &:hover,\n  &:focus {\n    outline-color: var(--input-border-color-focus);\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 32px;\n    width: 505px;\n\n    font-size: 18px;\n  }\n"])));function Yn(n){var e=n.formik,t=e.handleChange,i=e.handleBlur,r=e.touched,a=e.errors,o=e.values.instructions;return(0,c.jsxs)(Qn,{children:[(0,c.jsx)(en.Z,{children:"Recipe Preparation"}),(0,c.jsx)(Wn,{placeholder:"Enter recipe",name:"instructions",value:o,onChange:t,onBlur:i}),Boolean(r.instructions&&a.instructions)&&(0,c.jsx)(E,{children:a.instructions})]})}Yn.defaultProps={formik:{}};var ne,ee=d.default.button(Hn||(Hn=(0,o.Z)(["\n  padding: 12px 48px;\n  display: inline-flex;\n  align-items: center;\n\n  color: var(--bg-color);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  background-color: var(--dark-accent);\n  border: none;\n  border-radius: 24px 44px;\n  outline: none;\n\n  transition: background-color var(--transition-time) var(--transition-function);\n\n  &:hover,\n  &:focus {\n    background-color: var(--footer-nav-hover);\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 14px 64px;\n  }\n"]))),te=["children"];function ie(n){var e=n.children,t=(0,a.Z)(n,te);return(0,c.jsx)(ee,(0,r.Z)((0,r.Z)({},t),{},{children:e}))}var re=d.default.form(ne||(ne=(0,o.Z)(["\n  margin-bottom: 72px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 0;\n  }\n"]))),ae=t(6727),oe=ae.Ry({title:ae.Z_().min(3,"Title must be at least 3 characters").required("Title is required"),category:ae.Z_().required("Category is required"),description:ae.Z_().min(10,"Description must be at least 10 characters").required("Description is required"),time:ae.Rx().required("Cooking time is required"),preview:ae.nK().required().required("Image is required"),ingredients:ae.IX().of(ae.Ry({id:ae.Z_().required("Ingredient must have a name"),measure:ae.Z_()})).min(1),instructions:ae.Z_().min(10,"Instructions must be at least 10 characters").required("Instructions are required")}),de=function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fn.Z.post("/ownRecipes",e));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),le=["preview"];function ce(){var n=(0,S.useState)(""),e=(0,j.Z)(n,2),t=e[0],i=e[1],r=(0,k.s0)(),o=(0,C.TA)({validateOnBlur:!1,validateOnChange:!1,initialValues:{title:"",category:"",description:"",time:null,preview:null,ingredients:[],instructions:""},validationSchema:oe,onSubmit:function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){var t,o,d;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.preview,o=(0,a.Z)(e,le),(d=new FormData).append("preview",t),d.append("data",JSON.stringify(o)),n.next=7,de(d);case 7:r("/my"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),i(n.t0.message),setTimeout((function(){i("")}),4e3);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()});return(0,c.jsxs)(re,{onSubmit:o.handleSubmit,children:[(0,c.jsx)(U,{formik:o}),(0,c.jsx)(Kn,{formik:o}),(0,c.jsx)(Yn,{formik:o}),(0,c.jsx)(ie,{type:"submit",onClick:o.handleSubmit,children:"Add"}),""!==t&&(0,c.jsx)(tn.Z,{text:t})]})}var se,pe,ue,xe,fe,he,me,ge,ve,be,we=t(986),Ze=t(1087),ye=d.default.section(se||(se=(0,o.Z)([""]))),je=d.default.ul(pe||(pe=(0,o.Z)(["\n  margin: 32px 0 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n    flex-direction: row;\n    column-gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    flex-direction: column;\n  }\n"]))),ke=d.default.li(ue||(ue=(0,o.Z)(["\n  padding-bottom: 13px;\n  border-bottom: 1px solid var(--line-color);\n  transition: border-color var(--transition-time) var(--transition-function);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    border-color: var(--input-border-color-focus);\n  }\n\n  @media screen and (min-width: 768px) {\n    flex: 1;\n  }\n"]))),Se=(0,d.default)(Ze.rU)(xe||(xe=(0,o.Z)(["\n  display: flex;\n  column-gap: 12px;\n\n  cursor: pointer;\n"]))),Ce=d.default.img(fe||(fe=(0,o.Z)(["\n  min-width: 102px;\n  width: 102px;\n  height: 85px;\n\n  border-radius: 8px;\n"]))),ze=d.default.h3(he||(he=(0,o.Z)(["\n  margin-bottom: 3px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  color: var(--text-primary);\n"]))),_e=d.default.p(me||(me=(0,o.Z)(["\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.24px;\n\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-clamp: 2;\n\n  overflow: hidden;\n"]))),$e=d.default.p(ge||(ge=(0,o.Z)(["\n  margin-top: 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--text-primary);\n"]))),Ee=t(7413),Oe=function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){var t;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fn.Z.get("https://so-yummy-backend-hg4e.onrender.com/api/recipes/popular-recipe",e);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();function qe(){var n=(0,S.useState)([]),e=(0,j.Z)(n,2),t=e[0],i=e[1],r=(0,Ee.Z)();(0,S.useEffect)((function(){Oe().then((function(n){i(n)}))}),[]);var a=r>=768&&r<1440?2:4;return(0,c.jsxs)(ye,{children:[(0,c.jsx)(en.Z,{children:"Popular recipe"}),null!==t&&void 0!==t&&t.length?(0,c.jsx)(je,{children:t.slice(0,a).map((function(n){var e=n._id,t=n.title,i=n.description,r=n.preview;return(0,c.jsx)(ke,{children:(0,c.jsxs)(Se,{to:"/recipe/".concat(e),children:[(0,c.jsx)(Ce,{src:r,alt:t,width:102,height:85}),(0,c.jsxs)("div",{children:[(0,c.jsx)(ze,{children:t}),(0,c.jsx)(_e,{children:i})]})]})},e)}))}):(0,c.jsx)($e,{children:"There are no popular recipes at the moment :("})]})}var Be=d.default.section(ve||(ve=(0,o.Z)(["\n  padding: 0 0 100px;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 0 200px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 0 0 200px;\n  }\n"]))),Pe=d.default.div(be||(be=(0,o.Z)(["\n  padding-top: 72px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    display: grid;\n    grid-template-columns: 1fr 318px;\n    column-gap: 120px;\n  }\n"]))),Ve=t(4886);function Te(){var n=(0,Ee.Z)();return(0,c.jsx)(Ve.Z,{isBg:!0,children:(0,c.jsxs)(Be,{children:[(0,c.jsx)(p,{children:"Add recipe"}),(0,c.jsxs)(Pe,{children:[(0,c.jsx)(ce,{}),(0,c.jsxs)("div",{children:[n>=1440&&(0,c.jsx)(we.Z,{}),(0,c.jsx)(qe,{})]})]})]})})}},5984:function(n,e,t){t.d(e,{x0:function(){return i}});var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=530.fa4f1d0a.chunk.js.map