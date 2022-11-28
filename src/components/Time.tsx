import { useEffect } from "react";
import { pathGetAt } from "../utils/dataStore";

export default function Time({ elementData, dataStore, dispatch, path }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    const dataPath = path ?
        path + "." + elementData.id :
        elementData.id;

    let value = pathGetAt(dataPath, dataStore) || "";

    useEffect(() => {
        if (pathGetAt(dataPath, dataStore) === undefined && elementData.default === "now") {
            const n = new Date();
            dispatch({
                path: dataPath,
                data: `${n.getHours().toString().padStart(2, '0')}:${n.getMinutes().toString().padStart(2, '0')}`
            })
        }
        // eslint-disable-next-line
    }, []) /// Run Once




    return <>
        {elementData.title &&
            <label htmlFor={elementData.id} className="form-label">{elementData.title}</label>
        }

        <input type="time" className="form-control" id={elementData.id} aria-describedby="when"
            style={{ maxWidth: "8em" }}
            value={value}
            onChange={(event) => {
                dispatch({
                    path: dataPath,
                    data: event.currentTarget.value
                })
            }}
        ></input>

    </>
}
