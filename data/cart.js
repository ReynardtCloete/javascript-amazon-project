//My Cart/////////////
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) { //If the cart is empty, we just give it a default value.//
  cart = [{ //No need to save all the info for a product here and in the product.js, we only need the id, and then search//
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }]; 
}

//Cart Local Storage - Because cart is a variable, the page resets when you refresh.//
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

//Add To Cart Function////////////////
export function addToCart(productId) {

  let matchingItem; 

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem; //Basically just put 'cartItem' into variable 'matchingItem', which is just another name pointing to same object//
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1; 
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage(); //Whenever we update cart, save to storage.//
}

//Remove From Cart Function//
export function removeFromCart(productId) { //The productId we want to remove, we only push what's not equal to it into newArray.//
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage(); //Whenever we delete cart item, save to storage.//
}

//Update Delivery Option////////////////////////////////////
export function updateDeliveryOption(productId, deliveryOptionId) {
let matchingItem; 

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem; 
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}