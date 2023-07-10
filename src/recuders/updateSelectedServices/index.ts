import {ServiceType} from "../../typedef";
import {ActionType} from "./typedef";
import {updateSelectedServicesActionHandlers} from "./handlers";

export const updateSelectedServices = (
    previouslySelectedServices: ServiceType[],
    action: { type: ActionType; service: ServiceType }
): ServiceType[] => updateSelectedServicesActionHandlers.get(action.type)(previouslySelectedServices, action);
