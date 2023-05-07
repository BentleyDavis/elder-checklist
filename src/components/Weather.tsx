import { Button } from 'react-bootstrap';
import './weather.css';
import { useEffect, useState } from "react";
import React from 'react';

const defaultShow = (new URLSearchParams(window.location.search)).get("weather") !== null ? true : false;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
})

const textToEmoji: { [key: string]: string } = {
    // https://emojiterra.com/sky-weather/
    "Sunny": "☀️", //         Sun
    "Mostly Sunny": "🌤️", //  Sun Behind Small Cloud
    "Mostly Clear": "🌛",
    "Partly Sunny": "⛅", //  Sun Behind Cloud
    "Partly Cloudy": "🌥️", // Sun Behind Large Cloud
    "Mostly Cloudy": "☁️", // Cloud
    "Slight Chance Showers And Thunderstorms": "🌦️⚡", // Sun Behind Rain Cloud & High Voltage
}

async function getWeather() {
    const response = await fetch("https://api.weather.gov/gridpoints/FWD/86,114/forecast/hourly");
    const originlHourlyData = await response.json();
    const hourlyData: any = [];

    for (const hourData of originlHourlyData.properties.periods) {
        // const windMilesPerHour = parseInt(hourData.windSpeed.replaceAll(" mph", ""));

        const when = new Date(hourData.startTime)
        if (when.getDay() !== (new Date()).getDay()) break; // Exit when not today

        const hour = when.getHours();
        if (hour >= 7 && hour <= 10 + 12) { //between 7 AM and 10 PM
            hourData.windMPH = parseInt(hourData.windSpeed.replaceAll(" mph", ""))

            hourData.feelsInShade = celsiusToFarenheight(
                australianApparentTemperature(
                    farenheightToCelsius(hourData.temperature),
                    hourData.relativeHumidity.value,
                    hourData.windMPH / 2.237 // Convert to meters per second
                )
            ).toFixed(0);

            hourData.hourText = dateFormatter.format(new Date(hourData.startTime));
            hourData.emojiForecast = textToEmoji[hourData.shortForecast]

            hourlyData.push(hourData)
        }

        //             {
        //                 "number": 1,
        //                 "name": "",
        //                 "startTime": "2023-04-07T12:00:00-05:00",
        //                 "endTime": "2023-04-07T13:00:00-05:00",
        //                 "isDaytime": true,
        //                 "temperature": 57,
        //                 "temperatureUnit": "F",
        //                 "temperatureTrend": null,
        //                 "probabilityOfPrecipitation": {
        //                     "unitCode": "wmoUnit:percent",
        //                     "value": 5
        //                 },
        //                 "dewpoint": {
        //                     "unitCode": "wmoUnit:degC",
        //                     "value": 5
        //                 },
        //                 "relativeHumidity": {
        //                     "unitCode": "wmoUnit:percent",
        //                     "value": 55
        //                 },
        //                 "windSpeed": "10 mph",
        //                 "windDirection": "NE",
        //                 "icon": "https://api.weather.gov/icons/land/day/ovc,5?size=small",
        //                 "shortForecast": "Cloudy",
        //                 "detailedForecast": ""
        //             }

    }

    return hourlyData

}

export default function Weather({ elementData }: {
    elementData: any
}) {
    const [weather, setWeather] = useState([])
    const [show, setShow] = useState(defaultShow)


    useEffect(() => {

        async function _getWeather() {
            const hourlyData = await getWeather();
            setWeather((w) => {
                return hourlyData
            })
        }

        if (show) {
            _getWeather();

            const id = setInterval(_getWeather, 1000 * 60 * 60) // 1 hour

            return () => { clearInterval(id) };
        }
    }, [setWeather, show]);

    return <div className="row mt-2">
        <div className="col">
            <Button variant="primary" onClick={() => { setShow(!show) }}>
                {show ? "Hide" : "Show"} Weather
            </Button>
            {show &&
                <div className={`hourly ` + (elementData.level && `h${elementData.level}`)}>

                    {weather.length < 1 ?
                        <div>Gathering Weather Data...</div>
                        :
                        <table>
                            <thead>
                                <tr>
                                    <th>Hour</th>
                                    <th>Actual<br />Temp</th>
                                    <th>Feels in<br />Shade</th>
                                    <th colSpan={2}>Wind</th>
                                    <th>Humidity</th>
                                    <th>Precip</th>
                                    <th className='when-wide'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weather.map((h: any) => <React.Fragment key={h.startTime}>
                                    <tr >
                                        <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>{h.hourText}</td>
                                        <td style={{ textAlign: "right" }}>{h.temperature} °</td>
                                        <td style={{ textAlign: "right" }}>{h.feelsInShade} °</td>
                                        <td style={{ textAlign: "right", borderRight: "none", paddingRight: ".5em" }} >{h.windMPH}</td>
                                        <td style={{ borderLeft: "none", paddingLeft: "0" }}>{h.windDirection}</td>
                                        <td style={{ textAlign: "right" }}>{h.relativeHumidity.value} %</td>
                                        <td style={{ textAlign: "right" }}>{h.probabilityOfPrecipitation.value} %</td>
                                        <td className='when-wide'>
                                            {h.emojiForecast &&
                                                <div style={{
                                                    transform: 'scale(1.5)',
                                                    transformOrigin: 'center',
                                                    display: 'inline-block',
                                                    paddingRight: '.5em'
                                                }}
                                                    dangerouslySetInnerHTML={{ __html: h.emojiForecast }}
                                                ></div>
                                            }
                                            {h.shortForecast}
                                        </td>
                                    </tr>
                                    <tr className='when-narrow'>
                                        <td colSpan={7}>
                                            {h.emojiForecast &&
                                                <div style={{
                                                    transform: 'scale(1.5)',
                                                    transformOrigin: 'center',
                                                    display: 'inline-block',
                                                    paddingRight: '.5em'
                                                }}
                                                    dangerouslySetInnerHTML={{ __html: h.emojiForecast }}
                                                ></div>
                                            }
                                            {h.shortForecast}
                                        </td>
                                    </tr>
                                    <tr className='when-narrow'>
                                        <td colSpan={7} style={{ border: "none" }}>
                                            &nbsp;
                                        </td>
                                    </tr>
                                </React.Fragment>
                                )}
                            </tbody>
                        </table>
                    }
                    <Button variant="primary" onClick={() => { setShow(!show) }}>
                        {show ? "Hide" : "Show"} Weather
                    </Button>
                </div>
            }
        </div>
    </div>
}


/**
 * 
 * @param {number} temperature Temperature in celsius
 * @param {number} humidity Humidity in RH (Relative Humidity)
 * @param {number} windSpeed Windspeed in M/S (meter per second)
 * @returns {number} Apparent Temperature in celsius
 */
function australianApparentTemperature(temperature: number, humidity: number, windspeed: number) {
    // https://github.com/oyve/weather-formulas/blob/160cc4a80deeda394ecc0f684c7ecc06b4d5044c/temperature.js#L101
    // https://en.wikipedia.org/wiki/Wind_chill#Australian_apparent_temperature
    let Ta = temperature;
    let v = windspeed;
    let e = (humidity / 100) * 6.015 * Math.exp((17.27 * Ta) / (237.7 + Ta));
    let AT = Ta + (0.33 * e) - (0.7 * v) - 4.00;
    return AT;
}

function farenheightToCelsius(farenheight: number) {
    return (farenheight - 32) * (5 / 9)
    //return (apparentTemperatureC * (9 / 5)) + 32
}

function celsiusToFarenheight(celsius: number) {
    return (celsius * (9 / 5)) + 32
}