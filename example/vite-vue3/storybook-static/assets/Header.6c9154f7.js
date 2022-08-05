import{_ as u,M as p}from"./Button.a923eca6.js";import{e as m,f as l,t as g,g as n,a as i,i as v,j as c,b as h,o}from"./vue.esm-bundler.9921587c.js";const d={name:"my-header",components:{MyButton:p},props:{user:{type:Object}},emits:["login","logout","createAccount"]},y={class:"wrapper"},_=v('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1),f={key:0,class:"welcome"},k=c("Welcome, "),b=c("!");function w(s,e,t,z,A,B){const a=h("my-button");return o(),m("header",null,[l("div",y,[_,l("div",null,[t.user?(o(),m("span",f,[k,l("b",null,g(t.user.name),1),b])):n("",!0),t.user?(o(),i(a,{key:1,size:"small",onClick:e[0]||(e[0]=r=>s.$emit("logout")),label:"Log out"})):n("",!0),t.user?n("",!0):(o(),i(a,{key:2,size:"small",onClick:e[1]||(e[1]=r=>s.$emit("login")),label:"Log in"})),t.user?n("",!0):(o(),i(a,{key:3,primary:"",size:"small",onClick:e[2]||(e[2]=r=>s.$emit("createAccount")),label:"Sign up"}))])])])}const N=u(d,[["render",w]]);d.__docgenInfo={displayName:"my-header",exportName:"default",description:"",tags:{},props:[{name:"user",type:{name:"object"}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}]};export{N as M};
//# sourceMappingURL=Header.6c9154f7.js.map
