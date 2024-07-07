"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[270],{4975:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const s={id:"usage",title:"Usage API",sidebar_label:"Usage"},i=void 0,l={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage API",description:"Endpoint",source:"@site/docs/8-usage.md",sourceDirName:".",slug:"/usage",permalink:"/docs/usage",editUrl:"https://docs.snapcalorie.com/docs/8-usage.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"usage",title:"Usage API",sidebar_label:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Terms",permalink:"/docs/terms"}},o=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Method",id:"method",children:[]},{value:"Description",id:"description",children:[]},{value:"URL",id:"url",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Sample Request",id:"sample-request",children:[]},{value:"Sample Responses",id:"sample-responses",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Get Started",id:"get-started",children:[]}],u={toc:o},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/usage")),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The Usage API provides information about the current API usage for a given API key. It returns the total count of requests made and the rate limit."),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://us-central1-snapcalorieb2bapi.cloudfunctions.net/usage\n")),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The API key for which the usage information is requested.")),(0,r.kt)("h3",{id:"sample-request"},"Sample Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://us-central1-snapcalorieb2bapi.cloudfunctions.net/usage?key=YOUR_API_KEY'\n")),(0,r.kt)("h3",{id:"sample-responses"},"Sample Responses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Success Response:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data":\n    {\n      "limit": 100,\n      "usage": 5\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unauthorized (API Key not provided or invalid):")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "text": "Unauthorized"\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Server Error:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 500,\n  "text": "Error processing request"\n}\n')))),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"YOUR_API_KEY")," in the sample request with your actual API key."),(0,r.kt)("li",{parentName:"ul"},"Ensure that your requests are sent over HTTPS to maintain security.")),(0,r.kt)("h3",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://buy.stripe.com/6oE9D780V0Di6KAdR3"},"Request an API Key")))}d.isMDXComponent=!0}}]);