import{n as m,_ as F}from"./index.47cdf61a.js";/* empty css                *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css               */import{d as b,e as V,o as g,C,aE as D,aH as u,aN as i,aI as e,G as w,aS as _,aW as y,b7 as x,b_ as h,b$ as M,bS as U,aY as I,c4 as N,bO as S}from"./arco.9680cdc2.js";import"./chart.1da8855c.js";import"./vue.780a5d54.js";function k(s){return m.get({url:"/datacenter/configuration/get_email",params:s},{errorMessageMode:"none"})}function R(s){return m.post({url:"/datacenter/configuration/saveEmail",params:s},{errorMessageMode:"message"})}const H={class:"frombtn"},O=b({__name:"EmailConfig",setup(s){const a=V({sender_email:"",auth_code:"",mail_title:"",mail_body:"",service_host:"",service_port:""}),c=async()=>{_.loading({content:"\u4FDD\u5B58\u90AE\u7BB1\u4E2D",id:"upStatus",duration:0}),await R(a.value),_.success({content:"\u4FDD\u5B58\u90AE\u7BB1\u6210\u529F",id:"upStatus",duration:2e3})};g(()=>{p()});const p=async()=>{const r=await k({});a.value=Object.assign({},a.value,r)};return(r,l)=>{const d=y,o=x,n=h,f=M,E=U,B=I,v=N,A=S;return C(),D(A,{class:"general-card contentcard"},{title:u(()=>[i(" \u914D\u7F6E\u90AE\u7BB1 ")]),default:u(()=>[e(v,{gutter:80},{default:u(()=>[e(n,{span:12},{default:u(()=>[e(o,{label:"\u53D1\u9001\u8005\u90AE\u7BB1",field:"sender_email"},{default:u(()=>[e(d,{modelValue:a.value.sender_email,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value.sender_email=t),placeholder:"\u586B\u5199\u53D1\u9001\u8005\u90AE\u7BB1","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:u(()=>[e(o,{label:"\u90AE\u7BB1\u6388\u6743\u7801",field:"auth_code"},{default:u(()=>[e(d,{modelValue:a.value.auth_code,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value.auth_code=t),placeholder:"\u586B\u5199\u90AE\u7BB1\u6388\u6743\u7801","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:u(()=>[e(o,{label:"\u90AE\u4EF6\u670D\u52A1\u5668",field:"service_host"},{default:u(()=>[e(d,{modelValue:a.value.service_host,"onUpdate:modelValue":l[2]||(l[2]=t=>a.value.service_host=t),placeholder:"\u586B\u5199\u90AE\u4EF6\u670D\u52A1\u5668","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:12},{default:u(()=>[e(o,{label:"\u90AE\u4EF6\u670D\u52A1\u5668\u7AEF\u53E3",field:"service_port"},{default:u(()=>[e(d,{modelValue:a.value.service_port,"onUpdate:modelValue":l[3]||(l[3]=t=>a.value.service_port=t),placeholder:"\u586B\u5199\u90AE\u4EF6\u670D\u52A1\u5668\u7AEF\u53E3","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{orientation:"center",style:{width:"100%"}},{default:u(()=>[i("\u53D1\u9001\u90AE\u7BB1\u9A8C\u8BC1\u7801")]),_:1}),e(n,{span:16},{default:u(()=>[e(o,{label:"\uFF08\u9A8C\u8BC1\u7801\uFF09\u90AE\u4EF6\u6807\u9898",field:"mail_title"},{default:u(()=>[e(d,{modelValue:a.value.mail_title,"onUpdate:modelValue":l[4]||(l[4]=t=>a.value.mail_title=t),placeholder:"\u586B\u5199\u90AE\u4EF6\u6807\u9898","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:u(()=>[e(o,{label:"\uFF08\u9A8C\u8BC1\u7801\uFF09\u90AE\u4EF6\u5185\u5BB9",field:"mail_body",extra:"{code} \u4F1A\u66FF\u6362\u6210\u52A8\u6001\u9A8C\u8BC1\u7801"},{default:u(()=>[e(E,{modelValue:a.value.mail_body,"onUpdate:modelValue":l[5]||(l[5]=t=>a.value.mail_body=t),placeholder:"\u586B\u5199\u90AE\u4EF6\u5185\u5BB9","allow-clear":"","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:u(()=>[e(o,null,{default:u(()=>[w("div",H,[e(B,{type:"primary","html-type":"submit",style:{width:"120px"},onClick:c},{default:u(()=>[i("\u4FDD\u5B58")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}});const L=F(O,[["__scopeId","data-v-18b486cc"]]);export{L as default};
