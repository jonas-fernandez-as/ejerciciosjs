const d=document,
 w=window,
 n=navigator

 export default function mediaDevice() {
   /*if( 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices ){
       console.log("vamonoma")
   }*/
   const video=d.getElementById("video")
   navigator.mediaDevices.getUserMedia({video:true})
       .then( (stream)=>{
           video.srcObject = stream;
           console.log(stream);
       })
       .catch((error)=>{
           console.log(error)
       })
       
      

   }

  
 
