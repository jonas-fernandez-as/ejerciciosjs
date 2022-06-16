
import keys from "./stripe-keys.js"

const d=document,
$tacos=d.getElementById("tacos"),
$template=d.getElementById("taco-template").content,
$fragment=d.createDocumentFragment(),
fetchOptions={
    headers:{
        Authorization:`Bearer ${keys.secret}`,
    }
};
const moneyFormat =(num)=>`$${num.slice(0,-2)}.${num.slice(-2)}`;

let prices,products;

// COMENTANDO LAS DOS PETICIONES PARA ENGLOBARLAS EN UNA PROMESA QUE LAS UNA

//fetch("https://api.stripe.com/v1/products",{
//    headers:{
//        Authorization:`Bearer ${keys.secret}`,
//    },
//})
//.then((res)=>{
//    console.log(res);
//    return res.json();
//})
//.then((json)=>{
//    console.log(json)
//});
//
//fetch("https://api.stripe.com/v1/prices",{
// headers:{   
//   Authorization:`Bearer ${keys.secret}`,
//  },
//})
//
//.then((res)=>{
//console.log(res)
//return res.json()})
//
//.then((json)=>{
//    console.log(json)
//});

Promise.all([   //ENGLOBANDO LAS DOS PETICIONES EN UN PROMISE ALL
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then(responses =>Promise.all(responses.map(res=>res.json()))) //a las respuestas del promise all las inserta en un map y a cada respuesta del map
.then(json=>{                                                  //las transforma en json
    //console.log(json)
    products=json[0].data;                                     //obtiene los 5 productos separados(estan dentro de data)
    prices=json[1].data;                                       //obtiene los 5 precios (estan dentro de data)
    //console.log(products,prices)
    prices.forEach((el)=>{
        let productData= products.filter((product)=> product.id===el.product);//filtra y compara los productos con el ID del producto y el producto
        //console.log(productData);                                             //que viene en cada precio

        $template.querySelector(".taco").setAttribute("data-price",el.id);
        $template.querySelector("img").src= productData[0].images[0];
        $template.querySelector("img").alt= productData[0].name;
        $template.querySelector("figcaption").innerHTML=
        ` ${productData[0].name}
        <br>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}`
        let $clone= d.importNode($template,true);
        $fragment.appendChild($clone);
    });
    $tacos.appendChild($fragment);
})

.catch((err)=>{
  console.log(err)
  let message=err.statusText || "Ocurrio un error al contactar la API de stripe"
  $tacos.innerHTML=(`<p>Error ${err.status}:${message}</p>`)  
})

d.addEventListener("click",(e)=>{
    if(e.target.matches(".tacos *")){
    let price = e.target.parentElement.getAttribute("data-price");
    console.log(price)
    Stripe(keys.public).redirectToCheckout({
        lineItems:[{price:price, quantity:1}],
        mode:"subscription",
        successUrl:"http://127.0.0.1:5500/correccionesjon/js/ajax-ejercicios/assets/stripe-success.html",
        cancelUrl:"http://127.0.0.1:5500/correccionesjon/js/ajax-ejercicios/assets/stripe-cancel.html"
    })
    .then(res=>{
        if(res.error){
            console.log(res)
            $tacos.insertAdjacentHTML("afterend",res.error.message);
        }
    })
}
})