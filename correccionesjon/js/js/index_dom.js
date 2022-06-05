
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import networkStatus from "./dom/deteccion_red.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTHeme from "./dom/tema_oscuro.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFiles from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
const d = document;

d.addEventListener("DOMContentLoaded",e=>{
hamburgerMenu(".panel-btn",".panel",".menu a");
digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
alarm("assets/alarma-morning-mix.mp3","#activar-alarma","#desactivar-alarma")
countdown("countdown","Dec 12 2022 09:50:00","Queloscumplafeli")
scrollTopButton(".scroll-top-btn")
responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc">ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
)
responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/MbfqW1FzGzMW8LMs8">ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d26802.447392136477!2d-68.87527360505014!3d-32.89007893001498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-32.8925184!2d-68.8488448!4m5!1s0x95a326187519947f%3A0x6d81606321bb0289!2sgoogle%20maps%20parque%20mendoza!3m2!1d-32.8898095!2d-68.8700868!5e0!3m2!1ses-419!2sar!4v1653762015331!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
)
responsiveTester("responsive-tester")
userDeviceInfo("user-device")
webCam("webcam")
getGeolocation("geolocation")
searchFiles(".card-filter",".card")
draw("#winner-btn",".player")
slider()
scrollSpy()
smartVideo()

});



d.addEventListener("keydown",(e) =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
}
);


darkTHeme(".dark-theme-btn","dark-mode")
networkStatus()