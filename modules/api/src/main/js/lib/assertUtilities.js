import IllegalArgumentError from "./IllegalArgumentError.js";

/*
 * This module provides helper functions to quickly validate input parameters.
 */



/**
 * Throws whatever the supplier function returns if given test function does not provide a `true` value.
 *
 * @param testFn The test function providing the `boolean`.
 * @param supplierFn The error supplier function.
 */
const requireValueToBe = (testFn, supplierFn) => {
    let requirementSatisfied = false;
    try {
        requirementSatisfied = testFn();
    } catch (error) {
        requirementSatisfied = false;
    }

    if (!requirementSatisfied) {
        throw supplierFn();
    }
}

/**
 * Asserts given value is defined.
 *
 * @param value The value to test.
 * @throws IllegalArgumentError if given value is not defined.
 */
const isDefined = (value) => {
    requireValueToBe(
        () => typeof value !== 'undefined',
        () => new IllegalArgumentError(`Given value is not defined.`)
    );
};

/**
 * Tests given value to be not `null`.
 *
 * @param value
 * @throws IllegalArgumentError if given value is not defined or `null`.
 */
const notNull = (value) => {
    isDefined(value);
    requireValueToBe(
        () => value !== null,
        () => new IllegalArgumentError(`Given value is null.`)
    );
};

/**
 * Tests given value to be a `string`.
 *
 * @param value the value to test.
 * @throws IllegalArgumentError if given value is not defined, `null` or no `string`.
 */
const isString = (value) => {
    notNull(value);
    requireValueToBe(
        () => typeof value === 'string',
        () => new IllegalArgumentError(`Given value is no string.`)
    );
};

/**
 * Tests given value to be an integral  `number`
 *
 * @param value the value to test.
 * @throws IllegalArgumentError if given value is not defined, `null` or no integral `number`
 */
const isInteger = (value) => {
    notNull(value);
    requireValueToBe(
        () => Number.isInteger(value),
        () => new IllegalArgumentError(`Given value is integer.`)
    );
}

/**
 * Tests given value if it is an instance of the given type using the `instanceof` operator.
 *
 * **Example**
 *
 * ```javascript
 * class TestClass {}
 *
 * isInstance(new TestClass(), TestClass);
 * ```
 *
 * @param value The value to test.
 * @param type The class _symbol_to test for; must not be `null` or undefined.
 * @throws IllegalArgumentError if given value is not defined, `null`, the given type is not defined or `null` or the
 *                              given value is no instance of the given type.
 */
const isInstanceOf = (value, type) => {
    notNull(value);
    notNull(type);

    requireValueToBe(
        () => value instanceof type,
        () => new IllegalArgumentError(`Given value is no instance of required type.`)
    );
};


export {
    isDefined,
    notNull,
    isString,
    isInteger,
    isInstanceOf
};
