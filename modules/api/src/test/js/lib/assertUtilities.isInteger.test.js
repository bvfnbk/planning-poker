import {isInteger} from "../../../main/js/lib/assertUtilities.js";
import IllegalArgumentError from "../../../main/js/lib/IllegalArgumentError.js";

describe('isInteger()', () => {
    // not explicitly testing isDefined(); notNull test includes this test.
    [
        {key: 'a null', value: null},
        {key: 'a string', value: 'value'},
        {key: 'a decimal number', value: 1.24},
        {key: 'an array', value: []},
        {key: 'an object', value: {}},
    ].forEach(({key, value}) => {
        it(`throws IllegalArgumentError if ${key} value is given.`, () => {
            expect(() => isInteger(value)).toThrow(IllegalArgumentError);
        });
    })

    it('does not throw an error if the given value is an integer number .', () => {
        expect(() => isInteger(1234)).not.toThrow();
    });
});
