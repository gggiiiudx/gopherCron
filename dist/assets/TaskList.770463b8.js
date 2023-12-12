var nt=Object.defineProperty;var tt=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var et=(v,o,e)=>o in v?nt(v,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):v[o]=e,z=(v,o)=>{for(var e in o||(o={}))ut.call(o,e)&&et(v,e,o[e]);if(tt)for(var e of tt(o))it.call(o,e)&&et(v,e,o[e]);return v};import{Q as O}from"./QTooltip.2d47568e.js";import{Q as ct,b as dt,a as U,c as P}from"./QTabPanels.733ce69d.js";import{df as at,q as R,s as W,c as E,O as N,t as K,x as G,r as F,N as st,bK as L,y as k,R as j,B as t,K as a,F as r,A as n,G as T,D as M,Q as S,Z as q,bI as Z,z as Q,a1 as B,S as x,W as g,E as V}from"./index.76eeaa00.js";import{Q as ot}from"./QSpace.8fae793b.js";import{Q as lt}from"./QBadge.5fb24876.js";import{Q as H}from"./QList.e2523a50.js";import{Q as J}from"./QScrollArea.c0f2e937.js";import{_ as rt}from"./Confirm.be319d68.js";import{f as D}from"./datetime.561112b0.js";import{t as X,b as Y}from"./thumbStyle.856de4cb.js";import"./touch.6e144213.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";import"./ClosePopup.77551ec3.js";const wt={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},mt={class:"q-pa-md tw-flex tw-justify-around"},pt={class:"tw-w-full tw-grow"},ft={class:"tw-w-full tw-flex tw-gap-4 tw-overflow-hidden tw-px-[10px] tw-pt-[10px]"},_t={class:"tw-text-ellipsis tw-w-auto tw-truncate tw-gap-1"},vt={class:"task__remark"},bt={class:"task__bottom-box"},ht={class:"task__bottom-time"},kt={key:0,class:"tw-w-full tw-text-center tw-m-auto tw-text-gray-500"},gt=x(" \u6682\u65E0\u6570\u636E "),xt=R({props:{projectId:{type:Number,required:!0}},setup(v){const o=v,e=W(),m=E(()=>e.state.Task.loadingTasks),b=N();K(()=>{G(async()=>{e.dispatch("subscribeTopic",["/task/status/project/"+o.projectId]),c.value="",await _(),b.params.taskId&&h(b.params.taskId)}),e.watch(u=>[u.Root.eventTask],([u])=>{if(!u||u.projectId!==o.projectId)return;const s=p.value.find(I=>I.id===u.taskId);s!==void 0&&(e.commit("notifySuccess",{message:`\u4EFB\u52A1 ${s.name} \u5F53\u524D\u72B6\u6001: ${u.status}`}),e.commit("Task/updateTaskStatus",{projectId:s.projectId,taskId:s.id,isRunning:u.status==="running"}))})});async function _(){await e.dispatch("Task/fetchTasks",z({},o))}const c=F(""),p=E(()=>{var u;return((u=e.state.Task.tasks.get(o.projectId))==null?void 0:u.filter(s=>s.name.indexOf(c.value)>=0||s.id.toString().indexOf(c.value)>=0))||[]}),l=F();function h(u){const s=l.value;if(!s||!p.value)return;const I=p.value.findIndex(A=>A.id===u);setTimeout(()=>{if(I<0)s.setScrollPercentage("vertical",0);else{const A=1*I/p.value.length*s.getScroll().verticalSize-150;s.setScrollPosition("vertical",A)}},100)}function y(u){return b.params.taskId===u.id}const i=E(()=>p.value.filter(y).pop()),C=st();C.beforeEach((u,s,I)=>{!s.params.taskId&&u.params.taskId&&h(u.params.taskId),I()});const w=F(!1),d=F(!1);async function $(u,s){try{d.value=!0,e.commit("cleanError"),await e.dispatch("deleteTask",{projectId:u,taskId:s}),e.state.Root.currentError===void 0&&(C.push({name:"crontab_tasks",params:{projectId:u}}),w.value=!1,await _())}catch(I){console.error(I),e.commit("error",{error:I})}d.value=!1}return(u,s)=>{var A;const I=L("router-link");return k(),j("div",wt,[t(rt,{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=f=>w.value=f),content:"\u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1"+((A=a(i))==null?void 0:A.name)+"?",type:"warning",loading:d.value,onConfirm:s[1]||(s[1]=f=>a(i)&&$(a(i).projectId,a(i).id))},null,8,["modelValue","content","loading"]),r("div",mt,[t(M,{modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=f=>c.value=f),borderless:"",dense:"",debounce:"300",placeholder:"Search"},{append:n(()=>[t(T,{name:"search"})]),_:1},8,["modelValue"]),t(S,{flat:"",dense:"",loading:a(m),icon:"refresh",onClick:_},null,8,["loading"]),t(S,{flat:"",dense:"",to:{name:"create_crontab_task"},icon:"add"}),t(S,{flat:"",dense:"",class:"tw-text-red-300 lg:tw-flex tw-hidden",icon:"delete",disable:!a(i),onClick:s[3]||(s[3]=f=>w.value=!0)},null,8,["disable"])]),r("div",pt,[t(a(J),{ref_key:"scrollArea",ref:l,class:"tw-w-full tw-h-full tw-px-[15px]",visible:"","thumb-style":a(X),"bar-style":a(Y)},{default:n(()=>[t(H,{class:"tw-w-full tw-flex tw-flex-col tw-gap-2 tw-pb-4 tw-overflow-hidden tw-relative"},{default:n(()=>[(k(!0),j(q,null,Z(a(p),f=>(k(),Q(I,{key:f.id,to:{name:"crontab_task",params:{taskId:f.id}}},{default:n(()=>[r("div",{class:B((y(f)?"tw-bg-primary tw-text-black ":"tw-bg-[#27272a] ")+"tw-w-full tw-min-h-[130px] tw-rounded-md tw-box-border tw-relative tw-overflow-hidden tw-block hover:tw-bg-primary hover:tw-text-black")},[r("div",ft,[r("div",_t,[t(T,{name:"schedule",class:"tw-inline"}),x(" "+g(f.cronExpr),1)]),t(ot),t(lt,{outline:"",color:f.status===1?"green":"red",class:"tw-w-[50px]"},{default:n(()=>[x(g(f.isRunning==1?"\u6267\u884C\u4E2D":f.status==1?"\u8C03\u5EA6\u4E2D":"\u5DF2\u6682\u505C"),1)]),_:2},1032,["color"])]),r("div",{class:B((y(f)?"active ":"")+"task__title tw-flex-col tw-items-center tw-w-full")},[t(T,{name:"numbers"}),x(" "+g(f.name),1)],2),r("div",vt,g(f.remark||"-"),1),r("div",bt,[r("div",ht,g(a(D)(f.createTime*1e3)),1)])],2)]),_:2},1032,["to"]))),128))]),_:1}),!a(m)&&(!a(p)||a(p).length===0)?(k(),j("div",kt,[t(T,{name:"outlet",style:{"font-size":"3rem"}}),gt])):V("",!0)]),_:1},8,["thumb-style","bar-style"])])])}}});var yt=at(xt,[["__scopeId","data-v-6757d5ec"]]);const It={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},Tt={class:"q-pa-md tw-flex tw-justify-around"},Et={class:"tw-w-full tw-grow"},jt={class:"tw-w-full tw-flex tw-gap-4 tw-overflow-hidden tw-px-[10px] tw-pt-[10px]"},$t={class:"tw-text-ellipsis tw-w-auto tw-truncate tw-gap-1"},Ft={class:"task__remark"},Bt={class:"task__bottom-box"},St={class:"task__bottom-time"},At={key:1,class:"tw-w-full tw-text-center tw-m-auto tw-text-gray-500"},Ct=x(" \u6682\u65E0\u6570\u636E "),Qt=R({props:{projectId:{type:Number,required:!0}},setup(v){const o=v,e=F(""),m=W(),b=E(()=>m.state.Task.loadingTasks);K(async()=>{G(async()=>{await _(),m.dispatch("subscribeTopic",["/task/status/project/"+o.projectId])}),m.state.Task.temporaryTasks||await _(),m.watch(l=>[l.Root.eventTask],async([l])=>{if(!l||l.projectId!==o.projectId)return;const h=c.value.find(y=>y.tmpId===l.tmpId);!h||(m.commit("notifySuccess",{message:`\u4EFB\u52A1 ${h.remark} \u5F53\u524D\u72B6\u6001: ${l.status}`}),m.commit("Task/updateTemporaryTaskStatus",{projectId:o.projectId,tmpId:l.tmpId,isRunning:l.status==="running"||l.status==="starting",finished:l.status!=="running"&&l.status!=="starting"}))})});async function _(){try{await m.dispatch("Task/fetchTemporaryTasks",{projectId:o.projectId})}catch(l){console.error("failed to dispatch fetchTemporaryTasks",l)}}const c=E(()=>{var l;return((l=m.state.Task.temporaryTasks.get(o.projectId))==null?void 0:l.filter(h=>h.taskId.toString().indexOf(e.value)>=0))||[]});function p(l){const h=N();return Number(h.params.taskId)===l.id}return(l,h)=>{const y=L("router-link");return k(),j("div",It,[r("div",Tt,[t(M,{modelValue:e.value,"onUpdate:modelValue":h[0]||(h[0]=i=>e.value=i),borderless:"",dense:"",debounce:"300",placeholder:"Search"},{append:n(()=>[t(T,{name:"search"})]),_:1},8,["modelValue"]),t(S,{flat:"",dense:"",loading:a(b),icon:"refresh",onClick:_},null,8,["loading"])]),r("div",Et,[t(J,{class:"tw-w-full tw-h-full tw-px-[15px]",visible:"","thumb-style":a(X),"bar-style":a(Y)},{default:n(()=>[a(c)?(k(),Q(H,{key:0,class:"tw-w-full tw-flex tw-flex-col tw-gap-2 tw-pb-4"},{default:n(()=>[(k(!0),j(q,null,Z(a(c),i=>(k(),Q(y,{key:i.id,to:{name:"temporary_task",params:{taskId:i.id}}},{default:n(()=>[r("div",{class:B((p(i)?"tw-bg-primary tw-text-black ":"tw-bg-[#27272a] ")+"tw-w-full tw-min-h-[130px] tw-rounded-md tw-box-border tw-relative tw-overflow-hidden tw-block hover:tw-bg-primary hover:tw-text-black")},[r("div",jt,[r("div",$t,[t(T,{name:"schedule",class:"tw-inline"}),x(" "+g(a(D)(i.scheduleTime*1e3)),1)]),t(ot),t(lt,{outline:"",color:i.scheduleStatus===1?"green":"red",class:"tw-w-[50px]"},{default:n(()=>[x(g(i.isRunning==1?"\u6267\u884C\u4E2D":i.scheduleStatus==1?"\u7B49\u5F85\u4E2D":"\u5DF2\u5B8C\u6210"),1)]),_:2},1032,["color"])]),r("div",{class:B((p(i)?"active ":"")+"task__title tw-inline-flex tw-items-center")},[t(T,{name:"numbers"}),x(" "+g(i.remark),1)],2),r("div",Ft,"\u521B\u5EFA\u4EBA\uFF1A"+g(i.userName||"-"),1),r("div",Bt,[r("div",St,g(a(D)(i.createTime*1e3)),1)])],2)]),_:2},1032,["to"]))),128))]),_:1})):V("",!0),!a(b)&&(!a(c)||a(c).length===0)?(k(),j("div",At,[t(T,{name:"outlet",style:{"font-size":"3rem"}}),Ct])):V("",!0)]),_:1},8,["thumb-style","bar-style"])])])}}});var Vt=at(Qt,[["__scopeId","data-v-9a67d3ec"]]);const Dt={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},Rt={class:"q-pa-md tw-flex tw-justify-around"},Nt={class:"tw-w-full tw-grow"},Lt={class:"task__remark"},qt={class:"task__bottom-box"},zt={class:"task__bottom-time"},Ot={key:0,class:"tw-w-full tw-text-center tw-m-auto tw-text-gray-500"},Ut=x(" \u6682\u65E0\u6570\u636E "),Pt=R({props:{projectId:{type:Number,required:!0}},setup(v){const o=v,e=W(),m=E(()=>e.state.WorkFlowTask.loadingTasks);K(()=>{G(async()=>{await b()}),e.watch(w=>[w.Root.eventWorkFlowTask],([w])=>{if(!w||w.projectId!==o.projectId)return;const d=c.value.find($=>$.id===w.taskId);d!==void 0&&e.commit("notifySuccess",{message:`\u4EFB\u52A1 ${d.name} \u5F53\u524D\u72B6\u6001: ${w.status}`}),b()})});async function b(){await e.dispatch("WorkFlowTask/fetchTasks",z({},o))}const _=F(""),c=E(()=>{var w;return((w=e.state.WorkFlowTask.tasks.get(o.projectId))==null?void 0:w.filter(d=>d.name.indexOf(_.value)>=0||d.id.toString().indexOf(_.value)>=0))||[]});function p(w){return N().params.taskId===w.id}const l=E(()=>c.value.filter(p).pop()),h=st(),y=F(!1),i=F(!1);async function C(w,d){i.value=!0;try{e.commit("cleanError"),await e.dispatch("deleteWorkFlowTask",{projectId:w,taskId:d}),e.state.Root.currentError===void 0&&(h.push({name:"workflow_tasks",params:{projectId:w}}),y.value=!1,await b())}catch($){console.error($),e.commit("error",{error:$})}i.value=!1}return(w,d)=>{var u;const $=L("router-link");return k(),j("div",Dt,[t(rt,{modelValue:y.value,"onUpdate:modelValue":d[0]||(d[0]=s=>y.value=s),content:"\u662F\u5426\u8981\u5220\u9664\u4EFB\u52A1"+((u=a(l))==null?void 0:u.name)+"?",type:"warning",loading:i.value,onConfirm:d[1]||(d[1]=s=>a(l)&&C(a(l).projectId,a(l).id))},null,8,["modelValue","content","loading"]),r("div",Rt,[t(M,{modelValue:_.value,"onUpdate:modelValue":d[2]||(d[2]=s=>_.value=s),borderless:"",dense:"",debounce:"300",placeholder:"Search"},{append:n(()=>[t(T,{name:"search"})]),_:1},8,["modelValue"]),t(S,{flat:"",dense:"",loading:a(m),icon:"refresh",onClick:b},null,8,["loading"]),t(S,{flat:"",dense:"",to:{name:"create_workflow_task"},icon:"add"}),t(S,{flat:"",dense:"",class:"tw-text-red-300 lg:tw-flex tw-hidden",icon:"delete",disable:!a(l),onClick:d[3]||(d[3]=s=>y.value=!0)},null,8,["disable"])]),r("div",Nt,[t(J,{class:"tw-h-full tw-w-full tw-px-[15px]",visible:"","thumb-style":a(X),"bar-style":a(Y)},{default:n(()=>[t(H,{class:"tw-w-full tw-flex tw-flex-col tw-gap-2 tw-pb-4"},{default:n(()=>[(k(!0),j(q,null,Z(a(c),s=>(k(),Q($,{key:s.id,to:{name:"workflow_task",params:{taskId:s.id}}},{default:n(()=>[r("div",{class:B((p(s)?"tw-bg-primary tw-text-black ":"tw-bg-[#27272a] ")+"tw-w-full tw-min-h-[130px] tw-py-3 tw-rounded-md tw-box-border tw-relative tw-overflow-hidden tw-block hover:tw-bg-primary hover:tw-text-black")},[r("div",{class:B((p(s)?"active ":"")+"task__title tw-inline-flex tw-items-center")},[t(T,{name:"numbers"}),x(" "+g(s.name),1)],2),r("div",Lt,g(s.remark||"-"),1),r("div",qt,[r("div",zt,g(a(D)(s.createTime*1e3)),1)])],2)]),_:2},1032,["to"]))),128))]),_:1}),!a(m)&&(!a(c)||a(c).length===0)?(k(),j("div",Ot,[t(T,{name:"outlet",style:{"font-size":"3rem"}}),Ut])):V("",!0)]),_:1},8,["thumb-style","bar-style"])])])}}}),Wt={class:"tw-h-full tw-w-full tw-flex tw-flex-col"},Kt=x(" \u65E5\u5E38\u5468\u671F\u6027\u5B9A\u65F6\u6267\u884C\u7684\u4EFB\u52A1 "),Gt=x(" \u6307\u5B9A\u65F6\u95F4\u8C03\u5EA6\u4E00\u6B21\u7684\u4EFB\u52A1 "),Mt=x(" \u7528\u4E8E\u4EFB\u52A1\u7F16\u6392\u7684\u5B50\u4EFB\u52A1 "),ce=R({props:{projectId:{type:Number,required:!0}},setup(v){const o=v,e=N(),m=E(()=>e.name&&!["crontab_tasks","workflow_tasks","temporary_tasks"].includes(e.name.toString())),b=E(()=>{var _;if(e.name){const c=e.name.toString();if(c.search("crontab")>=0)return"normal";if(c.search("workflow")>=0)return"workflow";if(c.search("temporary")>=0)return"temporary"}throw new Error(`Unknown route name ${(_=e.name)==null?void 0:_.toString()}`)});return(_,c)=>{const p=L("router-view");return k(),j(q,null,[r("div",{class:B("xl:tw-basis-1/5 tw-basis-1/4 tw-w-full tw-h-full tw-bg-[#1E1E1E] tw-min-w-[280px]"+(a(m)?" tw-hidden lg:tw-block":""))},[r("div",Wt,[t(ct,{"model-value":a(b),"active-color":"primary"},{default:n(()=>[t(U,{name:"crontab",label:"\u666E\u901A",to:{name:"crontab_tasks",params:{projectId:o.projectId}},replace:""},{default:n(()=>[t(O,{class:"bg-warning tw-text-black",offset:[10,10]},{default:n(()=>[Kt]),_:1})]),_:1},8,["to"]),t(U,{name:"temporary",label:"\u4E34\u65F6",to:{name:"temporary_tasks",params:{projectId:o.projectId}},replace:""},{default:n(()=>[t(O,{class:"bg-warning tw-text-black",offset:[10,10]},{default:n(()=>[Gt]),_:1})]),_:1},8,["to"]),t(U,{name:"workflow",label:"\u4EFB\u52A1\u6D41",to:{name:"workflow_tasks",params:{projectId:o.projectId}},replace:""},{default:n(()=>[t(O,{class:"bg-warning tw-text-black",offset:[10,10]},{default:n(()=>[Mt]),_:1})]),_:1},8,["to"])]),_:1},8,["model-value"]),t(dt,{"model-value":a(b),animated:"",class:"tw-w-full tw-grow"},{default:n(()=>[t(P,{name:"normal",class:"tw-p-0"},{default:n(()=>[t(yt,{"project-id":o.projectId},null,8,["project-id"])]),_:1}),t(P,{name:"temporary",class:"tw-p-0"},{default:n(()=>[t(Vt,{"project-id":o.projectId},null,8,["project-id"])]),_:1}),t(P,{name:"workflow",class:"tw-p-0"},{default:n(()=>[t(Pt,{"project-id":o.projectId},null,8,["project-id"])]),_:1})]),_:1},8,["model-value"])])],2),r("div",{class:B("xl:tw-basis-3/5 tw-basis-1/2 tw-h-full tw-w-full"+(a(m)?"":" tw-hidden lg:tw-block"))},[t(p)],2)],64)}}});export{ce as default};