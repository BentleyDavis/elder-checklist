
export default function Tasks({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    return <div className="row" >
        <h2>{elementData.title}</h2>
        {elementData.tasks.map((task: any) => {
            return <div key={task.id}>
                {dataStore[elementData.id][task.id] === "done" ?
                    <div className="task" style={{ opacity: .5 }} >
                        <button type="button" className="btn btn-primary"
                            onClick={() => {
                                dispatch({
                                    path: elementData.id + "." + task.id,
                                    data: "pending"
                                })
                            }}>
                            reset
                        </button>
                        {task.content}
                    </div>

                    :

                    <div className="task" >
                        <button type="button" className="btn btn-primary"
                            onClick={() => {
                                dispatch({
                                    path: elementData.id + "." + task.id,
                                    data: "done"
                                })
                            }}>
                            {task.button || "Done"}
                        </button>
                        {task.content}
                    </div>
                }
            </div>

        })}
    </div >
}
