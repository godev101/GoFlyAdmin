import{n as v,p as V,_ as H}from"./index.d9e4049f.js";/* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css                */import{d as C,e as d,c as S,u as h,aS as w,aL as R,C as k,aE as U,aH as o,G as p,F as y,aI as t,bU as $,aW as A,b7 as I,b_ as L,aV as O,bR as P,bS as T,c4 as z,bW as N,bc as j}from"./arco.9680cdc2.js";import{B as q,u as G}from"./index.67381c52.js";import{u as W}from"./loading.351b94a0.js";function de(e){return v.get({url:"/datacenter/tabledata/get_list",params:e},{errorMessageMode:"none"})}function Y(e){return v.post({url:"/datacenter/tabledata/save",params:e},{errorMessageMode:"message"})}function ie(e){return v.delete({url:"/datacenter/tabledata/del",params:e},{errorMessageMode:"message"})}const J=C({name:"AddMenu",components:{BasicModal:q},emits:["success"],setup(e,{emit:l}){const i=d(!1),D=d(350),g=d(350),{loading:F,setLoading:n}=W(),s=d(),u={id:0,title:"",tablename:"",remark:"",status:0,weigh:1},r=d(u),[f,{setModalProps:c,closeModal:_}]=G(async a=>{var m;(m=s.value)==null||m.resetFields(),n(!0),c({confirmLoading:!1}),i.value=!!(a!=null&&a.isUpdate),h(i)?r.value=V(a.record):r.value=u,n(!1)}),b=S(()=>h(i)?"\u7F16\u8F91\u6570\u636E":"\u65B0\u589E\u6570\u636E");return{registerModal:f,getTitle:b,handleSubmit:async()=>{var a;try{if(!await((a=s.value)==null?void 0:a.validate())){n(!0),w.loading({content:"\u63D0\u4EA4\u4E2D",id:"upStatus"});let E=V(h(r));await Y(E),w.success({content:"\u63D0\u4EA4\u6210\u529F",id:"upStatus"}),_(),l("success"),n(!1)}}catch{n(!1),w.clear("top")}},formRef:s,loading:F,formData:r,OYoptions:[{label:"\u6B63\u5E38",value:0},{label:"\u7981\u7528",value:1}],modelHeight:D,onHeightChange:a=>{g.value=a},windHeight:g}}});const K={class:"tabs-content"},Q={class:"content_box"},X={class:"besecontent"};function Z(e,l,i,D,g,F){const n=A,s=I,u=L,r=O,f=P,c=T,_=z,b=N,M=j,B=R("BasicModal");return k(),U(B,$(e.$attrs,{onRegister:e.registerModal,isPadding:!1,loading:e.loading,width:"800px",onHeightChange:e.onHeightChange,minHeight:e.modelHeight,title:e.getTitle,onOk:e.handleSubmit}),{default:o(()=>[p("div",{class:"addFormbox",style:y({"min-height":`${e.windHeight}px`})},[p("div",K,[t(M,{ref:"formRef",model:e.formData,"auto-label-width":""},{default:o(()=>[p("div",Q,[t(b,{style:y([{overflow:"auto"},{height:`${e.windHeight}px`}])},{default:o(()=>[p("div",X,[t(_,{gutter:16},{default:o(()=>[t(u,{span:16},{default:o(()=>[t(s,{field:"title",label:"\u540D\u79F0","validate-trigger":"input",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u540D\u79F0"}]},{default:o(()=>[t(n,{modelValue:e.formData.title,"onUpdate:modelValue":l[0]||(l[0]=a=>e.formData.title=a),placeholder:"\u8BF7\u586B\u540D\u79F0","max-length":50,"allow-clear":"","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1}),t(u,{span:16},{default:o(()=>[t(s,{field:"tablename",label:"\u6570\u636E\u8868\u540D\u79F0","validate-trigger":"input",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u540D\u79F0"}]},{default:o(()=>[t(n,{modelValue:e.formData.tablename,"onUpdate:modelValue":l[1]||(l[1]=a=>e.formData.tablename=a),placeholder:"\u6570\u636E\u8868\u540D\u79F0","max-length":50,"allow-clear":"","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1}),t(u,{span:12},{default:o(()=>[t(s,{field:"weigh",label:"\u6392\u5E8F","validate-trigger":"input",style:{"margin-bottom":"15px"}},{default:o(()=>[t(r,{modelValue:e.formData.weigh,"onUpdate:modelValue":l[2]||(l[2]=a=>e.formData.weigh=a),placeholder:"\u8BF7\u586B\u6392\u5E8F"},null,8,["modelValue"])]),_:1})]),_:1}),t(u,{span:12},{default:o(()=>[t(s,{field:"status",label:"\u72B6\u6001",style:{"margin-bottom":"5px"}},{default:o(()=>[t(f,{modelValue:e.formData.status,"onUpdate:modelValue":l[3]||(l[3]=a=>e.formData.status=a),options:e.OYoptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(u,{span:24},{default:o(()=>[t(s,{field:"remark",label:"\u5907\u6CE8",style:{"margin-bottom":"15px"}},{default:o(()=>[t(c,{modelValue:e.formData.remark,"onUpdate:modelValue":l[4]||(l[4]=a=>e.formData.remark=a),placeholder:"\u8BF7\u586B\u5907\u6CE8","max-length":200,"allow-clear":"","show-word-limit":"","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])]),_:1},8,["style"])])]),_:1},8,["model"])])],4)]),_:1},16,["onRegister","loading","onHeightChange","minHeight","title","onOk"])}const x=H(J,[["render",Z],["__scopeId","data-v-7d05d4e8"]]),me=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{x as A,me as a,ie as d,de as g};
