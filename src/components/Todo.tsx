import { ActionsUnion, createActions, createStates, StatesUnion, transition, useTransition } from "react-states";

export default function ToDo({ elementData, dataStore, dispatch }: {
    elementData: any, dataStore: any,
    dispatch: React.Dispatch<{
        path: string;
        data: any;
    }>
}) {


    // const [localState, localDispatch] = useReducer(reducer, {
    //     state: dataStore[elementData.id] || 'waiting',
    // });

    const localState = { state: dataStore[elementData.id] || 'waiting' }

    useTransition(localState, (current, action, prev) => {
        // if (prev) {
        //     dispatch({
        //         path: elementData.id,
        //         data: current.state
        //     })
        // }
    });

    const localActions: { [key: string]: any } = actions(() => { });

    // useEffect(() => {
    //     const newState = dataStore[elementData.id] || 'waiting';
    //     const oldState = localState.state || 'waiting';
    //     console.log("useEffect", newState, oldState)
    //     // if (newState !== oldState) {
    //     //     localActions[newState]()
    //     // }

    //     return () => {
    //         // TODO: What here to unsubscribe???
    //     }
    // }, [dataStore, localActions, localState, elementData])

    function StateButton({ action, title, btnType = "primary", className }:
        {
            action: string,
            title: string,
            btnType?: "success" | "primary" | "warning" | "info" | "secondary" | "outline-primary" | "light",
            className?: string
        }) {
        if (can(localState, action)) {
            return <button type="button" className={`btn btn-${btnType} mx-1 ${className} `}
                onClick={() => {
                    console.log(localActions[action]());
                    // dispatch({
                    //             path: elementData.id,
                    //             data: action
                    //         })
                }}>{title}</button>
        }
        return null;
    }

    return <div className={"row list-item task-" + localState.state}>
        <div className="col">
            <div className="clearfix">
                <div className="float-start">
                    <StateButton action={"markDone"} title={"Mark Done"} btnType="primary"></StateButton>
                    <StateButton action={"skip"} title={"Skip"} btnType="warning"></StateButton>
                    {elementData.instructions && ["started", "waiting"].includes(localState.state) && <>
                        <button type="button" className="btn btn-secondary mx-1 "
                            data-bs-toggle="collapse" data-bs-target={`#c-${elementData.id}`} aria-expanded="true">
                            Instructions
                        </button>
                    </>}
                </div>
                <StateButton action={"reset"} title={"Reset"} btnType="light" className="btn-sm float-end"></StateButton>
                <div dangerouslySetInnerHTML={{
                    __html: ({
                        done: "Done: ",
                        skipped: "Skipped: ",
                        started: "Started: ",
                        waiting: ""
                    } as { [id: string]: string })[localState.state] +
                        (localState.state === "done" && elementData.doneContent ?
                            elementData.doneContent :
                            elementData.content)
                }}></div>

            </div>

            {elementData.instructions && ["started", "waiting"].includes(localState.state) && <>
                <div className="collapse" id={`c-${elementData.id}`} dangerouslySetInnerHTML={{ __html: elementData.instructions }}></div>
            </>}


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
    markDone: () => ({}),
    skip: () => ({}),
    reset: () => ({}),
    // add direct actions
    waiting: () => ({}),
    done: () => ({}),
    skipped: () => ({}),

});
type Action = ActionsUnion<typeof actions>;

const transitions = {
    waiting: {
        start: () => states.started(),
        markDone: () => states.done(),
        skip: () => states.skipped(),
        // add direct actions
        waiting: () => states.waiting(),
        done: () => states.done(),
        skipped: () => states.skipped(),
    },
    started: {
        markDone: () => states.done(),
        skip: () => states.skipped(),
        reset: () => states.waiting(),
        // add direct actions
        waiting: () => states.waiting(),
        done: () => states.done(),
        skipped: () => states.skipped(),
    },
    done: {
        reset: () => states.waiting(),
        // add direct actions
        waiting: () => states.waiting(),
    },
    skipped: {
        reset: () => states.waiting(),
        // add direct actions
        waiting: () => states.waiting(),
    }
}

export const reducer = (state: State, action: Action) =>
    transition(state, action, transitions);