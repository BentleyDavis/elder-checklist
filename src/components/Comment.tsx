import ReactTextareaAutosize from "react-textarea-autosize";

export default function Comment({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    return <div className="row">
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{elementData.title}</label>
            <ReactTextareaAutosize className="form-control" id="exampleFormControlTextarea1" minRows={3} value={dataStore[elementData.name]}
                onChange={(event) => {
                    dispatch({
                        path: elementData.name,
                        data: event.currentTarget.value
                    })
                }} ></ReactTextareaAutosize >
        </div>
    </div>
}
