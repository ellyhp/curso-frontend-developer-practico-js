const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const closeAbout = document.querySelector('.close--about');
const productDetailAbout = document.querySelector('.product-detail--about');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeAbout.addEventListener('click', toggleClosedAbout);



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProductos(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductCar)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName)
     
        const productInfoFigure = document.createElement('Figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productImgCart)
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
     
     
}

renderProductos(productList);


function toggleProductCar(){
  const isAsideClosed = aside.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.toggle('inactive');
  if(!isAsideClosed){
    aside.classList.toggle('inactive');
  }else{
    productDetailAbout.classList.toggle('inactive'); 
  }
  if(!isMobileMenuClosed){
    mobileMenu.classList.toggle('inactive');
  }
}


function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.toggle('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  const isproductoDetailAboutClosed = productDetailAbout.classList.contains('inactive');
  if (!isAsideClosed) {
    aside.classList.toggle('inactive'); 
  }
  if(!isproductoDetailAboutClosed){
    productDetailAbout.classList.toggle('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isproductoDetailAboutClosed = productDetailAbout.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle('inactive'); 
  }

  if(!isproductoDetailAboutClosed){
    productDetailAbout.classList.toggle('inactive');
  }
  
  aside.classList.toggle('inactive');
}

function toggleClosedAbout(){
  productDetailAbout.classList.toggle('inactive');
}


