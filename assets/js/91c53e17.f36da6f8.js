"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[823],{8848:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const r={id:"nutrition",title:"Nutrition API",sidebar_label:"Nutrition"},l=void 0,o={unversionedId:"nutrition",id:"nutrition",isDocsHomePage:!1,title:"Nutrition API",description:"Endpoint",source:"@site/docs/2-nutrition.md",sourceDirName:".",slug:"/nutrition",permalink:"/docs/nutrition",editUrl:"https://docs.snapcalorie.com/docs/2-nutrition.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"nutrition",title:"Nutrition API",sidebar_label:"Nutrition"},sidebar:"tutorialSidebar",previous:{title:"Analysis",permalink:"/docs/analysis"},next:{title:"Usage",permalink:"/docs/usage"}},s=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Method",id:"method",children:[]},{value:"Description",id:"description",children:[]},{value:"URL",id:"url",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Sample Request",id:"sample-request",children:[]},{value:"Sample Responses",id:"sample-responses",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Get Started",id:"get-started",children:[]}],u={toc:s},p="wrapper";function d(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/nutrition")),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The Nutrition API allows you to retrieve direct specific nutritional information for a single food item. It accepts a mandatory ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," parameter, an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"brand")," parameter, and optional ",(0,a.kt)("inlineCode",{parentName:"p"},"quantity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unit")," parameters. If ",(0,a.kt)("inlineCode",{parentName:"p"},"quantity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unit")," are not provided, the API intelligently infers the most likely defaults. The API's accuracy is grounded in our research, which has been ",(0,a.kt)("a",{parentName:"p",href:"https://openaccess.thecvf.com/content/CVPR2021/papers/Thames_Nutrition5k_Towards_Automatic_Nutritional_Understanding_of_Generic_Food_CVPR_2021_paper.pdf"},"validated in top peer-reviewed academic publications"),"."),(0,a.kt)("h3",{id:"url"},"URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://us-central1-snapcalorieb2bapi.cloudfunctions.net/nutrition\n")),(0,a.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The API key for authentication (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": The name of the food item (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"brand"),": The brand name of the food item (optional)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"quantity"),": The quantity of the food item (optional)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unit"),": The unit of the food item (optional).")),(0,a.kt)("h3",{id:"sample-request"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://us-central1-snapcalorieb2bapi.cloudfunctions.net/nutrition?key=YOUR_API_KEY&name=apple&quantity=1&unit=medium'\n")),(0,a.kt)("h3",{id:"sample-responses"},"Sample Responses"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Success Response:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": {\n    "name": "apple",\n    "nutrition_per_100g": {\n      "mass_g": 100,\n      "calories_kcal": 61,\n      "carb_g": 14.8,\n      "fat_g": 0.15,\n      "protein_g": 0.17,\n      "sugar_g": 12.1,\n      "fiber_g": 2.1,\n      "sodium_mg": 0,\n      "calcium_mg": 5,\n      "iron_mg": 0.03,\n      "cholesterol_mg": 0,\n      "saturated_fats_g": 0.028,\n      "omega_3_fatty_acids_g": 0.051,\n      "vitamin_a_mcg": 3,\n      "vitamin_c_mg": 4.6,\n      "potassium_mg": 104,\n      "source_urls": [\n        "https://fdc.nal.usda.gov/fdc-app.html#/food-details/2344711/nutrients"\n      ],\n      "percent_fruit": 1,\n      "percent_vegetable": 0\n    },\n    "alt_units": [\n      {\n        "unit": "medium",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "slice",\n        "weight_in_grams": 25\n      },\n      {\n        "unit": "large",\n        "weight_in_grams": 242\n      },\n      {\n        "unit": "extra large",\n        "weight_in_grams": 295\n      },\n      {\n        "unit": "cup",\n        "weight_in_grams": 125\n      },\n      {\n        "unit": "small",\n        "weight_in_grams": 165\n      },\n      {\n        "unit": "single serving package",\n        "weight_in_grams": 34\n      },\n      {\n        "unit": "calorie",\n        "weight_in_grams": 1.6393\n      },\n      {\n        "unit": "g",\n        "weight_in_grams": 1\n      },\n      {\n        "unit": "oz",\n        "weight_in_grams": 28.3495\n      },\n      {\n        "unit": "ml",\n        "weight_in_grams": 0.5283446328638816\n      },\n      {\n        "unit": "piece",\n        "weight_in_grams": 20\n      },\n      {\n        "unit": "unit",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "whole",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "item",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "bite",\n        "weight_in_grams": 10\n      },\n      {\n        "unit": "serving",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "wedge",\n        "weight_in_grams": 25\n      },\n      {\n        "unit": "fruit",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "sixth",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "apple",\n        "weight_in_grams": 200\n      },\n      {\n        "unit": "small portion",\n        "weight_in_grams": 165\n      }\n    ],\n    "default_portion": {\n      "quantity": 1,\n      "unit": "whole"\n    },\n    "selected_portion": {\n      "quantity": 1,\n      "unit": "medium"\n    },\n    "selected_portion_nutrition": {\n      "mass_g": 200,\n      "calories_kcal": 122,\n      "carb_g": 29.6,\n      "fat_g": 0.3,\n      "protein_g": 0.34,\n      "sugar_g": 24.2,\n      "fiber_g": 4.2,\n      "sodium_mg": 0,\n      "calcium_mg": 10,\n      "iron_mg": 0.06,\n      "cholesterol_mg": 0,\n      "saturated_fats_g": 0.056,\n      "omega_3_fatty_acids_g": 0.102,\n      "vitamin_a_mcg": 6,\n      "vitamin_c_mg": 9.2,\n      "potassium_mg": 208,\n      "source_urls": [\n        "https://fdc.nal.usda.gov/fdc-app.html#/food-details/2344711/nutrients"\n      ],\n      "percent_fruit": 1,\n      "percent_vegetable": 0\n    }\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nutritional Value Not Found or Non Food Item:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": null\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Error Response:"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/error"},"Error Responses")," for how the API will signal malformed or failed requests."),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"brand"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"quantity"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"unit")," in the sample request with actual values."),(0,a.kt)("li",{parentName:"ul"},"Ensure that requests are sent over HTTPS for security."),(0,a.kt)("li",{parentName:"ul"},"The API intelligently infers default values for ",(0,a.kt)("inlineCode",{parentName:"li"},"quantity")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"unit")," when not provided.")),(0,a.kt)("h3",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://buy.stripe.com/6oE9D780V0Di6KAdR3"},"Request an API Key")))}d.isMDXComponent=!0}}]);