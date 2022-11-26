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

    function StateButton({ action, title, btnType = "primary" }:
        { action: string, title: string, btnType?: "success" | "primary" | "warning" | "info" | "secondary" }) {
        if (can(localState, action)) {
            return <button type="button" className={`btn btn-${btnType} mx-1`}
                onClick={() => {
                    localActions[action]();
                }}>{title}</button>
        }
        return null;
    }

    return <div className={"row stripeable py-1 border-bottom task-" + localState.state}>
        <div className="col">
            <div className="clearfix">
                <div className="col-md-6 float-md-end mb-1 ms-md-1 text-end">
                    {elementData.instructions && <>
                        <button type="button" className="btn btn-secondary mx-1"
                            data-bs-toggle="collapse" data-bs-target={`#c-${elementData.id}`} aria-expanded="true">
                            Instructions
                        </button>
                    </>}
                    <StateButton action={"start"} title={"Start"} btnType="success"></StateButton>
                    <StateButton action={"complete"} title={"Done"} btnType="info"></StateButton>
                    <StateButton action={"skip"} title={"Skip"} btnType="warning"></StateButton>
                    <StateButton action={"reset"} title={"Reset"}></StateButton>
                </div>

                {{
                    done: "Done: ",
                    skipped: "Skipped: ",
                    started: "Started: ",
                    waiting: ""
                }[localState.state]}
                {elementData.content}

                {elementData.instructions && <>
                    <div className="collapse" id={`c-${elementData.id}`} dangerouslySetInnerHTML={{ __html: elementData.instructions }}>
                    </div>
                </>}
            </div>
        </div>
    </div>
}


function can(incomingState: { state: string }, hopefulState: string) {
    // @ts-ignore
    return transitions?.[incomingState.state]?.[hopefulState] !== undefined
}

export const states = createStates({
    waiting: () => ({}),
    started: () => ({}),
    done: () => ({}),
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
        complete: () => states.done(),
        skip: () => states.skipped(),
    },
    started: {
        complete: () => states.done(),
        skip: () => states.skipped(),
        reset: () => states.waiting(),
    },
    done: {
        reset: () => states.waiting(),
    },
    skipped: {
        reset: () => states.waiting(),
    }
}

export const reducer = (state: State, action: Action) =>
    transition(state, action, transitions);