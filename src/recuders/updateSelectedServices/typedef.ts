import {ServiceType} from "../../typedef";

export type ActionType = "Select" | "Deselect";
export type ActionHandler = (previouslySelectedServices: ServiceType[], action: { type: ActionType; service: ServiceType }) => ServiceType[];
