"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[820],{5418:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(7462),i=(t(7294),t(3905));const r={id:"nutrition-label",title:"Nutrition Label API",sidebar_label:"Nutrition Label"},l=void 0,s={unversionedId:"nutrition-label",id:"nutrition-label",isDocsHomePage:!1,title:"Nutrition Label API",description:"Endpoint",source:"@site/docs/4-nutrition-label.md",sourceDirName:".",slug:"/nutrition-label",permalink:"/docs/nutrition-label",editUrl:"https://docs.snapcalorie.com/docs/4-nutrition-label.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"nutrition-label",title:"Nutrition Label API",sidebar_label:"Nutrition Label"},sidebar:"tutorialSidebar",previous:{title:"Upc",permalink:"/docs/upc"},next:{title:"Error Responses",permalink:"/docs/error"}},o=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Method",id:"method",children:[]},{value:"Description",id:"description",children:[]},{value:"URL",id:"url",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Sample Request",id:"sample-request",children:[]},{value:"Sample Responses",id:"sample-responses",children:[]},{value:"Get Started",id:"get-started",children:[]}],u={toc:o},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/nutrition-label")),(0,i.kt)("h3",{id:"method"},"Method"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The Nutrition Label API allows users to parse an image of a nutrition label into the nutrition of the item."),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://us-central1-snapcalorieb2bapi.cloudfunctions.net/upc\n")),(0,i.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": The API key for authentication (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image_url"),": URL of an image containing a nutritional label (optional)*.")),(0,i.kt)("h3",{id:"sample-request"},"Sample Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://us-central1-snapcalorieb2bapi.cloudfunctions.net/nutrition-label?key=YOUR_API_KEY&image_url=https://www.fda.gov/files/nfl-howtounderstand-honey.png'\n")),(0,i.kt)("h3",{id:"sample-responses"},"Sample Responses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Success Response:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "success": true,\n  "data": {\n    "name": "Food Name", // If present, otherwise the empty string.\n    "alt_units": [\n      {\n        "unit": "serving",\n        "weight_in_grams": 21\n      }\n    ],\n    "selected_portion": {\n      "quantity": 1,\n      "unit": "serving"\n    },\n    "selected_portion_nutrition": {\n      // If field is available and visible on nutriton label.\n      "mass_g": 21,\n      "calories_kcal": 60,\n      "carb_g": 17,\n      "fat_g": 0,\n      "protein_g": 0,\n      "sugar_g": 17,\n      "fiber_g": 0,\n      "sodium_mg": 0,\n      "vitamin_c_mg": 0,\n      "vitamin_d_iu": 0,\n      "calcium_mg": 0,\n      "iron_mg": 0,\n      "potassium_mg": 0,\n      "cholesterol_mg": 0,\n      "saturated_fats_g": 0,\n      "trans_fats_g": 0\n    },\n    "nutrition_per_100g": { // This is only returned if mass is visible on the label\n      "mass_g": 100,\n      "calories_kcal": 285.7143,\n      "carb_g": 80.9524,\n      "fat_g": 0,\n      "protein_g": 0,\n\n      // Detailed Nutrients if available on label\n      "sugar_g": 80.9524,\n      "fiber_g": 0,\n      "sodium_mg": 0,\n      "vitamin_c_mg": 0,\n      "vitamin_d_iu": 0,\n      "calcium_mg": 0,\n      "iron_mg": 0,\n      "potassium_mg": 0,\n      "cholesterol_mg": 0,\n      "saturated_fats_g": 0,\n      "trans_fats_g": 0\n    },\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Incomplete Nutrition Label or No Label in Image:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "success": false,\n  "text": "Unable to Parse Label"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Error Response:"))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/error"},"Error Responses")," for how the API will signal malformed or failed requests."),(0,i.kt)("h3",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://buy.stripe.com/6oE9D780V0Di6KAdR3"},"Request an API Key")))}d.isMDXComponent=!0}}]);