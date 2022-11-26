import { pathGetAt } from "../utils/dataStore";

export default function Text({ elementData, dataStore, dispatch, path }: {
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
        elementData.id;

    const value = pathGetAt(dataPath, dataStore);

    return <>{elementData.prefix}{value}{elementData.suffix}</>
}
