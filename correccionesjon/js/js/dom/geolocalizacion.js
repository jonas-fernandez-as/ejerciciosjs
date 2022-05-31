const d=document,
n=navigator
export default function getGeolocation(id){
 const $id =d.getElementById(id),
 options={
     enableHighAccurracy:true,
     timeout:12000,
     maximumAge:0

 };


 const success= position =>{
     let coords=position.coords;
     console.log(position)
     $id.innerHTML=
    ` <p>Tu posicion actual es:</p>
     <ul>
         <li>Latitud:<b>${coords.latitude}</b></li>
         <li>Longitud:<b>${coords.latitude}</b></li>
         <li>Presición:<b>${coords.accuracy}</b>metros</li>
     </ul>
     <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">Ver en Google Maps</a>`

 }

 const error= err =>{
     $id.innerHTML=`<p><mark>Error ${err.code}:${err.message}</p></mark>`
     console.log(`Error ${err.code}:${err.message}`)
 };

 n.geolocation.getCurrentPosition(success,error,options);
}