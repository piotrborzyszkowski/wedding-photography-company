import {Price, ServiceType, ServiceYear} from "../typedef";
import {pricers} from "./pricers";

export const calculatePrice = (
    selectedServices: ServiceType[],
    selectedYear: ServiceYear
): Price => pricers.get(selectedYear)(selectedServices);
