const d=document
export default function responsiveJavascript(mapContainer,videoContainer){
    let $mapcontainer=d.querySelector(mapContainer),
    $videoContainer=d.querySelector(videoContainer)

    if(window.matchMedia("(max-width: 400px)").matches){
        $mapcontainer.removeChild($mapcontainer.firstElementChild)
    }
    if(window.matchMedia("(max-width: 400px)").matches){
        $videoContainer.removeChild($videoContainer.firstElementChild)
    }

    if(window.matchMedia("(min-width: 401px)").matches){
        $mapcontainer.removeChild($mapcontainer.lastElementChild)
    }
    if(window.matchMedia("(min-width: 401px)").matches){
        $videoContainer.removeChild($videoContainer.lastElementChild)
    }


}