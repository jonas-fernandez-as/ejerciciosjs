import stripeKeys from "./stripe-keys.js";

console.log(stripeKeys)

const d =document,
$elementos=d.querySelector(".elementos"),
$template=d.getElementById("elemento-template"),
$fragment=d.createDocumentFragment(),
xhr=new XMLHttpRequest()


//fetchOptions={
//    headers:{
//        Authorization:`Bearer ${stripeKeys.secret}`,
//    }
//};

const moneyFormat =(num)=>`$${num.slice(0,-2)}.${num.slice(-2)}`;
let verga=""

let products=""
let prices=""

d.addEventListener("DOMContentLoaded",(e)=>{
  xhr.addEventListener("readystatechange",(e)=>{

    if (xhr.readyState !==4) return;
 
    if(xhr.status >=200 && xhr.status <300){
      let json= JSON.parse(xhr.responseText)
      
      return(json=verga)
    
    }else{
       let message= xhr.statusText||"Error al procesar la peticion"
       d.querySelector(".elementos").innerHTML=
       `ERROR ${xhr.status}:${message}`
    };

  })

xhr.open("GET","https://api.stripe.com/v1/products")
xhr.setRequestHeader(`Authorization`,`Bearer ${stripeKeys.secret}`)
xhr.send()

 



})




































































/*
function get(url){
    return new Promise(function(resolve,reject){
       const xhr = new XMLHttpRequest();
       xhr.open("GET",url);
       xhr.setRequestHeader("Authorization",`Bearer ${stripeKeys.secret}`)
       xhr.onload= function(){
        if (xhr.status=== 200){
            resolve(
                              
                 //console.log(JSON.parse(xhr.responseText)),
                 json = JSON.parse(xhr.responseText),
                 //console.log(json),
                 valores.push(json),
                 //console.log(valores),
                 products=Object.keys(valores[0]).map(function (key) {return valores[0][key];}),
                 prices=Object.keys(valores[1]).map(function (key) {return valores[1][key];}),
                 //console.info(products,prices),
                 products=Object.keys(products[1]).map(function(key) {return products[1][key]}),
                 prices=Object.keys(prices[1]).map(function (key) {return prices[1][key];}),
                 console.info(products,prices),
                
                prices.forEach((el)=>{
                 let productData= products.filter((product)=> product.id===el.product);//filtra y compara los productos con el ID del producto y el producto
                 //console.log(productData);                                             //que viene en cada precio
           
                 $template.querySelector(".elemento").setAttribute("data-price",el.id);
                 $template.querySelector("img").src= productData[0].images[0];
                 $template.querySelector("img").alt= productData[0].name;
                 $template.querySelector("figcaption").innerHTML=
                 ` ${productData[0].name}
                 <br>
                 ${moneyFormat(el.unit_amount_decimal)} ${el.currency}`
                 let $clone= d.importNode($template,true);
                 $fragment.appendChild($clone);
             }),
             $elementos.appendChild($fragment)

                 );
                 
                }else{
                    reject(error(xhr.statusText));
                }
            };
       xhr.onerror=function(){
        reject(Error("Network error"));
       };
       xhr.send();
    });
} 

Promise.all([get("https://api.stripe.com/v1/products"),
get("https://api.stripe.com/v1/prices")])






//.then(values=>{
    //console.log(values) 
    //products=Object.keys(values[0]).map(function (key) {return values[0][key];});
    //prices=Object.keys(values[1]).map(function (key) {return values[1][key];});
    //
    //products=Object.keys(products[1]).map(function(key) {return products[1][key]})
    //prices=Object.keys(prices[1]).map(function (key) {return prices[1][key];});
    //
    //prices.forEach((el)=>{
    //    let productData= products.filter((product)=> product.id===el.product),
    //    
    //    $figure= d.createElement("figure"),
    //    $img=d.createElement("img"),
    //    $figcaption=d.createElement("figcaption");
    //    
    //    $figure.appendChild($img);
    //    $figure.appendChild($figcaption);
    //    $template.appendChild($figure);
    //    
    //    $figure.setAttribute("data-price",el.id);
    //    $img.src=productData[0].images[0];
    //    $img.alt=productData[0].name;
    //    $figcaption.innerHTML=`${productData[0].name}
    //    <br>
    //    $${moneyFormat(el.unit_amount_decimal)}${el.currency}`
    //
    //    let $clone=d.importNode($template,true);
    //    $fragment.appendChild($clone);
    //    
    //    //$elemento.setAttribute("data-price",`${el.id}`)
    //    //console.info($figure)
    //});
    //$elementos.appendChild($fragment);
    //console.log($elementos);
//})  //  









/*  console.log(values);
  products=Object.keys(values[0]).map(function (key) {return values[0][key];});
  prices=Object.keys(values[1]).map(function (key) {return values[1][key];});
  
  products=Object.keys(products[1]).map(function(key) {return products[1][key]})
  prices=Object.keys(prices[1]).map(function (key) {return prices[1][key];});
 */ 
  
    
    
    
    
    //console.log(prices,products);
    

 

//(responses =>Promise.all(responses.map(res=>res.json())))






            //prices.forEach((el)=>{
                //let productData= products.filter((product)=> product.id===el.product),
                
                //$figure= d.createElement("figure"),
                //$img=d.createElement("img"),
                //$figcaption=d.createElement("figcaption");
                //
                //$figure.appendChild($img);
                //$figure.appendChild($figcaption);
                //$template.appendChild($figure);
                //
                //$figure.setAttribute("data-price",el.id);
                //$img.src=productData[0].images[0];
                //$img.alt=productData[0].name;
                //$figcaption.innerHTML=`${productData[0].name}
                //<br>
                //$${moneyFormat(el.unit_amount_decimal)}${el.currency}`
            //
                //let $clone=d.importNode($template,true);
                //$fragment.appendChild($clone);
                //
                //$elemento.setAttribute("data-price",`${el.id}`)
                ////console.info($figure)
            //}),
            //$elementos.appendChild($fragment),
            //console.log($elementos)