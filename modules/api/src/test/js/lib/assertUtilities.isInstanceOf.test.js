import {isInstanceOf} from "../../../main/js/lib/assertUtilities.js";
import IllegalArgumentError from "../../../main/js/lib/IllegalArgumentError.js";

class TestClass {
    constructor() {
    }
}

class AnotherTestClass {
    constructor() {
    }
}


describe('isInstanceOf()', () => {
    // not explicitly testing isDefined(); notNull test includes this test.
    [
        {key: 'a null value and null type', value: null, type: null},
        {key: 'a null value and null type', value: null, type: AnotherTestClass},
        {key: 'a null type', value: new TestClass(), type: null},
        {key: 'a value of different class type', value: new TestClass(), type: AnotherTestClass},
    ].forEach(({key, value, type}) => {
        it(`throws IllegalArgumentError if ${key} value is given.`, () => {
            expect(() => isInstanceOf(value, type)).toThrow(IllegalArgumentError);
        });
    })

    it('does not throw an error if the given value is an instance of the type to test.', () => {
        expect(() => isInstanceOf(new TestClass(), TestClass)).not.toThrow();
    });
});
