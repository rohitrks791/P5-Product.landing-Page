window.onscroll=function(){
    console.log("scroll working");
    if(window.pageYOffset>100){
        document.getElementById('header').style.backgroundColor="#353535";
    }
    else{
        document.getElementById('header').style.backgroundColor="transparent";
    }
}
