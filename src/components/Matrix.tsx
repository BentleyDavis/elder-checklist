
export default function Matrix({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    return <>
        {/* <pre>{JSON.stringify(dataStore, undefined, 2)}</pre> */}
        <div className="row">
            <div className="col">
                <h2>{elementData.title}</h2>
            </div>
        </div>
        <div className="table-responsive">
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
                                        checked={dataStore[elementData.name][r.value] === c.value}
                                        onChange={() => {
                                            dispatch({
                                                path: elementData.name + "." + r.value,
                                                data: c.value
                                            })
                                        }} />
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    </>
}
