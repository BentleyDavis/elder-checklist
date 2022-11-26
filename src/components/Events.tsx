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

        {elementData.title &&
            <label htmlFor="exampleFormControlTextarea1" className="form-label h1">{elementData.title}</label>
        }


        <button className={`btn btn-${btnType} mx-1`}
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
            <div className="row stripeable mb-2" key={event.id}>
                <div className="col">
                    <div className="card">

                        <div className="card-header">
                            {/* <div className="row">
                                <div className="col-md-auto">
                                    Variable width content
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary col-md-2 float-md-end mb-3 ms-md-3" type="button" data-bs-toggle="collapse" data-bs-target={`#c-${event.id}`} aria-expanded="true">
                                        open/close
                                    </button>    </div></div> */}
                            <div className="clearfix">

                                <button className="btn btn-primary col-md-2 float-md-end mb-1 ms-md-1" type="button" data-bs-toggle="collapse" data-bs-target={`#c-${event.id}`} aria-expanded="true">
                                    open/close
                                </button>

                                {elementData?.summary?.map((e: any) => { return Components(e, dataStore, dispatch, dataPath + "." + event.id) })}
                            </div>

                        </div>

                        <div className="card-body collapse" id={`c-${event.id}`}>
                            {elementData?.elements?.map((e: any) => { return Components(e, dataStore, dispatch, dataPath + "." + event.id) })}
                        </div>

                    </div>
                </div>
            </div>
        )}

    </>

}
