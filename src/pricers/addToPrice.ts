import {Price} from "../typedef";

export const addToPrice = (totalPrice: Price, price: Price) => {
    if (!totalPrice || !price)
        throw ("prices must be defined")
    if (isNaN(totalPrice.finalPrice) || isNaN(totalPrice.basePrice) || isNaN(price.finalPrice) || isNaN(price.basePrice))
        throw ("prices must be valid")

    totalPrice.basePrice += price.basePrice;
    totalPrice.finalPrice += price.finalPrice;
}

