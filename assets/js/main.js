const navMenu =
document.getElementById("nav-menu");

const navToggle =
document.getElementById("nav-toggle");

const overlay =
document.getElementById("nav-overlay");

navToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("show-menu");

    overlay.classList.toggle("show-overlay");

    navToggle.classList.toggle("active");

});

overlay.addEventListener("click",()=>{

    navMenu.classList.remove("show-menu");

    overlay.classList.remove("show-overlay");

    navToggle.classList.remove("active");

});