import ReactTextareaAutosize from "react-textarea-autosize";

export default function Comment({ elementData, dataStore, dispatch, path }: {
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

    return <div className="row">

        {elementData.title &&
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{elementData.title}</label>
        }

        <ReactTextareaAutosize className="form-control" id="exampleFormControlTextarea1" minRows={elementData.minRows || 3} value={dataStore[elementData.id]}
            onChange={(event) => {
                dispatch({
                    path: dataPath,
                    data: event.currentTarget.value
                })
            }} ></ReactTextareaAutosize >
    </div>
}
