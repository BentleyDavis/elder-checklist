
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
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={6} value={dataStore[elementData.name]}
                onChange={(event) => {
                    dispatch({
                        path: elementData.name,
                        data: event.currentTarget.value
                    })
                }} ></textarea>
        </div>
    </div>
}
