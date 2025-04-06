import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../api/ApiClient";
import { LoginPage } from "../../../component/auth/login/LoginPage";
import { changeState, LoginState } from "../../../redux/features/auth/LoginSlice";
import { store } from "../../../redux/store";

import { Submit } from "./Submit";
import { Validate } from "./Validate";


export class LoginAction extends ReduxBaseHelper<LoginState, LoginPage> {

    constructor(ctx: LoginPage) {
        super("login", changeState, ctx);
    }



    apiClient = new ApiClient()

    validate = new Validate(this)
    submit = new Submit(this)


    getDefaultState = (): LoginState => {
        let state = store.getState().login
        return state
    }

}