const d=document,
$header=d.querySelector("header"),
$footer=d.querySelector("footer"),
$enlaces=d.querySelectorAll(".header")


const getHandF= async function(){
    try{ let res=await fetch("ashet/header.html"),
         header=await res.text()

         if(!res.ok) throw {status:res.status,statusText:res.statusText};

         $header.innerHTML=header
         
        
    }catch(err){

        let message=err.statusText||"Ocurrió un error"
        alert(`Error: ${err.status}:${message}`)

    }

    try{

        let res2=await fetch("ashet/footer.html"),
         footer=await res2.text()
        
         if(!res2.ok) throw {status:res2.status,statusText:res2.statusText}

         $footer.innerHTML=footer


    }catch(err){

        let message=err.statusText||"Ocurrió un error"
        alert(`Error: ${err.status}:${message}`)

    }
}



addEventListener("DOMContentLoaded",(e)=>{
    getHandF()
})

