const d=document

export default function (form) {
    const $form= d.getElementById(form)  
    
    let ventana

    d.addEventListener("submit",(e)=>{
        if (e.target===$form)
        e.preventDefault()
                  
            ventana=open(`${$form.pagina.value}`,"ventana",`width=${$form.width.value},height=${$form.height.value}` ) 
        
    })
     

    d.addEventListener("click",(e)=>{
        
        if(e.target ===($form.closer)){
            ventana.close()
        }
    })

}
