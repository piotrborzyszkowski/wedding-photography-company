import {ServiceType} from "../../typedef";
import {ActionHandler, ActionType} from "./typedef";

export const updateSelectedServicesSelectDeselect: ActionHandler = (previouslySelectedServices: ServiceType[], action: { type: ActionType; service: ServiceType }): ServiceType[] => {
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
