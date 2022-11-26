import { pathGetAt } from "../utils/dataStore";
import { newId } from '../utils/newId';
import Components from "./Components";


export default function Events({ elementData, dataStore, dispatch, path = "", btnType = "primary" }: {
    elementData: any,
    dataStore: any,
    path?: string,
    btnType: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    const dataPath = path ?
        path + "." + elementData.id :
        elementData.id
    const data = pathGetAt(dataPath, dataStore) || {}

    return <>
        <button className={`btn btn-${btnType} m-1`}
            onClick={(event) => {
                const id = newId();
                dispatch({
                    path: dataPath + "." + id,
                    data: {
                        id: id,
                    }
                })
            }}
        >
            + {elementData.addButtonTitle}
        </button>


        {Object.values(data).map((event: any) =>
            <div className="row stripeable py-1 border-bottom" key={event.id}>
                <div className="col">

                    <div className="clearfix">

                        <button className="btn btn-primary float-md-start" type="button" data-bs-toggle="collapse" data-bs-target={`#c-${event.id}`} aria-expanded="true">
                            open / close
                        </button>

                        {elementData?.summary?.map((e: any) => { return Components(e, dataStore, dispatch, dataPath + "." + event.id) })}
                    </div>

                    <div className="collapse show" id={`c-${event.id}`}>
                        <div className="row">

                            {elementData?.elements?.map((e: any) => {
                                return <div className={e.width === "full" ? "col-12" : "col-sm-6 col-md-4"} key={e.id}>
                                    {Components(e, dataStore, dispatch, dataPath + "." + event.id)}
                                </div>
                            })}

                        </div>
                    </div>

                </div>
            </div>
        )}

    </>

}
