import{_ as a,o as t,c as s,d as l,aw as d,F as u,i as p,a as i,t as m,u as f,k as r,w as h}from"./index.b24a3757.js";import{E as v}from"./el-scrollbar.be1ad6af.js";import{G as x}from"./request.47c6ba7d.js";const y={},$={class:"w-1/8 border-r border-gray-500 border-opacity-20"};function g(c,e){return t(),s("aside",$," \u5DE6\u4FA7\u83DC\u5355\u680F ")}var b=a(y,[["render",g]]);const w={},k={class:"h-$control-h ring-1 ring-opacity-50 ring-gray-500 flex-shrink-0"};function C(c,e){return t(),s("div",k," \u63A7\u5236\u53F0 ")}var A=a(w,[["render",C]]);function B(){return x({url:"/music/getPlaylist"})}const E={class:"recommend"},G=["src"],L={class:"mt-2 text-sm text-justify"},F=l({async setup(c){let e,_;const{data:o}=([e,_]=d(()=>B()),e=await e,_(),e);return(j,D)=>(t(),s("div",E,[(t(!0),s(u,null,p(f(o),n=>(t(),s("div",{key:n.id,class:"cursor-pointer"},[i("img",{src:n.picUrl,alt:""},null,8,G),i("p",L,m(n.name),1)]))),128))]))}});var I=a(F,[["__scopeId","data-v-6026115b"]]);const N={class:"flex-1"},P=l({setup(c){return(e,_)=>{const o=v;return t(),s("div",N,[r(o,null,{default:h(()=>[r(I)]),_:1})])}}});const R={id:"app-music",class:"h-full text-$theme-color flex flex-col"},S={class:"flex h-[calc(100%-var(--control-h))]"},V=l({setup(c){return(e,_)=>(t(),s("div",R,[i("div",S,[r(b),r(P)]),r(A)]))}});var z=a(V,[["__scopeId","data-v-1c40e949"]]);export{z as default};
