import React from "react";

import { evalExpression } from "../utils/evalExpression";

import Matrix from "./Matrix";
import Comment from "./Comment";
import ToDo from "./Todo";
import Reminder from "./Reminder";
import SingleSelect from "./SingleSelect";
import Events from "./Events";
import MultiSelect from "./MultiSelect";
import Heading from "./Heading";
import Text from "./Text";
import Counter from "./Counter";
import Row from "./Row";
import Range from "./Range";
import Time from "./Time";
import Stepper from "./Stepper";
import ShowByTime from "./ShowByTime";

const components: { [key: string]: any } = {
    matrix: Matrix,
    comment: Comment,
    heading: Heading,
    todo: ToDo,
    reminder: Reminder,
    singleSelect: SingleSelect,
    events: Events,
    multiSelect: MultiSelect,
    text: Text,
    counter: Counter,
    row: Row,
    range: Range,
    time: Time,
    stepper: Stepper,
    ShowByTime: ShowByTime,
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
        let hide = false;
        if (element.hide) {
            hide = evalExpression(element, dataStore, element.hide);
        }

        if (hide) {
            return <div key={element.id}></div>
        } else {
            return React.createElement(components[element.type], {
                key: element.id,
                elementData: element,
                dataStore: dataStore,
                dispatch: dispatch,
                path: path
            });
        }
    }
    return React.createElement(
        () => <div>The component "{element.type}" has not been created yet.</div>,
        { key: element.id }
    );
};


