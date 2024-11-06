import {isString} from "../../../main/js/lib/assertUtilities.js";
import IllegalArgumentError from "../../../main/js/lib/IllegalArgumentError.js";

describe('isString()', () => {
    // not explicitly testing isDefined(); notNull test includes this test.
    [
        { key: 'a null', value: null},
        { key: 'a number', value: 1 },
        { key: 'an array', value: []},
        { key: 'an object', value: {}},
    ].forEach(({key,value}) => {
        it(`throws IllegalArgumentError if ${key} value is given.`, () => {
            expect(() => isString(value)).toThrow(IllegalArgumentError);
        });
    })

    it('does not throw an error if the given value is a string.', () => {
        const aValue = 'value';
        expect(() => isString('value')).not.toThrow();
        expect(() => isString(aValue)).not.toThrow();
    });
});
