import"./index.47cdf61a.js";/* empty css                *//* empty css                *//* empty css               */import{d as x,e as n,aL as _,C as b,aE as v,aH as r,aI as i,aN as w,aO as L,u,ba as E,bO as S,br as C}from"./arco.9680cdc2.js";import{L as f}from"./chart.1da8855c.js";import{u as k}from"./loading.351b94a0.js";import{q as D}from"./dashboard.296cf246.js";import{u as B}from"./chart-option.5890456a.js";const I=x({__name:"content-chart",setup(F){function l(t){return{type:"text",bottom:"8",...t,style:{text:"",textAlign:"center",fill:"#4E5969",fontSize:12}}}const{loading:h,setLoading:c}=k(!0),a=n([]),p=n([]),s=n([l({left:"2.6%"}),l({right:0})]),{chartOption:m}=B(()=>({grid:{left:"45",right:"0",top:"10",bottom:"30"},xAxis:{type:"category",offset:2,data:a.value,boundaryGap:!1,axisLabel:{color:"#4E5969",formatter(t,e){return e===0||e===a.value.length-1?"":`${t}`}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,interval:t=>!(t===0||t===a.value.length-1),lineStyle:{color:"#E5E8EF"}},axisPointer:{show:!0,lineStyle:{color:"#23ADFF",width:2}}},yAxis:{type:"value",axisLine:{show:!1},axisLabel:{formatter(t,e){return e===0?t:`${t}k`}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#E5E8EF"}}},tooltip:{trigger:"axis",formatter(t){const[e]=t;return`<div>
            <p class="tooltip-title">${e.axisValueLabel}</p>
            <div class="content-panel"><span>\u603B\u5185\u5BB9\u91CF</span><span class="tooltip-value">${(Number(e.value)*1e4).toLocaleString()}</span></div>
          </div>`},className:"echarts-tooltip-diy"},graphic:{elements:s.value},series:[{data:p.value,type:"line",smooth:!0,symbolSize:12,emphasis:{focus:"series",itemStyle:{borderWidth:2}},lineStyle:{width:3,color:new f(0,0,1,0,[{offset:0,color:"rgba(30, 231, 255, 1)"},{offset:.5,color:"rgba(36, 154, 255, 1)"},{offset:1,color:"rgba(111, 66, 251, 1)"}])},showSymbol:!1,areaStyle:{opacity:.8,color:new f(0,0,0,1,[{offset:0,color:"rgba(17, 126, 255, 0.16)"},{offset:1,color:"rgba(17, 128, 255, 0)"}])}}]}));return(async()=>{c(!0);try{const{data:t}=await D();t.forEach((e,o)=>{a.value.push(e.x),p.value.push(e.y),o===0&&(s.value[0].style.text=e.x),o===t.length-1&&(s.value[1].style.text=e.x)})}catch{}finally{c(!1)}})(),(t,e)=>{const o=E,d=_("Chart"),y=S,g=C;return b(),v(g,{loading:u(h),style:{width:"100%"}},{default:r(()=>[i(y,{class:"general-card","header-style":{paddingBottom:0},"body-style":{paddingTop:"20px"},title:t.$t("workplace.contentData")},{extra:r(()=>[i(o,null,{default:r(()=>[w(L(t.$t("workplace.viewMore")),1)]),_:1})]),default:r(()=>[i(d,{height:"289px",option:u(m)},null,8,["option"])]),_:1},8,["title"])]),_:1},8,["loading"])}}});export{I as _};
