import { Button } from 'react-bootstrap';
import './weather.css';
import { useEffect, useState } from "react";

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
    const OriginlhourlyData = await response.json();
    const hourlyData: any = [];

    for (const hourData of OriginlhourlyData.properties.periods) {
        const windMilesPerHour = parseInt(hourData.windSpeed.replaceAll(" mph", ""));

        const when = new Date(hourData.startTime)
        if (when.getDay() !== (new Date()).getDay()) break; // Exit when not today

        const hour = when.getHours();
        if (hour >= 7 && hour <= 10 + 12) { //between 7 AM and 10 PM
            hourlyData.push({
                ...hourData,
                windMilesPerHour: windMilesPerHour
            })
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
    const [show, setShow] = useState(false)


    useEffect(() => {

        async function _getWeather() {
            const results = await getWeather();
            setWeather((w) => {
                return results
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
                                    <th>Temp</th>
                                    <th colSpan={2}>Wind</th>
                                    <th>Humidity</th>
                                    <th>Precip</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weather.map((h: any) =>
                                    <tr key={h.startTime}>
                                        <td style={{ textAlign: "right" }}>{dateFormatter.format(new Date(h.startTime))}</td>
                                        <td style={{ textAlign: "right" }}>{h.temperature} °</td>
                                        <td style={{ textAlign: "right", borderRight: "none", paddingRight: ".5em" }} >{h.windSpeed.replaceAll(" mph", "")}</td>
                                        <td style={{ borderLeft: "none", paddingLeft: "0" }}>{h.windDirection}</td>
                                        <td style={{ textAlign: "right" }}>{h.relativeHumidity.value} %</td>
                                        <td style={{ textAlign: "right" }}>{h.probabilityOfPrecipitation.value} %</td>
                                        <td >
                                            {textToEmoji[h.shortForecast] &&
                                                <div style={{
                                                    transform: 'scale(1.5)',
                                                    transformOrigin: 'center',
                                                    display: 'inline-block',
                                                    paddingRight: '.5em'
                                                }}
                                                    dangerouslySetInnerHTML={{ __html: textToEmoji[h.shortForecast] }}
                                                ></div>
                                            }
                                            {h.shortForecast}
                                        </td>
                                    </tr>
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
