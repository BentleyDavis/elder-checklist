import Components from "./Components";

export default function Row({ elementData, dataStore, dispatch, path = "" }: {
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

    return <div className={`row ${elementData.striped && 'stripeable py-1 border-bottom'} `}>
        <div className="col">

            {elementData.elements.map((e: any) => { return Components(e, dataStore, dispatch, path) })}


        </div>
    </div>
}


