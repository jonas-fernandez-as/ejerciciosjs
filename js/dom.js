
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
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
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

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
$ul = document.createElement("ul");
document.write(`<h3>Estaciones del año</h3>`)
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

document.write(`<h3>Estaciones del año</h3>`)

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