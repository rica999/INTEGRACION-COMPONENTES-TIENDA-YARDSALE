const iconArrow = document.querySelector("#icon-arrow");
const menuNav = document.querySelector("#menuNav");

iconArrow.addEventListener("click",toggleMenuNav);

function toggleMenuNav(){
    menuNav.classList.toggle("hidden");
}