import {ServiceType} from "../../typedef";
import {isAllowedToUse} from "../../validators";
import {ActionHandler, ActionType} from "./typedef";

export const updateSelectedServicesSelect: ActionHandler = (previouslySelectedServices: ServiceType[], action: { type: ActionType; service: ServiceType }): ServiceType[] => {
    if (previouslySelectedServices.indexOf(action.service) >= 0 || !isAllowedToUse(action.service, previouslySelectedServices))
        return [...previouslySelectedServices];
    else
        return [...previouslySelectedServices, action.service];
};
