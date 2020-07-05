/* global require, test, expect */
const plural = require("./index");

test("Год", () => {
    // Loop should start here

    for (let age = 1; age <= 1000; age++) {
        if (age % 10 === 1 && age % 100 != 11) {
            expect(plural(age)).toBe(" год"); // this inside loop
        }
    }
    // Loop should end here
});

test("Года", () => {
    // Loop should start here

    for(let age = 1; age <= 1000; age ++) {
        if( age % 10 >= 2 &&
            age % 10 <= 4 &&
            (age % 100 < 10 || age % 100 >=20)) {
                expect(plural(age)).toBe(" года"); // this inside loop
            }
    }
    // Loop should end here
});

test("Лет", () => {
    // Loop should start here

    for(let age = 1; age <= 1000; age ++) {
        if( age % 10 >= 5 &&
            age % 10 <= 10 &&
            age % 100 >= 5 &&
            age % 100 <= 10
           ) {
                expect(plural(age)).toBe(" лет"); // this inside loop
            }
    }
    // Loop should end here
});
