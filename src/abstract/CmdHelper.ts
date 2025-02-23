import { Component } from "react";

export abstract class CmdHelper<T> extends Component<{ parent: T }> {
    parent: T;

    constructor(props: { parent: T }) {
        super(props);
        this.parent = props.parent;
    }
}
