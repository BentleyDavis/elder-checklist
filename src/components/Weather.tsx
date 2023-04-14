import './weather.css';
import { useEffect, useState } from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
})

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

    }

    return hourlyData

}

export default function Weather({ elementData }: {
    elementData: any
}) {
    const [weather, setWeather] = useState([])


    useEffect(() => {

        async function _getWeather() {
            const results = await getWeather();
            setWeather((w) => {
                return results
            })
        }

        _getWeather();

        const id = setInterval(_getWeather, 1000 * 60 * 60) // 1 hour

        return () => { clearInterval(id) };
    }, [setWeather]);

    return <div className="row mt-2">
        <div className={`hourly ` + (elementData.level && `h${elementData.level}`)}>

            <table>
                <thead>
                    <tr>
                        <th>Hour</th>
                        <th>Temp</th>
                        <th colSpan={2}>Wind</th>
                        <th>Sun</th>
                        <th>Humidity</th>
                        <th>Precip</th>
                    </tr>
                </thead>
                <tbody>
                    {weather.map((h: any) =>
                        <tr key={h.startTime}>
                            <td>{dateFormatter.format(new Date(h.startTime))}</td>
                            <td style={{ textAlign: "right" }}>{h.temperature} °</td>
                            <td style={{ textAlign: "right", borderRight: "none", paddingRight: ".5em" }} >{h.windSpeed.replaceAll(" mph", "")}</td>
                            <td style={{ borderLeft: "none", paddingLeft: "0" }}>{h.windDirection}</td>
                            <td >{h.shortForecast}</td>
                            <td style={{ textAlign: "right" }}>{h.relativeHumidity.value} %</td>
                            <td style={{ textAlign: "right" }}>{h.probabilityOfPrecipitation.value} %</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
}
