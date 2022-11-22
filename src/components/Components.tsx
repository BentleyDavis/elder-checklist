import React from "react";

import Matrix from "./Matrix";
import Comment from "./Comment";
import H1 from "./H1";
import ToDo from "./Todo";
import Reminder from "./Reminder";
import Select from "./Select";
import Events from "./Events";

const components: { [key: string]: any } = {
    matrix: Matrix,
    comment: Comment,
    h1: H1,
    todo: ToDo,
    reminder: Reminder,
    select: Select,
    events: Events,
};


export default function Components(
    element: any,
    dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>,
    path?: string
) {


    if (typeof components[element.type] !== "undefined") {
        return React.createElement(components[element.type], {
            key: element.name || element.id,
            // block: Components
            elementData: element,
            dataStore: dataStore,
            dispatch: dispatch,
            path: path
        });
    }
    return React.createElement(
        () => <div>The component "{element.type}" has not been created yet.</div>,
        { key: element.id }
    );
};