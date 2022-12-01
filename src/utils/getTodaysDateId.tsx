import { config } from "../config";

export function getDateId(date: Date = new Date(), _config = config) {
    date = addHours(-_config.hourToStartNewDay)
    return date.getFullYear().toString() +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        date.getDate().toString().padStart(2, "0");
}

export function addHours(h: number, date: Date = new Date()) {
    return new Date(date.getTime() + (h * 60 * 60 * 1000))
}
