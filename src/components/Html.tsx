
export default function Html({ elementData, dataStore, dispatch, path }: {
    elementData: any,
    dataStore: any,
    path?: string,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    return <>
        <div id={`c-${elementData.id}`} dangerouslySetInnerHTML={{ __html: elementData.content }}></div>
    </>
}
