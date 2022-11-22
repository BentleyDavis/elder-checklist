import { useSyncExternalStore } from "react";
import { pathGetAt } from "../utils/dataStore";

export default function Matrix({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {


    function useWide(selector = (id: any) => id) {
        return useSyncExternalStore(
            (onStoreChange: any) => {
                global.window?.addEventListener("resize", onStoreChange);
                return () =>
                    global.window?.removeEventListener(
                        "resize",
                        onStoreChange
                    );
            },
            () => selector(global.window?.innerWidth > 400 ? true : false)
        );
    }

    return <>

        {elementData.title &&
            <div className="row">
                <div className="col">
                    <h2>{elementData.title}</h2>
                </div>
            </div>
        }

        {useWide() && <>
            <table className="table table-striped" style={{ width: "unset" }}>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        {elementData.columns.map((c: any) => {
                            return <th scope="col" key={c.text}>
                                {c.text}
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {elementData.rows.map((r: any) => {
                        if (typeof r === "string") {
                            r = { text: r, value: r }
                        }

                        return <tr key={r.value}>
                            <th scope="row">
                                {r.text}
                            </th>
                            {elementData.columns.map((c: any) => {

                                return <td key={c.text} style={{ textAlign: "center" }}>
                                    <input className="form-check-input" type="radio" name={r.value} id={c.value}
                                        checked={pathGetAt(r.value, dataStore) === c.value}
                                        onChange={() => {
                                            dispatch({
                                                path: r.value,
                                                data: c.value
                                            })
                                        }} />
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </>}


        {!useWide() && <>
            {elementData.rows.map((r: any) => {
                if (typeof r === "string") {
                    r = { text: r, value: r }
                }

                return <div className="mb-3" key={r.value}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{r.text}</label>
                    <select className="form-select" aria-label={r.text}
                        value={pathGetAt(r.value, dataStore)}
                        onChange={(event) => {
                            dispatch({
                                path: r.value,
                                data: event.currentTarget.value.toString()
                            })
                        }} >
                        <option value=""></option>
                        {elementData.columns.map((c: any) => {
                            return <option
                                key={c.text}
                                value={c.value}
                            >
                                {c.text}
                            </option>
                        })}
                    </select>
                </div>
            })}

        </>
        }
    </>
}
