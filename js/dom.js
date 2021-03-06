
/*
INTRODUCCION AL DOM

console.log(`**********Elementos del documento************`);
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(()=>(
    console.log(document.getSelection().toString())
),3000);
document.write(`<h2>Mi primer escritura desde el DOM en JS </h2>`)


*/
// NODOS ELEMENTOS Y SELECTORES
/*
console.log(document.getElementById("h1"))
console.log(document.querySelector("h1"))
console.log(document.querySelectorAll("h1"))
*/

//ATRIBUTOS Y DATA ATRIBUTES 

/*console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".enlace").href)
console.log(document.querySelector(".enlace").getAttribute("href"))

document.documentElement.lang ="es"
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang","es AR")
console.log(document.documentElement.lang)

const $linkDOM = document.querySelector(".enlace");
$linkDOM.setAttribute("target","_blank")
$linkDOM.setAttribute("rel","noopener")
console.log(document.querySelector(".enlace"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))
console.log($linkDOM.getAttribute("data-atribute"))
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.atribute)
$linkDOM.setAttribute("data-atribute","Modelo de Objeto del Documento")
console.log($linkDOM.dataset.atribute)
$linkDOM.dataset.atribute = "Me gusta el polen"
console.log($linkDOM.dataset.atribute) 
console.log($linkDOM.hasAttribute("data-kawirpi"))
$linkDOM.setAttribute("data-kawirpi","tujavie")
console.log($linkDOM.hasAttribute("data-kawirpi"))
$linkDOM.removeAttribute("data-kawirpi")
console.log($linkDOM.hasAttribute("data-kawirpi"))*/

// ESTILOS Y VARIABLES CSS (DOM)
/*
const $enlaceDOM = document.querySelector(".enlace")

//console.log($enlaceDOM.style)
//console.log($enlaceDOM.getAttribute("Style"))
//console.log($enlaceDOM.style.color)
//console.log($enlaceDOM.style.backgroundColor)
//console.log(window.getComputedStyle($enlaceDOM))
//console.log(getComputedStyle($enlaceDOM).getPropertyValue("color"))
$enlaceDOM.style.setProperty("text-decoration","none")
$enlaceDOM.style.setProperty("display","block")
$enlaceDOM.style.width= "50%"
$enlaceDOM.style.height= "2rem"
$enlaceDOM.style.textAlign= "center"
$enlaceDOM.style.marginLeft= "auto"
$enlaceDOM.style.marginRight= "auto"
$enlaceDOM.style.borderRadius= "50%"
$enlaceDOM.style.padding= "1.5rem"

let $h1=document.querySelector("h1")
$h1.style.setProperty("color","#fff")
$h1.style.setProperty("font-size","3rem")
$h1.style.setProperty("backgroundColor","#000")
$h1.style.setProperty("backgroundColor","#000")
$h1.style.textAlign="center"

//CUSTOM PROPRIERTIES 
let $html=document.documentElement,
    $body=document.body
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varSkyColor = getComputedStyle($html).getPropertyValue("--sky-color")
//console.log(varDarkColor,varSkyColor)
$body.style.backgroundColor=varDarkColor
$body.style.color=varSkyColor
*/
/*
CLASES EN CSS (DOM)

const $card =document.querySelector(".card")
console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45","rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
$card.classList.toggle("opacity-80","sepia") */

/*
TEXTO Y HTML

const $whatIsDom = document.getElementById("que-es")

let text= `  
 <p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
??ste prov??e una representaci??n estructural del documento, permitiendo modificar su contenido y presentaci??n visual mediante c??digo JS.
</p>
<p>
    <mark> El DOM no es parte de la especificaci??n de JavaScript, es una API para los navegadores.</mark>
</p>
`
 $whatIsDom.textContent=text
 $whatIsDom.innerHTML=text
 $whatIsDom.outerHTML=text */

 //RECORRIENDO EL DOM
/*
 const $cards=document.querySelector(".cards")
 console.log($cards)
 console.log($cards.children)
 console.log($cards.children[2])
 console.log($cards.parentElement)
 console.log($cards.firstElementChild)
 console.log($cards.lastElementChild)
 console.log($cards.previousElementSibling)
 console.log($cards.nextElementSibling)
 console.log($cards.closest("div"))
 console.log($cards.closest("body"))
 console.log($cards.children[3].closest("section")) */

 //CREANDO ELEMENTOS Y FRAGMENTOS
