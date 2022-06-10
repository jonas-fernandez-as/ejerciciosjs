const d=document,

$h2=d.querySelector(".title"),
$imagen=d.querySelector(".image"),
$home=d.querySelector(".home"),
$about=d.querySelector(".about"),
$services=d.querySelector(".services"),
$contact=d.querySelector(".contact"),
$main=d.querySelector("main")

let $template=d.querySelector(".template"),
$titlet=d.querySelector(".titlet"),
$imaget=d.querySelector(".imaget"),
$fragment=d.createDocumentFragment();


 
console.log($h2)


d.addEventListener("click", async e=>{
    
    if(e.target ===($home)){
        e.preventDefault()
        async function getData (){
            try{
                let res=await fetch("ashet/sitio_con_ajax.json"),
                json=await res.json();
                
                console.log(json.secciones[0].img)
                console.log($imagen.getAttribute("src").value)
                
                
                $h2.textContent=json.secciones[0].h2;
                $imagen.setAttribute("src",json.secciones[0].img)
                

                if(!res.ok)throw{status:res.status,statusText:res.statusText};

            }catch(err){
                let message=err.statusText||"Ocurrio un error";
                alert(`Error ${err.status}: ${message}`)
            

            }

        }
        getData()

    }

    if(e.target ===($about)){
        e.preventDefault()
        async function getData (){
            try{
                let res=await fetch("ashet/sitio_con_ajax.json"),
                json=await res.json()

                if(!res.ok)throw{status:res.status,statusText:res.statusText};
                
                $h2.textContent=json.secciones[1].h2;
                $imagen.setAttribute("src",json.secciones[1].img)
                


            }catch(err){
                let message=err.statusText||"Ocurrio un error";
                alert(`Error ${err.status}: ${message}`)
            

            }

        }
        getData()
        
    }

    if(e.target===($services)){
        e.preventDefault()
        async function getData (){
            try{
                let res=await fetch("ashet/sitio_con_ajax.json"),
                json=await res.json()

                if(!res.ok)throw{status:res.status,statusText:res.statusText};
                
                $h2.textContent=json.secciones[2].h2;
                $imagen.setAttribute("src",json.secciones[2].img)
                


            }catch(err){
                let message=err.statusText||"Ocurrio un error";
                alert(`Error ${err.status}: ${message}`)
            

            }

        }
        getData()
    }

    if(e.target===($contact)){
        e.preventDefault()
        async function getData (){
            try{
                let res=await fetch("ashet/sitio_con_ajax.json"),
                json=await res.json()

                if(!res.ok)throw{status:res.status,statusText:res.statusText};
                
                $h2.textContent=json.secciones[3].h2;
                $imagen.setAttribute("src",json.secciones[3].img)
                


            }catch(err){
                let message=err.statusText||"Ocurrio un error";
                alert(`Error ${err.status}: ${message}`)
            

            }

        }
        getData()
    }
} )

