const d=document,
w=window

export default function (page,w,h,btnOpen,btnClose) {
 let pagina=d.querySelector(page).value,
      wid=d.querySelector(w).value,
      hei=d.querySelector(h).value

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnOpen)){
            //w.innerHeight(hei)
            //w.innerWidth(wid)
            open(pagina)
        }
        if(e.target.matches(btnClose)){
            close(pagina)
        }
    })

}