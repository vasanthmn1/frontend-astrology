
import { changeState } from "../redux/features/zodiac/list/zodiacListSlice";
import { RootState, store } from "../redux/store";

export abstract class ReduxBaseHelper<T> {

    private sliceName: keyof RootState;

    constructor(sliceName: keyof RootState) {
        this.sliceName = sliceName;

    }

    changeState(updateState: Partial<T>) {
        const currentState = store.getState()[this.sliceName] as T;
        const newState: T = { ...currentState, ...updateState };

        store.dispatch(changeState(newState as any));
    }
}
