import{n as E,p as k,_ as w}from"./index.47cdf61a.js";/* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               */import{d as C,e as b,c as S,u as h,aS as D,aL as c,C as Q,aE as U,aH as a,G as P,aI as o,bi as R,aN as B,bU as N,aW as $,b7 as q,bz as L,bN as T,bQ as z,bR as A,aV as H,aY as j,bc as G}from"./arco.9680cdc2.js";import{B as O,u as W}from"./index.cb070d16.js";import{u as Y}from"./loading.351b94a0.js";import{I as J}from"./IconPicker.7350328a.js";import{I as K}from"./Icon.9698649f.js";function X(e){return E.post({url:"/dashboard/workplace/saveQuick",params:e},{errorMessageMode:"message"})}function ce(e){return E.get({url:"/dashboard/workplace/get_quick",params:e},{errorMessageMode:"message"})}function fe(e){return E.delete({url:"/dashboard/workplace/del_quick",params:e},{errorMessageMode:"message"})}const Z=C({name:"QuickForm",components:{BasicModal:O,IconPicker:J,Icon:K},emits:["success"],setup(e,{emit:u}){const d=b(!1),m=b(),f={id:0,type:0,name:"",path_url:"",icon:"",weigh:0},s=b(f),[p,{setModalProps:r,closeModal:_}]=W(async n=>{var l;(l=m.value)==null||l.resetFields(),r({confirmLoading:!1}),d.value=!!(n!=null&&n.isUpdate),h(d)?s.value=k(n.record):s.value=k(f)}),g=S(()=>h(d)?"\u7F16\u8F91\u5FEB\u6377\u6309\u952E":"\u65B0\u589E\u5FEB\u6377\u6309\u952E"),{loading:F,setLoading:i}=Y();return{registerModal:p,getTitle:g,handleSubmit:async()=>{var n;try{await((n=m.value)==null?void 0:n.validate())||(i(!0),D.loading({content:"\u63D0\u4EA4\u4E2D",id:"upStatus",duration:0}),await X(s.value),D.success({content:"\u63D0\u4EA4\u6210\u529F",id:"upStatus",duration:2e3}),_(),u("success"),i(!1))}catch{i(!1),D.clear("top")}},formRef:m,loading:F,formData:s}}});const x={class:"modalbox"};function ee(e,u,d,m,f,s){const p=$,r=q,_=c("Icon"),g=c("icon-apps"),F=c("IconPicker"),i=L,v=T,n=z,l=A,y=H,V=j,M=G,I=c("BasicModal");return Q(),U(I,N(e.$attrs,{onRegister:e.registerModal,loading:e.loading,footer:!1,width:"600px",minHeight:390,title:e.getTitle}),{default:a(()=>[P("div",x,[o(M,{ref:"formRef",model:e.formData,"auto-label-width":"",style:{padding:"10px 20px"},onSubmit:e.handleSubmit},{default:a(()=>[o(r,{field:"name",label:"\u540D\u79F0","validate-trigger":"input",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u540D\u79F0"}]},{default:a(()=>[o(p,{modelValue:e.formData.name,"onUpdate:modelValue":u[0]||(u[0]=t=>e.formData.name=t),placeholder:"\u8BF7\u586B\u5199\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(r,{field:"path_url",label:"\u8DF3\u8F6C\u8DEF\u5F84","validate-trigger":"input",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8DF3\u8F6C\u8DEF\u5F84"}]},{default:a(()=>[o(p,{modelValue:e.formData.path_url,"onUpdate:modelValue":u[1]||(u[1]=t=>e.formData.path_url=t),placeholder:"\u8BF7\u586B\u8DF3\u8F6C\u8DEF\u5F84"},null,8,["modelValue"])]),_:1}),o(r,{field:"icon",label:"\u9009\u62E9\u56FE\u6807",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u9009\u62E9\u56FE\u6807"}]},{default:a(()=>[o(v,{modelValue:e.formData.icon,"onUpdate:modelValue":u[3]||(u[3]=t=>e.formData.icon=t),placeholder:"\u9009\u62E9\u56FE\u6807/\u586B\u5199","search-button":""},R({"button-icon":a(()=>[o(i,{position:"br",trigger:"click"},{content:a(()=>[o(F,{onChange:u[2]||(u[2]=t=>{e.formData.icon=t})})]),default:a(()=>[o(g,{size:23})]),_:1})]),_:2},[e.formData.icon?{name:"prefix",fn:a(()=>[o(_,{icon:e.formData.icon},null,8,["icon"])]),key:"0"}:void 0]),1032,["modelValue"])]),_:1}),o(r,{label:"\u7C7B\u578B",field:"type",style:{"margin-bottom":"10px"}},{default:a(()=>[o(l,{modelValue:e.formData.type,"onUpdate:modelValue":u[4]||(u[4]=t=>e.formData.type=t)},{default:a(()=>[o(n,{value:0},{default:a(()=>[B("\u8DF3\u8F6C\u7CFB\u7EDF")]),_:1}),o(n,{value:1},{default:a(()=>[B("\u8DF3\u8F6C\u5916\u90E8")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(r,{label:"\u6392\u5E8F",field:"weigh",style:{"margin-bottom":"15px"}},{default:a(()=>[o(y,{modelValue:e.formData.weigh,"onUpdate:modelValue":u[5]||(u[5]=t=>e.formData.weigh=t),placeholder:"\u8BF7\u586B\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),o(r,null,{default:a(()=>[o(V,{type:"primary","html-type":"submit",loading:e.loading,style:{width:"150px","margin-left":"80px","margin-top":"15px"}},{default:a(()=>[B("\u63D0\u4EA4")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","onSubmit"])])]),_:1},16,["onRegister","loading","title"])}const oe=w(Z,[["render",ee],["__scopeId","data-v-c224c494"]]),_e=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{oe as Q,_e as a,fe as d,ce as g};
