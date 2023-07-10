import {Pricer, Pricers} from "./typedef";
import {ServiceYear} from "../typedef";
import {pricer2020} from "./pricer-2020";
import {pricer2021} from "./pricer-2021";
import {pricer2022} from "./pricer-2022";

export const pricers: Pricers = new Map<ServiceYear, Pricer>();
pricers.set(2020, pricer2020);
pricers.set(2021, pricer2021);
pricers.set(2022, pricer2022);
