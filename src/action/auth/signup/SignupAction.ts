
import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../api/ApiClient";
import { changeState, SignUpState } from "../../../redux/features/auth/RegisterSlice";
import { store } from "../../../redux/store";
import { Submit } from "./Submit";
import { Validate } from "./Validate";
import { RegisterPage } from "../../../component/auth/register/RegisterPage";

export class SignupAction extends ReduxBaseHelper<SignUpState, RegisterPage> {

    constructor(ctx: RegisterPage) {
        super("register", changeState, ctx);
    }

    getDefaultState = (): SignUpState => {
        let state = store.getState().register

        return state
    }

    submit = new Submit(this)
    apiClient = new ApiClient()
    validate = new Validate(this)

}
