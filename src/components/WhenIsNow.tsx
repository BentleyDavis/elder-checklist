import { useEffect, useState } from "react";

const defaultShow = (new URLSearchParams(window.location.search)).get("now") !== null ? true : false;


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
    const [errorMessage, setErrorMessage] = useState("")


    useEffect(() => {
        const id = setInterval(() => {
            const oldNowText = localStorage.getItem("oldNow");
            const newNow = new Date();
            if (oldNowText) {
                const oldNow = new Date(oldNowText);
                if (newNow.getTime() - oldNow.getTime() > 60000) {
                    setErrorMessage((e) => { return "Needs Refresh" });
                    localStorage.removeItem("oldNow");
                    window.location.reload();
                } else {
                    localStorage.setItem("oldNow", newNow.toISOString());
                }
            } else {
                localStorage.setItem("oldNow", newNow.toISOString());
            }
            setNow((n) => { return newNow });

        }, 1000)
        return () => { clearInterval(id) }
            ;
    }, []);

    return <div className="row mt-2 h3" style={defaultShow ? {
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    } : {}}>
        <div className={elementData.level && `h${elementData.level}`}>Today is {dateFormatter.format(now)}</div>
        <div>{errorMessage}</div>
    </div>
}
