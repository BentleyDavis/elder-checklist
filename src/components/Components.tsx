import React from "react";

import Matrix from "./Matrix";
import Comment from "./Comment";
import ToDo from "./Todo";
import Reminder from "./Reminder";
import Select from "./Select";
import Events from "./Events";
import SelectButtons from "./SelectButtons";
import Heading from "./Heading";
import Text from "./Text";

const components: { [key: string]: any } = {
    matrix: Matrix,
    comment: Comment,
    heading: Heading,
    todo: ToDo,
    reminder: Reminder,
    select: Select,
    events: Events,
    selectButtons: SelectButtons,
    text: Text,
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
            key: element.id,
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