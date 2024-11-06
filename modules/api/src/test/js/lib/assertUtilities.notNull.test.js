import {isString, notNull} from "../../../main/js/lib/assertUtilities.js";
import IllegalArgumentError from "../../../main/js/lib/IllegalArgumentError.js";

describe('notNull()', () => {
    [
        { key: 'an undefined', wert: 'wert'},
        { key: 'a null', value: null}
    ].forEach(({key, value}) => {
        it(`throws IllegalArgumentError if ${key} value is given.`, () => {
            expect(() => isString(value)).toThrow(IllegalArgumentError);
        });
    });


    it('does not throw an error if the given value is defined.', () => {
        const aValue = 'value';
        expect(() => notNull('value')).not.toThrow();
        expect(() => notNull(aValue)).not.toThrow();
    });
});
