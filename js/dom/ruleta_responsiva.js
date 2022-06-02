const d= document;

export default function responsiveSlider(selector,btnleft,btnright){
    const $array=[]
    d.querySelectorAll(selector).forEach((el)=> $array.push(el))
    console.log($array)
    let slide= 1;
    let total=$array.length;
    
    

        
    showSlide(1);


    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnright)){
            
            slide++;
            if(slide > total){slide=1;}
            showSlide(slide)
        }

        if(e.target.matches(btnleft)){
            
            slide--;
            if(slide< 1){slide=total;}
            showSlide(slide)
        }

    })

    function showSlide(n){
        n--;
        for(let i=0 ;i < $array.length;i++)
        {(i==n)? $array[n].style.display="block" :$array[i].style.display="none";}
    }

}