import{n as f,W as q,u as O,p as T,_ as $}from"./index.47cdf61a.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css               */import{d as j,e as F,c as N,u as v,aS as k,aL as U,C as h,aE as H,aH as o,aI as a,G as D,D as L,bU as W,E as z,aW as G,b7 as Y,b_ as J,cc as K,bS as Q,c9 as X,c4 as Z,bc as x}from"./arco.9680cdc2.js";import{B as ee,u as ae}from"./index.cb070d16.js";import{u as oe}from"./loading.351b94a0.js";import{g as te}from"./dept.037f3605.js";import{I as le}from"./IconPicker.7350328a.js";import{I as ue}from"./Icon.9698649f.js";import{u as se}from"./common.d0048664.js";function Te(e){return f.get({url:"/system/account/get_list",params:e},{errorMessageMode:"none"})}function re(){return f.get({url:"/system/account/get_role"},{errorMessageMode:"none"})}function ne(e){return e.password&&(e=Object.assign({},e,{password:q.exports(e.password)})),f.post({url:"/system/account/save",params:e},{errorMessageMode:"message"})}function de(e){return f.post({url:"/system/account/isaccountexist",params:e},{errorMessageMode:"message",isTransformResponse:!1})}function $e(e){return f.post({url:"/system/account/upStatus",params:e},{errorMessageMode:"message"})}function je(e){return f.delete({url:"/system/account/del",params:e},{errorMessageMode:"message"})}const me=j({name:"AddBook",components:{BasicModal:ee,IconPicker:le,Icon:ue},emits:["success"],setup(e,{emit:t}){const{t:S}=O(),c=F(!1),y=F([]),V=F([]),r=F(),s={id:0,name:"",nickname:"",dept_id:0,roleid:[],username:"",password:"",avatar:"",tel:"",mobile:"",email:"",address:"",city:"",remark:"",company:""},u=F(s),[E,{setModalProps:C,closeModal:w}]=ae(async n=>{var p;(p=r.value)==null||p.resetFields(),C({confirmLoading:!1});const d=await re();d?y.value=d:y.value=[];const b=await te(),m=[{id:0,name:"\u672A\u9009\u90E8\u95E8",pid:0}];b?V.value=m.concat(b):V.value=m,c.value=!!(n!=null&&n.isUpdate),v(c)?u.value=T(n.record):u.value=s}),A=N(()=>v(c)?"\u7F16\u8F91\u7BA1\u7406\u8D26\u53F7":"\u65B0\u589E\u7BA1\u7406\u8D26\u53F7"),{loading:M,setLoading:g}=oe();return{registerModal:E,getTitle:A,handleSubmit:async()=>{var n;try{await((n=r.value)==null?void 0:n.validate())||(g(!0),!v(c)&&u.value.password==""&&(u.value.password="123456"),k.loading({content:"\u66F4\u65B0\u4E2D",id:"upStatus"}),await ne(v(u)),k.success({content:"\u66F4\u65B0\u6210\u529F",id:"upStatus"}),w(),t("success"),g(!1))}catch{g(!1),k.clear("top")}},formRef:r,loading:M,formData:u,roleList:y,deptList:V,t:S,OYoptions:[{label:"\u5426",value:0},{label:"\u662F",value:1}],onChange:n=>{console.log("fileList",n)},customRequest:n=>{const d=new AbortController;return async function(){const{onProgress:m,onError:p,onSuccess:Ve,fileItem:_}=n;m(20);const P=i=>{let B;i.total>0&&(B=i.loaded/i.total*100),m(parseInt(String(B),10),i)};try{const i=(_==null?void 0:_.name)||"",B=await se({name:"file",file:_.file,filename:i,data:{cid:0}},P);B&&(u.value.avatar=B.url)}catch(i){p(i)}}(),{abort(){d.abort()}}},usernameRules:[{validator:(n,d)=>new Promise(async b=>{if(!n)d("\u8BF7\u586B\u5199\u767B\u5F55\u8D26\u53F7");else{let m={username:n};u.value.id>0&&(m=Object.assign({},m,{id:u.value.id}));const p=await de(m);p.code==1&&d(p.message)}b(!0)})}]}}}),ie={class:z("arco-upload-list-item")},pe={key:0,class:"arco-upload-list-picture custom-upload-avatar"},fe=["src"],ce={class:"arco-upload-list-picture-mask"},ge={key:1,class:"arco-upload-picture-card"},be={class:"arco-upload-picture-card-text"},Be=D("div",{style:{"margin-top":"10px","font-weight":"600"}},"\u4E0A\u4F20\u5934\u50CF",-1);function Fe(e,t,S,c,y,V){const r=G,s=Y,u=J,E=K,C=Q,w=U("IconEdit"),A=U("IconPlus"),M=X,g=Z,I=x,R=U("BasicModal");return h(),H(R,W(e.$attrs,{onRegister:e.registerModal,loading:e.loading,helpMessage:"\u7F16\u8F91\u548C\u4FEE\u6539\u83DC\u5355",width:"800px",minHeight:420,title:e.getTitle,onOk:e.handleSubmit}),{default:o(()=>[a(I,{ref:"formRef",model:e.formData,"auto-label-width":""},{default:o(()=>[a(g,{gutter:16},{default:o(()=>[a(u,{span:12},{default:o(()=>[a(s,{field:"name",label:"\u7528\u6237\u540D","validate-trigger":"input",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}],style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.formData.name=l),placeholder:"\u8BF7\u586B\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"nickname",label:"\u6635\u79F0","validate-trigger":"input",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.nickname,"onUpdate:modelValue":t[1]||(t[1]=l=>e.formData.nickname=l),placeholder:"\u8BF7\u586B\u5199\u6635\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{label:"\u9009\u62E9\u89D2\u8272",field:"pid",style:{"margin-bottom":"15px"}},{default:o(()=>[a(E,{placeholder:"\u9009\u62E9\u89D2\u8272",data:e.roleList,fieldNames:{key:"id",title:"name",children:"children"},multiple:"",modelValue:e.formData.roleid,"onUpdate:modelValue":t[2]||(t[2]=l=>e.formData.roleid=l)},null,8,["data","modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"dept_id",label:"\u9009\u62E9\u90E8\u95E8",style:{"margin-bottom":"15px"}},{default:o(()=>[a(E,{placeholder:"\u9009\u62E9\u90E8\u95E8",data:e.deptList,fieldNames:{key:"id",title:"name",children:"children"},modelValue:e.formData.dept_id,"onUpdate:modelValue":t[3]||(t[3]=l=>e.formData.dept_id=l)},null,8,["data","modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"username",label:"\u767B\u5F55\u8D26\u53F7",style:{"margin-bottom":"15px"},rules:e.usernameRules,"validate-trigger":["change","blur"]},{default:o(()=>[a(r,{modelValue:e.formData.username,"onUpdate:modelValue":t[4]||(t[4]=l=>e.formData.username=l),placeholder:"\u8BF7\u586B\u767B\u5F55\u8D26\u53F7"},null,8,["modelValue"])]),_:1},8,["rules"])]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"password",label:"\u767B\u5F55\u5BC6\u7801",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.password,"onUpdate:modelValue":t[5]||(t[5]=l=>e.formData.password=l),placeholder:"\u767B\u5F55\u5BC6\u7801(\u4E0D\u4FEE\u6539\u5219\u4E3A\u7A7A\uFF0C\u9ED8\u8BA4\u5BC6\u7801123456)"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"mobile",label:"\u624B\u673A\u53F7\u7801",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.mobile,"onUpdate:modelValue":t[6]||(t[6]=l=>e.formData.mobile=l),placeholder:"\u8BF7\u586B\u624B\u673A\u53F7\u7801"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"tel",label:"\u5EA7\u673A",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.tel,"onUpdate:modelValue":t[7]||(t[7]=l=>e.formData.tel=l),placeholder:"\u8BF7\u586B\u5EA7\u673A"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"email",label:"\u90AE\u7BB1",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.email,"onUpdate:modelValue":t[8]||(t[8]=l=>e.formData.email=l),placeholder:"\u8BF7\u586B\u90AE\u7BB1"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"address",label:"\u5730\u5740",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.address,"onUpdate:modelValue":t[9]||(t[9]=l=>e.formData.address=l),placeholder:"\u8BF7\u586B\u5730\u5740"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"city",label:"\u57CE\u5E02",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.city,"onUpdate:modelValue":t[10]||(t[10]=l=>e.formData.city=l),placeholder:"\u8BF7\u586B\u57CE\u5E02"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"company",label:"\u516C\u53F8",style:{"margin-bottom":"15px"}},{default:o(()=>[a(r,{modelValue:e.formData.company,"onUpdate:modelValue":t[11]||(t[11]=l=>e.formData.company=l),placeholder:"\u8BF7\u586B\u516C\u53F8"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"remark",label:"\u5907\u6CE8",style:{"margin-bottom":"15px"}},{default:o(()=>[a(C,{modelValue:e.formData.remark,"onUpdate:modelValue":t[12]||(t[12]=l=>e.formData.remark=l),placeholder:"\u8BF7\u586B\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1}),a(u,{span:12},{default:o(()=>[a(s,{field:"avatar",label:"\u5934\u50CF",style:{"margin-bottom":"15px"}},{default:o(()=>[a(M,{action:"/","show-file-list":!1,onChange:e.onChange,"custom-request":e.customRequest},{"upload-button":o(()=>[D("div",ie,[e.formData.avatar?(h(),L("div",pe,[D("img",{src:e.formData.avatar},null,8,fe),D("div",ce,[a(w)])])):(h(),L("div",ge,[D("div",be,[a(A),Be])]))])]),_:1},8,["onChange","custom-request"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},16,["onRegister","loading","title","onOk"])}const De=$(me,[["render",Fe]]),Ne=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{De as A,Ne as a,je as d,Te as g,$e as u};
