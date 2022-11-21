
export default function Tasks({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    const data = dataStore[elementData.id];
    return <div className="row" >
        <h2>{elementData.title}</h2>
        {elementData.tasks.map((task: any) => {
            return <div key={task.id}>
                {data?.[task.id] === undefined ||
                    data?.[task.id] === "" ?
                    // Value not currently set
                    <div className="task" >
                        {task.content}

                        {task.type === "reminder" ?
                            <button type="button" className="btn btn-primary mx-1"
                                onClick={() => {
                                    dispatch({
                                        path: elementData.id + "." + task.id,
                                        data: "heard"
                                    })
                                }}>
                                ok
                            </button>
                            : <>
                                <button type="button" className="btn btn-primary mx-1"
                                    onClick={() => {
                                        dispatch({
                                            path: elementData.id + "." + task.id,
                                            data: "done"
                                        })
                                    }}>
                                    Done
                                </button>
                                <button type="button" className="btn btn-primary mx-1"
                                    onClick={() => {
                                        dispatch({
                                            path: elementData.id + "." + task.id,
                                            data: "skipped"
                                        })
                                    }}>
                                    Skip
                                </button>
                            </>
                        }

                    </div>



                    : // Value has been set
                    <div className="task" style={{ opacity: .5 }} >
                        {task.content} : {data?.[task.id]}
                        <button type="button" className="btn btn-primary mx-1"
                            onClick={() => {
                                dispatch({
                                    path: elementData.id + "." + task.id,
                                    data: ""
                                })
                            }}>
                            reset
                        </button>
                    </div>


                }
            </div>

        })}
    </div >
}
