
import voiceSynthesis from "./dom/sintesis_voz.js";
import buscador from "./dom/buscador.js";
import conexionAlert from "./dom/coneccion_alerta.js";
import { countDown } from "./dom/countdown.js";
import mediaDevice from "./dom/dispositivos_multimedia.js";
import { alerts, ballMove } from "./dom/eventosteclado.js";
import scrollbutton from "./dom/flecha_inicio.js";
import geoLocation from "./dom/geolocalizacion.js";
//import responsiveJavascript from "./dom/responsive_javascrip.js";
import hamburguesaMenu from "./dom/menuhamburgesa.js";
import darkMode from "./dom/modo_dark.js";
import clockAlarm from "./dom/reloj.js";
import responsiveSlider from "./dom/ruleta_responsiva.js";
import spyScroll from "./dom/scroll_espia.js";
import sorteoDigital from "./dom/sorteo_digital.js";
import tester_responsivo from "./dom/tester_responsivo.js";
import navigatorUserAgent from "./dom/usuario_navegador.js";
import formValidator from "./dom/validar_formulario.js";
import smartVideo from "./dom/video_inteligente.js";


const d=document

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguesaMenu(".hamburger",".menu-container",".menu-container a");
    clockAlarm(".clock",".alarm-sound",".timestart",".timestop",".alarmstart",".alarmstop") 
    ballMove('#ball')   
    alerts()
    countDown(".place","2022,05,29 13:11:00","TE AMOOOOOOO RENZOOO")
    scrollbutton(".button-start")
   //responsiveJavascript(".map-container",".video-container")
   tester_responsivo("responsive-form")
   navigatorUserAgent("se")
   conexionAlert(".conexionP",".conexionR")
   mediaDevice()
   geoLocation("geolocation")
   buscador(".search",".card")
   sorteoDigital(".li-sorteo",".button-sorteo")
   responsiveSlider(".slider-content",".btnleft",".btnright")
   spyScroll("#menu")
   smartVideo()
   formValidator(".form-v-container")
   
    
});

voiceSynthesis()
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




