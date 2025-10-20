import {formatCurrency} from '../../scripts/utils/money.js';

//Create Test Suite//
describe('test suite: formatCurrency', () => {

    it('converts cents into dollars', () => { //name of test//
        expect(formatCurrency(2095)).toEqual('20.95'); //compares like if statement//
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});