var Y=Object.defineProperty;var N=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var R=(i,u,e)=>u in i?Y(i,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[u]=e,q=(i,u)=>{for(var e in u||(u={}))ee.call(u,e)&&R(i,e,u[e]);if(N)for(var e of N(u))te.call(u,e)&&R(i,e,u[e]);return i};import{q as B,c as C,N as oe,s as G,r as k,y as v,z as b,K as c,L as J,w as E,A as n,B as l,C as z,R as I,bI as O,S as y,W as V,Z as D,I as le,D as ae,Q as A,J as se,m as re,F as g,dg as ue,dh as ne,di as ie,o as L,cn as S,O as Z,t as de,aR as we,bK as j,a1 as U,G as $,E as W}from"./index.1dcbf74c.js";import{Q as ce}from"./QSpace.68de3b07.js";import{Q as fe}from"./QBadge.7736a656.js";import{Q as H}from"./QList.cc9f532e.js";import{a as me,Q as pe}from"./QInfiniteScroll.5b8c5fde.js";import{Q as ve}from"./QScrollArea.2ab160bb.js";import{d as _e,b as T,c as M,a as P}from"./QChip.fc096b0b.js";import{C as K}from"./ClosePopup.21183726.js";import{_ as X}from"./Confirm.a2b95256.js";import{f as ge}from"./datetime.561112b0.js";import{t as ke,b as he}from"./thumbStyle.856de4cb.js";import"./touch.82445793.js";import"./format.865294d5.js";const ye=B({props:{workflowId:{type:Number,required:!0},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:u}){const e=i,d=C({get:()=>e.modelValue,set:p=>u("update:modelValue",p)}),_=oe(),m=G(),a=C(()=>m.state.WorkFlow.workflows.get(e.workflowId)),o=k(!1);async function Q(p){o.value=!0;try{m.commit("cleanError"),await m.dispatch("WorkFlow/deleteWorkFlow",{id:p}),m.state.Root.currentError===void 0&&(_.push({name:"workflows"}),d.value=!1)}catch(w){console.error(w),m.commit("error",{error:w})}o.value=!1}return(p,w)=>{var x;return v(),b(X,{modelValue:c(d),"onUpdate:modelValue":w[0]||(w[0]=F=>J(d)?d.value=F:null),content:"\u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1\u7F16\u6392 "+((x=c(a))==null?void 0:x.title)+" ?",type:"warning",loading:o.value,onConfirm:w[1]||(w[1]=F=>c(a)&&Q(c(a).id))},null,8,["modelValue","content","loading"])}}}),be=g("div",{class:"text-h6"},"\u4EFB\u52A1\u7F16\u6392\u4EBA\u5458\u7BA1\u7406",-1),xe=y(" \u6DFB\u52A0 "),Fe=B({props:{workflowId:{type:Number,default:0},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:u}){const e=i,d=C({get:()=>e.modelValue,set:s=>u("update:modelValue",s)}),_=k([]);async function m(){_.value=await ue(e.workflowId)}E(()=>[e.workflowId,d.value],async([,s])=>{s&&m(),a.value=""});const a=k(""),o=k(!1);async function Q(){o.value=!0;try{await ne(e.workflowId,a.value),a.value="",await m()}finally{o.value=!1}}const p=k(),w=k(!1);function x(s){p.value=s,w.value=!0}function F(){p.value=void 0,w.value=!1}async function t(s){o.value=!0;try{await ie(e.workflowId,s.id),await m()}finally{o.value=!1}}return(s,f)=>(v(),b(re,{modelValue:c(d),"onUpdate:modelValue":f[3]||(f[3]=r=>J(d)?d.value=r:null)},{default:n(()=>{var r;return[l(X,{modelValue:w.value,"onUpdate:modelValue":f[0]||(f[0]=h=>w.value=h),type:"warning",content:`\u786E\u5B9A\u8981\u79FB\u9664\u7528\u6237 ${(r=p.value)==null?void 0:r.name} \u5417\uFF1F`,onConfirm:f[1]||(f[1]=h=>p.value&&t(p.value).then(F))},null,8,["modelValue","content"]),l(se,{class:"tw-w-96 q-pa-sm"},{default:n(()=>[l(z,null,{default:n(()=>[be]),_:1}),l(z,null,{default:n(()=>[(v(!0),I(D,null,O(_.value,h=>(v(),b(_e,{key:h.id,removable:"",color:"primary","text-color":"black",onRemove:Le=>x(h)},{default:n(()=>[y(V(h.name),1)]),_:2},1032,["onRemove"]))),128))]),_:1}),l(le,null,{default:n(()=>[l(ae,{modelValue:a.value,"onUpdate:modelValue":f[2]||(f[2]=h=>a.value=h),class:"tw-w-full",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5E10\u53F7"},{append:n(()=>[l(A,{loading:o.value,flat:"",icon:"add","text-color":"primary",onClick:Q},{default:n(()=>[xe]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]}),_:1},8,["modelValue"]))}}),Ve=y("\u4EBA\u5458\u7BA1\u7406"),Ie=y("\u5220\u9664"),Ce=B({props:{workflowId:{type:Number,required:!0}},setup(i){const u=i,e=k(!1),d=k(!1),_=k(!1);return(m,a)=>(v(),I(D,null,[l(ye,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=o=>d.value=o),"workflow-id":u.workflowId},null,8,["modelValue","workflow-id"]),l(Fe,{modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=o=>_.value=o),"workflow-id":u.workflowId},null,8,["modelValue","workflow-id"]),l(me,{modelValue:e.value,"onUpdate:modelValue":a[4]||(a[4]=o=>e.value=o),dense:"",flat:"","dropdown-icon":"more_horiz","no-icon-animation":"",onClick:a[5]||(a[5]=S(()=>{},["stop","prevent"]))},{default:n(()=>[l(H,{dense:""},{default:n(()=>[L((v(),b(P,{clickable:"",class:"hover:tw-bg-primary hover:tw-text-black",onClick:a[2]||(a[2]=S(o=>_.value=!0,["stop"]))},{default:n(()=>[l(T,null,{default:n(()=>[l(M,null,{default:n(()=>[Ve]),_:1})]),_:1})]),_:1})),[[K,!0]]),L((v(),b(P,{clickable:"",class:"hover:tw-bg-primary hover:tw-text-black",onClick:a[3]||(a[3]=S(o=>d.value=!0,["stop"]))},{default:n(()=>[l(T,null,{default:n(()=>[l(M,null,{default:n(()=>[Ie]),_:1})]),_:1})]),_:1})),[[K,!0]])]),_:1})]),_:1},8,["modelValue"])],64))}});const Qe={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},Be={class:"q-pa-md tw-flex tw-flex-row-reverse tw-gap-4"},Se={class:"tw-w-full tw-grow tw-overflow-hidden tw-min-w-[280px]"},$e={class:"tw-w-full tw-flex tw-gap-4 tw-overflow-hidden tw-px-[10px] tw-pt-[10px]"},Ee={class:"tw-text-ellipsis tw-w-auto tw-truncate tw-gap-1"},Ae={class:"task__remark"},Ue={class:"task__bottom-box"},We={class:"task__bottom-time"},De={key:1,class:"tw-w-full tw-text-center tw-m-auto tw-text-gray-500"},Ne=y(" \u6682\u65E0\u6570\u636E "),Re=B({props:{orgId:{type:String,required:!0}},setup(i){const u=i,e=G(),d=Z(),_=k(),m=C(()=>e.state.WorkFlow.loadingWorkflows);e.commit("WorkFlow/clearWorkFlows"),E(()=>d.name,t=>{(t==null?void 0:t.toString())==="workflows"&&w()});function a(t){const s=_.value;if(s===void 0)throw new Error("scroll-area instance is missing");if(!o.value)return;const f=o.value.findIndex(r=>r.id===t);setTimeout(()=>{if(f<0)s.setScrollPercentage("vertical",0);else{const r=1*f/o.value.length*s.getScroll().verticalSize-50;s.setScrollPosition("vertical",r)}},100)}de(async()=>{e.watch(t=>[t.Root.eventWorkFlow],([t])=>{if(!t)return;const s=e.state.WorkFlow.workflows.get(t.workFlowId);s!==void 0&&e.commit("notifySuccess",{message:`\u4EFB\u52A1\u7F16\u6392 ${s.title} \u5F53\u524D\u72B6\u6001: ${t.status}`}),w()}),E(()=>[o.value],()=>{const t=Number(d.params.workflowId);t!==0&&!isNaN(t)&&a(t)},{deep:!0}),w()});const o=C(()=>{const t=e.state.WorkFlow.workflows,s=Array.from(t.values());return s.sort((f,r)=>r.id-f.id),s});async function Q(t,s){if(t===1)return;p.page=t,(await w()).length<p.pageSize?s(!0):s(!1)}const p=we({page:1,pageSize:15});async function w(){const[t]=await e.dispatch("WorkFlow/fetchWorkFlows",q({orgId:u.orgId},p));return t}function x(t){return t.id===Number(d.params.workflowId||0)}function F(t){return t.state&&t.state.status==="running"}return(t,s)=>{const f=j("router-link");return v(),I("div",Qe,[g("div",Be,[l(A,{flat:"",loading:c(m),icon:"refresh",onClick:w},null,8,["loading"]),l(A,{flat:"",icon:"add",to:{name:"create_workflow"}})]),g("div",Se,[l(c(ve),{ref_key:"scrollArea",ref:_,visible:"","thumb-style":c(ke),"bar-style":c(he),class:"tw-w-full tw-h-full tw-px-[15px]"},{default:n(()=>[l(c(pe),{class:"tw-w-full tw-h-full",offset:100,onLoad:Q},{default:n(()=>[c(o)&&c(o).length>0?(v(),b(H,{key:0,class:"tw-flex tw-flex-col tw-gap-2 tw-pb-4"},{default:n(()=>[(v(!0),I(D,null,O(c(o),r=>(v(),b(f,{key:r.id,to:{name:"workflow",params:{workflowId:r.id}}},{default:n(()=>[g("div",{class:U((x(r)?"tw-bg-primary tw-text-black ":"tw-bg-[#27272a] ")+"tw-w-full tw-min-h-[130px] tw-rounded-md tw-box-border tw-relative tw-overflow-hidden tw-block hover:tw-bg-primary hover:tw-text-black")},[g("div",$e,[g("div",Ee,[l($,{name:"schedule",class:"tw-inline"}),y(" "+V(r.cronExpr),1)]),l(ce),l(fe,{outline:"",color:r.status===1?"green":"red",class:"tw-w-[50px]"},{default:n(()=>[y(V(F(r)?"\u6267\u884C\u4E2D":r.status==1?"\u8C03\u5EA6\u4E2D":"\u5DF2\u6682\u505C"),1)]),_:2},1032,["color"])]),g("div",{class:U((x(r)?"active ":"")+"task__title tw-inline-flex tw-items-center")},[l($,{name:"numbers"}),y(" "+V(r.title),1)],2),g("div",Ae,V(r.remark||"-"),1),g("div",Ue,[g("div",We,V(c(ge)(r.createTime*1e3)),1),l(Ce,{"workflow-id":r.id},null,8,["workflow-id"])])],2)]),_:2},1032,["to"]))),128))]),_:1})):W("",!0),!c(m)&&(!c(o)||c(o).length===0)?(v(),I("div",De,[l($,{name:"outlet",style:{"font-size":"3rem"}}),Ne])):W("",!0)]),_:1})]),_:1},8,["thumb-style","bar-style"])])])}}}),qe={class:"lg:q-pa-md tw-box-border tw-flex tw-flex-row tw-gap-4 tw-h-full tw-w-full"},ze={class:"tw-w-full tw-h-full tw-grow tw-overflow-hidden"},ot=B({props:{orgId:{type:String,required:!0}},setup(i){const u=Z(),e=C(()=>u.name&&u.name.toString()!=="workflows"?"tw-hidden lg:tw-block":"");return(d,_)=>{const m=j("router-view");return v(),I("div",qe,[g("div",{class:U("xl:tw-basis-1/5 lg:tw-basis-1/4  tw-h-full tw-w-full tw-shrink-0 "+c(e))},[i.orgId?(v(),b(Re,{key:0,"org-id":i.orgId},null,8,["org-id"])):W("",!0)],2),g("div",ze,[l(m)])])}}});export{ot as default};
