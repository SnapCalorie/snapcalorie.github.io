"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[823],{8848:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"nutrition",title:"Nutrition API",sidebar_label:"Nutrition"},l=void 0,o={unversionedId:"nutrition",id:"nutrition",isDocsHomePage:!1,title:"Nutrition API",description:"Endpoint",source:"@site/docs/2-nutrition.md",sourceDirName:".",slug:"/nutrition",permalink:"/docs/nutrition",editUrl:"https://docs.snapcalorie.com/docs/2-nutrition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"nutrition",title:"Nutrition API",sidebar_label:"Nutrition"},sidebar:"tutorialSidebar",previous:{title:"Analysis",permalink:"/docs/analysis"},next:{title:"Usage",permalink:"/docs/usage"}},s=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Method",id:"method",children:[]},{value:"Description",id:"description",children:[]},{value:"URL",id:"url",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Sample Request",id:"sample-request",children:[]},{value:"Sample Responses",id:"sample-responses",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Get Started",id:"get-started",children:[]}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/nutrition")),(0,i.kt)("h3",{id:"method"},"Method"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The Nutrition API allows you to retrieve direct specific nutritional information for a single food item. It accepts a mandatory ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter, an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"brand")," parameter, and optional ",(0,i.kt)("inlineCode",{parentName:"p"},"quantity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," parameters. If ",(0,i.kt)("inlineCode",{parentName:"p"},"quantity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," are not provided, the API intelligently infers the most likely defaults. The API's accuracy is grounded in our research, which has been ",(0,i.kt)("a",{parentName:"p",href:"https://openaccess.thecvf.com/content/CVPR2021/papers/Thames_Nutrition5k_Towards_Automatic_Nutritional_Understanding_of_Generic_Food_CVPR_2021_paper.pdf"},"validated in top peer-reviewed academic publications"),"."),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://us-central1-snapcalorieb2bapi.cloudfunctions.net/nutrition\n")),(0,i.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": The API key for authentication (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": The name of the food item (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"brand"),": The brand name of the food item (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quantity"),": The quantity of the food item (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unit"),": The unit of the food item (optional).")),(0,i.kt)("h3",{id:"sample-request"},"Sample Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://us-central1-snapcalorieb2bapi.cloudfunctions.net/nutrition?key=YOUR_API_KEY&name=apple&quantity=1&unit=medium'\n")),(0,i.kt)("h3",{id:"sample-responses"},"Sample Responses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Success Response:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": \n    {\n      "name": "apple",\n      "quantity": 1,\n      "unit": "medium",\n      "nutritional_values": {\n        "calories_kcal": 95,\n        "carb_g": 25,\n        "fiber_g": 4,\n        "sugar_g": 19,\n        "fat_g": 0.3,\n        "protein_g": 0.5,\n        "sodium_mg": 2,\n        "mass_g": 182,\n        "vitamin_a_mcg": 5.5,\n        "vitamin_c_mg": 8.4,\n        "vitamin_d_iu": 0,\n        "calcium_mg": 11,\n        "iron_mg": 0.2,\n        "potassium_mg": 195,\n        "cholesterol_mg": 0,\n        "saturated_fats_g": 0.05,\n        "trans_fats_g": 0,\n        "omega_3_fatty_acids_g": 0.01\n      }\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nutritional Value Not Found or Non Food Item:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": \n    {}\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Error Response:"))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/error"},"Error Responses")," for how the API will signal malformed or failed requests."),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"brand"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"quantity"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"unit")," in the sample request with actual values."),(0,i.kt)("li",{parentName:"ul"},"Ensure that requests are sent over HTTPS for security."),(0,i.kt)("li",{parentName:"ul"},"The API intelligently infers default values for ",(0,i.kt)("inlineCode",{parentName:"li"},"quantity")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"unit")," when not provided.")),(0,i.kt)("h3",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://buy.stripe.com/6oE9D780V0Di6KAdR3"},"Request an API Key")))}p.isMDXComponent=!0}}]);