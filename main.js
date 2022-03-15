import {goToTop, contentWayPoint} from './moduleJS/webEffect.js';
import{allProducts} from './moduleJS/allProducts.js';
import{showAllProducts, showFilterProducts} from './moduleJS/showAndFilterProducts.js';
import{onloadCartNumber,addToCartButton,displayCart,afterPayButton} from './moduleJS/shoppingCart.js'
import{onFormSubmit} from './moduleJS/checkOut.js'

// Web Effect
goToTop();
contentWayPoint();
// Shopping Cart
onloadCartNumber();
displayCart();
// Show And Filter Products
if (window.location.href == "http://127.0.0.1:5500/TruongHuuNhan_501200661_CD20CT13/Final_Project/menu.html") {
  showAllProducts(allProducts);
  showFilterProducts();
  addToCartButton(allProducts);
}
if (window.location.href == "http://127.0.0.1:5500/TruongHuuNhan_501200661_CD20CT13/Final_Project/contact.html") {
  onFormSubmit();
}
if (window.location.href == "http://127.0.0.1:5500/TruongHuuNhan_501200661_CD20CT13/Final_Project/cart.html") {
  afterPayButton();
}
console.log("Page path is: " + window.location.pathname);
console.log("Page path is: " + window.location.href);

