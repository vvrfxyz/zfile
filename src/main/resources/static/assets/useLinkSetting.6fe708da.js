import{l as u,c as i}from"./admin-setting.e0cb8a5b.js";import{az as e}from"./index.e67223f6.js";import{E as d}from"./request.4e49ca07.js";function f(){const{data:a,loading:t,reload:s}=e(u,{formatResult:r=>r.data}),{loading:o,run:n}=e(i,{manual:!0,onSuccess(){d({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:a,dataLoading:t,reload:s,saveData:()=>{n(a.value)},saveLoading:o}}export{f as u};