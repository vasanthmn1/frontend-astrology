

import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../api/ApiClient";
import { changeState, SignUpState } from "../../../redux/features/auth/RegisterSlice";
import { Submit } from "./Submit";

export class SignupAction extends ReduxBaseHelper<SignUpState> {

    constructor() {
        super("register", changeState);
    }

    submit = new Submit(this)
    apiClient = new ApiClient()

}
