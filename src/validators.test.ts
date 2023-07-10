import {ServiceType} from "./typedef";
import {isAllowedToUse} from "./validators";

describe("isAllowedToUse", () => {
    test("BlurayPackage is not allowed without VideoRecording", () => {
        const result = isAllowedToUse("BlurayPackage", ["Photography", "TwoDayEvent", "WeddingSession"]);
        expect(result).toBe(false);
    });

    test("TwoDayEvent requires either VideoRecording or Photography (or both)", () => {
        const noRequiredResult = isAllowedToUse("TwoDayEvent", ["BlurayPackage", "WeddingSession"]);
        const photographyResult = isAllowedToUse("TwoDayEvent", ["Photography", "BlurayPackage", "WeddingSession"]);
        const videoRecordingResult = isAllowedToUse("TwoDayEvent", ["VideoRecording", "BlurayPackage", "WeddingSession"]);
        const allRequiredResult = isAllowedToUse("TwoDayEvent", ["Photography", "VideoRecording", "BlurayPackage", "WeddingSession"]);

        expect(noRequiredResult).toBe(false);
        expect(photographyResult).toBe(true);
        expect(videoRecordingResult).toBe(true);
        expect(allRequiredResult).toBe(true);
    });

    test.each(["Photography", "VideoRecording", "WeddingSession"])("%s has no dependencies - is allowed even when no others are selected", (service: ServiceType) => {
        const none = [];

        const result = isAllowedToUse(service, none);
        expect(result).toBe(true);
    });

    test.each(["Photography", "VideoRecording", "BlurayPackage", "TwoDayEvent", "WeddingSession"])("%s is allowed when all others are selected", (service: ServiceType) => {
        const allExcept = new Set<ServiceType>(["Photography", "VideoRecording", "BlurayPackage", "TwoDayEvent", "WeddingSession"]);
        allExcept.delete(service);

        const result = isAllowedToUse(service, Array.from(allExcept));
        expect(result).toBe(true);
    });
});
