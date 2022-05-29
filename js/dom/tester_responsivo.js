const d=document

export default function (page,w,h,btnOpen,btnClose) {
       
    let ventana 
// if(d.querySelector(w).value==null||!(/^[0-9]+/.test(d.querySelector(w).value))){
//     return console.error(`El valor "${d.querySelector(w).value}" NO es un numero`)
// }
// if(d.querySelector(h).value==null|| !(/^[0-9]+/.test(d.querySelector(h).value)) )
// return console.error(`El valor "${d.querySelector(h).value}" NO es un numero`)    
// if(d.querySelector(page).value == null||!(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(d.querySelector(page).value))){
//     return console.error(`El valor "${d.querySelector(page).value}" no es un formato valido de pagina web`)
// }
//     localStorage.setItem("page",d.querySelector(page).value)
//     localStorage.setItem("p-width",d.querySelector(w).value)
//     localStorage.setItem("p-height",d.querySelector(h).value)
//

    d.addEventListener("click",(e)=>{
        e.preventDefault()
        if(e.target.matches(btnOpen)){            
            ventana=open(d.querySelector(page).value,"ventana",`top=-80 ,left=-80 ,width=${d.querySelector(w).value},height=${d.querySelector(h).value}` ) 
        }
        if(e.target.matches(btnClose)){
            ventana.close()
        }
    })

}
