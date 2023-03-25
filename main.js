const iconArrow = document.querySelector("#iconArrow");
const menuNav = document.querySelector("#menuNav");

const iconMenu = document.querySelector("#iconMenu");
const menuMobile = document.querySelector("#menuMobile");
const iconClose = document.querySelector("#iconClose");

const iconShop = document.querySelector("#iconShop");
const orderProducts = document.querySelector("#orderProducts");
const iconMenuShopCar = document.querySelector("#iconMenuShopCar");
const iconArrowShopCar = document.querySelector("#iconArrowShopCar");

iconArrow.addEventListener("click",toggleMenuNav);

function toggleMenuNav(){
    menuNav.classList.toggle("hidden");
    if(!orderProducts.classList.contains("hidden")){
        orderProducts.classList.add("hidden");
    };
}

iconMenu.addEventListener("click",openMenuMobile);
iconClose.addEventListener("click",closeMenuMobile);

function openMenuMobile(){
    menuMobile.classList.remove("hidden");
}

function closeMenuMobile(){
    menuMobile.classList.add("hidden");
}

iconShop.addEventListener("click",openOrderProducts);

function openOrderProducts(){
    orderProducts.classList.toggle("hidden");
    if(menuNav.classList.contains("hidden")){
        menuNav.classList.add("hidden");
    };
}

iconMenuShopCar.addEventListener("click",closeShopCar);
iconArrowShopCar.addEventListener("click",closeShopCar);

function closeShopCar(){
    orderProducts.classList.toggle("hidden");
}