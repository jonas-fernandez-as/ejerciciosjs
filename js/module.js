
import { countDown } from "./dom/countdown.js";
import { alerts, ballMove } from "./dom/eventosteclado.js";
import scrollbutton from "./dom/flecha_inicio.js";
import hamburguesaMenu from "./dom/menuhamburgesa.js";
import clockAlarm from "./dom/reloj.js";

const d=document


d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguesaMenu(".hamburger",".menu-container",".menu-container a");
    clockAlarm(".clock",".alarm-sound",".timestart",".timestop",".alarmstart",".alarmstop") 
    ballMove('#ball')   
    alerts()
    countDown(".place","2022,05,26 10:00:00","TE AMOOOOOOO")
    scrollbutton(".button-start")
    

});







