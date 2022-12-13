import React from "react";

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
        let show = true;
        if (element.show) {
            try {
                const x = new ScopedEval({ data: dataStore })
                show = x.eval(element.show);
            } catch (error) {
                console.error(error)
                console.error('error Element:', element);

            }
        }

        if (show) {
            return React.createElement(components[element.type], {
                key: element.id,
                // block: Components
                elementData: element,
                dataStore: dataStore,
                dispatch: dispatch,
                path: path
            });
        } else {
            return <div key={element.id}></div>
        }
    }
    return React.createElement(
        () => <div>The component "{element.type}" has not been created yet.</div>,
        { key: element.id }
    );
};

export class ScopedEval {
    scope: any
    constructor(scope: any) {
        this.scope = scope;
    }
    eval(__script: any) {
        // eslint-disable-next-line no-new-func
        return new Function(...Object.keys(this.scope), `
                return eval(
                    '"use strict";delete this.__script;' 
                    + this.__script
                );
            `.replace(/[\n\t]|  +/g, '')
        ).bind({ __script })(...Object.values(this.scope));
    }
}