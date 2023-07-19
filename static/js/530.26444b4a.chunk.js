"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{9527:function(n,e,t){t.d(e,{Z:function(){return S}});var i,r,o,a,d,l,c,s=t(9439),p=t(2791),u=t(168),x=t(6487),h=t(867),f=(0,x.default)(h.Z)(i||(i=(0,u.Z)(["\n  min-width: 100%;\n  width: max-content;\n  max-height: 144px;\n\n  .simplebar-scrollbar::before {\n    background-color: var(--scroll-bar-color);\n    width: 4px;\n  }\n  .simplebar-scrollbar.simplebar-visible::before {\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-height: 162px;\n  }\n"]))),m=t(3329);function g(n){var e=n.children;return(0,m.jsx)(f,{children:e})}var v=x.default.div(r||(r=(0,u.Z)(["\n  position: relative;\n"]))),b=x.default.button(o||(o=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  span {\n    transition: color var(--transition-time) var(--transition-function),\n      opacity var(--transition-time) var(--transition-function);\n  }\n\n  svg {\n    margin-left: 8px;\n    stroke: var(--accent);\n    transition: stroke var(--transition-time) var(--transition-function);\n  }\n\n  &:hover {\n    span {\n      color: var(--accent-green);\n      opacity: 0.8;\n    }\n  }\n"]))),w=x.default.span(a||(a=(0,u.Z)(["\n  color: var(--add-input-color);\n  font-size: 12px;\n  font-style: normal;\n  line-height: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),Z=x.default.div(d||(d=(0,u.Z)(["\n  position: absolute;\n  top: calc(100% + 4px);\n  right: 0;\n  z-index: 10;\n\n  display: ",";\n\n  background-color: var(--select-options-bg);\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n\n  @media screen and (min-width: 768px) {\n    top: calc(100% + 10px);\n  }\n"])),(function(n){return n.$isOpen?"block":"none"})),y=x.default.ul(l||(l=(0,u.Z)(["\n  margin: 0;\n  padding: 4px 14px;\n  min-width: 100%;\n  width: max-content;\n\n  @media screen and (min-width: 768px) {\n    padding: 8px 18px;\n  }\n"]))),j=x.default.li(c||(c=(0,u.Z)(["\n  padding: 4px 0;\n\n  color: ",";\n  opacity: ",";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.24px;\n  transition: color var(--transition-time) var(--transition-function);\n  cursor: pointer;\n\n  &:hover {\n    color: var(--select-options-hover);\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"])),(function(n){return n.$active?"var(--add-socials)":"var(--select-color)"}),(function(n){return n.$active?1:.5})),k=t(5561);t(6035);function S(n){var e=n.options,t=n.currentOption,i=n.onSelect,r=(0,p.useState)(!1),o=(0,s.Z)(r,2),a=o[0],d=o[1];(0,p.useEffect)((function(){if(a){var n=function n(){d(!1),document.removeEventListener("click",n)};setTimeout((function(){document.addEventListener("click",n)}),0)}}),[a]);var l;return(0,m.jsxs)(v,{children:[(0,m.jsxs)(b,{type:"button",onClick:function(){return d((function(n){return!n}))},children:[(0,m.jsx)(w,{children:t?(l=t,e.find((function(n){return n.value===l})).label):"Select..."}),(0,m.jsx)("svg",{width:20,height:20,children:(0,m.jsx)("use",{href:k.Z+"#icon-down"})})]}),(0,m.jsx)(Z,{$isOpen:a,children:(0,m.jsx)(g,{children:(0,m.jsx)(y,{children:e.map((function(n){var e=n.label,r=n.value;return(0,m.jsx)(j,{$active:t===r,onClick:function(){return function(n){i(n)}(r)},children:e},r)}))})})})]})}S.defaultProps={options:[],currentOption:"",onSelect:function(){return null}}},7691:function(n,e,t){t.r(e),t.d(e,{default:function(){return De}});var i,r=t(1413),o=t(5987),a=t(168),d=t(6487),l=d.default.h1(i||(i=(0,a.Z)(["\n  color: var(--title-color);\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 28px;\n  letter-spacing: -0.56px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    line-height: 1;\n    letter-spacing: -0.64px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    font-size: 44px;\n    letter-spacing: -0.88px;\n  }\n"]))),c=t(3329),s=["children"];function p(n){var e=n.children,t=(0,o.Z)(n,s);return(0,c.jsx)(l,(0,r.Z)((0,r.Z)({},t),{},{children:e}))}var u,x,h,f,m,g,v,b,w,Z=t(4165),y=t(5861),j=t(9439),k=t(7689),S=t(2791),z=t(6277),C=t(1040),_=t(9527),$=d.default.p(u||(u=(0,a.Z)(["\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n\n  color: var(--error-red);\n  text-align: center;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: normal;\n"]))),E=["children"];function O(n){var e=n.children,t=(0,o.Z)(n,E);return(0,c.jsx)($,(0,r.Z)((0,r.Z)({},t),{},{children:e}))}for(var q=d.default.section(x||(x=(0,a.Z)(["\n  margin-bottom: 68px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n    display: grid;\n    grid-template-columns: 280px 1fr;\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    grid-template-columns: 358px 1fr;\n    gap: 50px;\n  }\n"]))),B=d.default.label(h||(h=(0,a.Z)(["\n  position: relative;\n\n  margin: 0 32px 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 268px;\n\n  background-color: ",";\n  border-radius: 8px;\n  cursor: pointer;\n\n  svg {\n    transition: transform var(--transition-time) var(--transition-function);\n  }\n\n  &:hover {\n    svg {\n      transform: scale(1.05);\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n\n  @media screen and (min-width: 1440px) {\n    height: 344px;\n  }\n"])),(function(n){return n.$isEmpty?"var(--accent-green)":"transparent"})),P=d.default.img(f||(f=(0,a.Z)(["\n  max-width: auto;\n  object-fit: cover;\n  height: 100%;\n  border-radius: 8px;\n"]))),V=d.default.div(m||(m=(0,a.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: flex-start;\n  height: 40px;\n\n  border-bottom: 1px solid var(--border-bottom-color);\n  transition: border-color var(--transition-time) var(--transition-function);\n\n  &:not(:last-child) {\n    margin-bottom: 24px;\n  }\n\n  &:hover,\n  &:focus-within {\n    border-color: var(--input-border-color-focus);\n  }\n\n  @media screen and (min-width: 768px) {\n    height: 43px;\n\n    &:not(:last-child) {\n      margin-bottom: 32px;\n    }\n  }\n"]))),L=d.default.label(g||(g=(0,a.Z)(["\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n"]))),T=d.default.div(v||(v=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n"]))),F=d.default.input(b||(b=(0,a.Z)(["\n  width: 100%;\n\n  color: var(--add-input-color);\n  font-family: inherit;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  &::placeholder {\n    color: inherit;\n    opacity: var(--add-input-opacity);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),I=d.default.span(w||(w=(0,a.Z)(["\n  color: var(--add-input-color);\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  opacity: var(--add-input-opacity);\n\n  cursor: default;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),R=t(5561),D=JSON.parse('[{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8a"},"name":"Seafood"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8b"},"name":"Lamb"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8c"},"name":"Starter"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8d"},"name":"Chicken"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8e"},"name":"Beef"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f8f"},"name":"Dessert"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f90"},"name":"Vegan"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f91"},"name":"Pork"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f92"},"name":"Vegetarian"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f93"},"name":"Miscellaneous"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f94"},"name":"Pasta"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f95"},"name":"Breakfast"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f96"},"name":"Side"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f97"},"name":"Goat"},{"_id":{"$oid":"6462a6cd4c3d0ddd28897f98"},"name":"Soup"}]'),A=[],N=5;N<=120;N+=5)A.push({value:N,label:N+" min"});function U(n){var e=n.formik,t=(0,S.useState)([]),i=(0,j.Z)(t,2),r=i[0],o=i[1],a=(0,S.useState)(""),d=(0,j.Z)(a,2),l=d[0],s=d[1],p=e.setFieldValue,u=e.handleChange,x=e.handleBlur,h=e.touched,f=e.errors,m=e.values,g=m.title,v=m.category,b=m.description,w=m.time;(0,S.useEffect)((function(){o(D)}),[]);var Z=(0,S.useMemo)((function(){return r.map((function(n){var e=n.name;return{value:e,label:e}}))}),[r]),y=function(n){return Boolean(h[n]&&f[n])&&(0,c.jsx)(O,{children:f[n]})};return(0,c.jsxs)(q,{children:[(0,c.jsxs)(B,{$isEmpty:!l,children:[(0,c.jsx)("input",{type:"file",name:"preview",accept:"image/*",hidden:!0,onChange:function(n){var e=n.target.files[0];"object"===typeof e&&(p("preview",e),s(URL.createObjectURL(e)))}}),l?(0,c.jsx)(P,{src:l,alt:"Preview"}):(0,c.jsx)("svg",{width:64,height:64,children:(0,c.jsx)("use",{href:R.Z+"#icon-add-foto"})}),y("preview")]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)(V,{children:[(0,c.jsx)(L,{children:(0,c.jsx)(F,{type:"text",name:"title",placeholder:"Enter item title",value:g,onChange:u,onBlur:x})}),y("title")]}),(0,c.jsxs)(V,{children:[(0,c.jsx)(L,{children:(0,c.jsx)(F,{type:"text",name:"description",placeholder:"Enter about recipe",value:b,onChange:u,onBlur:x})}),y("description")]}),(0,c.jsxs)(V,{children:[(0,c.jsxs)(T,{children:[(0,c.jsx)(I,{children:"Category"}),(0,c.jsx)(_.Z,{options:Z,currentOption:v,onSelect:function(n){return p("category",n)}})]}),y("category")]}),(0,c.jsxs)(V,{children:[(0,c.jsxs)(T,{children:[(0,c.jsx)(I,{children:"Cooking time"}),(0,c.jsx)(_.Z,{options:A,currentOption:w,onSelect:function(n){return p("time",n)}})]}),y("time")]})]})]})}U.defaultProps={title:"",category:"",description:"",time:0,setFieldValue:function(){return null}};var J,M,W,X,G,K,H,Q,Y,nn,en=t(3433),tn=t(5984),rn=t(8009),on=t(867),an=d.default.div(J||(J=(0,a.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]))),dn=d.default.label(M||(M=(0,a.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n\n  svg {\n    margin-left: 8px;\n    stroke: var(--accent);\n  }\n"]))),ln=d.default.input(W||(W=(0,a.Z)(["\n  width: 100%;\n\n  color: var(--add-ingr-input-color);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  opacity: 0;\n  transition: opacity var(--transition-time) var(--transition-function);\n\n  &:focus {\n    opacity: 1;\n\n    & + span {\n      opacity: 0;\n      pointer-events: none;\n    }\n  }\n\n  &::placeholder {\n    color: var(--add-placeholder-color);\n    opacity: var(--add-input-opacity);\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),cn=d.default.span(X||(X=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  color: var(--black);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),sn=(0,d.default)(cn)(G||(G=(0,a.Z)(["\n  color: var(--add-placeholder-color);\n  opacity: var(--add-input-opacity);\n"]))),pn=d.default.div(K||(K=(0,a.Z)(["\n  position: absolute;\n  top: calc(100% + 4px);\n  right: 0;\n  z-index: 10;\n\n  display: ",";\n  justify-content: center;\n\n  background-color: var(--select-options-bg);\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n\n  @media screen and (min-width: 768px) {\n    top: calc(100% + 10px);\n  }\n"])),(function(n){return n.$isOpen?"flex":"none"})),un=d.default.ul(H||(H=(0,a.Z)(["\n  margin: 0;\n  padding: 4px 14px;\n  min-width: 100%;\n  width: max-content;\n"]))),xn=d.default.li(Q||(Q=(0,a.Z)(["\n  padding: 3px 0;\n\n  color: var(--select-color);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: calc(18 / 12);\n  letter-spacing: -0.24px;\n  opacity: 0.5;\n\n  &:hover {\n    color: var(--select-options-hover);\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),hn=d.default.p(Y||(Y=(0,a.Z)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n\n  color: var(--select-color);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  opacity: var(--add-input-opacity);\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),fn=(0,d.default)(on.Z)(nn||(nn=(0,a.Z)(["\n  min-width: 100%;\n  width: max-content;\n  max-height: 144px;\n\n  .simplebar-scrollbar::before {\n    background-color: var(--scroll-bar-color);\n    width: 4px;\n  }\n  .simplebar-scrollbar.simplebar-visible::before {\n    opacity: 1;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-height: 172px;\n  }\n"]))),mn=t(1243),gn=function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",mn.Z.get("/search/ingredients",{params:{keyword:e}}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();t(6035);function vn(n){var e=n.onSelect,t=n.inputProps,i=(0,S.useState)(!1),o=(0,j.Z)(i,2),a=o[0],d=o[1],l=(0,S.useState)(!1),s=(0,j.Z)(l,2),p=s[0],u=s[1],x=(0,S.useState)(""),h=(0,j.Z)(x,2),f=h[0],m=h[1],g=(0,S.useState)([]),v=(0,j.Z)(g,2),b=v[0],w=v[1],k=(0,S.useState)(""),z=(0,j.Z)(k,2),_=z[0],$=z[1];(0,S.useEffect)((function(){if(f){var n=setTimeout((function(){d(!0),(0,y.Z)((0,Z.Z)().mark((function n(){var e,t;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,gn(f);case 3:e=n.sent,t=e.data,w(t),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),w([]),console.log(n.t0.message);case 12:return n.prev=12,d(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})))()}),300);return function(){return clearTimeout(n)}}}),[f]),(0,S.useEffect)((function(){if(p){var n=function n(e){e.target.closest(".".concat(dn.styledComponentId))||(u(!1),document.removeEventListener("click",n))};setTimeout((function(){document.addEventListener("click",n)}),0)}}),[p]);return(0,c.jsxs)(an,{children:[(0,c.jsxs)(dn,{type:"button",onClick:function(){return u(!0)},children:[(0,c.jsx)(ln,(0,r.Z)({type:"text",value:f,onChange:function(n){var e=n.target;return m(e.value.trim())}},t)),_?(0,c.jsx)(cn,{children:_}):(0,c.jsx)(sn,{children:"Enter ingredient"}),(0,c.jsx)("svg",{width:20,height:20,children:(0,c.jsx)("use",{href:R.Z+"#icon-down"})})]}),(0,c.jsx)(pn,{$isOpen:p,children:a?(0,c.jsx)(C.g4,{height:"50",width:"50",radius:"9",color:"var(--select-options-hover)",ariaLabel:"three-dots-loading",visible:!0}):b.length>0?(0,c.jsx)(fn,{children:(0,c.jsx)(un,{children:b.map((function(n){var t=n._id,i=n.name;return(0,c.jsx)(xn,{onClick:function(){return function(n){var t=n._id,i=n.name;e(t),$(i)}({_id:t,name:i})},children:i},t)}))})}):f&&(0,c.jsx)(hn,{children:"Nothing was found :("})})]})}vn.defaultProps={onSelect:function(){return null}};var bn,wn,Zn,yn,jn,kn=["onChange","defaultValue"];function Sn(n){var e=n.onChange,t=n.defaultValue,i=(0,o.Z)(n,kn),a=(0,S.useState)(""),d=(0,j.Z)(a,2),l=d[0],s=d[1],p=(0,S.useState)(!1),u=(0,j.Z)(p,2),x=u[0],h=u[1];(0,S.useEffect)((function(){x||Number(l)||void 0===t||s(t)}),[x,l,s,t]);return(0,c.jsx)("input",(0,r.Z)((0,r.Z)({type:"text",value:l,onChange:function(n){for(var t=n.target,i=0;i<t.value.length;i++){var r=t.value[i].charCodeAt();if(r<48||r>57)return}s(t.value),e(t.value)}},i),{},{onFocus:function(){return h(!0)},onBlur:function(){return h(!1)}}))}var zn,Cn,_n,$n,En,On,qn,Bn,Pn,Vn,Ln=d.default.li(bn||(bn=(0,a.Z)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n"]))),Tn=d.default.div(wn||(wn=(0,a.Z)(["\n  position: relative;\n\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  height: 53px;\n  max-width: 194px;\n  border: 1px solid var(--add-input-stroke);\n  transition: border-color var(--transition-time) var(--transition-function);\n\n  &:hover,\n  &:focus,\n  &:focus-within {\n    border-color: var(--input-border-color-focus);\n  }\n\n  background-color: var(--input-bg-color);\n  border-radius: 6px;\n\n  &:first-child {\n    flex: 1;\n  }\n\n  & > div {\n    position: static;\n    & > div {\n      width: 100%;\n    }\n  }\n\n  &:not(:first-child) ul {\n    padding-left: 56px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 398px;\n    height: 59px;\n  }\n"]))),Fn=(0,d.default)(Sn)(Zn||(Zn=(0,a.Z)(["\n  width: 35px;\n\n  color: var(--text-primary);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  text-align: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    width: 40px;\n    font-size: 18px;\n  }\n"]))),In=d.default.button(yn||(yn=(0,a.Z)(["\n  margin-left: auto;\n  display: inline-flex;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n  transition: color var(--transition-time) var(--transition-function);\n\n  &:hover,\n  &:focus {\n    color: var(--accent);\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n    stroke: #333333;\n  }\n\n  @media screen and (min-width: 768px) {\n    svg {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"]))),Rn=(0,d.default)(O)(jn||(jn=(0,a.Z)(["\n  top: 100%;\n"]))),Dn=JSON.parse('[{"id":1,"label":"tbs","value":"tbs"},{"id":2,"label":"tsp","value":"tsp"},{"id":3,"label":"kg","value":"kg"},{"id":4,"label":"g","value":"g"}]');function An(n){var e=n.errors,t=n.onDelete,i=n.onFieldsChange,r=(0,S.useState)(""),o=(0,j.Z)(r,2),a=o[0],d=o[1],l=(0,S.useState)(1),s=(0,j.Z)(l,2),p=s[0],u=s[1],x=(0,S.useState)("tbs"),h=(0,j.Z)(x,2),f=h[0],m=h[1];return(0,S.useEffect)((function(){i({id:a,measure:"".concat(p," ").concat(f)})}),[a,p,f]),(0,c.jsxs)(Ln,{children:[(0,c.jsx)(Tn,{children:(0,c.jsx)(vn,{onSelect:d})}),(0,c.jsxs)(Tn,{children:[(0,c.jsx)(Fn,{maxLength:3,defaultValue:1,onChange:u}),(0,c.jsx)(_.Z,{options:Dn,currentOption:f,onSelect:m})]}),(0,c.jsx)(In,{type:"button",onClick:t,children:(0,c.jsx)("svg",{children:(0,c.jsx)("use",{href:R.Z+"#icon-X"})})}),Boolean(null===e||void 0===e?void 0:e.id)&&(0,c.jsx)(Rn,{children:null===e||void 0===e?void 0:e.id})]})}An.defaultProps={errors:{},onDelete:function(){return null},onFieldsChange:function(){return null}};var Nn,Un,Jn=d.default.section(zn||(zn=(0,a.Z)(["\n  margin-bottom: 44px;\n  max-width: 610px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n  }\n"]))),Mn=d.default.div(Cn||(Cn=(0,a.Z)(["\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Wn=d.default.div(_n||(_n=(0,a.Z)(["\n  padding: 4px 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  width: 92px;\n  max-height: 32px;\n\n  border: 1px solid var(--button-border-color);\n  border-radius: 18px;\n\n  @media screen and (min-width: 768px) {\n    padding: 4px 15px;\n    width: 110px;\n  }\n"]))),Xn=d.default.button($n||($n=(0,a.Z)(["\n  margin: 0;\n  display: flex;\n  align-items: center;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  svg {\n    width: 14px;\n    height: 14px;\n\n    transition: stroke var(--transition-time) var(--transition-function);\n  }\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: ",";\n    }\n  }\n"])),(function(n){return n.$decrement?"var(--accent)":"var(--add-increment-btn)"})),Gn=d.default.span(En||(En=(0,a.Z)(["\n  color: var(--text-primary);\n  font-size: 14px;\n  font-style: normal;\n  line-height: 18px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),Kn=d.default.ul(On||(On=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 18px;\n"])));d.default.li(qn||(qn=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n"]))),d.default.div(Bn||(Bn=(0,a.Z)(["\n  position: relative;\n\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  height: 53px;\n  max-width: 194px;\n\n  background-color: var(--input-bg-color);\n  border: 1px solid var(--add-input-stroke);\n  border-radius: 6px;\n\n  &:first-child {\n    flex: 1;\n  }\n\n  & > div {\n    position: static;\n    & > div {\n      width: 100%;\n    }\n  }\n\n  & ul {\n    padding-left: 46px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 398px;\n    height: 59px;\n  }\n"]))),(0,d.default)(Sn)(Pn||(Pn=(0,a.Z)(["\n  width: 30px;\n\n  color: var(--text-primary);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  text-align: center;\n  background-color: transparent;\n  border: none;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),d.default.button(Vn||(Vn=(0,a.Z)(["\n  margin-left: auto;\n  display: inline-flex;\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n  transition: color var(--transition-time) var(--transition-function);\n  color: var(--add-del-btn);\n\n  &:hover,\n  &:focus {\n    color: var(--accent-green);\n  }\n\n  svg {\n    width: 18px;\n    height: 18px;\n  }\n\n  @media screen and (min-width: 768px) {\n    svg {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"])));function Hn(n){var e=n.formik,t=e.setFieldValue,i=e.errors,o=e.values.ingredients,a=(0,S.useCallback)((function(){var n=(0,en.Z)(o);n.push({title:"",measure:"",key:(0,tn.x0)()}),t("ingredients",n)}),[o,t]);(0,S.useEffect)((function(){o.length<1&&a()}),[a,o.length]);var d=(0,S.useCallback)((function(){var n=(0,en.Z)(o);n.pop(),t("ingredients",n)}),[o,t]),l=(0,S.useCallback)((function(n){return function(e){var i=(0,en.Z)(o),a=i.findIndex((function(e){return e.key===n}));i[a]=(0,r.Z)({key:n},e),t("ingredients",i)}}),[o,t]),s=(0,S.useCallback)((function(n){if(!(o.length<2)){var e=o.filter((function(e){return e.key!==n}));t("ingredients",e)}}),[o,t]);return(0,c.jsxs)(Jn,{children:[(0,c.jsxs)(Mn,{children:[(0,c.jsx)(rn.Z,{children:"Ingredients"}),(0,c.jsxs)(Wn,{children:[(0,c.jsx)(Xn,{type:"button",disabled:o.length<2,$decrement:!0,onClick:d,children:(0,c.jsx)("svg",{stroke:"var(--button-border-color)",children:(0,c.jsx)("use",{href:R.Z+"#icon-minus"})})}),(0,c.jsx)(Gn,{children:o.length}),(0,c.jsx)(Xn,{type:"button",onClick:a,children:(0,c.jsx)("svg",{stroke:"var(--accent)",children:(0,c.jsx)("use",{href:R.Z+"#icon-plus"})})})]})]}),(0,c.jsx)(Kn,{children:o.map((function(n,e){var r,o=n.key,a=n.title,d=n.measure;return(0,c.jsx)(An,{title:a,measure:d,errors:null===(r=i.ingredients)||void 0===r?void 0:r[e],setFieldValue:t,onDelete:function(){return s(o)},onFieldsChange:l(o)},o)}))})]})}Hn.defaultProps={formik:{}};var Qn,Yn=d.default.section(Nn||(Nn=(0,a.Z)(["\n  position: relative;\n\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),ne=d.default.textarea(Un||(Un=(0,a.Z)(["\n  margin-top: 24px;\n  padding: 10px 16px;\n  width: 100%;\n  height: 154px;\n\n  color: var(--add-ingr-input-color);\n  font-family: inherit;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  background-color: var(--input-bg-color);\n  border-radius: 6px;\n\n  transition: all var(--transition-time) var(--transition-function);\n  border: none;\n  outline-color: transparent;\n  resize: none;\n  outline: 1px solid var(--add-input-stroke);\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    right: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: var(--scroll-bar-color);\n    outline: none;\n    border-radius: 4px;\n  }\n\n  &::placeholder {\n    color: var(--add-placeholder-color);\n    opacity: var(--add-input-opacity);\n  }\n\n  & + p {\n    top: 100%;\n  }\n\n  &:hover,\n  &:focus {\n    outline-color: var(--input-border-color-focus);\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 32px;\n    width: 505px;\n\n    font-size: 18px;\n  }\n"])));function ee(n){var e=n.formik,t=e.handleChange,i=e.handleBlur,r=e.touched,o=e.errors,a=e.values.instructions;return(0,c.jsxs)(Yn,{children:[(0,c.jsx)(rn.Z,{children:"Recipe Preparation"}),(0,c.jsx)(ne,{placeholder:"Enter recipe",name:"instructions",value:a,onChange:t,onBlur:i}),Boolean(r.instructions&&o.instructions)&&(0,c.jsx)(O,{children:o.instructions})]})}ee.defaultProps={formik:{}};var te=d.default.button(Qn||(Qn=(0,a.Z)(["\n  padding: 12px 48px;\n  display: inline-flex;\n  align-items: center;\n\n  color: var(--bg-color);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  background-color: var(--dark-accent);\n  border: none;\n  border-radius: 24px 44px;\n  outline: none;\n\n  transition: background-color var(--transition-time) var(--transition-function);\n\n  &:hover,\n  &:focus {\n    background-color: var(--footer-nav-hover);\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 14px 64px;\n  }\n"]))),ie=["children"];function re(n){var e=n.children,t=(0,o.Z)(n,ie);return(0,c.jsx)(te,(0,r.Z)((0,r.Z)({},t),{},{children:e}))}var oe,ae,de=t(2018),le=d.default.form(oe||(oe=(0,a.Z)(["\n  margin-bottom: 72px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 100px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 0;\n  }\n"]))),ce=d.default.div(ae||(ae=(0,a.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: var(--backdrop-color);\n"]))),se=t(6727),pe=se.Ry({title:se.Z_().min(3,"Title must be at least 3 characters").required("Title is required"),category:se.Z_().required("Category is required"),description:se.Z_().min(10,"Description must be at least 10 characters").required("Description is required"),time:se.Rx().required("Cooking time is required"),preview:se.nK().required().required("Image is required"),ingredients:se.IX().of(se.Ry({id:se.Z_().required("Ingredient must have a name"),measure:se.Z_()})).min(1),instructions:se.Z_().min(10,"Instructions must be at least 10 characters").required("Instructions are required")}),ue=function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",mn.Z.post("/ownRecipes",e));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),xe=["preview","instructions"];function he(){var n=(0,S.useState)(!1),e=(0,j.Z)(n,2),t=e[0],i=e[1],a=(0,S.useState)(""),d=(0,j.Z)(a,2),l=d[0],s=d[1],p=(0,k.s0)(),u=(0,z.TA)({validateOnBlur:!1,validateOnChange:!1,initialValues:{title:"",category:"",description:"",time:null,preview:null,ingredients:[],instructions:""},validationSchema:pe,onSubmit:function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){var t,a,d,l,c,u;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,t=e.preview,a=e.instructions,d=(0,o.Z)(e,xe),l=a.split("\n"),c=l.filter((function(n){return n})).join("\n"),(u=new FormData).append("preview",t),u.append("data",JSON.stringify((0,r.Z)((0,r.Z)({},d),{},{instructions:c}))),n.next=10,ue(u);case 10:p("/my"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(1),s(n.t0.message),setTimeout((function(){s("")}),4e3);case 17:return n.prev=17,i(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})));return function(e){return n.apply(this,arguments)}}()});return(0,c.jsxs)(le,{onSubmit:u.handleSubmit,children:[(0,c.jsx)(U,{formik:u}),(0,c.jsx)(Hn,{formik:u}),(0,c.jsx)(ee,{formik:u}),(0,c.jsx)(re,{type:"submit",onClick:u.handleSubmit,children:"Add"}),""!==l&&(0,c.jsx)(de.Z,{text:l}),t&&(0,c.jsx)(ce,{children:(0,c.jsx)(C.iT,{visible:!0,height:75,width:75,color:"var(--accent-green)",ariaLabel:"oval-loading",secondaryColor:"var(--accent-green)",strokeWidth:8,strokeWidthSecondary:8})})]})}var fe,me,ge,ve,be,we,Ze,ye,je,ke,Se=t(986),ze=t(1087),Ce=d.default.section(fe||(fe=(0,a.Z)([""]))),_e=d.default.ul(me||(me=(0,a.Z)(["\n  margin: 32px 0 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n    flex-direction: row;\n    column-gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    flex-direction: column;\n  }\n"]))),$e=d.default.li(ge||(ge=(0,a.Z)(["\n  padding-bottom: 13px;\n  border-bottom: 1px solid var(--line-color);\n  transition: border-color var(--transition-time) var(--transition-function);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    border-color: var(--input-border-color-focus);\n  }\n\n  @media screen and (min-width: 768px) {\n    flex: 1;\n  }\n"]))),Ee=(0,d.default)(ze.rU)(ve||(ve=(0,a.Z)(["\n  display: flex;\n  column-gap: 12px;\n\n  cursor: pointer;\n"]))),Oe=d.default.img(be||(be=(0,a.Z)(["\n  min-width: 102px;\n  width: 102px;\n  height: 85px;\n\n  border-radius: 8px;\n"]))),qe=d.default.h3(we||(we=(0,a.Z)(["\n  margin-bottom: 3px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  color: var(--text-primary);\n"]))),Be=d.default.p(Ze||(Ze=(0,a.Z)(["\n  color: var(--color-text-secondary);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.24px;\n\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-clamp: 2;\n\n  overflow: hidden;\n"]))),Pe=d.default.p(ye||(ye=(0,a.Z)(["\n  margin-top: 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 20px;\n  color: var(--text-primary);\n"]))),Ve=t(7413),Le=function(){var n=(0,y.Z)((0,Z.Z)().mark((function n(e){var t;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,mn.Z.get("https://so-yummy-backend-hg4e.onrender.com/api/recipes/popular-recipe",e);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();function Te(){var n=(0,S.useState)([]),e=(0,j.Z)(n,2),t=e[0],i=e[1],r=(0,Ve.Z)();(0,S.useEffect)((function(){Le().then((function(n){i(n)}))}),[]);var o=r>=768&&r<1440?2:4;return(0,c.jsxs)(Ce,{children:[(0,c.jsx)(rn.Z,{children:"Popular recipe"}),null!==t&&void 0!==t&&t.length?(0,c.jsx)(_e,{children:t.slice(0,o).map((function(n){var e=n._id,t=n.title,i=n.description,r=n.preview;return(0,c.jsx)($e,{children:(0,c.jsxs)(Ee,{to:"/recipe/".concat(e),children:[(0,c.jsx)(Oe,{src:r,alt:t,width:102,height:85}),(0,c.jsxs)("div",{children:[(0,c.jsx)(qe,{children:t}),(0,c.jsx)(Be,{children:i})]})]})},e)}))}):(0,c.jsx)(Pe,{children:"There are no popular recipes at the moment :("})]})}var Fe=d.default.section(je||(je=(0,a.Z)(["\n  padding: 0 0 100px;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 0 200px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 0 0 200px;\n  }\n"]))),Ie=d.default.div(ke||(ke=(0,a.Z)(["\n  padding-top: 72px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    display: grid;\n    grid-template-columns: 1fr 318px;\n    column-gap: 120px;\n  }\n"]))),Re=t(4886);function De(){var n=(0,Ve.Z)();return(0,c.jsx)(Re.Z,{isBg:!0,children:(0,c.jsxs)(Fe,{children:[(0,c.jsx)(p,{children:"Add recipe"}),(0,c.jsxs)(Ie,{children:[(0,c.jsx)(he,{}),(0,c.jsxs)("div",{children:[n>=1440&&(0,c.jsx)(Se.Z,{}),(0,c.jsx)(Te,{})]})]})]})})}},5984:function(n,e,t){t.d(e,{x0:function(){return i}});var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=530.26444b4a.chunk.js.map