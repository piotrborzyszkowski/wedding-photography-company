import {ActionType} from "./typedef";
import {updateSelectedServicesActionHandlers} from "./handlers";

const allowedKeys = ["Select", "Deselect"];

describe.each(allowedKeys)("handler (%i)", (actionType: ActionType) => {
    test("should exist", () => {
        const pricer = updateSelectedServicesActionHandlers.get(actionType);
        expect(pricer).not.toBeUndefined();
        expect(typeof pricer).toBe("function");
    });
});

describe("other handlers", () => {
    test("should not exist", () => {
        expect(updateSelectedServicesActionHandlers.size).toBe(allowedKeys.length);
    })
});
