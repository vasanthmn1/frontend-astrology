
import { RootState, store } from "../redux/store";

export abstract class ReduxBaseHelper<S, T> {
    // This will hold the passed-in component instance
    private sliceName: keyof RootState;
    private changeStateAction: (state: S) => any;

    ctx: T;


    getState = (): S => {
        return store.getState()[this.sliceName] as S
    }

    constructor(sliceName: keyof RootState, changeStateAction: (state: S) => any, ctx: T) {
        // super(action);
        this.sliceName = sliceName;
        this.changeStateAction = changeStateAction;
        this.ctx = ctx;
    }

    changeState(updateState: Partial<S>) {
        const currentState = store.getState()[this.sliceName] as S;
        const newState: S = { ...currentState, ...updateState };
        store.dispatch(this.changeStateAction(newState));
    }

    onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;

        if (!name) { return; }

        const update = { [name]: value } as Partial<S>;

        this.changeState(update);
    }



    nestedChangeInput<K extends keyof S>(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, obj: K) {
        const { name, value } = e.target;

        // Ensure you're updating the form field while keeping other properties intact

        const update = {
            [obj]: {
                ...this.getState()[obj],
                [name]: value
            }
        } as Partial<S>;

        this.changeState(update);
    }

}
