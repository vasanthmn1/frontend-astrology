import { RootState, store } from "../redux/store";
import { SimpleHelper } from "./SimpleHelper";

export abstract class ReduxBaseHelper<T,> {
    private sliceName: keyof RootState;
    private changeStateAction: (state: T) => any;

    constructor(sliceName: keyof RootState,  changeStateAction: (state: T) => any) {
        // super(action);
        this.sliceName = sliceName;
        this.changeStateAction = changeStateAction;
    }

    changeState(updateState: Partial<T>) {
        const currentState = store.getState()[this.sliceName] as T;
        const newState: T = { ...currentState, ...updateState };

        console.log("Updated State:", newState);
        console.log("Previous State:", currentState);

        store.dispatch(this.changeStateAction(newState));
    }

    onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        const update = { [name]: value } as Partial<T>;

        console.log("Updated Input:", update);
        this.changeState(update);
    }
}