/*
 const $figure =document.createElement("figure"),
       $img= document.createElement("img"),
       $figcaption= document.createElement("figcaption"),
       $figcaptionText= document.createTextNode("Animals"),
       $cards=document.querySelector(".cards"),
       $figure2=document.createElement("figure")

$img.setAttribute("src","https://placeimg.com/200/200/animals")
$img.setAttribute("alt","Animals")
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

$figure2.innerHTML= `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`

$figure2.classList.add("card")
$cards.appendChild($figure2)

const estaciones = ["Primavera","Verano","Oto??o","Invierno"],
$ul = document.createElement("ul");
document.write(`<h3>Estaciones del a??o</h3>`)
document.body.appendChild($ul)

estaciones.forEach((el)=>{
    const $li =document.createElement("li");
    $li.textContent = el ;
    $ul.appendChild($li)
})

const continentes =["America","Africa","Asia","Europa","Oceania"],
$ul2=document.createElement("ul")

document.write(`<H3>Continentes</H3>`)
document.body.appendChild($ul2)
$ul2.innerHTML="";
continentes.forEach((el)=>{
    $ul2.innerHTML+=`<li>${el}</li>`});

document.write(`<h3>Estaciones del a??o</h3>`)

const meses= [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "setiembre",
    "octubre",
    "noviembre",
    "diciembre"
    
];
const $ul3= document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach((el)=>{
     const $li=document.createElement("li")
     $li.textContent=el
     $fragment.appendChild($li)
})

$ul3.appendChild($fragment)
document.body.appendChild($ul3)
*/

//TEMPLATE HTML
/*
const $cards = document.querySelector(".cards"),
$template= document.getElementById("template-card").content,
$fragment = document.createDocumentFragment()
cardContent=[
{    
    title:"Tecnologia",
    src:"https://placeimg.com/200/200/tech",
},
{    
    title:"Animales",
    src:"https://placeimg.com/200/200/animals",
},
{    
    title:"Arquitectura",
    src:"https://placeimg.com/200/200/arch",
},
{    
    title:"Naturaleza",
    src:"https://placeimg.com/200/200/nature",
},
{    
    title:"Personas",
    src:"https://placeimg.com/200/200/people",
},
]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("alt",el.title)
    $template.querySelector("img").setAttribute("src",el.src)
    $template.querySelector("figcaption").textContent =el.title

    let $clone =document.importNode($template,true);
    $fragment.appendChild($clone)
});


$cards.appendChild($fragment)
*/

//MODIFICANDO ELEMENTOS DEL DOM (OLD)

/*
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards= $cards.cloneNode(true);

$newCard.classList.add("card")

$newCard.innerHTML=`
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
//$cards.replaceChild($newCard,$cards.children[2])
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard,$cards.firstElementChild);
//document.body.appendChild($cloneCards)

*/

//MODIFICANDO ELEMENTOS DEL DOM (COOLSTYLE)

/*
.insertAdjacent...
.insertAdjacentElement(position,el)
.insertAdjacentHTML(position,html)
.insertAdjacentText(position,text)

Posiciones:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/
/*
EJEMPLOS:

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards= $cards.cloneNode(true);



$contentCard=`
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`
;
$newCard.classList.add("card")

$newCard.insertAdjacentHTML("beforeend",$contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
$cards.insertAdjacentElement("afterbegin",$newCard)

$cards.prepend($newCard)
$cards.append($newCard)
$cards.after($newCard)
$cards.before($newCard)
*/

//MANEJADORES DE EVENTOS- AGREGAR O ELIMINAR EVENTOS




