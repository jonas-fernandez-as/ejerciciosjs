
const $h1=document.querySelector("h1"),
      $html=document.documentElement,
      $hamburguesa=document.getElementById("hamburguesa"),
      $menu=document.getElementById("menu"),
      $seccion1=document.getElementById("1"),
      $seccion2=document.getElementById("2"),
      $seccion3=document.getElementById("3"),
      $seccion4=document.getElementById("4"),
      $seccion5=document.getElementById("5")
     // $seccion2=document.getElementsByClassName(".section2"),
     //$seccion3=document.getElementsByClassName(".section3"),
     // $seccion4=document.getElementsByClassName(".section4"),
     // $seccion5=document.getElementsByClassName(".section5"),
     // $secciones=document.getElementsByClassName(".seccion")
     
console.log($hamburguesa)
$hamburguesa.addEventListener("click",(e)=>{
    $hamburguesa.classList.toggle("is-active")
    $menu.classList.toggle("top-100")
})  

$seccion1.addEventListener("click",(e)=>{
    $hamburguesa.classList.toggle("is-active")
    $menu.classList.toggle("top-100")
})

$seccion2.addEventListener("click",(e)=>{
    $hamburguesa.classList.toggle("is-active")
    $menu.classList.toggle("top-100")
})

$seccion3.addEventListener("click",(e)=>{
    $hamburguesa.classList.toggle("is-active")
    $menu.classList.toggle("top-100")
})

$seccion4.addEventListener("click",(e)=>{
    $hamburguesa.classList.toggle("is-active")
    $menu.classList.toggle("top-100")
})

$seccion5.addEventListener("click",(e)=>{
    $hamburguesa.classList.toggle("is-active")
    $menu.classList.toggle("top-100")
})