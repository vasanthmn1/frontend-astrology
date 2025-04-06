import { _utils } from "../../../lib/utils/_utils";
import { AppointmentFormState } from "../../../redux/features/appointment/AppointmentFormSlice";
import { PageTostfication } from "../../page/PageNotification";
import { HelperChild } from "./helper";

export class Validate extends HelperChild {

    checkValidateParams = (state: AppointmentFormState): boolean => {
        if (_utils.isEmpty(_utils.trim(state.form.address))) {

            PageTostfication.pageError('address is required')
            return true
        }

        if (!_utils.isParseInt(state.form.available_date)) {
            PageTostfication.pageError('Available_date is required')
            return true
        }

        if (_utils.isInteger(state.form.phone)) {

            PageTostfication.pageError('Phone Number is required')
            return true

        }


        return false
    }


}