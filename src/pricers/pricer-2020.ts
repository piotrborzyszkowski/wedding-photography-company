import Price from "../Price";
import {addToPrice} from "./addToPrice";
import {ServiceType} from "../typedef";

export const pricer2020 = (selectedServicesSet: Set<ServiceType>): Price => {
    let price = { basePrice: 0, finalPrice: 0 };

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

    if (selectedServicesSet.has("BlurayPackage") && selectedServicesSet.has("Photography"))
        addToPrice(price, {basePrice: 300, finalPrice: 300});

    if (selectedServicesSet.has("TwoDayEvent")
        && (selectedServicesSet.has("Photography") || selectedServicesSet.has("VideoRecording"))
    )
        addToPrice(price, {basePrice: 400, finalPrice: 400});

    return price;
}