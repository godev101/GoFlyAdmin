import{e as u}from"./arco.f2539126.js";import{u as i}from"./loading.0b400085.js";function m(o,s=[],n=!0){const{loading:t,setLoading:r}=i(n),e=u(s);return o().then(a=>{e.value=a}).finally(()=>{r(!1)}),{loading:t,response:e}}export{m as u};
