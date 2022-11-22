export default function H1({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {
    return <div className="row mt-5">
        <h1 className="text-white bg-dark">{elementData.content}</h1>
    </div>
}