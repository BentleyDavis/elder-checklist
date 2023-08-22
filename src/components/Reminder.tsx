import { useReducer } from "react";
import { ActionsUnion, createActions, createStates, StatesUnion, transition, useTransition } from "react-states";

export default function Reminder({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {

    const [localState, localDispatch] = useReducer(reducer, {
        state: dataStore[elementData.id] || 'waiting',
    });

    useTransition(localState, (current, action, prev) => {
        // console.log("--------");
        if (prev) {
            // console.log("current", current);
            // console.log("action", action);
            // console.log("prev", prev);
            dispatch({
                path: elementData.id,
                data: current.state
            })
        }
    });

    const localActions: { [key: string]: any } = actions(localDispatch);

    function StateButton({ action, title, btnType = "primary", className }:
        {
            action: string,
            title: string,
            btnType?: "success" | "primary" | "warning" | "info" | "secondary" | "outline-primary" | "light",
            className?: string
        }) {
        if (can(localState, action)) {
            return <button type="button" className={`btn btn-${btnType} m-1 ${className} `}
                onClick={() => {
                    localActions[action]();
                }}>{title}</button>
        }
        return null;
    }

    return <div className={"row list-item task-" + localState.state}>
        <div className="col">
            <div className="clearfix">
                <div className="float-start">
                    <StateButton action={"complete"} title={"click to confirm you read this"} btnType="primary" className="me-4"></StateButton>
                </div>
                <StateButton action={"reset"} title={"Reset"} btnType="light" className="btn-sm float-end"></StateButton>
                <div dangerouslySetInnerHTML={{ __html: localState.state === "done" && elementData.doneContent ? elementData.doneContent : elementData.content }}></div>
            </div>
        </div>

    </div>
}


function can(incomingState: { state: string }, hopefulState: string) {
    // @ts-ignore
    return transitions?.[incomingState.state]?.[hopefulState] !== undefined
}

const reducer = (state: State, action: Action) => transition(state, action, transitions);

export const states = createStates({
    waiting: () => ({}),
    done: () => ({}),
});
type State = StatesUnion<typeof states>;

export const actions = createActions({
    complete: () => ({}),
    reset: () => ({}),
});
type Action = ActionsUnion<typeof actions>;

const transitions = {
    waiting: {
        complete: () => states.done(),
    },
    done: {
        reset: () => states.waiting(),
    }
}

