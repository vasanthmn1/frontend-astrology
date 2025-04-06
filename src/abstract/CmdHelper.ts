import { Component } from "react";

export abstract class CmpHelperChild<T> extends Component<{ parent: T }> {
    p: T;

    constructor(props: { parent: T }) {
        super(props);
        this.p = props.parent;
    }
}
