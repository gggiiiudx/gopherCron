var Ht=Object.defineProperty,Lt=Object.defineProperties;var Rt=Object.getOwnPropertyDescriptors;var it=Object.getOwnPropertySymbols;var Pt=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable;var rt=(e,r,a)=>r in e?Ht(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,k=(e,r)=>{for(var a in r||(r={}))Pt.call(r,a)&&rt(e,a,r[a]);if(it)for(var a of it(r))Dt.call(r,a)&&rt(e,a,r[a]);return e},W=(e,r)=>Lt(e,Rt(r));import{am as Nt,r as _,c as g,w as ge,n as J,h as w,aA as $t,bx as Kt,ai as jt,aj as Qt,a3 as vt,i as mt,a as St,cU as Qe,cV as gt,cW as ht,cX as yt,u as Ut,cY as Wt,by as Xt,bD as Yt,m as Gt,ay as $e,G as Zt,cZ as st,ab as Ae,a8 as Jt,az as me,a9 as el,a7 as Se,aa as tl,c_ as ll}from"./index.1dcbf74c.js";import{Q as ul,d as nl,b as ol,c as al,a as il}from"./QChip.fc096b0b.js";import{r as je}from"./rtl.b51694b1.js";import{n as ct}from"./format.865294d5.js";const K=1e3,rl=["start","center","end","start-force","center-force","end-force"],wt=Array.prototype.filter,sl=window.getComputedStyle(document.body).overflowAnchor===void 0?Nt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];wt.call(a,E=>E.dataset&&E.dataset.qVsAnchor!==void 0).forEach(E=>{delete E.dataset.qVsAnchor});const b=a[r];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function he(e,r){return e+r}function Ke(e,r,a,b,E,i,T,h){const m=e===window?document.scrollingElement||document.documentElement:e,B=E===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-T-h,scrollMaxSize:0,offsetStart:-T,offsetEnd:-h};if(E===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=m.scrollLeft,s.scrollViewSize+=m.clientWidth),s.scrollMaxSize=m.scrollWidth,i===!0&&(s.scrollStart=(je===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=m.scrollTop,s.scrollViewSize+=m.clientHeight),s.scrollMaxSize=m.scrollHeight),a!==null)for(let y=a.previousElementSibling;y!==null;y=y.previousElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=y[B]);if(b!==null)for(let y=b.nextElementSibling;y!==null;y=y.nextElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=y[B]);if(r!==e){const y=m.getBoundingClientRect(),V=r.getBoundingClientRect();E===!0?(s.offsetStart+=V.left-y.left,s.offsetEnd-=V.width):(s.offsetStart+=V.top-y.top,s.offsetEnd-=V.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function dt(e,r,a,b){r==="end"&&(r=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(b===!0&&(r=(je===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):a===!0?(b===!0&&(r=(je===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function ke(e,r,a,b){if(a>=b)return 0;const E=r.length,i=Math.floor(a/K),T=Math.floor((b-1)/K)+1;let h=e.slice(i,T).reduce(he,0);return a%K!==0&&(h-=r.slice(i*K,a).reduce(he,0)),b%K!==0&&b!==E&&(h-=r.slice(b,T*K).reduce(he,0)),h}const bt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},bl=Object.keys(bt),cl=k({virtualScrollHorizontal:Boolean,onVirtualScroll:Function},bt);function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:a,virtualScrollItemSizeComputed:b}){const E=mt(),{props:i,emit:T,proxy:h}=E,{$q:m}=h;let B,s,y,V=[],A;const M=_(0),$=_(0),L=_({}),X=_(null),Y=_(null),R=_(null),I=_({from:0,to:0}),ze=g(()=>i.tableColspan!==void 0?i.tableColspan:100);b===void 0&&(b=g(()=>i.virtualScrollItemSize));const F=g(()=>b.value+";"+i.virtualScrollHorizontal),G=g(()=>F.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ge(G,()=>{j()}),ge(F,ee);function ee(){ae(s,!0)}function ye(l){ae(l===void 0?s:l)}function te(l,o){const d=r();if(d==null||d.nodeType===8)return;const x=Ke(d,a(),X.value,Y.value,i.virtualScrollHorizontal,m.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);y!==x.scrollViewSize&&j(x.scrollViewSize),P(d,x,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,rl.indexOf(o)>-1?o:s>-1&&l>s?"end":"start")}function Ie(){const l=r();if(l==null||l.nodeType===8)return;const o=Ke(l,a(),X.value,Y.value,i.virtualScrollHorizontal,m.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),d=e.value-1,x=o.scrollMaxSize-o.offsetStart-o.offsetEnd-$.value;if(B===o.scrollStart)return;if(o.scrollMaxSize<=0){P(l,o,0,0);return}y!==o.scrollViewSize&&j(o.scrollViewSize),we(I.value.from);const O=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(A[d],o.scrollViewSize/2));if(O>0&&Math.ceil(o.scrollStart)>=O){P(l,o,d,o.scrollMaxSize-o.offsetEnd-V.reduce(he,0));return}let S=0,v=o.scrollStart-o.offsetStart,q=v;if(v<=x&&v+o.scrollViewSize>=M.value)v-=M.value,S=I.value.from,q=v;else for(let f=0;v>=V[f]&&S<d;f++)v-=V[f],S+=K;for(;v>0&&S<d;)v-=A[S],v>-o.scrollViewSize?(S++,q=v):q=A[S]+v;P(l,o,S,q)}function P(l,o,d,x,O){const S=typeof O=="string"&&O.indexOf("-force")>-1,v=S===!0?O.replace("-force",""):O,q=v!==void 0?v:"start";let f=Math.max(0,d-L.value[q]),D=f+L.value.total;D>e.value&&(D=e.value,f=Math.max(0,D-L.value.total)),B=o.scrollStart;const Z=f!==I.value.from||D!==I.value.to;if(Z===!1&&v===void 0){be(d);return}const{activeElement:Me}=document,Q=R.value;Z===!0&&Q!==null&&Q!==Me&&Q.contains(Me)===!0&&(Q.addEventListener("focusout",Fe),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Fe)})),sl(Q,d-f);const Oe=v!==void 0?A.slice(f,d).reduce(he,0):0;if(Z===!0){const le=D>=I.value.from&&f<=I.value.to?I.value.to:D;I.value={from:f,to:le},M.value=ke(V,A,0,f),$.value=ke(V,A,D,e.value),requestAnimationFrame(()=>{I.value.to!==D&&B===o.scrollStart&&(I.value={from:I.value.from,to:D},$.value=ke(V,A,D,e.value))})}requestAnimationFrame(()=>{if(B!==o.scrollStart)return;Z===!0&&we(f);const le=A.slice(f,d).reduce(he,0),ue=le+o.offsetStart+M.value,qe=ue+A[d];let Ce=ue+x;if(v!==void 0){const He=le-Oe,pe=o.scrollStart+He;Ce=S!==!0&&pe<ue&&qe<pe+o.scrollViewSize?pe:v==="end"?qe-o.scrollViewSize:ue-(v==="start"?0:Math.round((o.scrollViewSize-A[d])/2))}B=Ce,dt(l,Ce,i.virtualScrollHorizontal,m.lang.rtl),be(d)})}function we(l){const o=R.value;if(o){const d=wt.call(o.children,f=>f.classList&&f.classList.contains("q-virtual-scroll--skip")===!1),x=d.length,O=i.virtualScrollHorizontal===!0?f=>f.getBoundingClientRect().width:f=>f.offsetHeight;let S=l,v,q;for(let f=0;f<x;){for(v=O(d[f]),f++;f<x&&d[f].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=O(d[f]),f++;q=v-A[S],q!==0&&(A[S]+=q,V[Math.floor(S/K)]+=q),S++}}}function Fe(){R.value!==null&&R.value!==void 0&&R.value.focus()}function ae(l,o){const d=1*b.value;(o===!0||Array.isArray(A)===!1)&&(A=[]);const x=A.length;A.length=e.value;for(let S=e.value-1;S>=x;S--)A[S]=d;const O=Math.floor((e.value-1)/K);V=[];for(let S=0;S<=O;S++){let v=0;const q=Math.min((S+1)*K,e.value);for(let f=S*K;f<q;f++)v+=A[f];V.push(v)}s=-1,B=void 0,M.value=ke(V,A,0,I.value.from),$.value=ke(V,A,I.value.to,e.value),l>=0?(we(I.value.from),J(()=>{te(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const v=r();v!=null&&v.nodeType!==8&&(l=Ke(v,a(),X.value,Y.value,i.virtualScrollHorizontal,m.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}y=l;const o=parseFloat(i.virtualScrollSliceRatioBefore)||0,d=parseFloat(i.virtualScrollSliceRatioAfter)||0,x=1+o+d,O=l===void 0||l<=0?1:Math.ceil(l/b.value),S=Math.max(1,O,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/x));L.value={total:Math.ceil(S*x),start:Math.ceil(S*o),center:Math.ceil(S*(.5+o)),end:Math.ceil(S*(1+o)),view:O}}function Be(l,o){const d=i.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+d]:b.value+"px"};return[l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"before",ref:X},[w("tr",[w("td",{style:k({[d]:`${M.value}px`},x),colspan:ze.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:k({[d]:`${M.value}px`},x)}),w(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},o.flat()),l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"after",ref:Y},[w("tr",[w("td",{style:k({[d]:`${$.value}px`},x),colspan:ze.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"after",ref:Y,style:k({[d]:`${$.value}px`},x)})]}function be(l){s!==l&&(i.onVirtualScroll!==void 0&&T("virtualScroll",{index:l,from:I.value.from,to:I.value.to-1,direction:l<s?"decrease":"increase",ref:h}),s=l)}j();const ie=$t(Ie,m.platform.is.ios===!0?120:35);Kt(()=>{j()});let Ve=!1;return jt(()=>{Ve=!0}),Qt(()=>{if(Ve!==!0)return;const l=r();B!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?dt(l,B,i.virtualScrollHorizontal,m.lang.rtl):te(s)}),vt(()=>{ie.cancel()}),Object.assign(h,{scrollTo:te,reset:ee,refresh:ye}),{virtualScrollSliceRange:I,virtualScrollSliceSizeComputed:L,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:ae,padVirtualScroll:Be,scrollTo:te,reset:ee,refresh:ye}}var fl=St({name:"QField",inheritAttrs:!1,props:W(k({},Qe),{tag:{type:String,default:"label"}}),emits:gt,setup(){return ht(yt({requiredForAttr:!1,tagProp:!0}))}});const ft=e=>["add","add-unique","toggle"].includes(e),vl=".*+?^${}()|[]\\",ml=Object.keys(Qe);var Vl=St({name:"QSelect",inheritAttrs:!1,props:W(k(k(k({},cl),Ut),Qe),{modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function}),emits:[...gt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:r,emit:a}){const{proxy:b}=mt(),{$q:E}=b,i=_(!1),T=_(!1),h=_(-1),m=_(""),B=_(!1),s=_(!1);let y=null,V=null,A,M,$,L=null,X,Y,R,I;const ze=_(null),F=_(null),G=_(null),ee=_(null),ye=_(null),te=Wt(e),Ie=ll(lt),P=g(()=>Array.isArray(e.options)?e.options.length:0),we=g(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Fe,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:j,padVirtualScroll:Be,onVirtualScrollEvt:be,scrollTo:ie,setVirtualScrollSize:Ve}=dl({virtualScrollLength:P,getVirtualScrollTarget:xt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:we}),l=yt(),o=g(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&A!==void 0?A:[],c=n.map(p=>pt(p,u));return e.modelValue===null&&t===!0?c.filter(p=>p!==null):c}return n}),d=g(()=>{const t={};return ml.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),x=g(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),O=g(()=>st(o.value)),S=g(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),v=g(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),q=g(()=>P.value===0),f=g(()=>o.value.map(t=>N.value(t)).join(", ")),D=g(()=>e.displayValue!==void 0?e.displayValue:f.value),Z=g(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Me=g(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Z.value))),Q=g(()=>l.focused.value===!0?e.tabindex:-1),Oe=g(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${h.value}`),t}),le=g(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ue=g(()=>o.value.map((t,n)=>({index:n,opt:t,html:Z.value(t),selected:!0,removeAtIndex:Ct,toggleOption:ne,tabindex:Q.value}))),qe=g(()=>{if(P.value===0)return[];const{from:t,to:n}=Fe.value;return e.options.slice(t,n).map((u,c)=>{const p=re.value(u)===!0,C=Pe(u)===!0,H=t+c,z={clickable:!0,active:C,activeClass:pe.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:x.value,role:"option","aria-selected":C===!0?"true":"false",id:`${l.targetUid.value}_${H}`,onClick:()=>{ne(u)}};return p!==!0&&(h.value===H&&(z.focused=!0),E.platform.is.desktop===!0&&(z.onMousemove=()=>{i.value===!0&&se(H)})),{index:H,opt:u,html:Z.value(u),label:N.value(u),selected:z.active,focused:z.focused,toggleOption:ne,setOptionIndex:se,itemProps:z}})}),Ce=g(()=>e.dropdownIcon!==void 0?e.dropdownIcon:E.iconSet.arrow.dropdown),He=g(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),pe=g(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=g(()=>Re(e.optionValue,"value")),N=g(()=>Re(e.optionLabel,"label")),re=g(()=>Re(e.optionDisable,"disable")),Ee=g(()=>o.value.map(t=>U.value(t))),Vt=g(()=>{const t={onInput:lt,onChange:Ie,onKeydown:Je,onKeyup:Ge,onKeypress:Ze,onFocus:Xe,onClick(n){M===!0&&me(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Ie,t});ge(o,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(T.value!==!0&&i.value!==!0||O.value!==!0)&&($!==!0&&ve(),(T.value===!0||i.value===!0)&&ce(""))},{immediate:!0}),ge(()=>e.fillInput,ve),ge(i,De),ge(P,Bt);function Ue(t){return e.emitValue===!0?U.value(t):t}function Le(t){if(t>-1&&t<o.value.length)if(e.multiple===!0){const n=e.modelValue.slice();a("remove",{index:t,value:n.splice(t,1)[0]}),a("update:modelValue",n)}else a("update:modelValue",null)}function Ct(t){Le(t),l.focus()}function We(t,n){const u=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&xe(N.value(t),!0,!0),a("update:modelValue",u);return}if(o.value.length===0){a("add",{index:0,value:u}),a("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Pe(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const c=e.modelValue.slice();a("add",{index:c.length,value:u}),c.push(u),a("update:modelValue",c)}function ne(t,n){if(l.editable.value!==!0||t===void 0||re.value(t)===!0)return;const u=U.value(t);if(e.multiple!==!0){n!==!0&&(xe(e.fillInput===!0?N.value(t):"",!0,!0),oe()),F.value!==null&&F.value.focus(),(o.value.length===0||Ae(U.value(o.value[0]),u)!==!0)&&a("update:modelValue",e.emitValue===!0?u:t);return}if((M!==!0||B.value===!0)&&l.focus(),Xe(),o.value.length===0){const C=e.emitValue===!0?u:t;a("add",{index:0,value:C}),a("update:modelValue",e.multiple===!0?[C]:C);return}const c=e.modelValue.slice(),p=Ee.value.findIndex(C=>Ae(C,u));if(p>-1)a("remove",{index:p,value:c.splice(p,1)[0]});else{if(e.maxValues!==void 0&&c.length>=e.maxValues)return;const C=e.emitValue===!0?u:t;a("add",{index:c.length,value:C}),c.push(C)}a("update:modelValue",c)}function se(t){if(E.platform.is.desktop!==!0)return;const n=t>-1&&t<P.value?t:-1;h.value!==n&&(h.value=n)}function _e(t=1,n){if(i.value===!0){let u=h.value;do u=ct(u+t,-1,P.value-1);while(u!==-1&&u!==h.value&&re.value(e.options[u])===!0);h.value!==u&&(se(u),ie(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Te(u>=0?N.value(e.options[u]):X,!0))}}function pt(t,n){const u=c=>Ae(U.value(c),t);return e.options.find(u)||n.find(u)||t}function Re(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:c=>c!==null&&typeof c=="object"&&u in c?c[u]:c}function Pe(t){const n=U.value(t);return Ee.value.find(u=>Ae(u,n))!==void 0}function Xe(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===f.value)&&F.value.select()}function Ye(t){Jt(t,27)===!0&&i.value===!0&&(me(t),oe(),ve()),a("keyup",t)}function Ge(t){const{value:n}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),ve(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),c=C=>{const H=e.options.find(z=>C.value(z).toLocaleLowerCase()===u);return H===void 0?!1:(o.value.indexOf(H)===-1?ne(H):oe(),!0)},p=C=>{c(U)!==!0&&(c(N)===!0||C===!0||ce(n,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Ze(t){a("keypress",t)}function Je(t){if(a("keydown",t),el(t)===!0)return;const n=m.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(h.value>-1||n===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&u===!1){de();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){Se(t),fe();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&m.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Le(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof m.value!="string"||m.value.length===0)&&(Se(t),h.value=-1,_e(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(Se(t),h.value=Math.max(-1,Math.min(P.value,h.value+(t.keyCode===33?-1:1)*ae.value.view)),_e(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Se(t),_e(t.keyCode===38?-1:1,e.multiple));const c=P.value;if((R===void 0||I<Date.now())&&(R=""),c>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){i.value!==!0&&fe(t);const p=t.key.toLocaleLowerCase(),C=R.length===1&&R[0]===p;I=Date.now()+1500,C===!1&&(Se(t),R+=p);const H=new RegExp("^"+R.split("").map(Ne=>vl.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let z=h.value;if(C===!0||z<0||H.test(N.value(e.options[z]))!==!0)do z=ct(z+1,-1,c-1);while(z!==h.value&&(re.value(e.options[z])===!0||H.test(N.value(e.options[z]))!==!0));h.value!==z&&J(()=>{se(z),ie(z),z>=0&&e.useInput===!0&&e.fillInput===!0&&Te(N.value(e.options[z]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&Se(t),h.value>-1&&h.value<c){ne(e.options[h.value]);return}if(n===!0){const p=(C,H)=>{if(H){if(ft(H)!==!0)return}else H=e.newValueMode;if(xe("",e.multiple!==!0,!0),C==null)return;(H==="toggle"?ne:We)(C,H==="add-unique"),e.multiple!==!0&&(F.value!==null&&F.value.focus(),oe())};if(e.onNewValue!==void 0?a("newValue",m.value,p):p(m.value),e.multiple!==!0)return}i.value===!0?de():l.innerLoading.value!==!0&&fe()}}function et(){return M===!0?ye.value:G.value!==null&&G.value.contentEl!==null?G.value.contentEl:void 0}function xt(){return et()}function At(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?ue.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?ue.value.map((t,n)=>w(nl,{key:"option-"+n,removable:l.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(n)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[w("span",{[Me.value===!0?"innerHTML":"textContent"]:D.value})]}function tt(){if(q.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:m.value}):void 0;const t=r.option!==void 0?r.option:u=>w(il,k({key:u.index},u.itemProps),()=>w(ol,()=>w(al,()=>w("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=Be("div",qe.value.map(t));return r["before-options"]!==void 0&&(n=r["before-options"]().concat(n)),tl(r["after-options"],n)}function kt(t,n){const u=n===!0?k(k({},Oe.value),l.splitAttrs.attributes.value):void 0,c=k(W(k({ref:n===!0?F:void 0,key:"i_t",class:S.value,style:e.inputStyle,value:m.value!==void 0?m.value:"",type:"search"},u),{id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0}),Vt.value);return t!==!0&&M===!0&&(Array.isArray(c.class)===!0?c.class=[...c.class,"no-pointer-events"]:c.class+=" no-pointer-events"),w("input",c)}function lt(t){y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Te(t.target.value||""),$=!0,X=m.value,l.focused.value!==!0&&(M!==!0||B.value===!0)&&l.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,ce(m.value)},e.inputDebounce)))}function Te(t,n){m.value!==t&&(m.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?a("inputValue",t):V=setTimeout(()=>{V=null,a("inputValue",t)},e.inputDebounce))}function xe(t,n,u){$=u!==!0,e.useInput===!0&&(Te(t,!0),(n===!0||u!==!0)&&(X=t),n!==!0&&ce(t))}function ce(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?a("filterAbort"):(l.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&$!==!0&&t===N.value(o.value[0])&&(t="");const c=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);L!==null&&clearTimeout(L),L=c,a("filter",t,(p,C)=>{(n===!0||l.focused.value===!0)&&L===c&&(clearTimeout(L),typeof p=="function"&&p(),s.value=!1,J(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?i.value===!0&&oe():i.value===!0?De(!0):i.value=!0),typeof C=="function"&&J(()=>{C(b)}),typeof u=="function"&&J(()=>{u(b)})}))},()=>{l.focused.value===!0&&L===c&&(clearTimeout(L),l.innerLoading.value=!1,s.value=!1),i.value===!0&&(i.value=!1)})}function zt(){return w(ul,W(k({ref:G,class:v.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&q.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:x.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:He.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0},le.value),{onScrollPassive:be,onBeforeShow:nt,onBeforeHide:It,onShow:Ft}),tt)}function It(t){ot(t),de()}function Ft(){Ve()}function Mt(t){me(t),F.value!==null&&F.value.focus(),B.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Ot(t){me(t),J(()=>{B.value=!1})}function qt(){const t=[w(fl,W(k(W(k({class:`col-auto ${l.fieldClass.value}`},d.value),{for:l.targetUid.value,dark:x.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:m.value.length!==0}),l.splitAttrs.listeners.value),{onFocus:Mt,onBlur:Ot}),W(k({},r),{rawControl:()=>l.getControl(!0),before:void 0,after:void 0}))];return i.value===!0&&t.push(w("div",W(k({ref:ye,class:v.value+" scroll",style:e.popupContentStyle},le.value),{onClick:$e,onScrollPassive:be}),tt())),w(Gt,{ref:ee,modelValue:T.value,position:e.useInput===!0?"top":void 0,transitionShow:Y,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:nt,onBeforeHide:Et,onHide:_t,onShow:Tt},()=>w("div",{class:"q-select__dialog"+(x.value===!0?" q-select__dialog--dark q-dark":"")+(B.value===!0?" q-select__dialog--focused":"")},t))}function Et(t){ot(t),ee.value!==null&&ee.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function _t(t){oe(),l.focused.value===!1&&a("blur",t),ve()}function Tt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),Ve()}function de(){T.value!==!0&&(h.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(L!==null&&(clearTimeout(L),L=null),l.innerLoading.value===!0&&(a("filterAbort"),l.innerLoading.value=!1,s.value=!1)))}function fe(t){l.editable.value===!0&&(M===!0?(l.onControlFocusin(t),T.value=!0,J(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(m.value):(q.value!==!0||r["no-option"]!==void 0)&&(i.value=!0))}function oe(){T.value=!1,de()}function ve(){e.useInput===!0&&xe(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&N.value(o.value[0])||"",!0,!0)}function De(t){let n=-1;if(t===!0){if(o.value.length!==0){const u=U.value(o.value[0]);n=e.options.findIndex(c=>Ae(U.value(c),u))}j(n)}se(n)}function Bt(t,n){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),J(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>n?j():De(!0))}))}function ut(){T.value===!1&&G.value!==null&&G.value.updatePosition()}function nt(t){t!==void 0&&me(t),a("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function ot(t){t!==void 0&&me(t),a("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function at(){M=E.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||q.value===!1:!0),Y=E.platform.is.ios===!0&&M===!0&&e.useInput===!0?"fade":e.transitionShow}return Xt(at),Yt(ut),at(),vt(()=>{y!==null&&clearTimeout(y),V!==null&&clearTimeout(V)}),Object.assign(b,{showPopup:fe,hidePopup:oe,removeAtIndex:Le,add:We,toggleOption:ne,getOptionIndex:()=>h.value,setOptionIndex:se,moveOptionSelection:_e,filter:ce,updateMenuPosition:ut,updateInputValue:xe,isOptionSelected:Pe,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:g(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:ze,targetRef:F,hasValue:O,showPopup:fe,floatingLabel:g(()=>e.hideSelected!==!0&&O.value===!0||typeof m.value=="number"||m.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(T.value===!0||q.value!==!0||r["no-option"]!==void 0))return M===!0?qt():zt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if($e(t),M!==!0&&i.value===!0){de(),F.value!==null&&F.value.focus();return}fe(t)}},getControl:t=>{const n=At(),u=t===!0||T.value!==!0||M!==!0;if(e.useInput===!0)n.push(kt(t,u));else if(l.editable.value===!0){const p=u===!0?Oe.value:void 0;n.push(w("input",W(k({ref:u===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:D.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0},p),{onKeydown:Je,onKeyup:Ye,onKeypress:Ze}))),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(te.value!==void 0&&e.disable!==!0&&Ee.value.length!==0){const p=Ee.value.map(C=>w("option",{value:C,selected:!0}));n.push(w("select",{class:"hidden",name:te.value,multiple:e.multiple},p))}const c=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return w("div",k(k({class:"q-field__native row items-center"},c),l.splitAttrs.listeners.value),n)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[w(Zt,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:Ce.value})]:null}),ht(l)}});export{Vl as Q,dl as a,bl as c,cl as u};
