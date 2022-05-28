
import { countDown } from "./dom/countdown.js";
import { alerts, ballMove } from "./dom/eventosteclado.js";
import scrollbutton from "./dom/flecha_inicio.js";
import responsiveJavascript from "./dom/responsive_javascrip.js";
import hamburguesaMenu from "./dom/menuhamburgesa.js";
import darkMode from "./dom/modo_dark.js";
import clockAlarm from "./dom/reloj.js";


const d=document

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguesaMenu(".hamburger",".menu-container",".menu-container a");
    clockAlarm(".clock",".alarm-sound",".timestart",".timestop",".alarmstart",".alarmstop") 
    ballMove('#ball')   
    alerts()
    countDown(".place","2022,05,26 10:00:00","TE AMOOOOOOO")
    scrollbutton(".button-start")
   responsiveJavascript(".map-container",".video-container")

    
});


darkMode(".button-dark","class-dark")







//
//d.addEventListener("click",(e)){
//    if(e.matches())
//}
//
//let darkb=d.querySelector("body").style.setProperty("background-color","#222");
////let lightb= d.querySelector("body").style.setProperty("background-color","#FFF");
//let darkc=d.querySelectorAll("[dark-mode]").forEach((el)=> (el).style.setProperty("color","#f7df1e"));
////let lightc=d.querySelectorAll("[dark-mode]").forEach((el)=> (el).style.setProperty("color","#000"));
//
//localStorage.setItem("dark-color",darkb)   
//localStorage.setItem("dark-c",darkc)
//
////localStorage.setItem("light-color",lightc)   
////localStorage.setItem("light-b",lightb)




