import {cart, addToCart} from '../data/cart.js'; 
import {products} from '../data/products.js';

//Accumulator function//
let productHTML = ''; 

//Generate HTML//
products.forEach((productItem) => {

  productHTML += 
    
  `
  <div class="product-container
    <div class="product-image-container">
      <img class="product-image"
        src=${productItem.image}>
    </di
    <div class="product-name limit-text-to-2-lines">
      ${productItem.name}
    </di
    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${productItem.rating.stars * 10}.png"> 
      <div class="product-rating-count link-primary">
        ${productItem.rating.count}
      </div>
    </di
    <div class="product-price">
      $${(productItem.priceCents / 100).toFixed(2)} 
    </di
    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </di
    <div class="product-spacer"></di
    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </di
    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${productItem.id}">
      Add to Cart
    </button>
  </div>
  
  `;

});

//Generate HTML//
document.querySelector('.js-product-grid').innerHTML = productHTML;

//This function updates the webpage so we're keeping it here and not moving it to cart.js//
///////////////////////////////
function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

//////////////////////////////////////////////////////////////////
document.querySelectorAll('.js-add-to-cart').forEach((button) => { 
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; 
    addToCart(productId);
    updateCartQuantity();
  });
});