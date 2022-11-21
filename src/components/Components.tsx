import React from "react";
import Matrix from "./Matrix";
import Comment from "./Comment";
import Tasks from "./Tasks";
import H1 from "./H1";
import ToDo from "./Todo";
import Reminder from "./Reminder";

const components: { [key: string]: any } = {
    matrix: Matrix,
    comment: Comment,
    tasks: Tasks,
    h1: H1,
    todo: ToDo,
    reminder: Reminder
};


export default function Components(element: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>) {


    if (typeof components[element.type] !== "undefined") {
        return React.createElement(components[element.type], {
            key: element.name || element.id,
            // block: Components
            elementData: element,
            dataStore: dataStore,
            dispatch: dispatch
        });
    }
    return React.createElement(
        () => <div>The component "{element.type}" has not been created yet.</div>,
        { key: element.id }
    );
};