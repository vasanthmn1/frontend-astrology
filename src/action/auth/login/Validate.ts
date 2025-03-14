import { _utils } from "../../../lib/utils/_utils";
import { LoginState } from "../../../redux/features/auth/LoginSlice";
import { SignUpState } from "../../../redux/features/auth/RegisterSlice";
import { PageTostfication } from "../../page/PageNotification";
import { HelperChild } from "./helper";

export class Validate extends HelperChild {




    validate = (signUpState: LoginState): boolean => {


        if (_utils.isEmpty(_utils.trim(signUpState.email))) {
            console.log(signUpState);

            PageTostfication.pageError('Email is required')
            return true
        }

        if (_utils.validateEmail(signUpState.email)) {
            PageTostfication.pageError('Invalid Email')
            return true
        }

        if (_utils.isEmpty(_utils.trim(signUpState.password))) {

            PageTostfication.pageError('Password is required')
            return true

        }

        return false
    }

}