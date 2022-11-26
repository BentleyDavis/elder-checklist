import { pathGetAt } from "../utils/dataStore";

export default function Select({ elementData, dataStore, dispatch, path }: {
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

    return <>

        {elementData.title &&
            <label htmlFor={elementData.id} className="form-label">{elementData.title}</label>
        }

        <select className="form-select"
            id={elementData.id}
            value={pathGetAt(dataPath, dataStore)}
            onChange={(event) => {
                dispatch({
                    path: dataPath,
                    data: event.currentTarget.value.toString()
                })
            }} >
            <option></option>
            {elementData.options.map((c: any) => {
                return <option
                    key={c.text}
                    value={c.value}
                >
                    {c.text}
                </option>
            })}
        </select>
    </>

}
