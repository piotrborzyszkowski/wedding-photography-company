import {ServiceYear} from "../typedef";
import {pricers} from "./pricers";

const allowedKeys = [2020, 2021, 2022];

describe.each(allowedKeys)("pricer (%i)", (year: ServiceYear) => {
    test("should exist", () => {
        const pricer = pricers.get(year);
        expect(pricer).not.toBeUndefined();
        expect(typeof pricer).toBe("function");
    });
});

describe("other pricers", () => {
    test("should not exist", () => {
        expect(pricers.size).toBe(allowedKeys.length);
    })
});
