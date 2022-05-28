
import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTHeme from "./dom/tema_oscuro.js";
const d = document;

d.addEventListener("DOMContentLoaded",e=>{
hamburgerMenu(".panel-btn",".panel",".menu a");
digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
alarm("assets/alarma-morning-mix.mp3","#activar-alarma","#desactivar-alarma")
countdown("countdown","Dec 12 2022 09:50:00","Queloscumplafeli")
scrollTopButton(".scroll-top-btn")

});



d.addEventListener("keydown",(e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
}
);


darkTHeme(".dark-theme-btn","dark-mode")