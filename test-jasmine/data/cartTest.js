import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart', () => {

    it('adds existing product to the cart', () => {

    });

    it('adds a new product to the cart', () => {

        spyOn(localStorage, 'getItem').and.callFake(() => { 
            return JSON.stringify([]);  
        }); 
        loadFromStorage(); //When this is called here in test, the spy intercepts it and fakes the result, returning [] in the cart//
        //[] is a truthy value so second part of this function (!cart) does not run. the 2 default items are overwritten by empty array//

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); //Just take first product id//
        expect(cart.length).toEqual(1); //Sometimes there are items in cart, so we do a Mock//
    })

});