const d=document,
  w=window

export default function speechReader(){
    const $speechSelect=d.getElementById("voces"),
    $speechTextarea=d.getElementById("a-traducir"),
    $speechBtn=d.getElementById("traductBtn"),
    speechMessage=new SpeechSynthesisUtterance();

let voices=[]
    d.addEventListener("DOMContentLoaded",(e)=> {

        w.speechSynthesis.addEventListener("voiceschanged",(e)=>{
            voices= w.speechSynthesis.getVoices();

            voices.forEach(voice => {
                const $option=d.createElement("option");
                $option.value = voice.name;
                $option.textContent=`${voice.name}--${voice.lang}`
                $speechSelect.appendChild($option)
                
            });
        })
    })


    d.addEventListener("change",(e)=>{
        if(e.target ===$speechSelect){
            speechMessage.voice=voices.find(
                (voice)=>voice.name === e.target.value
            );
        }
    })
    
    d.addEventListener("click",(e)=>{
        if(e.target ===$speechBtn)
        speechMessage.text=$speechTextarea.value;
        w.speechSynthesis.speak(speechMessage)
    })
}