(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9361).Z,r=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,u=void 0!==l&&l,g=e.priority,m=void 0!==g&&g,w=e.loading,A=e.lazyRoot,k=void 0===A?null:A,O=e.lazyBoundary,C=e.className,R=e.quality,j=e.width,M=e.height,T=e.style,N=e.objectFit,L=e.objectPosition,B=e.onLoadingComplete,_=e.placeholder,F=void 0===_?"empty":_,D=e.blurDataURL,q=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=c.useContext(v.ImageConfigContext),W=c.useMemo((function(){var e=h||V||p.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[V]),Z=q,G=n?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(G=Z.layout),delete Z.layout);var U=I;if("loader"in Z){if(Z.loader){var $=Z.loader;U=function(e){e.config;var t=s(e,["config"]);return $(t)}}delete Z.loader}var H="";if(function(e){return"object"===typeof e&&(P(e)||function(e){return void 0!==e.src}(e))}(t)){var J=P(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,H=J.src,(!G||"fill"!==G)&&(M=M||J.height,j=j||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Y=!m&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:H).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,Y=!1);b.has(t)&&(Y=!1);y&&(u=!0);var K,Q=r(c.useState(!1),2),X=Q[0],ee=Q[1],te=r(f.useIntersection({rootRef:k,rootMargin:O||"200px",disabled:!Y}),3),ne=te[0],oe=te[1],re=te[2],ie=!Y||oe,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:L},ce=z(j),de=z(M),pe=z(R);0;var fe=Object.assign({},T,se),ve="blur"!==F||X?{}:{backgroundSize:N||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===G)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof de){var ge=de/ce,me=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===G?(ae.display="block",ae.position="relative",ue=!0,le.paddingTop=me):"intrinsic"===G?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ue=!0,le.maxWidth="100%",K="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===G&&(ae.display="inline-block",ae.position="relative",ae.width=ce,ae.height=de)}else 0;var ye={src:S,srcSet:void 0,sizes:void 0};ie&&(ye=E({config:W,src:t,unoptimized:u,layout:G,width:ce,quality:pe,sizes:n,loader:U}));var he=t;0;var be,Se="imagesrcset",we="imagesizes";Se="imageSrcSet",we="imageSizes";var Pe=(o(be={},Se,ye.srcSet),o(be,we,ye.sizes),be),Ee=c.default.useLayoutEffect,ze=c.useRef(B),Ie=c.useRef(t);c.useEffect((function(){ze.current=B}),[B]),Ee((function(){Ie.current!==t&&(re(),Ie.current=t)}),[re,t]);var Ae=a({isLazy:Y,imgAttributes:ye,heightInt:de,widthInt:ce,qualityInt:pe,layout:G,className:C,imgStyle:fe,blurStyle:ve,loading:w,config:W,unoptimized:u,placeholder:F,loader:U,srcString:he,onLoadingCompleteRef:ze,setBlurComplete:ee,setIntersection:ne,isVisible:ie,noscriptSizes:n},Z);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:ae},ue?c.default.createElement("span",{style:le},K?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:K}):null):null,c.default.createElement(x,Object.assign({},Ae))),m?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},Pe))):null)};var a=n(6495).Z,l=n(2648).Z,u=n(1598).Z,s=n(7273).Z,c=u(n(7294)),d=l(n(5443)),p=n(9309),f=n(7190),v=n(9977),g=(n(3794),n(2392));var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1}||{},y=m.experimentalUnoptimized,h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1},b=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,o=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,o=e.width,r=e.quality,i=new URL("".concat(t.path).concat(k(n))),a=i.searchParams;a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||o.toString()),r&&a.set("q",r.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,o=e.width,r=e.quality,i=["f_auto","c_limit","w_"+o,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,o=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(o)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function P(e){return void 0!==e.default}function E(e){var t=e.config,n=e.src,o=e.unoptimized,r=e.layout,a=e.width,l=e.quality,u=e.sizes,s=e.loader;if(o)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n,o){var r=e.deviceSizes,a=e.allSizes;if(o&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,s=[];l=u.exec(o);l)s.push(parseInt(l[2]));if(s.length){var c,d=.01*(c=Math).min.apply(c,i(s));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,u),d=c.widths,p=c.kind,f=d.length-1;return{sizes:u||"w"!==p?u:"100vw",srcSet:d.map((function(e,o){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===p?e:o+1).concat(p)})).join(", "),src:s({config:t,src:n,quality:l,width:d[f]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function I(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",o=w.get(n);if(o)return o(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(p.VALID_LOADERS.join(", "),". Received: ").concat(n))}function A(e,t,n,o,r,i){e&&e.src!==S&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===o&&i(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var x=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),o=e.qualityInt,r=e.layout,i=e.className,l=e.imgStyle,u=e.blurStyle,d=e.isLazy,p=e.placeholder,f=e.loading,v=e.srcString,g=e.config,m=e.unoptimized,y=e.loader,h=e.onLoadingCompleteRef,b=e.setBlurComplete,S=e.setIntersection,w=e.onLoad,P=e.onError,z=(e.isVisible,e.noscriptSizes),I=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return f=d?"lazy":f,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},I,t,{decoding:"async","data-nimg":r,className:i,style:a({},l,u),ref:c.useCallback((function(e){S(e),(null==e?void 0:e.complete)&&A(e,v,0,p,h,b)}),[S,v,r,p,h,b]),onLoad:function(e){A(e.currentTarget,v,0,p,h,b),w&&w(e)},onError:function(e){"blur"===p&&b(!0),P&&P(e)}})),(d||"blur"===p)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},I,E({config:g,src:v,unoptimized:m,layout:r,width:n,quality:o,sizes:z,loader:y}),{decoding:"async","data-nimg":r,style:l,className:i,loading:f}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){e.exports=n(8045)},1163:function(e,t,n){e.exports=n(387)},6215:function(e,t,n){"use strict";n.d(t,{J:function(){return D}});var o,r,i=n(7294),a=n(2984),l=n(2351),u=n(3784),s=n(9946),c=n(1363),d=n(4103),p=n(4575),f=n(6567),v=n(4157),g=n(292),m=n(5466),y=n(1074),h=n(4007),b=n(6045),S=n(3781),w=n(5662),P=((r=P||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),E=((o=E||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let z={0:e=>({...e,popoverState:(0,a.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},I=(0,i.createContext)(null);function A(e){let t=(0,i.useContext)(I);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}I.displayName="PopoverContext";let x=(0,i.createContext)(null);function k(e){let t=(0,i.useContext)(x);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}x.displayName="PopoverAPIContext";let O=(0,i.createContext)(null);function C(){return(0,i.useContext)(O)}O.displayName="PopoverGroupContext";let R=(0,i.createContext)(null);function j(e,t){return(0,a.E)(t.type,z,e,t)}R.displayName="PopoverPanelContext";let M=(0,l.yV)((function(e,t){var n;let o=`headlessui-popover-button-${(0,s.M)()}`,r=`headlessui-popover-panel-${(0,s.M)()}`,c=(0,i.useRef)(null),d=(0,u.T)(t,(0,u.h)((e=>{c.current=e}))),v=(0,i.useReducer)(j,{popoverState:1,button:null,buttonId:o,panel:null,panelId:r,beforePanelSentinel:(0,i.createRef)(),afterPanelSentinel:(0,i.createRef)()}),[{popoverState:m,button:b,panel:w,beforePanelSentinel:P,afterPanelSentinel:E},z]=v,A=(0,y.i)(null!=(n=c.current)?n:b);(0,i.useEffect)((()=>z({type:3,buttonId:o})),[o,z]),(0,i.useEffect)((()=>z({type:5,panelId:r})),[r,z]);let k=(0,i.useMemo)((()=>{if(!b||!w)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(b))^Number(null==e?void 0:e.contains(w)))return!0;return!1}),[b,w]),O=(0,i.useMemo)((()=>({buttonId:o,panelId:r,close:()=>z({type:1})})),[o,r,z]),R=C(),M=null==R?void 0:R.registerPopover,T=(0,S.z)((()=>{var e;return null!=(e=null==R?void 0:R.isFocusWithinPopoverGroup())?e:(null==A?void 0:A.activeElement)&&((null==b?void 0:b.contains(A.activeElement))||(null==w?void 0:w.contains(A.activeElement)))}));(0,i.useEffect)((()=>null==M?void 0:M(O)),[M,O]),(0,h.O)(null==A?void 0:A.defaultView,"focus",(e=>{var t,n,o,r;0===m&&(T()||!b||!w||null!=(n=null==(t=P.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(r=null==(o=E.current)?void 0:o.contains)&&r.call(o,e.target)||z({type:1}))}),!0),(0,g.O)([b,w],((e,t)=>{z({type:1}),(0,p.sP)(t,p.tJ.Loose)||(e.preventDefault(),null==b||b.focus())}),0===m);let N=(0,S.z)((e=>{z({type:1});let t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:b:b;null==t||t.focus()})),L=(0,i.useMemo)((()=>({close:N,isPortalled:k})),[N,k]),B=(0,i.useMemo)((()=>({open:0===m,close:N})),[m,N]),_=e,F={ref:d};return i.createElement(I.Provider,{value:v},i.createElement(x.Provider,{value:L},i.createElement(f.up,{value:(0,a.E)(m,{0:f.ZM.Open,1:f.ZM.Closed})},(0,l.sY)({ourProps:F,theirProps:_,slot:B,defaultTag:"div",name:"Popover"}))))})),T=(0,l.yV)((function(e,t){let[n,o]=A("Popover.Button"),{isPortalled:r}=k("Popover.Button"),f=(0,i.useRef)(null),g=`headlessui-focus-sentinel-${(0,s.M)()}`,m=C(),h=null==m?void 0:m.closeOthers,P=(0,i.useContext)(R),E=null!==P&&P===n.panelId,z=(0,u.T)(f,t,E?null:e=>o({type:2,button:e})),I=(0,u.T)(f,t),x=(0,y.i)(f),O=(0,S.z)((e=>{var t,r,i;if(E){if(1===n.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(r=(t=e.target).click)||r.call(t),o({type:1}),null==(i=n.button)||i.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==h||h(n.buttonId)),o({type:0});break;case c.R.Escape:if(0!==n.popoverState)return null==h?void 0:h(n.buttonId);if(!f.current||(null==x?void 0:x.activeElement)&&!f.current.contains(x.activeElement))return;e.preventDefault(),e.stopPropagation(),o({type:1})}})),j=(0,S.z)((e=>{E||e.key===c.R.Space&&e.preventDefault()})),M=(0,S.z)((t=>{var r,i;(0,d.P)(t.currentTarget)||e.disabled||(E?(o({type:1}),null==(r=n.button)||r.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==h||h(n.buttonId)),o({type:0}),null==(i=n.button)||i.focus()))})),T=(0,S.z)((e=>{e.preventDefault(),e.stopPropagation()})),N=0===n.popoverState,L=(0,i.useMemo)((()=>({open:N})),[N]),B=(0,v.f)(e,f),_=e,F=E?{ref:I,type:B,onKeyDown:O,onClick:M}:{ref:z,id:n.buttonId,type:B,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:O,onKeyUp:j,onClick:M,onMouseDown:T},D=(0,w.l)(),q=(0,S.z)((()=>{let e=n.panel;e&&(0,a.E)(D.current,{[w.N.Forwards]:()=>(0,p.jA)(e,p.TO.First),[w.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})}));return i.createElement(i.Fragment,null,(0,l.sY)({ourProps:F,theirProps:_,slot:L,defaultTag:"button",name:"Popover.Button"}),N&&!E&&r&&i.createElement(b._,{id:g,features:b.A.Focusable,as:"button",type:"button",onFocus:q}))})),N=l.AN.RenderStrategy|l.AN.Static,L=(0,l.yV)((function(e,t){let[{popoverState:n},o]=A("Popover.Overlay"),r=(0,u.T)(t),a=`headlessui-popover-overlay-${(0,s.M)()}`,c=(0,f.oJ)(),p=null!==c?c===f.ZM.Open:0===n,v=(0,S.z)((e=>{if((0,d.P)(e.currentTarget))return e.preventDefault();o({type:1})})),g=(0,i.useMemo)((()=>({open:0===n})),[n]);return(0,l.sY)({ourProps:{ref:r,id:a,"aria-hidden":!0,onClick:v},theirProps:e,slot:g,defaultTag:"div",features:N,visible:p,name:"Popover.Overlay"})})),B=l.AN.RenderStrategy|l.AN.Static,_=(0,l.yV)((function(e,t){let{focus:n=!1,...o}=e,[r,d]=A("Popover.Panel"),{close:v,isPortalled:g}=k("Popover.Panel"),m=`headlessui-focus-sentinel-before-${(0,s.M)()}`,h=`headlessui-focus-sentinel-after-${(0,s.M)()}`,P=(0,i.useRef)(null),E=(0,u.T)(P,t,(e=>{d({type:4,panel:e})})),z=(0,y.i)(P),I=(0,f.oJ)(),x=null!==I?I===f.ZM.Open:0===r.popoverState,O=(0,S.z)((e=>{var t;if(e.key===c.R.Escape){if(0!==r.popoverState||!P.current||(null==z?void 0:z.activeElement)&&!P.current.contains(z.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:1}),null==(t=r.button)||t.focus()}}));(0,i.useEffect)((()=>{var t;e.static||1===r.popoverState&&(null==(t=e.unmount)||t)&&d({type:4,panel:null})}),[r.popoverState,e.unmount,e.static,d]),(0,i.useEffect)((()=>{if(!n||0!==r.popoverState||!P.current)return;let e=null==z?void 0:z.activeElement;P.current.contains(e)||(0,p.jA)(P.current,p.TO.First)}),[n,P,r.popoverState]);let C=(0,i.useMemo)((()=>({open:0===r.popoverState,close:v})),[r,v]),j={ref:E,id:r.panelId,onKeyDown:O,onBlur:n&&0===r.popoverState?e=>{var t,n,o,i,a;let l=e.relatedTarget;!l||!P.current||null!=(t=P.current)&&t.contains(l)||(d({type:1}),((null==(o=null==(n=r.beforePanelSentinel.current)?void 0:n.contains)?void 0:o.call(n,l))||(null==(a=null==(i=r.afterPanelSentinel.current)?void 0:i.contains)?void 0:a.call(i,l)))&&l.focus({preventScroll:!0}))}:void 0,tabIndex:-1},M=(0,w.l)(),T=(0,S.z)((()=>{let e=P.current;e&&(0,a.E)(M.current,{[w.N.Forwards]:()=>{(0,p.jA)(e,p.TO.First)},[w.N.Backwards]:()=>{var e;null==(e=r.button)||e.focus({preventScroll:!0})}})})),N=(0,S.z)((()=>{let e=P.current;e&&(0,a.E)(M.current,{[w.N.Forwards]:()=>{var e,t,n;if(!r.button)return;let o=(0,p.GO)(),i=o.indexOf(r.button),a=o.slice(0,i+1),l=[...o.slice(i+1),...a];for(let u of l.slice())if((null==(t=null==(e=null==u?void 0:u.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=r.panel)?void 0:n.contains(u))){let e=l.indexOf(u);-1!==e&&l.splice(e,1)}(0,p.jA)(l,p.TO.First,!1)},[w.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})}));return i.createElement(R.Provider,{value:r.panelId},x&&g&&i.createElement(b._,{id:m,ref:r.beforePanelSentinel,features:b.A.Focusable,as:"button",type:"button",onFocus:T}),(0,l.sY)({ourProps:j,theirProps:o,slot:C,defaultTag:"div",features:B,visible:x,name:"Popover.Panel"}),x&&g&&i.createElement(b._,{id:h,ref:r.afterPanelSentinel,features:b.A.Focusable,as:"button",type:"button",onFocus:N}))})),F=(0,l.yV)((function(e,t){let n=(0,i.useRef)(null),o=(0,u.T)(n,t),[r,a]=(0,i.useState)([]),s=(0,S.z)((e=>{a((t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t}))})),c=(0,S.z)((e=>(a((t=>[...t,e])),()=>s(e)))),d=(0,S.z)((()=>{var e;let t=(0,m.r)(n);if(!t)return!1;let o=t.activeElement;return!(null==(e=n.current)||!e.contains(o))||r.some((e=>{var n,r;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(o))||(null==(r=t.getElementById(e.panelId))?void 0:r.contains(o))}))})),p=(0,S.z)((e=>{for(let t of r)t.buttonId!==e&&t.close()})),f=(0,i.useMemo)((()=>({registerPopover:c,unregisterPopover:s,isFocusWithinPopoverGroup:d,closeOthers:p})),[c,s,d,p]),v=(0,i.useMemo)((()=>({})),[]),g=e,y={ref:o};return i.createElement(O.Provider,{value:f},(0,l.sY)({ourProps:y,theirProps:g,slot:v,defaultTag:"div",name:"Popover.Group"}))})),D=Object.assign(M,{Button:T,Overlay:L,Panel:_,Group:F})}}]);