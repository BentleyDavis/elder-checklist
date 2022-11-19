
export default function Matrix({ elementData, dataStore }: { elementData: any, dataStore: any }) {
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
                                {r.text}: {dataStore[elementData.name][r.value]}
                            </th>
                            {elementData.columns.map((c: any) => {

                                return <td key={c.text}>
                                    <input className="form-check-input" type="radio" name={r.text} id={c.value}
                                        checked={dataStore[elementData.name][r.value] === c.value} />
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    </>
}
