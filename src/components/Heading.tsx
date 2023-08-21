export default function H1({ elementData }: {
    elementData: any
}) {
    return <div className="row">
        <div className={`h${elementData.level}`}>{elementData.content}</div>
    </div>
}
