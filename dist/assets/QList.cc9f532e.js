var Y=Object.defineProperty,F=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var z=(e,t,l)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,$=(e,t)=>{for(var l in t||(t={}))G.call(t,l)&&z(e,l,t[l]);if(S)for(var l of S(t))J.call(t,l)&&z(e,l,t[l]);return e},A=(e,t)=>F(e,U(t));import{cR as Z,r as V,a8 as _,ay as B,n as O,ao as R,w as W,t as ee,a3 as I,i as K,aq as te,av as C,cS as P,al as le,cT as ne,a as ie,b as oe,e as ae,c as re,h as se,g as ue}from"./index.1dcbf74c.js";function de(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Z.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const pe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function xe({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:o,emit:u}=K(),a=V(null);let d=null;function c(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const s={};l===void 0&&(Object.assign(s,{hide(i){o.hide(i)},toggle(i){o.toggle(i),i.qAnchorHandled=!0},toggleKey(i){_(i,13)===!0&&s.toggle(i)},contextClick(i){o.hide(i),B(i),O(()=>{o.show(i),i.qAnchorHandled=!0})},prevent:B,mobileTouch(i){if(s.mobileCleanup(i),c(i)!==!0)return;o.hide(i),a.value.classList.add("non-selectable");const r=i.target;R(s,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{d=null,o.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),d!==null&&(clearTimeout(d),d=null),e.value===!0&&i!==void 0&&de()}}),l=function(i=n.contextMenu){if(n.noParentEvent===!0||a.value===null)return;let r;i===!0?o.$q.platform.is.mobile===!0?r=[[a.value,"touchstart","mobileTouch","passive"]]:r=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:r=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],R(s,"anchor",r)});function f(){te(s,"anchor")}function y(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;l()}function p(){if(n.target===!1||n.target===""||o.$el.parentNode===null)a.value=null;else if(n.target===!0)y(o.$el.parentNode);else{let i=n.target;if(typeof n.target=="string")try{i=document.querySelector(n.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,l()):(a.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return W(()=>n.contextMenu,i=>{a.value!==null&&(f(),l(i))}),W(()=>n.target,()=>{a.value!==null&&f(),p()}),W(()=>n.noParentEvent,i=>{a.value!==null&&(i===!0?f():l())}),ee(()=>{p(),t!==!0&&n.modelValue===!0&&a.value===null&&u("update:modelValue",!1)}),I(()=>{d!==null&&clearTimeout(d),f()}),{anchorEl:a,canShow:c,anchorEvents:s}}function be(e,t){const l=V(null);let n;function o(d,c){const s=`${c!==void 0?"add":"remove"}EventListener`,f=c!==void 0?c:n;d!==window&&d[s]("scroll",f,C.passive),window[s]("scroll",f,C.passive),n=c}function u(){l.value!==null&&(o(l.value),l.value=null)}const a=W(()=>e.noParentEvent,()=>{l.value!==null&&(u(),t())});return I(a),{localScrollTarget:l,unconfigureScrollTarget:u,changeScrollEvent:o}}const{notPassiveCapture:E}=C,g=[];function M(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=P.length-1;for(;l>=0;){const n=P[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=g.length-1;n>=0;n--){const o=g[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function we(e){g.push(e),g.length===1&&(document.addEventListener("mousedown",M,E),document.addEventListener("touchstart",M,E))}function ye(e){const t=g.findIndex(l=>l===e);t>-1&&(g.splice(t,1),g.length===0&&(document.removeEventListener("mousedown",M,E),document.removeEventListener("touchstart",M,E)))}let Q,j;function He(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function We(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{q[`${e}#ltr`]=e,q[`${e}#rtl`]=e});function Ee(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:q[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function ce(e,t){let{top:l,left:n,right:o,bottom:u,width:a,height:d}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],u+=t[1],o+=t[0],a+=t[0],d+=t[1]),{top:l,bottom:u,height:d,left:n,right:o,width:a,middle:n+(o-n)/2,center:l+(u-l)/2}}function fe(e,t,l){let{top:n,left:o}=e.getBoundingClientRect();return n+=t.top,o+=t.left,l!==void 0&&(n+=l[1],o+=l[0]),{top:n,bottom:n+1,height:1,left:o,right:o+1,width:1,middle:o,center:n}}function he(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function D(e,t,l,n){return{top:e[l.vertical]-t[n.vertical],left:e[l.horizontal]-t[n.horizontal]}}function me(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{me(e,t+1)},10);return}const{targetEl:l,offset:n,anchorEl:o,anchorOrigin:u,selfOrigin:a,absoluteOffset:d,fit:c,cover:s,maxHeight:f,maxWidth:y}=e;if(le.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:b,offsetTop:v}=window.visualViewport;b!==Q&&(H.setProperty("--q-pe-left",b+"px"),Q=b),v!==j&&(H.setProperty("--q-pe-top",v+"px"),j=v)}const{scrollLeft:p,scrollTop:i}=l,r=d===void 0?ce(o,s===!0?[0,0]:n):fe(o,d,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:T}=l,{elWidth:N,elHeight:X}=c===!0||s===!0?{elWidth:Math.max(r.width,k),elHeight:s===!0?Math.max(r.height,T):T}:{elWidth:k,elHeight:T};let m={maxWidth:y,maxHeight:f};(c===!0||s===!0)&&(m.minWidth=r.width+"px",s===!0&&(m.minHeight=r.height+"px")),Object.assign(l.style,m);const x=he(N,X);let h=D(r,x,u,a);if(d===void 0||n===void 0)L(h,r,x,u,a);else{const{top:H,left:b}=h;L(h,r,x,u,a);let v=!1;if(h.top!==H){v=!0;const w=2*n[1];r.center=r.top-=w,r.bottom-=w+2}if(h.left!==b){v=!0;const w=2*n[0];r.middle=r.left-=w,r.right-=w+2}v===!0&&(h=D(r,x,u,a),L(h,r,x,u,a))}m={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(m.maxHeight=h.maxHeight+"px",r.height>h.maxHeight&&(m.minHeight=m.maxHeight)),h.maxWidth!==void 0&&(m.maxWidth=h.maxWidth+"px",r.width>h.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(l.style,m),l.scrollTop!==i&&(l.scrollTop=i),l.scrollLeft!==p&&(l.scrollLeft=p)}function L(e,t,l,n,o){const u=l.bottom,a=l.right,d=ne(),c=window.innerHeight-d,s=document.body.clientWidth;if(e.top<0||e.top+u>c)if(o.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(t[n.vertical]>c/2){const f=Math.min(c,n.vertical==="center"?t.center:n.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,f),e.top=Math.max(0,f-u)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),o.horizontal==="middle")e.left=t[n.horizontal]>s/2?Math.max(0,s-a):0;else if(t[n.horizontal]>s/2){const f=Math.min(s,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(a,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(a,s-e.left)}var Me=ie({name:"QList",props:A($({},oe),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}}),setup(e,{slots:t}){const l=K(),n=ae(e,l.proxy.$q),o=re(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>se(e.tag,{class:o.value},ue(t.default))}});export{Me as Q,xe as a,We as b,de as c,be as d,we as e,Ee as p,ye as r,me as s,pe as u,He as v};
