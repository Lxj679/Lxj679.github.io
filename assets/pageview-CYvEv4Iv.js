function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o,_ as n}from"./app-D9v5NdPj.js";__COMMENT_OPTIONS__;const s=Symbol(""),r=()=>o(s),i=r,a=async()=>{try{const{pageviewCount:e}=await n(()=>import("./plugin-comment-FmFgRqLi.js"),__vite__mapDeps([])),t=i();return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{a as updatePageview};
