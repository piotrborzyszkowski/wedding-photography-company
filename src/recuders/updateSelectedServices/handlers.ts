import {ActionHandler, ActionType} from "./typedef";
import {updateSelectedServicesSelect} from "./select";
import {updateSelectedServicesSelectDeselect} from "./deselect";

export const updateSelectedServicesActionHandlers = new Map<ActionType, ActionHandler>();
updateSelectedServicesActionHandlers.set("Select", updateSelectedServicesSelect);
updateSelectedServicesActionHandlers.set("Deselect", updateSelectedServicesSelectDeselect);

