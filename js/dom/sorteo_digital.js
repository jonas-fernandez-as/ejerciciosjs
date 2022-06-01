const d =document;
      
export default function sorteoDigital(list,button) {
    const randomFunction =()=> {
        let $array =[]
        d.querySelectorAll(list).forEach((el)=> $array.push(el.textContent))
        
        let $random=Math.floor(Math.random()*$array.length),
        $valorRandom=$array[$random];

        return $valorRandom
    }
    d.addEventListener("click",(e)=>{
      if(e.target.matches((button)))
    
      window.alert(`El ganador es ${randomFunction()}`)
    });
    


}