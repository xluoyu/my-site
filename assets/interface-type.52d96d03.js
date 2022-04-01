import{_ as o}from"./Post.0e554ea7.js";import{o as c,j as p,w as l,a as n,b as s}from"./index.2814a219.js";const k=n("div",{class:"markdown-body"},[n("h2",null,"interface VS type"),n("h3",null,"\u76F8\u540C\u70B9"),n("ol",null,[n("li",null,"\u90FD\u53EF\u4EE5\u7528\u6765\u63CF\u8FF0\u4E00\u4E2A\u5BF9\u8C61\u6216\u51FD\u6570")]),n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// interface"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"User"),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"SetUser"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// type"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"interface")]),s(" User "),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
  age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"SetUser"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),s(`
`)])]),n("ol",{start:"2"},[n("li",null,"\u90FD\u5141\u8BB8\u62D3\u5C55(extends)")]),n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// interface"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Name"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"User"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Name"),n("span",{class:"token punctuation"},"{"),s(`
  age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// type"),s(`
`),n("span",{class:"token class-name"},[n("span",{class:"token keyword"},"interface")]),s(" Name "),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"User"),s(),n("span",{class:"token operator"},"="),s(" Name "),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token punctuation"},"{"),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// interface extends type"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Name"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"User"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Name"),s(),n("span",{class:"token punctuation"},"{"),s(`
  age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// type extends interface"),s(`
`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Name"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"User"),s(),n("span",{class:"token operator"},"="),s(" Name "),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token punctuation"},"{"),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("h3",null,"\u4E0D\u540C\u70B9"),n("ol",null,[n("li",null,"type\u80FD\u505A\u5230\u7684")]),n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"myString"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token comment"},"// \u58F0\u660E\u57FA\u7840\u7C7B\u578B\u522B\u540D"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"Pet"),s(),n("span",{class:"token operator"},"="),s(" Dog "),n("span",{class:"token operator"},"|"),s(" Cat "),n("span",{class:"token comment"},"// \u8054\u5408\u7C7B\u578B"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"myType"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"typeof"),s(" User "),n("span",{class:"token comment"},"// typeof \u64CD\u4F5C\u7B26\u5B9A\u4E49\u7C7B\u578B"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"Pet"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("Dog"),n("span",{class:"token punctuation"},","),s(" Cat"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token comment"},"// \u5143\u7EC4\u7C7B\u578B"),s(`
`)])]),n("ol",{start:"2"},[n("li",null,"interface\u80FD\u505A\u5230\u7684")]),n("pre",{class:"language-ts"},[n("code",{class:"language-ts"},[n("span",{class:"token comment"},"// \u5408\u5E76\u91CD\u590D\u58F0\u660E"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"User"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"User"),s(),n("span",{class:"token punctuation"},"{"),s(`
  age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" user1"),n("span",{class:"token operator"},":"),s(" User"),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5C0F\u660E'"),n("span",{class:"token punctuation"},","),s(`
  age`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),y="test-my",d="\u4E00\u53EA\u6B7B\u5154\u5B50",b="2022-03-22 09:52",f=["\u5176\u4ED6"],w=!1,_={setup(r,{expose:e}){const a={title:"test-my",author:"\u4E00\u53EA\u6B7B\u5154\u5B50",createTime:"2022-03-22 09:52",tags:["\u5176\u4ED6"],online:!1};return e({frontmatter:a}),(u,i)=>{const t=o;return c(),p(t,{frontmatter:a},{default:l(()=>[k]),_:1})}}};export{d as author,b as createTime,_ as default,w as online,f as tags,y as title};
