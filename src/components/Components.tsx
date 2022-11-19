import React from "react";
import Matrix from "./Matrix";
import Comment from "./Comment";

const components: { [key: string]: any } = {
    matrix: Matrix,
    comment: Comment,
};


export default function Components(element: any, dataStore: any) {


    if (typeof components[element.type] !== "undefined") {
        return React.createElement(components[element.type], {
            key: element.name,
            // block: Components
            elementData: element,
            dataStore: dataStore
        });
    }
    return React.createElement(
        () => <div>The component <pre>{JSON.stringify(element, undefined, 2)}</pre> & {element.name} has not been created yet.</div>,
        { key: element.name }
    );
};