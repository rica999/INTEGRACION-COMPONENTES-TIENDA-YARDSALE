const iconArrow = document.querySelector("#iconArrow");
const menuNav = document.querySelector("#menuNav");
const homeContainer = document.querySelector("#homeContainer");

const iconMenu = document.querySelector("#iconMenu");
const menuMobile = document.querySelector("#menuMobile");
const iconClose = document.querySelector("#iconClose");

const iconShop = document.querySelector("#iconShop");
const orderProducts = document.querySelector("#orderProducts");
const iconMenuShopCar = document.querySelector("#iconMenuShopCar");
const iconArrowShopCar = document.querySelector("#iconArrowShopCar");

const sectionProducts = document.querySelector("#sectionProducts");

const detailProduct = document.querySelector("#detailProduct");

const shoopingContent = document.querySelector("#shoopingContent");

const numberOrders = document.querySelector("#numberOrders");

const totalPrice = document.querySelector("#totalPrice");

/*ABRIR Y CERRAR VISTA DE MENU NAVBAR*/
iconArrow.addEventListener("click",toggleMenuNav);

function toggleMenuNav(){
    menuNav.classList.toggle("hidden");
    homeContainer.classList.toggle("dark");
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
    if(!menuNav.classList.contains("hidden")){
        menuNav.classList.add("hidden");
        homeContainer.classList.toggle("dark");
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
    name:"Freezer",
    price:360.00,
    image:"images/freezer.jpeg",
    descripcion:"Freezer",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"Cell",
    price:460.00,
    image:"images/cell.jpg",
    descripcion:"Cell",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"Majin Buu",
    price:600.00,
    image:"images/majinbuu.jpeg",
    descripcion:"Majin Buu",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"Buu Malo",
    price:900.00,
    image:"images/buu malo.jpg",
    descripcion:"Buu Malo",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"Baby Vegeta",
    price:1000.00,
    image:"images/baby.jpg",
    descripcion:"Baby Vegeta",
    btnShop: "icons/bt_added_to_cart.svg",
});
listProducts.push({
    name:"Jiren",
    price:5000.00,
    image:"images/jiren.png",
    descripcion:"Jiren",
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
        //imgCard.setAttribute("onclick","openDetailProduct()"); //funciona
        imgCard.addEventListener("click",()=>{
            detailProduct.classList.remove("hidden");
                if(!orderProducts.classList.contains("hidden")){
                    orderProducts.classList.add("hidden");
                };
                if(!menuNav.classList.contains("hidden")){
                    menuNav.classList.add("hidden");
                };
        }); //no funciona si llamo a la función pero si funciona si es que escribo la función aca

        const divDescriptionCard = document.createElement("div");
        divDescriptionCard.classList.add("card-description");

        const divCardText = document.createElement("div");
        divCardText.classList.add("card-text");

        const priceProduct = document.createElement("h3");
        priceProduct.classList.add("card-text__price");
        priceProduct.textContent="$"+products.price;
        const textProduct = document.createElement("p");
        textProduct.classList.add("card-text__product");
        textProduct.textContent=products.descripcion;

        const imgAddShopCar = document.createElement("img");
        imgAddShopCar.setAttribute("src",products.btnShop);
        imgAddShopCar.style.cursor = "pointer";
        imgAddShopCar.setAttribute("title","Agregar al carrito");
        imgAddShopCar.classList.add("card-description__img");
        imgAddShopCar.classList.add("card-description__img--secondary");

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

//AGREGAR PRODUCTOS AL CARRITO DE COMPRAS

const imgShopCar = document.querySelectorAll(".card-description__img--secondary");
const imgCards = document.querySelectorAll(".card-image__img");
let numberOfOrdersShop = 0;
let totalPay = 0;
let counterProducts = 0;

for (let i = 0;i<listProducts.length;i++) {
    imgShopCar[i].addEventListener("click",()=>{
        const cardProductShopCar =
        `
        <div class="shopping-card">
            <div class="order-product">
                <img src="${listProducts[i].image}" alt="Round-shelf" class="order-product__img">
                <p class="order-product__name">${listProducts[i].descripcion}</p>
            </div>
            <p class="order-card__price">$${listProducts[i].price}</p>
            <img src="icons/icon_close.png" alt="close" class="close-img-shop" onclick="deleteProductShoppingCar(${counterProducts},${i})">
        </div>
        `
        shoopingContent.innerHTML += cardProductShopCar;
        numberOfOrdersShop ++;
        numberOrders.innerText=numberOfOrdersShop;
        numberOrders.classList.remove("hidden");

        

        totalPay = totalPay + listProducts[i].price;
        totalPrice.innerText="$"+ totalPay;

        counterProducts++;
    });
    //VISTA DE PRODUCTOS
    imgCards[i].addEventListener("click",()=>{
    const viewDetailProduct =
    `
    <div class="details-products-container-body">
        <div class="product-picture">
            <img src="${listProducts[i].image}" alt="Retro-refrigerator" class="product-img">
            <img src="icons/icon_close.png" alt="close" class="close-img" onclick="closeDetailProduct()">
            <div class="points">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="product-description">
            <p class="product-description__price">$${listProducts[i].price}</p>
            <p class="product-description__name">${listProducts[i].name}</p>
            <p class="product-description__text">${listProducts[i].descripcion}</p>
            <button class="product-description__button"><img src="icons/icon_shopping_cart.svg" alt="add-cart" class="cart-img"> Add to cart</button>
        </div>
    </div>
    `;
    detailProduct.innerHTML += viewDetailProduct;
    });
}

function closeDetailProduct(){
    detailProduct.classList.add("hidden");
}

/* function openDetailProduct(){
    detailProduct.classList.remove("hidden");
    if(!orderProducts.classList.contains("hidden")){
        orderProducts.classList.add("hidden");
    };
    if(!menuNav.classList.contains("hidden")){
        menuNav.classList.add("hidden");
    };
}
*/
//ELIMINAR PRODUCTOS AL CARRITO DE COMPRAS
function deleteProductShoppingCar(number,idProduct){
        if (shoopingContent.hasChildNodes()) {
            if(number < shoopingContent.childElementCount){
                shoopingContent.removeChild(shoopingContent.children[number]);
                counterProducts--;
                totalPay = totalPay - listProducts[idProduct].price;
                totalPrice.innerText="$"+ totalPay;
                numberOfOrdersShop --;
                numberOrders.innerText=numberOfOrdersShop;
                if(numberOfOrdersShop == 0){
                    numberOrders.classList.add("hidden");
                }
            }
            else{
                number = shoopingContent.childElementCount-1;
                shoopingContent.removeChild(shoopingContent.children[number]);
                counterProducts--;
                totalPay = totalPay - listProducts[idProduct].price;
                totalPrice.innerText="$"+ totalPay;
                numberOfOrdersShop --;
                numberOrders.innerText=numberOfOrdersShop;
                if(numberOfOrdersShop == 0){
                    numberOrders.classList.add("hidden");
                }
            }
        }
        console.log(number);
}