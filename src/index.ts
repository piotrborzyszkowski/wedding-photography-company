import Price from "./Price";
import pricers from "./pricers";
import {ServiceType, ServiceYear} from "./typedef";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: "Select" | "Deselect"; service: ServiceType }
) => [];

export const calculatePrice = (selectedServices: ServiceType[], selectedYear: ServiceYear): Price => {
    return pricers.get(selectedYear)(new Set(selectedServices));
};
