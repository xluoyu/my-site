var N=Object.defineProperty,P=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var k=(e,s,l)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[s]=l,y=(e,s)=>{for(var l in s||(s={}))V.call(s,l)&&k(e,l,s[l]);if(m)for(var l of m(s))$.call(s,l)&&k(e,l,s[l]);return e},C=(e,s)=>P(e,_(s));import{G as j,d as I,R as M,P as G,S as R,o as c,c as W,a as i,g as b,W as n,u as t,j as r,w as u,k as h,aj as v,X as S,e as E,Y as B,ag as X,a0 as Y}from"./index.a0744ede.js";const q=j({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:["large","default","small"]},effect:{type:String,values:["dark","light","plain"],default:"light"}}),A={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},D={name:"ElTag"},F=I(C(y({},D),{props:q,emits:A,setup(e,{emit:s}){const l=e,z=M(),o=G("tag"),p=R(()=>{const{type:a,hit:g,effect:T,closable:w}=l;return[o.b(),o.is("closable",w),o.m(a),o.m(z.value),o.m(T),o.is("hit",g)]}),d=a=>{a.stopPropagation(),s("close",a)},f=a=>{s("click",a)};return(a,g)=>a.disableTransitions?(c(),r(X,{key:1,name:`${t(o).namespace.value}-zoom-in-center`},{default:u(()=>[i("span",{class:n(t(p)),style:B({backgroundColor:a.color}),onClick:f},[i("span",{class:n(t(o).e("content"))},[b(a.$slots,"default")],2),a.closable?(c(),r(t(S),{key:0,class:n(t(o).e("close")),onClick:d},{default:u(()=>[h(t(v))]),_:1},8,["class"])):E("v-if",!0)],6)]),_:3},8,["name"])):(c(),W("span",{key:0,class:n(t(p)),style:B({backgroundColor:a.color}),onClick:f},[i("span",{class:n(t(o).e("content"))},[b(a.$slots,"default")],2),a.closable?(c(),r(t(S),{key:0,class:n(t(o).e("close")),onClick:d},{default:u(()=>[h(t(v))]),_:1},8,["class"])):E("v-if",!0)],6))}})),K=Y(F);export{K as E};
