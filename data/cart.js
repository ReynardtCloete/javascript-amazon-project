export const cart = []; //Export allows us to access this variable outside cart.js//

///////////////////////////////
export function addToCart(productId) {

  let matchingItem; 

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem; //Basically just put 'item' into variable 'matchingItem', which is just another name pointing to same object//
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1; 
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}