import {addToCart, cart} from '../../data/cart.js';

describe('test suite: addToCart', () => {

    it('adds existing product to the cart', () => {

    });

    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => { //We're spying on localStorage and call fake :)//
            return JSON.stringify([]); //Get it to return empty array//
        }); 

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); //Just take first product id//
        expect(cart.length).toEqual(1); //Sometimes there are items in cart, so we do a Mock//
    })

});