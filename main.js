const iconArrow = document.querySelector("#iconArrow");
const menuNav = document.querySelector("#menuNav");

const iconMenu = document.querySelector("#iconMenu");
const menuMobile = document.querySelector("#menuMobile");
const iconClose = document.querySelector("#iconClose");

const iconShop = document.querySelector("#iconShop");
const orderProducts = document.querySelector("#orderProducts");
const iconMenuShopCar = document.querySelector("#iconMenuShopCar");
const iconArrowShopCar = document.querySelector("#iconArrowShopCar");

const sectionProducts = document.querySelector("#sectionProducts");

const iconCloseDetailProduct = document.querySelector("#iconCloseDetailProduct");
const detailProduct = document.querySelector("#detailProduct");

/*ABRIR Y CERRAR VISTA DE MENU NAVBAR*/
iconArrow.addEventListener("click",toggleMenuNav);

function toggleMenuNav(){
    menuNav.classList.toggle("hidden");
    if(!orderProducts.classList.contains("hidden")){
        orderProducts.classList.add("hidden");
    };
    if(!detailProduct.classList.contains("hidden")){
        detailProduct.classList.add("hidden");
    };
}

/*ABRIR Y CERRAR VISTA DE MENU NAVBAR MOBILE*/
iconMenu.addEventListener("click",openMenuMobile);
iconClose.addEventListener("click",closeMenuMobile);

function openMenuMobile(){
    menuMobile.classList.remove("hidden");
}

function closeMenuMobile(){
    menuMobile.classList.add("hidden");
}

/*ABRIR Y CERRAR VISTA DE SHOOPING CAR*/
iconShop.addEventListener("click",openOrderProducts);

function openOrderProducts(){
    orderProducts.classList.toggle("hidden");
    if(menuNav.classList.contains("hidden")){
        menuNav.classList.add("hidden");
    };
    if(!detailProduct.classList.contains("hidden")){
        detailProduct.classList.add("hidden");
    };
}

iconMenuShopCar.addEventListener("click",closeShopCar);
iconArrowShopCar.addEventListener("click",closeShopCar);

function closeShopCar(){
    orderProducts.classList.toggle("hidden");
}

/*CREAR PRODUCTOS CON JS*/
let listProducts = [];

listProducts.push({
    name:"Bike",
    price:"$"+860.00,
    image:"icons/card1.JPG",
    descripcion:"Round Self",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"PS5",
    price:"$"+460.00,
    image:"icons/card1.JPG",
    descripcion:"Round Self",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"PLATZI",
    price:"$"+1000.00,
    image:"icons/card1.JPG",
    descripcion:"Round Self",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"PS5",
    price:"$"+460.00,
    image:"icons/card1.JPG",
    descripcion:"Round Self",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"PLATZI",
    price:"$"+1000.00,
    image:"icons/card1.JPG",
    descripcion:"Round Self",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"PLATZI",
    price:"$"+1000.00,
    image:"icons/card1.JPG",
    descripcion:"Round Self",
    btnShop: "icons/bt_added_to_cart.svg",
});

function insertProducts(array){
    for(products of array){

        const divCard = document.createElement("div");
        divCard.classList.add("card");

        const divImgCard = document.createElement("div");
        divImgCard.classList.add("card-image");

        const imgCard = document.createElement("img");
        imgCard.setAttribute("src",products.image);
        imgCard.classList.add("card-image__img");
        imgCard.setAttribute("onclick","openDetailProduct()"); //funciona
        /* imgCard.addEventListener("click",openDetailProduct); */ //no funciona

        const divDescriptionCard = document.createElement("div");
        divDescriptionCard.classList.add("card-description");

        const divCardText = document.createElement("div");
        divCardText.classList.add("card-text");

        const priceProduct = document.createElement("h3");
        priceProduct.classList.add("card-text__price");
        priceProduct.textContent=products.price;
        const textProduct = document.createElement("h3");
        textProduct.classList.add("card-text__product");
        textProduct.textContent=products.descripcion;

        const imgAddShopCar = document.createElement("img");
        imgAddShopCar.setAttribute("src",products.btnShop);

        sectionProducts.append(divCard);
        divCard.append(divImgCard,divDescriptionCard);
        divImgCard.append(imgCard);
        divDescriptionCard.append(divCardText,imgAddShopCar);
        divCardText.append(priceProduct,textProduct);

        //otra forma

        /* const contentListProducts = `
        <div class="card">
            <div class="card-image">
                <img src=${products.image} alt="round shelf" class="card-image__img">
            </div>
            <div class="card-description">
                <div class="card-text">
                    <h3 class="card-text__price">${products.price}</h3>
                    <p class="card-text__product">${products.descripcion}</p>
                </div>
                <img src=${products.btnShop} alt="Add_to_cart_img" class="card-description__img">
            </div>
        </div>
        `

        sectionProducts.innerHTML += contentListProducts; */
    }
}

insertProducts(listProducts);

/*ABRIR Y CERRAR VISTA DE DETALLE DE PRODUCTO*/
iconCloseDetailProduct.addEventListener("click",closeDetailProduct);

function closeDetailProduct(){
    detailProduct.classList.add("hidden");
}

function openDetailProduct(){
    detailProduct.classList.remove("hidden");
    if(!orderProducts.classList.contains("hidden")){
        orderProducts.classList.add("hidden");
    };
    if(!menuNav.classList.contains("hidden")){
        menuNav.classList.add("hidden");
    };
}
