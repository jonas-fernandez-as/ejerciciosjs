const d=document,
n=navigator,
w=window
export default function geoLocation(id) {
let $geo= d.getElementById(id)

    let options={
        enableHighAccurracy:true,
        timeout:12000,
        maximumAge:0
    };

    function success(pos){
       
        let crd = pos.coords;
        
     $geo.insertAdjacentHTML("beforebegin",`<h3>Tu posicion actual es:</h3>
     <br><p>Latitud: ${crd.latitude}
     <br>Longitud: ${crd.longitude}<br>
     Con una presición de:${ crd.accuracy} metros.<p>
     <a href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},19z" target="_blank" rel="noopener">Ver en Google Maps</a> `)
     
     //$geo.insertAdjacentHTML("beforebegin",`<a href="https:www.google.com/maps/${crd.latitude},${crd.longitude}")>Ver mapa</a>`)
        //console.log(`Tu posicion actual es:`);
        //console.log(`Latitud:` + crd.latitude);
        //console.log(`Longitud` + crd.longitude);
        //console.log(`Con una presición de` + crd.accuracy + `metros.`);

    };

    function error(err) {
        $geo.insertAdjacentHTML("beforebegin", `ERROR(  ${err.code}  ):  ${err.message}`)
        console.warn(`ERROR(` + err.code + `):` + err.message);
    }

    n.geolocation.getCurrentPosition(success,error,options);
}