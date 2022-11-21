import React from "react";
import Matrix from "./Matrix";
import Comment from "./Comment";
import Tasks from "./Tasks";

const components: { [key: string]: any } = {
    matrix: Matrix,
    comment: Comment,
    tasks: Tasks,
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
        () => <div>The component <pre>{JSON.stringify(element, undefined, 2)}</pre> & {element.name} has not been created yet.</div>,
        { key: element.name }
    );
};