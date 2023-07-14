"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{8385:function(n,t,i){i.d(t,{Z:function(){return v}});var e,r,a,o,p,d,c=i(168),x=i(1087),s=i(6487),h=s.default.li(e||(e=(0,c.Z)([""]))),l=(0,s.default)(x.OL)(r||(r=(0,c.Z)([""]))),m=s.default.div(a||(a=(0,c.Z)(["\n  position: relative;\n  width: 344px;\n  background-color: grey;\n  border-radius: 8px;\n  margin-bottom: 28px;\n\n  @media (min-width: 768px) {\n    width: 336px;\n    margin-bottom: 40px;\n\n    @media (min-width: 1440px) {\n      width: 300px;\n      margin-bottom: 50px;\n    }\n  }\n"]))),u=s.default.img(o||(o=(0,c.Z)(["\n  width: 344px;\n  height: 322px;\n  border-radius: 8px;\n"]))),g=s.default.p(p||(p=(0,c.Z)(["\n  position: absolute;\n  bottom: 26px;\n  left: 18px;\n\n  width: 306px;\n  min-height: 52px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  background-color: var(--white);\n  border-radius: 8px;\n\n  font-weight: 500;\n  line-height: 20px;\n  font-size: 16px;\n\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n\n  @media (min-width: 768px) {\n    width: 268px;\n  }\n"]))),f=i(3329);function b(n){var t=n.recipe,i=t.preview,e=t.title,r=t._id;return(0,f.jsx)(h,{children:(0,f.jsx)(l,{to:"/recipe/".concat(r),children:(0,f.jsxs)(m,{children:[(0,f.jsx)(u,{src:i,alt:e}),(0,f.jsx)(g,{children:e})]})})})}var w=s.default.ul(d||(d=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 28px;\n  @media (min-width: 768px) {\n    gap: 32px;\n  }\n\n  @media (min-width: 1440px) {\n    row-gap: 100px;\n    column-gap: 13px;\n  }\n"])));function v(n){var t=n.recipe;return(0,f.jsx)(w,{children:null===t||void 0===t?void 0:t.map((function(n){return(0,f.jsx)(b,{recipe:n},n._id)}))})}},7104:function(n,t,i){i.d(t,{Z:function(){return l}});i(2791);var e,r,a,o=i(7689),p=i(168),d=i(6487),c=d.default.form(e||(e=(0,p.Z)(["\n  ",";\n  width: 295px;\n  height: 52px;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--input-border-color);\n  border-radius: 54px 104px 54px 104px;\n  background-color: var(--white);\n  filter: drop-shadow(0px 4px 97px rgba(34, 37, 42, 0.03));\n  transition: border-color var(--transition-time) var(--transition-function);\n\n  &:focus-within,\n  &:hover,\n  &:focus {\n    border-color: rgba(35, 38, 42, 0.2);\n  }\n\n  @media (min-width: 768px) {\n    width: 362px;\n    height: 59px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 510px;\n    height: 70px;\n  }\n"])),(function(n){return"true"===n.issearchpage?"   margin: 50px auto 0 auto;\n":""})),x=d.default.input(r||(r=(0,p.Z)(["\n  display: block;\n  width: 100%;\n  padding: 17px 32px;\n  font-size: 12px;\n  line-height: normal;\n  color: var(--text-primary);\n  outline: none;\n  border: none;\n  background-color: transparent;\n\n  &::placeholder {\n    color: var(--placeholder-color);\n  }\n  /*   \n  &:-internal-autofill-selected {\n    appearance: none;\n    background-image: none !important;\n    background-color: inherit !important;\n    color: inherit !important;\n  } */\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    padding: 17px 38px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 23px 48px;\n  }\n"]))),s=d.default.button(a||(a=(0,p.Z)(["\n  height: calc(100% + 2px);\n  padding: 16px 32px;\n  font-size: 14px;\n  line-height: normal;\n  color: var(--bg-color);\n  background-color: ",";\n  border-radius: 54px 104px 54px 104px;\n  transition: background-color var(--transition-time) var(--transition-function);\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  @media (min-width: 768px) {\n    padding: 18px 52px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 23px 52px;\n  }\n"])),(function(n){return"true"===n.issearchpage?"var(--accent)":"var(--dark-accent)"}),(function(n){return"true"===n.issearchpage?"var(--dark-accent)":"var(--accent)"})),h=i(3329);function l(n){var t=n.onSubmit,i=n.query,e=(0,o.s0)(),r=(0,o.TH)().pathname.includes("/search");return(0,h.jsxs)(c,{onSubmit:r?t:function(n){n.preventDefault();var t=n.target[0].value;if(!t||""===t)return console.log("Request cannot be emtpy");e("/search?type=query&query=".concat(t))},issearchpage:r.toString(),children:[(0,h.jsx)(x,{placeholder:"Enter the text",type:"text",defaultValue:i||""}),(0,h.jsx)(s,{type:"submit",issearchpage:r.toString(),children:"Search"})]})}},8461:function(n,t,i){i.r(t),i.d(t,{default:function(){return mn}});var e,r,a=i(168),o=i(6487),p=o.default.section(e||(e=(0,a.Z)(["\n    padding-top: 64px;\n    padding-bottom: 100px;\n\n  @media (min-width: 768px) {\n     padding-top: 72px;\n  }\n\n   @media (min-width: 1440px) {\n     padding-top: 100px;\n     padding-bottom: 118px;\n  }\n"]))),d=i(1087),c=(0,o.default)(d.OL)(r||(r=(0,a.Z)(["\n    transition: var(--transition-time) var(--transition-function); \n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0  auto 0 auto;\n    width: 240px;\n    height: 60px;\n    border: 2px solid var(--accent);\n    border-radius: 18px 36px;\n    \n    background-color:var(--bg-color);\n    text-align: center;\n    font-size: 16px;\n    color: var(--dark-accent);\n    cursor:poiner;\n    \n\n   &:hover {\n    color: var(--bg-color);\n    background-color: var(--accent);\n   }\n\n   &:focus {\n    color: var(--bg-color);\n    background-color: var(--accent);\n  }\n"]))),x=i(3329);function s(){return(0,x.jsx)(c,{children:"Other categories"})}var h,l,m=i(9439),u=i(2791),g=o.default.h2(h||(h=(0,a.Z)(["\n  margin-top:0;     \n  margin-bottom: 32px;\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 28px;\n  color: var(--title-color);\n\n\n\n  @media (min-width: 768px) {\n     margin-bottom: 40px;\n     font-size: 44px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 300px;\n    margin-bottom: 50px; \n  }\n"])));function f(n){var t=n.name;return(0,x.jsx)(g,{children:t})}var b,w=(0,o.default)(d.OL)(l||(l=(0,a.Z)(["\n    transition: var(--transition-time) var(--transition-function); \n    display: block;\n    text-align: center;\n    margin-left: auto;\n    width: 94px;\n    height: 38px;\n    padding: 10px 24px;\n    background-color: var(--accent);\n    border-radius: 6px;\n    color: var(--bg-color);\n  \n\n    \n  &:hover {\n    background-color: var(--dark-accent);\n   }\n\n   &:focus { \n    background-color: var(--dark-accent);\n  }\n\n   @media (min-width: 1440px) {\n    font-size: 14px;\n   }\n }\n\n\n   \n"])));function v(){return(0,x.jsx)(w,{children:"See all"})}var j=o.default.li(b||(b=(0,a.Z)(["\n    margin-bottom : 32px;\n \n    &:last-child {\n      margin-bottom: 40px;\n    }\n  \n\n  @media (min-width: 768px) {\n    margin-bottom : 50px;\n\n    &:last-child {\n     margin-bottom: 32px;\n   }\n   }\n\n\n  @media (min-width: 1440px) {\n      margin-bottom : 100px;\n     \n\n    &:last-child {\n     margin-bottom: 14px;\n    }\n    } \n   "]))),y=i(8385),k=i(4165),Z=i(5861),z=i(1243),S="https://so-yummy-backend-hg4e.onrender.com/api/recipes/main-page",O=JSON.parse(localStorage.getItem("persist:auth")).token;function _(){return(_=(0,Z.Z)((0,k.Z)().mark((function n(t){var i;return(0,k.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z.Z.get("".concat(S,"?limit=").concat(t,"&page=1"),{headers:{Authorization:"Bearer ".concat(O.slice(1,-1))}});case 3:return i=n.sent,n.abrupt("return",i.data);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0.message),n.abrupt("return",null);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}var q=function(n){return _.apply(this,arguments)};function L(){var n=(0,u.useState)([]),t=(0,m.Z)(n,2),i=t[0],e=t[1],r=window.innerWidth,a=r<768?1:r>=1440?4:2;(0,u.useEffect)((function(){q(a).then((function(n){return e(n)}))}),[a]);var o=function(){var n=[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(t){var i=t.recipes[0].category,e=n.find((function(n){return n.category===i}));e?e.recipes=e.recipes.concat(t.recipes):n.push({category:i,recipes:t.recipes})})),n}(null===i||void 0===i?void 0:i.recipes);return console.log(o),(0,x.jsx)("ul",{children:o.map((function(n){return(0,x.jsxs)(j,{children:[(0,x.jsx)(f,{name:n.category}),(0,x.jsx)(y.Z,{recipe:n.recipes}),(0,x.jsx)(v,{})]},n.category)}))})}function D(){return(0,x.jsxs)(p,{children:[(0,x.jsx)(L,{}),(0,x.jsx)(s,{})]})}var E,C,W,Y,A=i(7104),B=i(5561),H=i(6487).styled,I=H.div(E||(E=(0,a.Z)(["\n  position: absolute;\n  bottom: 250px;\n  right: 18px;\n  z-index: 6;\n  width: 225px;\n  padding: 8px;\n  background-color: var(--bg-color);\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    width: 260px;\n    padding: 12px;\n    bottom: 168px;\n    right: 1px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 298px;\n    padding: 16px;\n    bottom: 224px;\n    right: 22px;\n  }\n"]))),J=H.p(C||(C=(0,a.Z)(["\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n  margin-bottom: 4px;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.29;\n  }\n\n  @media (min-width: 1440px) {\n    line-height: 1.43;\n  }\n"]))),N=H.span(W||(W=(0,a.Z)(["\n  color: var(--accent);\n"]))),R=H(d.OL)(Y||(Y=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  font-size: 10px;\n  line-height: 1.2;\n  letter-spacing: 0.2px;\n  transition: color var(--transition-time) var(--transition-function);\n\n  &:hover {\n    color: var(--accent);\n  }\n"])));function T(){return(0,x.jsxs)(I,{children:[(0,x.jsxs)(J,{children:[(0,x.jsx)(N,{children:"Delicious and healthy"})," way to enjoy a variety of fresh ingredients in one satisfying meal"]}),(0,x.jsxs)(R,{to:"/categories/breakfast",children:["See recipes",(0,x.jsx)("svg",{width:"18",height:"18",children:(0,x.jsx)("use",{href:"".concat(B.Z,"#icon-arrow-narrow-right")})})]})]})}var V=i.p+"static/media/hero-dish-1x.68662c8f1c68a847ec01.png",F=i.p+"static/media/hero-dish-2x.bb205abf4a797570f1ef.png",G=i.p+"static/media/hero-dish-1x.57329ba675e2aee976f3.png",K=i.p+"static/media/hero-dish-2x.740a06475c15a7421a58.png",M=i.p+"static/media/hero-dish-1x.9d9e6d0ee8b3f0030879.png",P=i.p+"static/media/hero-dish-2x.896badeff1b7379fed02.png";var Q=i.p+"static/media/hero-arrow.0472ff198177038df8732fcfb48312c6.svg";var U,X,$,nn,tn,en=i.p+"static/media/hero-arrow.8071b2b04df70d3242bb96a6b046203d.svg",rn=o.styled.section(U||(U=(0,a.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 68px;\n  padding-bottom: 83px;\n\n  @media (min-width: 768px) {\n    align-items: flex-start;\n    padding-top: 140px;\n    padding-bottom: 195px;\n  }\n\n  @media (min-width: 1440px) {\n    padding-top: 164px;\n    padding-bottom: 268px;\n  }\n\n  &::after {\n    @media (min-width: 768px) {\n      content: '';\n      position: absolute;\n      z-index: 5;\n      width: 186px;\n      height: 115px;\n      bottom: 84px;\n      right: 32px;\n      background: url(",") no-repeat;\n    }\n\n    @media (min-width: 1440px) {\n      width: 220px;\n      height: 148px;\n      bottom: 114px;\n      right: 70px;\n      background: url(",") no-repeat;\n    }\n  }\n"])),Q,en),an=o.styled.h1(X||(X=(0,a.Z)(["\n  font-size: 60px;\n  font-weight: 400;\n  line-height: 1;\n  margin-bottom: 14px;\n  letter-spacing: -0.3px;\n  color: var(--dark-accent);\n\n  @media (min-width: 768px) {\n    font-size: 72px;\n    letter-spacing: -0.36px;\n    margin-bottom: 24px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 100px;\n    letter-spacing: -0.5px;\n    margin-bottom: 14px;\n  }\n"]))),on=o.styled.span($||($=(0,a.Z)(["\n  color: var(--accent);\n"]))),pn=o.styled.p(nn||(nn=(0,a.Z)(["\n  width: 248px;\n  margin-bottom: 44px;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    width: 362px;\n    margin-bottom: 32px;\n    text-align: left;\n  }\n\n  @media (min-width: 1440px) {\n    width: 465px;\n    margin-bottom: 50px;\n  }\n"]))),dn=o.styled.picture(tn||(tn=(0,a.Z)(["\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 0;\n    position: absolute;\n    top: 95px;\n    right: -32px;\n  }\n\n  @media (min-width: 1440px) {\n    top: 64px;\n    right: 84px;\n  }\n"]))),cn="".concat(V," 1x, ").concat(F," 2x"),xn="".concat(G," 1x, ").concat(K," 2x"),sn="".concat(M," 1x, ").concat(P," 2x");function hn(){return(0,x.jsxs)(rn,{children:[(0,x.jsxs)(an,{children:[(0,x.jsx)(on,{children:"So"}),"Yummy"]}),(0,x.jsx)(pn,{children:'"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.'}),(0,x.jsxs)(dn,{children:[(0,x.jsx)("source",{srcSet:sn,media:"(min-width: 1440px)"}),(0,x.jsx)("source",{srcSet:xn,media:"(min-width: 768px)"}),(0,x.jsx)("source",{srcSet:cn,media:"(max-width: 767px)"}),(0,x.jsx)("img",{src:V,alt:"Dish"})]}),(0,x.jsx)(A.Z,{}),(0,x.jsx)(T,{})]})}var ln=i(4886);function mn(){return(0,x.jsxs)(ln.Z,{children:[(0,x.jsx)(hn,{}),(0,x.jsx)(D,{})]})}}}]);
//# sourceMappingURL=623.9cc75ab8.chunk.js.map