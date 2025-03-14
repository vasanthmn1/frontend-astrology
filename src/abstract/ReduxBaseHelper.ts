import { useNavigate } from "react-router-dom";
import { RootState, store } from "../redux/store";
import { Component } from "react";

export abstract class ReduxBaseHelper<S, T> {
    // This will hold the passed-in component instance
    private sliceName: keyof RootState;
    private changeStateAction: (state: S) => any;

    ctx: T;


    getState = (): any => {
        return store.getState()[this.sliceName]
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
        const update = { [name]: value } as Partial<S>;

        console.log("Updated Input:", update);
        this.changeState(update);
    }
}
