const iconArrow = document.querySelector("#iconArrow");
const menuNav = document.querySelector("#menuNav");

const iconMenu = document.querySelector("#iconMenu");
const menuMobile = document.querySelector("#menuMobile");
const iconClose = document.querySelector("#iconClose");

iconArrow.addEventListener("click",toggleMenuNav);

function toggleMenuNav(){
    menuNav.classList.toggle("hidden");
}

iconMenu.addEventListener("click",openMenuMobile);
iconClose.addEventListener("click",closeMenuMobile);

function openMenuMobile(){
    menuMobile.classList.remove("hidden");
}

function closeMenuMobile(){
    menuMobile.classList.add("hidden");
}