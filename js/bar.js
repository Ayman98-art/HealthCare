let skillsSection = document.querySelector(".skills-section");
let barPrograss  =document.querySelectorAll(".prograss__bar");

function showBar(){
    barPrograss.forEach((prograsBar)=>{
        let value = prograsBar.dataset.bar
        // console.log(value);
        prograsBar.style.opacity=1;
        prograsBar.style.width=`${value}%`;
    })
}
window.addEventListener("scroll",function(){
    let sectionBar = skillsSection.getBoundingClientRect().top;
    let screenBar = window.innerHeight / 2;

if(screenBar > sectionBar){
    showBar();
}
})