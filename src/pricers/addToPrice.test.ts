import {addToPrice} from "./addToPrice";
import {Price} from "../typedef";

describe("addToPrice", () => {
    test("should modify the existing object", () => {
        const totalPrice = {finalPrice: 1, basePrice: 2};
        addToPrice(totalPrice, {finalPrice: 3, basePrice: 4});
        expect(totalPrice).toStrictEqual({finalPrice: 4, basePrice: 6});
    });

    test("should throw for invalid input price", () => {
        expect(() => addToPrice({finalPrice: 0, basePrice: 0}, null)).toThrow();
        expect(() => addToPrice({finalPrice: 0, basePrice: 0}, undefined)).toThrow();
        expect(() => addToPrice({finalPrice: 0, basePrice: 0}, {a: 0, b: 0} as any as Price)).toThrow();
    })

    test("should throw for invalid total price", () => {
        expect(() => addToPrice(null, {finalPrice: 0, basePrice: 0})).toThrow();
        expect(() => addToPrice(undefined, {finalPrice: 0, basePrice: 0})).toThrow();
        expect(() => addToPrice({a: 0, b: 0} as any as Price, {finalPrice: 0, basePrice: 0})).toThrow();
    })
});
