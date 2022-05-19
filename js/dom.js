
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

// ESTILOS Y VARIABLES CSS