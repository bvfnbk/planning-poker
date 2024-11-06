import {isDefined} from "../../../main/js/lib/assertUtilities.js";
import IllegalArgumentError from "../../../main/js/lib/IllegalArgumentError.js";

describe('isDefined()', () => {
    it('throws IllegalArgumentError if an undefined value is given.', () => {
        expect(() => isDefined()).toThrow(IllegalArgumentError);
    });

    it('does not throw an error if the given value is defined.', () => {
        const aValue = 'value';
        expect(() => isDefined('value')).not.toThrow();
        expect(() => isDefined(aValue)).not.toThrow();
    });
});
