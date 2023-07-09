import {ServiceType} from "./typedef";

// simplified implementation, might depend on year as well
export const isAllowedToUse = (service: ServiceType, existingServices: ServiceType[]): boolean => {
    switch (service) {
        case "BlurayPackage":
            return existingServices.indexOf("VideoRecording") >= 0;

        case "TwoDayEvent":
            return !!existingServices.find(s => s === "Photography" || s === "VideoRecording");

        default:
            return true;
    }
}
