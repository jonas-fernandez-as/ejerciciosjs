const d=document;

export default function smartVideo(){

const $videos= d.querySelectorAll(".video-coso")

  
 const cb=(entries) =>{
      entries.forEach(entry => {
         
     
     if(entry.isIntersecting){
        console.log(entry);
        let blanco= entry.target
         
        blanco.play()
        
    }    

    else{
        let blanco= entry.target
         
        blanco.pause()
        
    }
});

}

const observador= new IntersectionObserver(cb,{
    //root:
    //rootMargin:
    threshold:.5
    
});


$videos.forEach((el)=> observador.observe(el))

document.addEventListener("visibilitychange",(e)=>{

    if(d.visibilityState==='visible'){
        $videos.forEach((el)=>el.play())
   
    }else{
        $videos.forEach((el)=>el.pause())
        }
   
   })



}
/*d.addEventListener("visibilitychange",(e)=>{

 if(d.visibilityState==="visible"){
     $video.play()

 }else{
         $video.pause()
     }
!d.hidden
});*/