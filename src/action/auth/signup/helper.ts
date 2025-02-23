import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { SimpleHelper } from "../../../abstract/SimpleHelper";
import { changeState, SignUpState } from "../../../redux/features/auth/RegisterSlice";
import { SignupAction } from "./SignupAction";

export class HelperChild extends SimpleHelper<SignupAction> { //ReduxBaseHelper<SignUpState, SignupAction> 

    // constructor(action: SignupAction) {
    //     super("register", action, changeState);
    // }

}