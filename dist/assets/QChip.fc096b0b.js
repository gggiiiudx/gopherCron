var me=Object.defineProperty,he=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var J=(e,n,a)=>n in e?me(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,r=(e,n)=>{for(var a in n||(n={}))ge.call(n,a)&&J(e,a,n[a]);if(U)for(var a of U(n))qe.call(n,a)&&J(e,a,n[a]);return e},y=(e,n)=>he(e,be(n));import{a as T,cp as ke,b as I,cq as ye,cr as Se,r as w,c as o,e as K,af as xe,ag as Ce,cs as _e,ct as Be,cu as Pe,w as X,cy as Te,p as we,cz as Ee,cA as Y,au as Oe,h as v,g as Q,T as Re,a3 as Fe,i as D,cB as Le,cv as Ae,cC as Ie,cD as Ke,a7 as M,ad as Qe,ae as De,a8 as Me,cE as $e,cF as je,cG as He,at as ze,a5 as Ne,G as A,cH as We}from"./index.1dcbf74c.js";import{u as Ve,v as Z,b as Ge,d as Ue,a as Je,r as p,s as Xe,p as ee,e as Ye}from"./QList.cc9f532e.js";var at=T({name:"QMenu",inheritAttrs:!1,props:y(r(r(r(r({},Ve),ke),I),ye),{persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Z},self:{type:String,validator:Z},offset:{type:Array,validator:Ge},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}}),emits:[...Se,"click","escapeKey"],setup(e,{slots:n,emit:a,attrs:s}){let d=null,h,b,k;const S=D(),{proxy:g}=S,{$q:c}=g,u=w(null),f=w(!1),m=o(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),x=K(e,c),{registerTick:C,removeTick:l}=xe(),{registerTimeout:q}=Ce(),{transitionProps:E,transitionStyle:i}=_e(e),{localScrollTarget:_,changeScrollEvent:te,unconfigureScrollTarget:ae}=Ue(e,V),{anchorEl:B,canShow:le}=Je({showing:f}),{hide:$}=Be({showing:f,canShow:le,handleShow:ce,handleHide:se,hideOnRouteChange:m,processOnMount:!0}),{showPortal:j,hidePortal:H,renderPortal:ne}=Pe(S,u,de,"menu"),O={anchorEl:B,innerRef:u,onClickOutside(t){if(e.persistent!==!0&&f.value===!0)return $(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&M(t),!0}},z=o(()=>ee(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),ie=o(()=>e.cover===!0?z.value:ee(e.self||"top start",c.lang.rtl)),oe=o(()=>(e.square===!0?" q-menu--square":"")+(x.value===!0?" q-menu--dark q-dark":"")),ue=o(()=>e.autoClose===!0?{onClick:re}:{}),N=o(()=>f.value===!0&&e.persistent!==!0);X(N,t=>{t===!0?(Le(F),Ye(O)):(Y(F),p(O))});function R(){Ae(()=>{let t=u.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function ce(t){if(d=e.noRefocus===!1?document.activeElement:null,Te(G),j(),V(),h=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const L=we(t);if(L.left!==void 0){const{top:ve,left:fe}=B.value.getBoundingClientRect();h={left:L.left-fe,top:L.top-ve}}}b===void 0&&(b=X(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,P)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{P(),e.noFocus!==!0&&R()}),q(()=>{c.platform.is.ios===!0&&(k=e.autoClose,u.value.click()),P(),j(!0),a("show",t)},e.transitionDuration)}function se(t){l(),H(),W(!0),d!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),q(()=>{H(!0),a("hide",t)},e.transitionDuration)}function W(t){h=void 0,b!==void 0&&(b(),b=void 0),(t===!0||f.value===!0)&&(Ee(G),ae(),p(O),Y(F)),t!==!0&&(d=null)}function V(){(B.value!==null||e.scrollTarget!==void 0)&&(_.value=Oe(B.value,e.scrollTarget),te(_.value,P))}function re(t){k!==!0?(Ie(g,t),a("click",t)):k=!1}function G(t){N.value===!0&&e.noFocus!==!0&&Ke(u.value,t.target)!==!0&&R()}function F(t){a("escapeKey"),$(t)}function P(){Xe({targetEl:u.value,offset:e.offset,anchorEl:B.value,anchorOrigin:z.value,selfOrigin:ie.value,absoluteOffset:h,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function de(){return v(Re,E.value,()=>f.value===!0?v("div",r(y(r({role:"menu"},s),{ref:u,tabindex:-1,class:["q-menu q-position-engine scroll"+oe.value,s.class],style:[s.style,i.value]}),ue.value),Q(n.default)):null)}return Fe(W),Object.assign(g,{focus:R,updatePosition:P}),ne}}),lt=T({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=o(()=>parseInt(e.lines,10)),s=o(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),d=o(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>v("div",{style:d.value,class:s.value},Q(n.default))}}),nt=T({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=o(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>v("div",{class:a.value},Q(n.default))}}),it=T({name:"QItem",props:y(r(r({},I),Qe),{tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:s}}=D(),d=K(e,s),{hasLink:h,linkAttrs:b,linkClass:k,linkTag:S,navigateOnClick:g}=De(),c=w(null),u=w(null),f=o(()=>e.clickable===!0||h.value===!0||e.tag==="label"),m=o(()=>e.disable!==!0&&f.value===!0),x=o(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(d.value===!0?" q-item--dark":"")+(h.value===!0&&e.active===null?k.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=o(()=>{if(e.insetLevel===void 0)return null;const i=s.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+e.insetLevel*56+"px"}});function l(i){m.value===!0&&(u.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===c.value?u.value.focus():document.activeElement===u.value&&c.value.focus()),g(i))}function q(i){if(m.value===!0&&Me(i,[13,32])===!0){M(i),i.qKeyEvent=!0;const _=new MouseEvent("click",i);_.qKeyEvent=!0,c.value.dispatchEvent(_)}a("keyup",i)}function E(){const i=$e(n.default,[]);return m.value===!0&&i.unshift(v("div",{class:"q-focus-helper",tabindex:-1,ref:u})),i}return()=>{const i={ref:c,class:x.value,style:C.value,role:"listitem",onClick:l,onKeyup:q};return m.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,b.value)):f.value===!0&&(i["aria-disabled"]="true"),v(S.value,i,E())}}});const Ze={xs:8,sm:10,md:14,lg:20,xl:24};var ot=T({name:"QChip",props:y(r(r({},I),je),{dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}}),emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:n,emit:a}){const{proxy:{$q:s}}=D(),d=K(e,s),h=He(e,Ze),b=o(()=>e.selected===!0||e.icon!==void 0),k=o(()=>e.selected===!0?e.iconSelected||s.iconSet.chip.selected:e.icon),S=o(()=>e.iconRemove||s.iconSet.chip.remove),g=o(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=o(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(g.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(d.value===!0?" q-chip--dark q-dark":"")}),u=o(()=>{const l=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},q=y(r({},l),{role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||s.lang.label.remove});return{chip:l,remove:q}});function f(l){l.keyCode===13&&m(l)}function m(l){e.disable||(a("update:selected",!e.selected),a("click",l))}function x(l){(l.keyCode===void 0||l.keyCode===13)&&(M(l),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function C(){const l=[];g.value===!0&&l.push(v("div",{class:"q-focus-helper"})),b.value===!0&&l.push(v(A,{class:"q-chip__icon q-chip__icon--left",name:k.value}));const q=e.label!==void 0?[v("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(v("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},We(n.default,q))),e.iconRight&&l.push(v(A,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(v(A,y(r({class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:S.value},u.value.remove),{onClick:x,onKeyup:x}))),l}return()=>{if(e.modelValue===!1)return;const l={class:c.value,style:h.value};return g.value===!0&&Object.assign(l,u.value.chip,{onClick:m,onKeyup:f}),ze("div",l,C(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Ne,e.ripple]])}}});export{at as Q,it as a,nt as b,lt as c,ot as d};
