const d=document

export default function navigatorUserAgent (s) {
   let seccion= d.getElementById(s)
  seccion.innerHTML=`<h3>${window.navigator.userAgent}</h3>`

}