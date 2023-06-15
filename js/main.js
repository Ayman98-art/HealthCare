//Strat slider for testmoneils//
$('.owl-carousel').owlCarousel({
    ltr:true,
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    items:1,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1000,
})
//End slider for testmoneils//
//*****************************************//
//Start btn top//
let btnTop = document.getElementById("btnTop");

btnTop.addEventListener("click", function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll = ()=>{
    if(scrollY >= 350){
        btnTop.classList.replace("hide","show")
    }
    else{
        btnTop.classList.replace("show","hide")
    }
}
//End btn top//
//*****************************************//
//Start loading//
let loading = document.querySelector(".loading");
$(`document`).ready(function(){
    $(`.loading`).fadeOut( 2000 , function(){
    $(`body`).css("overflow-y","auto")
})
})
//End loading//
//*****************************************//
//Strat Contact//
const userName = document.getElementById("signup-name");
const userEmail = document.getElementById("signup-email");
const formContact = document.getElementById("formContact");

formContact.addEventListener("submit", function(e){
    let inputName =false;
    let inputEmail =false;

    if (userName.value !== "" && userName.value.length <= 5) {
        inputName = true;
        console.log(`your name is : ${userName.value}`);
    }

    if (userEmail.value !== "") {
        inputEmail = true;
        console.log(`your name is : ${userEmail.value}`);
    }

if( inputEmail == false || 
    inputName == false  )
    e.preventDefault();
    console.log("good")
}
)

//End Contact//