export default function hamburguesaMenu (button,menu,link){
    const d=document;

    d.addEventListener("click",(e)=>{
       if (e.target.matches(button) || e.target.matches(`${button} *`))
       {
        d.querySelector(button).classList.toggle("is-active")
        d.querySelector(menu).classList.toggle("is-active")
       }

       
        if (e.target.matches(link)){
        
        d.querySelector(button).classList.remove("is-active")
        d.querySelector(menu).classList.remove("is-active")
       }
    
   })  

};


       

     

/*$hamburguesa.addEventListener("click",(e)=>{
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
})*/