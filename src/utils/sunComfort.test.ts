import { sunComfort } from "./sunComfort";

describe('Sun Comfort', () => {

    test('Start Temp Unmodified', () => {
        expect(sunComfort({ startTempF: 73 })).toBe(73);
    });

    test('Just Sun', () => {
        expect(sunComfort({ startTempF: 73, sunFraction: 1 })).toBe(88);
    });

    test('Some Clouds', () => {
        expect(sunComfort({ startTempF: 73, sunFraction: .5 })).toBe(80.5);
    });

    test('max wind', () => {
        expect(sunComfort({ startTempF: 73, windMph: 15 })).toBe(80.5);
    });
});