/*function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre="Desconocid@"){
    alert(`HOla ${nombre}`)
    console.log(event)
}
const $eventoSemantico= document.getElementById("evento-semantico")
const $eventoMultiple=document.getElementById("evento-multiple"),
$eventoRemover= document.getElementById("evento-remover")


$eventoSemantico.onclick=holaMundo;
$eventoSemantico.onclick= function(e){
    alert("HOla Mundo Manejador de Eventos Semantico");
    console.log(e);
    console.log(event)
};
$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",(e)=>{
    alert("Hola Mundo Manejador de Eventos Multiple");
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(event)
})
$eventoMultiple.addEventListener("click",()=> {
    saludar()
    saludar("Jon??s")
})

const removerDblClick =(e) =>{
    saludar("Jon??s")
    alert(`Removiendo el evento de tipo ${e.type}`)
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDblClick);
    $eventoRemover.disabled=true
}


$eventoRemover.addEventListener("dblclick",removerDblClick)
*/

//FLUJO DE EVENTOS (BURBUJA Y CAPTURA)-PREVENT DEFAULT Y STOP PROPAGATION
/*
const $divsEventos =document.querySelectorAll(".eventos-flujo div"),
 $linkEventos =document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
e.stopPropagation()
};

console.log($divsEventos);

$divsEventos.forEach((div)=>{
    //fase de burbuja
    div.addEventListener("click",flujoEventos)
  //div.addEventListener("click",flujoEventos,false)
    //fase de captura
    //div.addEventListener("click",flujoEventos,true)
    /*div.addEventListener("click",flujoEventos,{
        capture:false,
        once:true})
    
})

$linkEventos.addEventListener("click",(e)=>{
    alert("holis");
    a.preventDefault();
    a.stopPropagation()
})


/*
console.log($divsEventos);

$divsEventos.forEach((div)=>{
    
    div.addEventListener("click",flujoEventos)
    
})

$linkEventos.addEventListener("click",(e)=>{
    alert("holis");
    a.preventDefault();
    a.stopPropagation()
}) */








//DELEGACION DE EVENTOS
/*
const $divsEventos =document.querySelectorAll(".eventos-flujo div"),
 $linkEventos =document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`)
e.stopPropagation()
};


document.addEventListener("click",(e) =>{
    console.log(`Click en`,e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert(`HOliiiiis`);
        e.preventDefault();
    }
    



});


*/

/*

//EVENTOS Y PROPIEDADES DEL BOM



window.addEventListener("resize",(e)=>{
    console.clear()
    console.log(`*******Evento Resize*********`)
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console.log(window.outerHeight)
    console.log(window.outerWidth)
    console.log(e)
})

window.addEventListener("scroll",(e)=>{
    console.clear()
    console.log(`******Evento scroll ********`)
    console.log(window.scrollX)
    console.log(window.scrollY)
    console.log(e)
})

window.addEventListener("load",(e)=>{
    
    console.log(`*********Evento Load********`)
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
})

window.addEventListener("DOMContentLoaded",(e)=>{

    console.log(`*********Evento DOMContentLoaded********`)
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
})


*/




//METODOS DEL BOM


/*

//alert()        eventos del window !!!  window.alert()  window.confirm ()  window.prompt()
//confirm()     //aceptar o cancelar y guardar en variable
//prompt()      // guardar mensaja de texto en una variable 


const $btnAbrir= document.getElementById("abrir-ventana"),
      $btnCerrar= document.getElementById("cerrar-ventana"),
      $btnImprimir= document.getElementById("imprimir-ventana");

    let =ventana;

    $btnAbrir.addEventListener("click",e=>{
      ventana= window.open("https://jonasfernandez.wordpress.com") //puedes usar solo open
    })

      $btnCerrar.addEventListener("click",e=>{
     // window.close()
        ventana.close()
    })

    $btnImprimir.addEventListener("click",e=>{
       window.print()   
    })  

*/




//OBJETOS URL, HISTORIAL Y NAVEGADOR


/*
console.log(`******Objeto URL(location)*******`)
console.log(location.origin)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.href)
console.log(location.hash)
console.log(location.search)
console.log(location.pathname)
//location.reload()
*/
/*console.log(`***********objeto histoial*************`)
console.log(history)
console.log(history.length)
//console.log(history.back())
//console.log(history.forward())
//consosole.log(history.go())   -1 2 3 4 0 */
/*
console.log(`******Objeto Navegador********`)
console.log(navigator)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)
console.log(navigator.onLine)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)
*/










