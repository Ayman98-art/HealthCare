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
const signupButton = document.querySelector(".btn__Read");

let usersList;

if (localStorage.getItem("users") !== null) {
usersList = JSON.parse(localStorage.getItem("users"));
console.log("local  found", usersList);
}

else {
console.log("local not found", usersList);
usersList = [];
}

signupButton.addEventListener("click", function (event) {
event.preventDefault();

if (usersList.length > 0) {
console.log("from  if");
for (let i = 0; i < usersList.length; i++) {
if (usersList[i].email === userEmail.value) {
console.log("user is used before");}

else {
console.log("users not here");
let user = {
name: userName.value,
email: userEmail.value,};

usersList.push(user);
localStorage.setItem("users", JSON.stringify(usersList));
console.log(usersList);}}}


else if (usersList.length === 0) {
console.log("from else");
let user = {
name: userName.value,
email: userEmail.value};

usersList.push(user);
localStorage.setItem("users", JSON.stringify(usersList));
console.log(usersList);}});
//End Contact//
//*****************************************//
//Strat bar prograss//

//End bar prograss//
//*****************************************//
