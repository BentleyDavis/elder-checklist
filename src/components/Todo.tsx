import { useReducer } from "react";
import { ActionsUnion, createActions, createStates, StatesUnion, transition, useTransition } from "react-states";

export default function ToDo({ elementData, dataStore, dispatch }: {
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

    function ToDoButton({ action, title, btnType = "primary" }:
        { action: string, title: string, btnType?: "success" | "primary" | "warning" | "info" | "secondary" }) {
        if (can(localState, action)) {
            return <button type="button" className={`btn btn-${btnType} mx-1`}
                onClick={() => {
                    localActions[action]();
                }}>{title}</button>
        }
        return null;
    }

    return <div className="row">
        <div className={"card task-" + localState.state}>
            <div className="card-body">
                {elementData.content}
                <ToDoButton action={"start"} title={"Start"} btnType="success"></ToDoButton>
                <ToDoButton action={"complete"} title={"Done"} btnType="info"></ToDoButton>
                <ToDoButton action={"skip"} title={"Skip"} btnType="warning"></ToDoButton>
                <ToDoButton action={"reset"} title={"Reset"}></ToDoButton>
            </div>
        </div>
    </div>
}


function can(incomingState: { state: string }, hopefulState: string) {
    // @ts-ignore
    return transitions[incomingState.state][hopefulState] !== undefined
}

export const states = createStates({
    waiting: () => ({}),
    started: () => ({}),
    completed: () => ({}),
    skipped: () => ({}),
});
type State = StatesUnion<typeof states>;

export const actions = createActions({
    start: () => ({}),
    complete: () => ({}),
    skip: () => ({}),
    reset: () => ({}),
});
type Action = ActionsUnion<typeof actions>;

const transitions = {
    waiting: {
        start: () => states.started(),
        complete: () => states.completed(),
        skip: () => states.skipped(),
    },
    started: {
        complete: () => states.completed(),
        skip: () => states.skipped(),
        reset: () => states.waiting(),
    },
    completed: {
        reset: () => states.waiting(),
    },
    skipped: {
        reset: () => states.waiting(),
    }
}

export const reducer = (state: State, action: Action) =>
    transition(state, action, transitions);