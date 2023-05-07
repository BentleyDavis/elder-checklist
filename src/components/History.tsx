import { useState } from "react";
import { ActionWhen } from "../App";
import { Button } from "react-bootstrap";

const defaultShow = false;

const formatTime = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
})

export default function History({ elementData, dataStore, dispatch, path }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    const [show, setShow] = useState(defaultShow)

    return <>
        <br></br>
        <Button style={show ? {} : { opacity: .2 }} variant="light" onClick={() => { setShow(!show) }}>
            {show ? "Hide" : "Show"} History
        </Button>

        {show &&
            JSON.parse(
                localStorage.getItem("history") || "[]").map((h: ActionWhen, i: number) =>
                    <div key={i}>{formatTime.format(new Date(h.when))} : {h.path} : {JSON.stringify(h.data)}</div>
                )
        }
    </>
}