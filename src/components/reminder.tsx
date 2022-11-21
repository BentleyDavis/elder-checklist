import ReactTextareaAutosize from "react-textarea-autosize";

export default function Reminder({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    return <div className="row">
        <h2>{elementData.title}</h2>
        <ReactTextareaAutosize className="form-control" id="exampleFormControlTextarea1" minRows={3} value={dataStore[elementData.name]}
            onChange={(event) => {
                dispatch({
                    path: elementData.name,
                    data: event.currentTarget.value
                })
            }} ></ReactTextareaAutosize >
    </div>
}
