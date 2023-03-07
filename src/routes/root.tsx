import { Link, Outlet, useLoaderData } from "react-router-dom";
import { addDays, getDateId } from "../utils/getDateId";

export interface Checklist {
    title: string
    id: string
}

export async function loader() {
    const checklists: Checklist[] = [
        { title: "Today", id: "" },
        { title: "Yesterday", id: getDateId(addDays(-1)) },
        { title: "2 days ago", id: getDateId(addDays(-2)) },
        { title: "3 days ago", id: getDateId(addDays(-3)) },
    ]

    return { checklists };
}

export default function Root() {
    // @ts-ignore
    const checklists: Checklist[] = useLoaderData().checklists;
    return (
        <>
            <Outlet />
            <div style={{ opacity: .1 }}>
                {getDateId()}&nbsp;|&nbsp;
                {checklists.length ? (
                    checklists.map((checklist) => (<span key={checklist.id}>
                        <Link to={`/${checklist.id}`}>
                            {checklist.title}
                        </Link>
                        &nbsp;|&nbsp;
                    </span>
                    ))
                ) : (
                    <i>No checklists</i>
                )}
            </div>

        </>
    );
}