import { Component } from "react";

// export class CmdOptionHelper<P,O>{


// }

export abstract class CmdOptionHelper<P, O> extends Component<{ parent: P, option: O }> {
    p: P;
    o: O;


    constructor(props: { parent: P, option: O }) {
        super(props);
        this.p = props.parent;
        this.o = props.option;
    }
}
