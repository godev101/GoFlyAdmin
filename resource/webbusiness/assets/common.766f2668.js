import{n as o}from"./index.d9e4049f.js";const r=window==null?void 0:window.globalConfig.Upload_url;function t(e,a){return o.uploadFile({url:`${r}/upload/image`,onUploadProgress:a},e)}function s(e){return o.post({url:`${r}/table/weigh`,params:e},{errorMessageMode:"message",isRootUrl:!1})}export{s as t,t as u};
