export default function H1({ elementData }: {
    elementData: any
}) {
    return <div className="row mt-5">
        <h1 className="text-white bg-dark">{elementData.content}</h1>
    </div>
}
