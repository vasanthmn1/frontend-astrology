import { HelperChild } from "./helper";

export class Header extends HelperChild {


    render() {
        return <div>

            <button onClick={() => this.p.action.request.togglePopup()}>Add</button>
        </div>
    }
}