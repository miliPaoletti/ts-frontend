(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{1091:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/destination",function(){return n(3109)}])},2519:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),o=n(1649),a=function(e){var t=e.prevSlide,n=e.nextSlide,a=e.onMouseEnter,l=e.onMouseOver;return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.u1R,{onClick:t,className:"prev",onMouseEnter:a,onMouseOver:l}),(0,r.jsx)(o.hjJ,{onClick:n,className:"next",onMouseEnter:a,onMouseOver:l})]})},l=n(5675),s=n.n(l),i=function(e){var t=e.activeIndex,n=e.sliderImage,o=e.onMouseEnter,a=e.onMouseLeave,l=e.showImage,i=e.sliderStyles;return(0,r.jsx)("section",{className:"pt-0 relative ".concat(i?"cursor-pointer":"opacity-imgs"),onMouseEnter:o,onMouseLeave:a,onClick:function(){return l&&l(n[t].images,t)},children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,r.jsxs)("div",{className:n===t?"active ".concat(i||"slides"):"inactive",children:[(0,r.jsx)(s(),{src:e.images,layout:"fill",objectFit:"cover",alt:e.images,className:n===t?"slide-image animation ":"slide-image"}),(0,r.jsx)("p",{className:"slide-title",style:{textShadow:"0 0 2px #333"},children:e.title}),(0,r.jsx)("p",{className:"slide-text",children:e.text})]},n)}))})},c=n(7294),u=function(e){var t=e.images,n=e.showImage,o=e.sliderStyles,l=function(e){var t=(null===e||void 0===e?void 0:e.length)-1,n=(0,c.useState)(0),r=n[0],o=n[1],a=(0,c.useState)(!1),l=a[0],s=a[1];(0,c.useEffect)((function(){var e=setInterval((function(){!1===l&&o(r===t?0:r+1)}),7e3);return function(){return clearInterval(e)}}),[r,l,t]);var i=(0,c.useCallback)((function(){o(r===t?0:r+1),s(!0)}),[r,t]),u=(0,c.useCallback)((function(){o(r<1?t:r-1),s(!0)}),[r,t]);return{activeIndex:r,setIsPaused:s,prevSlide:u,nextSlide:i}}(t),s=l.activeIndex,u=l.setIsPaused,d=l.prevSlide,p=l.nextSlide;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{activeIndex:s,sliderImage:t,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},showImage:n,sliderStyles:o}),t.length>1&&(0,r.jsx)(a,{prevSlide:d,nextSlide:p,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}})]})}},3109:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return me}});var r,o,a=n(5893),l=n(7294),s=n(3750),i=n(2984),c=n(2351),u=n(3784),d=n(9946),p=n(1363),v=n(4103),f=n(4575),x=n(6567),m=n(4157),g=n(292),h=n(5466),b=n(1074),j=n(4007),y=n(6045),S=n(3781),P=n(5662),N=((o=N||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),w=((r=w||{})[r.TogglePopover=0]="TogglePopover",r[r.ClosePopover=1]="ClosePopover",r[r.SetButton=2]="SetButton",r[r.SetButtonId=3]="SetButtonId",r[r.SetPanel=4]="SetPanel",r[r.SetPanelId=5]="SetPanelId",r);let I={0:e=>({...e,popoverState:(0,i.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},E=(0,l.createContext)(null);function k(e){let t=(0,l.useContext)(E);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}E.displayName="PopoverContext";let C=(0,l.createContext)(null);function M(e){let t=(0,l.useContext)(C);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return t}C.displayName="PopoverAPIContext";let T=(0,l.createContext)(null);function O(){return(0,l.useContext)(T)}T.displayName="PopoverGroupContext";let _=(0,l.createContext)(null);function F(e,t){return(0,i.E)(t.type,I,e,t)}_.displayName="PopoverPanelContext";let B=(0,c.yV)((function(e,t){var n;let r=`headlessui-popover-button-${(0,d.M)()}`,o=`headlessui-popover-panel-${(0,d.M)()}`,a=(0,l.useRef)(null),s=(0,u.T)(t,(0,u.h)((e=>{a.current=e}))),p=(0,l.useReducer)(F,{popoverState:1,button:null,buttonId:r,panel:null,panelId:o,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:v,button:m,panel:h,beforePanelSentinel:y,afterPanelSentinel:P},N]=p,w=(0,b.i)(null!=(n=a.current)?n:m);(0,l.useEffect)((()=>N({type:3,buttonId:r})),[r,N]),(0,l.useEffect)((()=>N({type:5,panelId:o})),[o,N]);let I=(0,l.useMemo)((()=>{if(!m||!h)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(m))^Number(null==e?void 0:e.contains(h)))return!0;return!1}),[m,h]),k=(0,l.useMemo)((()=>({buttonId:r,panelId:o,close:()=>N({type:1})})),[r,o,N]),M=O(),T=null==M?void 0:M.registerPopover,_=(0,S.z)((()=>{var e;return null!=(e=null==M?void 0:M.isFocusWithinPopoverGroup())?e:(null==w?void 0:w.activeElement)&&((null==m?void 0:m.contains(w.activeElement))||(null==h?void 0:h.contains(w.activeElement)))}));(0,l.useEffect)((()=>null==T?void 0:T(k)),[T,k]),(0,j.O)(null==w?void 0:w.defaultView,"focus",(e=>{var t,n,r,o;0===v&&(_()||!m||!h||null!=(n=null==(t=y.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=P.current)?void 0:r.contains)&&o.call(r,e.target)||N({type:1}))}),!0),(0,g.O)([m,h],((e,t)=>{N({type:1}),(0,f.sP)(t,f.tJ.Loose)||(e.preventDefault(),null==m||m.focus())}),0===v);let B=(0,S.z)((e=>{N({type:1});let t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:m:m;null==t||t.focus()})),R=(0,l.useMemo)((()=>({close:B,isPortalled:I})),[B,I]),z=(0,l.useMemo)((()=>({open:0===v,close:B})),[v,B]),A=e,D={ref:s};return l.createElement(E.Provider,{value:p},l.createElement(C.Provider,{value:R},l.createElement(x.up,{value:(0,i.E)(v,{0:x.ZM.Open,1:x.ZM.Closed})},(0,c.sY)({ourProps:D,theirProps:A,slot:z,defaultTag:"div",name:"Popover"}))))})),R=(0,c.yV)((function(e,t){let[n,r]=k("Popover.Button"),{isPortalled:o}=M("Popover.Button"),a=(0,l.useRef)(null),s=`headlessui-focus-sentinel-${(0,d.M)()}`,x=O(),g=null==x?void 0:x.closeOthers,h=(0,l.useContext)(_),j=null!==h&&h===n.panelId,N=(0,u.T)(a,t,j?null:e=>r({type:2,button:e})),w=(0,u.T)(a,t),I=(0,b.i)(a),E=(0,S.z)((e=>{var t,o,l;if(j){if(1===n.popoverState)return;switch(e.key){case p.R.Space:case p.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(l=n.button)||l.focus()}}else switch(e.key){case p.R.Space:case p.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0});break;case p.R.Escape:if(0!==n.popoverState)return null==g?void 0:g(n.buttonId);if(!a.current||(null==I?void 0:I.activeElement)&&!a.current.contains(I.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}})),C=(0,S.z)((e=>{j||e.key===p.R.Space&&e.preventDefault()})),T=(0,S.z)((t=>{var o,a;(0,v.P)(t.currentTarget)||e.disabled||(j?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0}),null==(a=n.button)||a.focus()))})),F=(0,S.z)((e=>{e.preventDefault(),e.stopPropagation()})),B=0===n.popoverState,R=(0,l.useMemo)((()=>({open:B})),[B]),z=(0,m.f)(e,a),A=e,D=j?{ref:w,type:z,onKeyDown:E,onClick:T}:{ref:N,id:n.buttonId,type:z,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:E,onKeyUp:C,onClick:T,onMouseDown:F},L=(0,P.l)(),Z=(0,S.z)((()=>{let e=n.panel;e&&(0,i.E)(L.current,{[P.N.Forwards]:()=>(0,f.jA)(e,f.TO.First),[P.N.Backwards]:()=>(0,f.jA)(e,f.TO.Last)})}));return l.createElement(l.Fragment,null,(0,c.sY)({ourProps:D,theirProps:A,slot:R,defaultTag:"button",name:"Popover.Button"}),B&&!j&&o&&l.createElement(y._,{id:s,features:y.A.Focusable,as:"button",type:"button",onFocus:Z}))})),z=c.AN.RenderStrategy|c.AN.Static,A=(0,c.yV)((function(e,t){let[{popoverState:n},r]=k("Popover.Overlay"),o=(0,u.T)(t),a=`headlessui-popover-overlay-${(0,d.M)()}`,s=(0,x.oJ)(),i=null!==s?s===x.ZM.Open:0===n,p=(0,S.z)((e=>{if((0,v.P)(e.currentTarget))return e.preventDefault();r({type:1})})),f=(0,l.useMemo)((()=>({open:0===n})),[n]);return(0,c.sY)({ourProps:{ref:o,id:a,"aria-hidden":!0,onClick:p},theirProps:e,slot:f,defaultTag:"div",features:z,visible:i,name:"Popover.Overlay"})})),D=c.AN.RenderStrategy|c.AN.Static,L=(0,c.yV)((function(e,t){let{focus:n=!1,...r}=e,[o,a]=k("Popover.Panel"),{close:s,isPortalled:v}=M("Popover.Panel"),m=`headlessui-focus-sentinel-before-${(0,d.M)()}`,g=`headlessui-focus-sentinel-after-${(0,d.M)()}`,h=(0,l.useRef)(null),j=(0,u.T)(h,t,(e=>{a({type:4,panel:e})})),N=(0,b.i)(h),w=(0,x.oJ)(),I=null!==w?w===x.ZM.Open:0===o.popoverState,E=(0,S.z)((e=>{var t;if(e.key===p.R.Escape){if(0!==o.popoverState||!h.current||(null==N?void 0:N.activeElement)&&!h.current.contains(N.activeElement))return;e.preventDefault(),e.stopPropagation(),a({type:1}),null==(t=o.button)||t.focus()}}));(0,l.useEffect)((()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&a({type:4,panel:null})}),[o.popoverState,e.unmount,e.static,a]),(0,l.useEffect)((()=>{if(!n||0!==o.popoverState||!h.current)return;let e=null==N?void 0:N.activeElement;h.current.contains(e)||(0,f.jA)(h.current,f.TO.First)}),[n,h,o.popoverState]);let C=(0,l.useMemo)((()=>({open:0===o.popoverState,close:s})),[o,s]),T={ref:j,id:o.panelId,onKeyDown:E,onBlur:n&&0===o.popoverState?e=>{var t,n,r,l,s;let i=e.relatedTarget;!i||!h.current||null!=(t=h.current)&&t.contains(i)||(a({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,i))||(null==(s=null==(l=o.afterPanelSentinel.current)?void 0:l.contains)?void 0:s.call(l,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},O=(0,P.l)(),F=(0,S.z)((()=>{let e=h.current;e&&(0,i.E)(O.current,{[P.N.Forwards]:()=>{(0,f.jA)(e,f.TO.First)},[P.N.Backwards]:()=>{var e;null==(e=o.button)||e.focus({preventScroll:!0})}})})),B=(0,S.z)((()=>{let e=h.current;e&&(0,i.E)(O.current,{[P.N.Forwards]:()=>{var e,t,n;if(!o.button)return;let r=(0,f.GO)(),a=r.indexOf(o.button),l=r.slice(0,a+1),s=[...r.slice(a+1),...l];for(let i of s.slice())if((null==(t=null==(e=null==i?void 0:i.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(i))){let e=s.indexOf(i);-1!==e&&s.splice(e,1)}(0,f.jA)(s,f.TO.First,!1)},[P.N.Backwards]:()=>(0,f.jA)(e,f.TO.Last)})}));return l.createElement(_.Provider,{value:o.panelId},I&&v&&l.createElement(y._,{id:m,ref:o.beforePanelSentinel,features:y.A.Focusable,as:"button",type:"button",onFocus:F}),(0,c.sY)({ourProps:T,theirProps:r,slot:C,defaultTag:"div",features:D,visible:I,name:"Popover.Panel"}),I&&v&&l.createElement(y._,{id:g,ref:o.afterPanelSentinel,features:y.A.Focusable,as:"button",type:"button",onFocus:B}))})),Z=(0,c.yV)((function(e,t){let n=(0,l.useRef)(null),r=(0,u.T)(n,t),[o,a]=(0,l.useState)([]),s=(0,S.z)((e=>{a((t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t}))})),i=(0,S.z)((e=>(a((t=>[...t,e])),()=>s(e)))),d=(0,S.z)((()=>{var e;let t=(0,h.r)(n);if(!t)return!1;let r=t.activeElement;return!(null==(e=n.current)||!e.contains(r))||o.some((e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))}))})),p=(0,S.z)((e=>{for(let t of o)t.buttonId!==e&&t.close()})),v=(0,l.useMemo)((()=>({registerPopover:i,unregisterPopover:s,isFocusWithinPopoverGroup:d,closeOthers:p})),[i,s,d,p]),f=(0,l.useMemo)((()=>({})),[]),x=e,m={ref:r};return l.createElement(T.Provider,{value:v},(0,c.sY)({ourProps:m,theirProps:x,slot:f,defaultTag:"div",name:"Popover.Group"}))})),J=Object.assign(B,{Button:R,Overlay:A,Panel:L,Group:Z});var $=function(e){var t=e.button,n=e.data;return(0,a.jsxs)(J,{className:"flex items-center justify-center absolute bottom-4 right-2 ",children:[(0,a.jsxs)(J.Button,{className:"focus-visible:outline-0",children:[t," "]}),(0,a.jsx)(J.Panel,{className:"absolute z-10 bg-gray-200 p-2 rounded-lg top-9 right-0 text-xs w-[200px]",children:(0,a.jsx)("div",{className:"",children:n})})]})},G=function(e){var t=e.text,n=e.icon,r=e.data,o=e.listBoarding,l=e.stylesItem;return(0,a.jsxs)("div",{className:"flex items-center space-x-2 border border-gray-300 text-lg relative capitalize ",children:[n&&(0,a.jsx)("div",{className:"border-r border-gray-300 p-2 py-4 text-xl",children:n}),(0,a.jsx)("div",{className:"first-letter-capitalize w-full  ".concat(l),children:t}),o&&r.length>0?(0,a.jsx)($,{button:(0,a.jsx)(s.Kix,{className:"text-orange-950 text-lg"}),data:r}):""]})},K=n(5434),V=n(2585),Y=n(5751),q=function(){return(0,a.jsx)("button",{className:"button-primary w-full",type:"button",children:"Consultar"})},H=n(423),W=function(e){var t=e.days,n=e.regimen,r=e.currency,o=e.price,l=e.textBoarding,i=e.boarding,c=e.departures,u=e.includes,d=e.dataForConsult,p=e.listBoarding,v=e.promotions,f=e.taxes,x=e.tours,m=[];void 0!==u&&(m=null===u||void 0===u?void 0:u.map((function(e){return(0,a.jsx)("p",{className:"p-2 first-letter-capitalize border-b border-b-gray-300 last:border-b last:border-b-transparent",children:e},e)})));var g=[];void 0!==x&&(g=null===x||void 0===x?void 0:x.map((function(e){return(0,a.jsx)("p",{className:"p-2 first-letter-capitalize border-b border-b-gray-300 last:border-b last:border-b-transparent",children:e},e)})));var h=t+" dias ";return(0,a.jsxs)("div",{className:"sticky top-[80px] px-0 lg:px-5 xl:px-11 pt-5 lg:pt-11 pb-0 lg:pb-11 space-y-5 ",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-black-950 text-sm italic",children:"desde"}),(0,a.jsxs)("p",{className:"text-5xl font-bold text-orange-950 ",children:[(0,H.aS)(o,r),f&&(0,a.jsx)("span",{className:"text-sm ",children:"+imp"})]}),(0,a.jsx)("p",{className:"text-black-950 text-sm italic",children:"en base doble"})]}),(0,a.jsxs)("div",{className:"space-y-3 block ",children:[0!==v&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"font-bold text-xl",children:"Promoci\xf3n"}),(0,a.jsx)(G,{text:"2do pasajero ".concat(v,"% OFF"),stylesItem:"bg-yellow-500 text-black-950 font-bold text-lg text-center p-2 py-4 border-transparent"})]}),(0,a.jsx)("p",{className:"font-bold text-2xl lg:text-xl ",children:"Informaci\xf3n del viaje"}),c&&(0,a.jsx)(G,{icon:(0,a.jsx)(s.o3f,{}),text:c}),i&&(0,a.jsx)(G,{icon:(0,a.jsx)(K.n7_,{}),text:l,data:i,listBoarding:p}),h&&(0,a.jsx)(G,{icon:(0,a.jsx)(K.uk6,{}),text:h}),n&&(0,a.jsx)(G,{icon:(0,a.jsx)(V.O04,{}),text:n}),m.length>0?(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"subtitle",children:"Incluye:"}),(0,a.jsx)(G,{text:m})]}):"",g.length>0?(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"subtitle",children:"Tours:"}),(0,a.jsx)(G,{text:g})]}):""]}),(0,a.jsx)(Y.l,{dataForConsult:d,trigger:(0,a.jsx)(q,{})})]})},X=n(1163),U=n(2906),Q=n(5233),ee=n(5675),te=n.n(ee);function ne(e){var t=e.image,n=e.title;return(0,a.jsxs)("div",{className:"relative slider-container w-100",children:[(0,a.jsx)("div",{className:"opacity-imgs h-full w-full",children:(0,a.jsx)(te(),{src:t,layout:"fill",objectFit:"cover",alt:t,className:"remove-selection z-0 "})}),(0,a.jsx)("p",{className:"slide-text-destination ",style:{textShadow:"0 0 2px #333"},children:n})]})}var re=function(e){var t=e.text;return(0,a.jsx)("div",{className:"font-bold text-2xl md:text-3xl text-left p-2 my-6 uppercase border-4 border-y-0 pl-5 border-transparent border-l-orange-950",children:(0,a.jsx)("p",{children:t})})},oe=n(2519),ae=function(e){var t=e.images,n=e.showImage;return(0,a.jsx)("div",{className:"slider-destination group ",children:(0,a.jsx)(oe.Z,{showImage:n,images:t,sliderStyles:"h-[300px] md:h-[400px] "})})},le=function(e){var t=(0,l.useState)(!1),n=t[0],r=t[1],o=(0,l.useState)(""),a=o[0],s=o[1],i=(0,l.useState)(0),c=i[0],u=i[1],d=function(){r(!1)},p=(0,l.useCallback)((function(t){if(t.stopPropagation(),0!==e.length){var n=null===e||void 0===e?void 0:e.length;if(c+1>=n){u(0);var r=e[0].images;return void s(r)}var o=c+1,a=e.filter((function(t){return e.indexOf(t)===o}))[0].images;s(a),u(o)}}),[c,e]),v=(0,l.useCallback)((function(t){if(t.stopPropagation(),0!==e.length){var n=null===e||void 0===e?void 0:e.length;if(0===c){u(n-1);var r=e[n-1].images;return void s(r)}var o=c-1,a=e.filter((function(t){return e.indexOf(t)===o}))[0].images;s(a),u(o)}}),[c,e]),f=(0,l.useCallback)((function(e){"ArrowRight"===e.key&&p(e),"ArrowLeft"===e.key&&v(e),"Escape"===e.key&&d()}),[v,p]);return(0,l.useEffect)((function(){return window.addEventListener("keyup",f),function(){window.removeEventListener("keyup",f)}}),[f]),{imageToShow:a,lightboxDisplay:n,showNext:p,showPrev:v,hideLightBox:d,showImage:function(e,t){s(e),u(t),r(!0)}}},se=n(9352),ie=function(e){var t=e.images,n=le(t),r=n.imageToShow,o=n.lightboxDisplay,l=n.showNext,i=n.showPrev,c=n.hideLightBox,u=n.showImage;return t.length>0?(0,a.jsxs)("div",{className:"remove-selection ",children:[(0,a.jsx)(ae,{images:t,showImage:u}),o?(0,a.jsxs)("div",{className:"lightbox remove-selection",onClick:c,children:[(0,a.jsx)(se.qGf,{className:"icon-close",onClick:c}),t.length>1&&(0,a.jsx)(s.KMP,{onClick:i}),(0,a.jsx)("div",{className:"h-fit lg:h-[90%]",children:(0,a.jsx)(te(),{src:r,layout:"fill",objectFit:"contain",alt:r,className:"remove-selection "})}),t.length>1&&(0,a.jsx)(s.Mcl,{onClick:l})]}):""]}):""};function ce(e){var t=e.destinationNames,n=e.dataImages;return(0,a.jsx)("div",{className:" w-[100%] lg:w-[75%] block py-5 px-5",children:t.map((function(e,t){var r="",o=[],l=(0,H.qg)(n,e);return l&&(l.images.map((function(e){var t={};t.images=e,o.push(t)})),r=l.description),(0,a.jsxs)("div",{className:"space-y-5",children:[(0,a.jsx)(re,{text:e})," ",(0,a.jsx)(ie,{images:o}),(0,a.jsx)("div",{className:"text-justify whitespace-pre-wrap text-base md:text-xl",children:r})]},t)}))})}var ue=n(2379);function de(e){var t=e.searchResults,n=e.destination,r=(0,l.useState)([]),o=r[0],s=r[1];return(0,l.useEffect)((function(){if(void 0!==t&&0!==t.length){var e=t[0].data,n=e.departures,r=e.title,o=e.destinations_names;(0,U.r5)(n,r,o).then((function(e){s(e)}))}}),[t,n]),(0,a.jsxs)("div",{className:"px-0 lg:px-5 xl:px-11 pt-32",children:[(0,a.jsx)(ue.Z,{text:Q.aJ.text,text2:Q.aJ.text2}),(0,a.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",children:(0,H.bm)(o)})]})}var pe=n(9008),ve=n.n(pe),fe=function(){var e=(0,X.useRouter)(),t=e.query,n=e.isReady,r=(0,X.useRouter)(),o=(0,l.useState)(""),s=o[0],i=o[1],c=(0,l.useState)([]),u=c[0],d=c[1];if((0,l.useEffect)((function(){n&&""!==t.destinationId&&(0,U.CE)(t.destinationId).then((function(e){void 0!==e&&(0===e.length?r.push("/".concat(Q.qW.error404)):(d(e),i(t.destinationId)))}))}),[n,t.destinationId,r]),void 0!==u&&0!==u.length){var p=u[0].data,v=p.title,f=p.destinations_names,x=Q.Tp;void 0!==p.custom_info&&(x=p.custom_info.carousel_image);var m=p.custom_info,g=p.departures,h=p.duration.days,b=p.meal_regimen,j=p.boarding,y=p.includes,S=p.provider,P=p.promotions;"string"===typeof y&&(y=[y]);var N=p.tours,w="\n      ".concat(Q.rE,": ").concat(v,",\n      ").concat(Q.Jx,": ").concat(window.location.href,",\n      ").concat(Q.Id,": ").concat(p.lowest_price.currency," ").concat(p.lowest_price.price,"\n      ").concat(Q.H9,": ").concat(p.duration.nights,",\n      ").concat(Q.jZ,": ").concat(f,",\n      ").concat(Q.kZ,": ").concat(b,",\n      ").concat(Q.A6,": ").concat(j,", \n      ").concat(Q.MC,": ").concat(S,"\n      ").concat(Q.gg,": ").concat(g,"\n      ");localStorage.setItem(Q.rE,v),localStorage.setItem(Q.Jx,window.location.href),localStorage.setItem(Q.Id,p.lowest_price.currency+p.lowest_price.price),localStorage.setItem(Q.H9,p.duration.nights),localStorage.setItem(Q.jZ,f),localStorage.setItem(Q.kZ,b),localStorage.setItem(Q.A6,j),localStorage.setItem(Q.MC,S),localStorage.setItem(Q.gg,g);var I=(0,H._D)(j);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ve(),{children:(0,a.jsxs)("title",{children:[v," - ",Q.if.name]})}),(0,a.jsxs)("div",{className:"bg-white ",children:[(0,a.jsx)(ne,{image:x,title:v}),(0,a.jsx)("div",{className:"container-general ",children:(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:flex-wrap min-w-100 p-2 pt-0",children:[(0,a.jsx)("div",{className:"relative w-[100%] lg:w-[25%] block ",children:(0,a.jsx)(W,{days:h,regimen:b,currency:(0,H.zC)(p.lowest_price.currency),price:p.lowest_price.price,departures:(0,H.Yc)(g),textBoarding:I[0],boarding:(0,H.bh)(j),includes:y,dataForConsult:w,listBoarding:I[1],promotions:(0,H.vy)(P),taxes:p.lowest_price.taxes,tours:N})}),(0,a.jsx)(ce,{destinationNames:f,dataImages:m}),(0,a.jsx)(de,{searchResults:u,destination:s})]})})]})]})}},xe=n(2931),me=function(){return(0,a.jsx)(xe.Z,{content:(0,a.jsx)(fe,{})})}},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[228,445,13,16,866,440,937,980,275,34,774,888,179],(function(){return t=1091,e(e.s=t);var t}));var t=e.O();_N_E=t}]);