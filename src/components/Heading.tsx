export default function H1({ elementData }: {
    elementData: any
}) {
    return <div className="row mt-2">
        <div className={`h${elementData.level} text-white bg-dark`}>{elementData.content}</div>
    </div>
}