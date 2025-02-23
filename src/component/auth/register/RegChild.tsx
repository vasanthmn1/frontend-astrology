import { ReactNode } from "react";
import { HelperChild } from "./helper";

export class RegChild extends HelperChild {
    render() {
        return (
            <div>sd +{this.parent.state.email}</div>
        )
    }
}