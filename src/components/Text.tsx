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
    let dataPath = "";
    if (path) dataPath += path + "."
    if (elementData.path) dataPath += elementData.path + "."
    dataPath += elementData.id;

    const value = pathGetAt(dataPath, dataStore);

    return <>{elementData.prefix}{value ? value : elementData.default}{elementData.suffix}</>
}
