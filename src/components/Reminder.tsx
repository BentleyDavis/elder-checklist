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
        dispatch({
            path: elementData.id,
            data: current.state
        })
    });

    const localActions: { [key: string]: any } = actions(localDispatch);

    function StateButton({ action, title, btnType = "primary" }:
        { action: string, title: string, btnType?: "success" | "primary" | "warning" | "info" | "secondary" | "outline-primary" }) {
        if (can(localState, action)) {
            return <button type="button" className={`btn btn-${btnType} m-1`}
                onClick={() => {
                    localActions[action]();
                }}>{title}</button>
        }
        return null;
    }

    return <div className={"row stripeable py-1 border-bottom task-" + localState.state}>
        <div className="col">
            <div className="clearfix">
                <div className="float-md-start">
                    <StateButton action={"complete"} title={"click to confirm you read this"} btnType="outline-primary"></StateButton>
                    <StateButton action={"reset"} title={"Reset"} btnType="secondary"></StateButton>
                </div>
                {elementData.content}
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

