const d=document

export function ballMove (ball){


let x=500,
    y=-170
   

d.addEventListener("keydown",(e)=>{
   if(e.keyCode == '68'){
       x=x+10;
      d.querySelector(ball).style.left  = x+ 'px';
   }
   if(e.keyCode == '65'){
    x=x-10;
    d.querySelector(ball).style.left = x+ 'px';
}

   if(e.keyCode == '87'){
    y=y+10;
    d.querySelector(ball).style.top = (-y)+ 'px';
}
if(e.keyCode == '83'){
    y=y-10;
    d.querySelector(ball).style.top = (-y)+ 'px';
}


})
}

export function alerts(){
    d.addEventListener("keydown",(e)=>{
    if(e.altKey && e.keyCode =='65'){
        alert("alerta ctrl+a")
    }

    if(e.altKey && e.keyCode== '67' ){
     confirm("coso")
    }
    if(e.altKey && e.keyCode== '80'){
        prompt('Ingresa el nombre de tu javie')
    }

})
}