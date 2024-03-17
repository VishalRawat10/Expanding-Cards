let imgs = document.querySelectorAll(".container div");
imgs[0].id = "card";
imgs.forEach( ( img )=> {
    img.addEventListener("click", ()=>{
        for(image of imgs){
            if(image != img){
                image.removeAttribute("id");
                image.children[0].style.display="none";
            }
        }
        img.setAttribute("id", "card");
        console.log(img.children[0]);
        setTimeout(()=>(img.children[0].style.display="block"),1000 );
        
    })
    
});