"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[376],{8078:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const r={id:"upc",title:"UPC API",sidebar_label:"Upc"},s=void 0,o={unversionedId:"upc",id:"upc",isDocsHomePage:!1,title:"UPC API",description:"Endpoint",source:"@site/docs/3-upc.md",sourceDirName:".",slug:"/upc",permalink:"/docs/upc",editUrl:"https://docs.snapcalorie.com/docs/3-upc.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"upc",title:"UPC API",sidebar_label:"Upc"},sidebar:"tutorialSidebar",previous:{title:"Nutrition",permalink:"/docs/nutrition"},next:{title:"Error Responses",permalink:"/docs/error"}},l=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Method",id:"method",children:[]},{value:"Description",id:"description",children:[]},{value:"URL",id:"url",children:[]},{value:"Query Parameters",id:"query-parameters",children:[]},{value:"Sample Request",id:"sample-request",children:[]},{value:"Sample Responses",id:"sample-responses",children:[]},{value:"Get Started",id:"get-started",children:[]}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/upc")),(0,i.kt)("h3",{id:"method"},"Method"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The UPC API allows users to look up nutritional data from a UPC. Nutritional data is sourced from ",(0,i.kt)("a",{parentName:"p",href:"http://openfoodfacts.org/"},"http://openfoodfacts.org/")," and SnapCalorie Users."),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://us-central1-snapcalorieb2bapi.cloudfunctions.net/upc\n")),(0,i.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),": The API key for authentication (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upc"),": The barcode number (required)")),(0,i.kt)("h3",{id:"sample-request"},"Sample Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://us-central1-snapcalorieb2bapi.cloudfunctions.net/upc?key=YOUR_API_KEY&upc=123456789'\n")),(0,i.kt)("h3",{id:"sample-responses"},"Sample Responses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Success Response:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "data": {\n    "name": "Packaged Apple Slices",\n    "nutrition_per_100g": {\n      // Guaranteed fields\n      "mass_g": 100,\n      "calories_kcal": 61,\n      "carb_g": 14.8,\n      "fat_g": 0.15,\n      "protein_g": 0.17,\n\n      // Detailed Nutrients, if available\n      // All possible fields are shown here, but if a nutrient is not availble,\n      // it will not be present in the response.\n      // Vitamins\n      "b1_mg": ,\n      "b2_mg": ,\n      "b3_mg": ,\n      "b5_mg": ,\n      "b6_mg": ,\n      "b12_mcg": ,\n      "folate_mcg": ,\n      "vitamin_a_mcg": 3,\n      "vitamin_c_mg": 4.6,\n      "vitamin_d_iu": ,\n      "vitamin_e_mg": ,\n      "vitamin_k_mcg": ,\n\n      // Minerals\n      "calcium_mg": 5,\n      "copper_mg": ,\n      "iron_mg": 0.03,\n      "magnesium_mg": ,\n      "manganese_mg": ,\n      "phosphorus_mg": ,\n      "potassium_mg": 104,\n      "selenium_mcg": ,\n      "sodium_mg": 0,\n      "zinc_mg": ,\n\n      // Carbohydrates\n      "fiber_g": 2.1,\n      "starch_g": ,\n      "sugar_g": 12.1,\n\n      // Lipids aka Fats\n      "monounsaturated_g": ,\n      "polyunsaturated_g": ,\n      "omega_3_fatty_acids_g": 0.051,\n      "omega_6_fatty_acids_g": ,\n      "saturated_fats_g": 0,\n      "trans_fats_g": ,\n      "cholesterol_mg": 0,\n\n      // Proteins\n      "cystine_g": ,\n      "histidine_g": ,\n      "isoleucine_g": ,\n      "leucine_g": ,\n      "lysine_g": ,\n      "methionine_g": ,\n      "phenylalanine_g": ,\n      "threonine_g": ,\n      "tryptophan_g": ,\n      "tyrosine_g": ,\n      "valine_g": ,\n\n      // Other Details\n      "percent_fruit": 1, // Portion of item that is fruit from 0-1\n      "percent_vegetable": 0,  // Portion of item that is vegetable from 0-1\n      "source_urls": [\n        "https://fdc.nal.usda.gov/fdc-app.html#/food-details/2344711/nutrients"\n      ]\n    },\n    "alt_units": [\n      {\n        "unit": "package",\n        "weight_in_grams": 100\n      },\n      {\n        "unit": "g",\n        "weight_in_grams": 1\n      },\n      {\n        "unit": "serving",\n        "weight_in_grams": 100\n      },\n    ],\n    "default_portion": {\n      "quantity": 1,\n      "unit": "serving"\n    },\n    "selected_portion": {\n      "quantity": 100,\n      "unit": "g"\n    },\n    "selected_portion_nutrition": {\n      "mass_g": 100,\n      "calories_kcal": 61,\n      "carb_g": 14.8,\n      "fat_g": 0.15,\n      "protein_g": 0.17,\n\n      // Detailed Nutrients, if available\n      // Same fields as above in nutrition_per_100_g\n      // "b1_mg": ,\n      // "b2_mg": ,\n      // ...\n    }\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UPC Value Not Found or Non Food Item:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 404,\n  "data": null,\n  "text": "Upc Not Found"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Error Response:"))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/error"},"Error Responses")," for how the API will signal malformed or failed requests."),(0,i.kt)("h3",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://buy.stripe.com/6oE9D780V0Di6KAdR3"},"Request an API Key")))}d.isMDXComponent=!0}}]);