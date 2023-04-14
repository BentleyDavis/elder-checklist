import { useEffect, useState } from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

export default function WhenIsNow({ elementData }: {
    elementData: any
}) {
    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setNow((n) => { return new Date() });
        }, 1000)
        return () => { clearInterval(id) }
            ;
    }, []);

    return <div className="row mt-2">
        <div className={elementData.level && `h${elementData.level}`}>Today is {dateFormatter.format(now)}</div>
    </div>
}
