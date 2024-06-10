"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[639],{3606:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(7462),a=(t(7294),t(3905));const r={id:"analysis",title:"Analysis API",sidebar_label:"Analysis"},s=void 0,o={unversionedId:"analysis",id:"analysis",isDocsHomePage:!1,title:"Analysis API",description:"Endpoint",source:"@site/docs/1-analysis.md",sourceDirName:".",slug:"/analysis",permalink:"/docs/analysis",editUrl:"https://docs.snapcalorie.com/docs/1-analysis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"analysis",title:"Analysis API",sidebar_label:"Analysis"},sidebar:"tutorialSidebar",next:{title:"Nutrition",permalink:"/docs/nutrition"}},l=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Method",id:"method",children:[]},{value:"Description",id:"description",children:[]},{value:"URL",id:"url",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Sample Request",id:"sample-request",children:[]},{value:"Sample Responses",id:"sample-responses",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Get Started",id:"get-started",children:[]}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/analysis")),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The Analysis API performs an analysis of food items from a provided description and/or an image URL. It uses SnapCalorie's proprietary model to interpret the input and returns a JSON representation of identified foods and their quantities with corresponding nutrition. Read about ",(0,a.kt)("a",{parentName:"p",href:"https://openaccess.thecvf.com/content/CVPR2021/papers/Thames_Nutrition5k_Towards_Automatic_Nutritional_Understanding_of_Generic_Food_CVPR_2021_paper.pdf"},"our prior research")," where our team achieved twice the accuracy on nutrition from an image compared to professional nutritionists."),(0,a.kt)("h3",{id:"url"},"URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://us-central1-snapcalorieb2bapi.cloudfunctions.net/analysis\n")),(0,a.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The API key for authentication (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description"),": Free text description of food items (optional)*."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"image_url"),": URL of an image containing food items (optional)*.")),(0,a.kt)("p",null,"*At least one of ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"image_url")," must be present."),(0,a.kt)("h3",{id:"sample-request"},"Sample Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://us-central1-snapcalorieb2bapi.cloudfunctions.net/analysis?key=YOUR_API_KEY&description=YOUR_DESCRIPTION&image_url=YOUR_IMAGE_URL'\n")),(0,a.kt)("h3",{id:"sample-responses"},"Sample Responses"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Success Response:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": [\n    {\n      "name": "big mac",\n      "brand": "McDonald\'s",\n      "nutrition_per_100g": {\n        // Guaranteed fields\n        "mass_g": 100,\n        "calories_kcal": 225,\n        "carb_g": 18.75,\n        "fat_g": 11.6667,\n        "protein_g": 10.4167,\n\n        // Detailed Nutrients, if available\n        // All possible fields are shown here, but if a nutrient is not availble,\n        // it will not be present in the response.\n        // Vitamins\n        "b1_mg": ,\n        "b2_mg": ,\n        "b3_mg": ,\n        "b5_mg": ,\n        "b6_mg": ,\n        "b12_mcg": ,\n        "folate_mcg": ,\n        "vitamin_a_mcg": ,\n        "vitamin_c_mg": ,\n        "vitamin_d_iu": 0,\n        "vitamin_e_mg": ,\n        "vitamin_k_mcg": ,\n\n        // Minerals\n        "calcium_mg": 0,\n        "copper_mg": ,\n        "iron_mg": 1.8,\n        "magnesium_mg": ,\n        "manganese_mg": ,\n        "phosphorus_mg": ,\n        "potassium_mg": 150,\n        "selenium_mcg": ,\n        "sodium_mg": 420,\n        "zinc_mg": ,\n\n        // Carbohydrates\n        "fiber_g": 1.2,\n        "starch_g": ,\n        "sugar_g": 3.5,\n\n        // Lipids aka Fats\n        "monounsaturated_g": ,\n        "polyunsaturated_g": ,\n        "omega_3_fatty_acids_g": ,\n        "omega_6_fatty_acids_g": ,\n        "saturated_fats_g": 3,\n        "trans_fats_g": 0.4,\n        "cholesterol_mg": 35,\n\n        // Proteins\n        "cystine_g": ,\n        "histidine_g": ,\n        "isoleucine_g": ,\n        "leucine_g": ,\n        "lysine_g": ,\n        "methionine_g": ,\n        "phenylalanine_g": ,\n        "threonine_g": ,\n        "tryptophan_g": ,\n        "tyrosine_g": ,\n        "valine_g": ,\n\n        // Other Details\n        "percent_fruit": 0, // Portion of item that is fruit from 0-1\n        "percent_vegetable": 0.05,  // Portion of item that is vegetable from 0-1\n        "source_urls": ["https://www.mcdonalds.com/us/en-us/product/big-mac.html"],\n      },\n      "alt_units": [\n        {\n          "unit": "serving",\n          "weight_in_grams": 240\n        },\n        {\n          "unit": "g",\n          "weight_in_grams": 1\n        },\n        {\n          "unit": "sandwich",\n          "weight_in_grams": 240\n        },\n        {\n          "unit": "calorie",\n          "weight_in_grams": 0.4444\n        },\n      ],\n      "default_portion": {\n        "quantity": 1,\n        "unit": "sandwich"\n      },\n      "selected_portion": {\n        "quantity": 1,\n        "unit": "sandwich"\n      },\n      "selected_portion_nutrition": {\n        "mass_g": 240,\n        "calories_kcal": 540,\n        "carb_g": 45,\n        "fat_g": 28.0001,\n        "protein_g": 25.0001,\n\n        // Detailed Nutrients, if available\n        // Same fields as above in nutrition_per_100_g\n        // "b1_mg": ,\n        // "b2_mg": ,\n        // ...\n      }\n    }\n  ]\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Error Response:")))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/error"},"Error Responses")," for how the API will signal malformed or failed requests."),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"YOUR_API_KEY"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"YOUR_DESCRIPTION"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"YOUR_IMAGE_URL")," with your actual values."),(0,a.kt)("li",{parentName:"ul"},"Ensure that your requests are sent over HTTPS to maintain security."),(0,a.kt)("li",{parentName:"ul"},"The response format is JSON, providing a list of identified food items and their details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"brand")," is an optional field that is only set if relevant to the query.")),(0,a.kt)("h3",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://buy.stripe.com/6oE9D780V0Di6KAdR3"},"Request an API Key")))}u.isMDXComponent=!0}}]);