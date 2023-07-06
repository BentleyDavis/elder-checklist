import { pathGetAt } from "../utils/dataStore";

export default function Range({ elementData, dataStore, dispatch, path }: {
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
        elementData.id

    const value = pathGetAt(dataPath, dataStore)



    const options = []

    const length = elementData.length || 11;

    for (var i = 0; i < length; i++) {
        const id = i.toString();
        options.push({
            "value": id,
            "text": elementData[id] || id
        })
    }

    return <div className={"row stripeable py-1 border-bottom " + (!(value === undefined) && "task-done") || ""}>
        <div className="col">
            <div className="clearfix">
                <label className="form-label mt-1 mb-0">{elementData.title}</label>

                {options.map((c: any) => {
                    return (c.value === value || !value) &&
                        <button key={c.value} type="button" className={`btn btn-${value === c.value ? 'light' : 'primary'} m-1 `}
                            onClick={(event) => {
                                if (c.value !== value) {
                                    dispatch({
                                        path: dataPath,
                                        data: c.value,
                                    });
                                } else {
                                    // do nothing
                                }
                            }}>
                            {c.text}
                        </button>
                })}

                <div className="float-end">
                    {!(value === undefined) &&
                        <button onClick={() => {
                            dispatch({
                                path: dataPath,
                                data: "",
                            })
                        }} type="button" className="btn btn-light btn-sm">Reset</button>
                    }
                </div>
            </div>
        </div>

    </div>


}
