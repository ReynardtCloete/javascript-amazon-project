import {addToCart, cart, loadFromStorage, updateDeliveryOption} from '../../data/cart.js'; //cart is loaded here, so after we mock below, cart must be reloaded//

describe('test suite: addToCart', () => {

    it('adds existing product to the cart', () => {

        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1',
            }]);
        });
 
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); //Just take random product id//
        expect(cart.length).toEqual(1); 
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); //Check how many times this mocked method was called//
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);

    });

    it('adds a new product to the cart', () => {
        //Also mock local storage.set item, we don't want to affect real local storage//
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => { 
            return JSON.stringify([]);  
        }); 

        loadFromStorage(); //Reload cart to bring the fake into effect, setting cart to []//

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); //Just take random product id//
        expect(cart.length).toEqual(1); 
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); //Check how many times this mocked method was called//
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });

});