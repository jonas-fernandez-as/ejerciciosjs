import hamburguesaMenu from "./dom/menuhamburgesa.js";
import clockAlarm from "./dom/reloj.js";

const d=document

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguesaMenu(".hamburger",".menu-container",".menu-container a");
    clockAlarm(".clock",".alarm-sound",".timestart",".timestop",".alarmstart",".alarmstop")    
});







 
