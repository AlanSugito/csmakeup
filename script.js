AOS.init();
const burger = document.querySelector("#navbar .burger");
const nav = document.querySelector("#navbar ul");

burger.addEventListener("click", function(){
    nav.classList.toggle("slide");
    console.log(nav)
});