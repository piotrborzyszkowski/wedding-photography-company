import {addToPrice} from "./addToPrice";
import {Price, ServiceType} from "../typedef";
import {isAllowedToUse} from "../validators";

export const pricer2020 = (selectedServices: ServiceType[]): Price => {
    const selectedServicesSet = new Set(selectedServices);
    const price = { basePrice: 0, finalPrice: 0 };

    if (selectedServicesSet.has("Photography") && selectedServicesSet.has("VideoRecording"))
        addToPrice(price, {basePrice: 1700 + 1700, finalPrice: 2200})
    else {
        if (selectedServicesSet.has("Photography"))
            addToPrice(price, {basePrice: 1700, finalPrice: 1700});
        if (selectedServicesSet.has("VideoRecording"))
            addToPrice(price, {basePrice: 1700, finalPrice: 1700});
    }

    if (selectedServicesSet.has("WeddingSession")) {
        if (selectedServicesSet.has("Photography") || selectedServicesSet.has("VideoRecording"))
            addToPrice(price, {basePrice: 600, finalPrice: 300});
        else
            addToPrice(price, {basePrice: 600, finalPrice: 600});
    }

    if (selectedServicesSet.has("BlurayPackage") && isAllowedToUse("BlurayPackage", selectedServices))
        addToPrice(price, {basePrice: 300, finalPrice: 300});

    if (selectedServicesSet.has("TwoDayEvent") && isAllowedToUse("TwoDayEvent", selectedServices))
        addToPrice(price, {basePrice: 400, finalPrice: 400});

    return price;
}