export function sunComfort(
    {
        startTempF,
        idealTempF = 73,
        sunFraction = 0,
        sunFullAddTempF = 15,
        windMph = 0
    }: {
        startTempF: number
        idealTempF?: number
        sunFraction?: number
        sunFullAddTempF?: number
        windMph?: number
    }) {

    let adjustedTemp = startTempF;
    adjustedTemp += sunFullAddTempF * sunFraction
    return adjustedTemp;
}
