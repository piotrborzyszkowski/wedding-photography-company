import {Price} from "../typedef";

export const addToPrice = (totalPrice: Price, price: Price) => {
    totalPrice.basePrice += price.basePrice;
    totalPrice.finalPrice += price.finalPrice;
}

