import {Price, ServiceType, ServiceYear} from "../typedef";

export type Pricer = (selectedServices: ServiceType[]) => Price;
export type Pricers = Map<ServiceYear, Pricer>;
