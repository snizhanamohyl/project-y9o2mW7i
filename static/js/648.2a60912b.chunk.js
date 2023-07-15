"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[648],{9648:function(t,e,a){a.d(e,{Z:function(){return V}});var o=a(7462),n=a(3366),i=a(2791),r=a(8182),s=a(4419),c=a(551),l=a(5878),d=a(1217);function p(t){return(0,d.Z)("MuiPagination",t)}(0,l.Z)("MuiPagination",["root","ul","outlined","text"]);var u=a(3433),v=a(9439);function g(t){var e=t.controlled,a=t.default,o=(t.name,t.state,i.useRef(void 0!==e).current),n=i.useState(a),r=(0,v.Z)(n,2),s=r[0],c=r[1];return[o?e:s,i.useCallback((function(t){o||c(t)}),[])]}var m=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var h=a(4942),b=a(2065);function f(t){return(0,d.Z)("MuiPaginationItem",t)}var x=(0,l.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),Z=a(3967),y=a(1198),C=a(4036),z=a(9201),P=a(3329),k=(0,z.Z)((0,P.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),w=(0,z.Z)((0,P.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),N=(0,z.Z)((0,P.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),R=(0,z.Z)((0,P.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),B=a(7630),M=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],S=function(t,e){var a=t.ownerState;return[e.root,e[a.variant],e["size".concat((0,C.Z)(a.size))],"text"===a.variant&&e["text".concat((0,C.Z)(a.color))],"outlined"===a.variant&&e["outlined".concat((0,C.Z)(a.color))],"rounded"===a.shape&&e.rounded,"page"===a.type&&e.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&e.ellipsis,("previous"===a.type||"next"===a.type)&&e.previousNext,("first"===a.type||"last"===a.type)&&e.firstLast]},L=(0,B.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})((function(t){var e=t.theme,a=t.ownerState;return(0,o.Z)({},e.typography.body2,(0,h.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto"},"&.".concat(x.disabled),{opacity:(e.vars||e).palette.action.disabledOpacity}),"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)})})),O=(0,B.ZP)(y.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:S})((function(t){var e,a,n=t.theme,i=t.ownerState;return(0,o.Z)({},n.typography.body2,(a={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(n.vars||n).palette.text.primary},(0,h.Z)(a,"&.".concat(x.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,h.Z)(a,"&.".concat(x.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,h.Z)(a,"transition",n.transitions.create(["color","background-color"],{duration:n.transitions.duration.short})),(0,h.Z)(a,"&:hover",{backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,h.Z)(a,"&.".concat(x.selected),(e={backgroundColor:(n.vars||n).palette.action.selected,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.selected," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,b.Fq)(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(n.vars||n).palette.action.selected}}},(0,h.Z)(e,"&.".concat(x.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.selected," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,b.Fq)(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}),(0,h.Z)(e,"&.".concat(x.disabled),{opacity:1,color:(n.vars||n).palette.action.disabled,backgroundColor:(n.vars||n).palette.action.selected}),e)),a),"small"===i.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===i.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:n.typography.pxToRem(15)},"rounded"===i.shape&&{borderRadius:(n.vars||n).shape.borderRadius})}),(function(t){var e=t.theme,a=t.ownerState;return(0,o.Z)({},"text"===a.variant&&(0,h.Z)({},"&.".concat(x.selected),(0,o.Z)({},"standard"!==a.color&&(0,h.Z)({color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}},"&.".concat(x.focusVisible),{backgroundColor:(e.vars||e).palette[a.color].dark}),(0,h.Z)({},"&.".concat(x.disabled),{color:(e.vars||e).palette.action.disabled}))),"outlined"===a.variant&&(0,h.Z)({border:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(x.selected),(0,o.Z)({},"standard"!==a.color&&(0,h.Z)({color:(e.vars||e).palette[a.color].main,border:"1px solid ".concat(e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / 0.5)"):(0,b.Fq)(e.palette[a.color].main,.5)),backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / ").concat(e.vars.palette.action.activatedOpacity,")"):(0,b.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,b.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.focusVisible),{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,b.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}),(0,h.Z)({},"&.".concat(x.disabled),{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}))))})),I=(0,B.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(t,e){return e.icon}})((function(t){var e=t.theme,a=t.ownerState;return(0,o.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:e.typography.pxToRem(18)},"large"===a.size&&{fontSize:e.typography.pxToRem(22)})})),F=i.forwardRef((function(t,e){var a=(0,c.Z)({props:t,name:"MuiPaginationItem"}),i=a.className,l=a.color,d=void 0===l?"standard":l,p=a.component,u=a.components,v=void 0===u?{}:u,g=a.disabled,m=void 0!==g&&g,h=a.page,b=a.selected,x=void 0!==b&&b,y=a.shape,z=void 0===y?"circular":y,B=a.size,S=void 0===B?"medium":B,F=a.slots,j=void 0===F?{}:F,W=a.type,q=void 0===W?"page":W,A=a.variant,T=void 0===A?"text":A,V=(0,n.Z)(a,M),_=(0,o.Z)({},a,{color:d,disabled:m,selected:x,shape:z,size:S,type:q,variant:T}),G=(0,Z.Z)(),H=function(t){var e=t.classes,a=t.color,o=t.disabled,n=t.selected,i=t.size,r=t.shape,c=t.type,l=t.variant,d={root:["root","size".concat((0,C.Z)(i)),l,r,"standard"!==a&&"".concat(l).concat((0,C.Z)(a)),o&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[c]],icon:["icon"]};return(0,s.Z)(d,f,e)}(_),U=("rtl"===G.direction?{previous:j.next||v.next||R,next:j.previous||v.previous||N,last:j.first||v.first||k,first:j.last||v.last||w}:{previous:j.previous||v.previous||N,next:j.next||v.next||R,first:j.first||v.first||k,last:j.last||v.last||w})[q];return"start-ellipsis"===q||"end-ellipsis"===q?(0,P.jsx)(L,{ref:e,ownerState:_,className:(0,r.Z)(H.root,i),children:"\u2026"}):(0,P.jsxs)(O,(0,o.Z)({ref:e,ownerState:_,component:p,disabled:m,className:(0,r.Z)(H.root,i)},V,{children:["page"===q&&h,U?(0,P.jsx)(I,{as:U,ownerState:_,className:H.icon}):null]}))})),j=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],W=(0,B.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant]]}})({}),q=(0,B.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(t,e){return e.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function A(t,e,a){return"page"===t?"".concat(a?"":"Go to ","page ").concat(e):"Go to ".concat(t," page")}var T=i.forwardRef((function(t,e){var a=(0,c.Z)({props:t,name:"MuiPagination"}),i=a.boundaryCount,l=void 0===i?1:i,d=a.className,h=a.color,b=void 0===h?"standard":h,f=a.count,x=void 0===f?1:f,Z=a.defaultPage,y=void 0===Z?1:Z,C=a.disabled,z=void 0!==C&&C,k=a.getItemAriaLabel,w=void 0===k?A:k,N=a.hideNextButton,R=void 0!==N&&N,B=a.hidePrevButton,M=void 0!==B&&B,S=a.renderItem,L=void 0===S?function(t){return(0,P.jsx)(F,(0,o.Z)({},t))}:S,O=a.shape,I=void 0===O?"circular":O,T=a.showFirstButton,V=void 0!==T&&T,_=a.showLastButton,G=void 0!==_&&_,H=a.siblingCount,U=void 0===H?1:H,D=a.size,E=void 0===D?"medium":D,J=a.variant,K=void 0===J?"text":J,Q=(0,n.Z)(a,j),X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.boundaryCount,a=void 0===e?1:e,i=t.componentName,r=void 0===i?"usePagination":i,s=t.count,c=void 0===s?1:s,l=t.defaultPage,d=void 0===l?1:l,p=t.disabled,h=void 0!==p&&p,b=t.hideNextButton,f=void 0!==b&&b,x=t.hidePrevButton,Z=void 0!==x&&x,y=t.onChange,C=t.page,z=t.showFirstButton,P=void 0!==z&&z,k=t.showLastButton,w=void 0!==k&&k,N=t.siblingCount,R=void 0===N?1:N,B=(0,n.Z)(t,m),M=g({controlled:C,default:d,name:r,state:"page"}),S=(0,v.Z)(M,2),L=S[0],O=S[1],I=function(t,e){C||O(e),y&&y(t,e)},F=function(t,e){var a=e-t+1;return Array.from({length:a},(function(e,a){return t+a}))},j=F(1,Math.min(a,c)),W=F(Math.max(c-a+1,a+1),c),q=Math.max(Math.min(L-R,c-a-2*R-1),a+2),A=Math.min(Math.max(L+R,a+2*R+2),W.length>0?W[0]-2:c-1),T=[].concat((0,u.Z)(P?["first"]:[]),(0,u.Z)(Z?[]:["previous"]),(0,u.Z)(j),(0,u.Z)(q>a+2?["start-ellipsis"]:a+1<c-a?[a+1]:[]),(0,u.Z)(F(q,A)),(0,u.Z)(A<c-a-1?["end-ellipsis"]:c-a>a?[c-a]:[]),(0,u.Z)(W),(0,u.Z)(f?[]:["next"]),(0,u.Z)(w?["last"]:[])),V=function(t){switch(t){case"first":return 1;case"previous":return L-1;case"next":return L+1;case"last":return c;default:return null}},_=T.map((function(t){return"number"===typeof t?{onClick:function(e){I(e,t)},type:"page",page:t,selected:t===L,disabled:h,"aria-current":t===L?"true":void 0}:{onClick:function(e){I(e,V(t))},type:t,page:V(t),selected:!1,disabled:h||-1===t.indexOf("ellipsis")&&("next"===t||"last"===t?L>=c:L<=1)}}));return(0,o.Z)({items:_},B)}((0,o.Z)({},a,{componentName:"Pagination"})),Y=X.items,$=(0,o.Z)({},a,{boundaryCount:l,color:b,count:x,defaultPage:y,disabled:z,getItemAriaLabel:w,hideNextButton:R,hidePrevButton:M,renderItem:L,shape:I,showFirstButton:V,showLastButton:G,siblingCount:U,size:E,variant:K}),tt=function(t){var e=t.classes,a={root:["root",t.variant],ul:["ul"]};return(0,s.Z)(a,p,e)}($);return(0,P.jsx)(W,(0,o.Z)({"aria-label":"pagination navigation",className:(0,r.Z)(tt.root,d),ownerState:$,ref:e},Q,{children:(0,P.jsx)(q,{className:tt.ul,ownerState:$,children:Y.map((function(t,e){return(0,P.jsx)("li",{children:L((0,o.Z)({},t,{color:b,"aria-label":w(t.type,t.page,t.selected),shape:I,size:E,variant:K}))},e)}))})}))})),V=T}}]);
//# sourceMappingURL=648.2a60912b.chunk.js.map