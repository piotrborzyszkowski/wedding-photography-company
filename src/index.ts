import pricers from "./pricers";
import {Price, ServiceType, ServiceYear} from "./typedef";
import {isAllowedToUse} from "./validators";

type ActionType = "Select" | "Deselect";

const updateSelectedServicesSelect = (previouslySelectedServices: ServiceType[], action: { type: ActionType; service: ServiceType }): ServiceType[] => {
    if (previouslySelectedServices.indexOf(action.service) >= 0 || !isAllowedToUse(action.service, previouslySelectedServices))
        return [...previouslySelectedServices];
    else
        return [...previouslySelectedServices, action.service];
};

const updateSelectedServicesSelectDeselect = (previouslySelectedServices: ServiceType[], action: { type: ActionType; service: ServiceType }): ServiceType[] => {
    const linkedServices = new Set<ServiceType>();

    // in more complex scenarios it would probably be worth to use dependency metadata instead of hardcoding the dependencies
    switch (action.service) {
        case "VideoRecording":
            linkedServices.add("BlurayPackage");
            if (previouslySelectedServices.indexOf("Photography") < 0)
                linkedServices.add("TwoDayEvent");
            break;

        case "Photography":
            if (previouslySelectedServices.indexOf("VideoRecording") < 0)
                linkedServices.add("TwoDayEvent");
            break;
    }

    return previouslySelectedServices.filter((value: ServiceType) => (action.service !== value && !linkedServices.has(value)));
};

const updateSelectedServicesActionHandlers = new Map<ActionType, (previouslySelectedServices: ServiceType[], action: { type: ActionType; service: ServiceType }) => ServiceType[]>();
updateSelectedServicesActionHandlers.set("Select", updateSelectedServicesSelect);
updateSelectedServicesActionHandlers.set("Deselect", updateSelectedServicesSelectDeselect);

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: ActionType; service: ServiceType }
): ServiceType[] => updateSelectedServicesActionHandlers.get(action.type)(previouslySelectedServices, action);

export const calculatePrice = (
    selectedServices: ServiceType[],
    selectedYear: ServiceYear
): Price => pricers.get(selectedYear)(selectedServices);
