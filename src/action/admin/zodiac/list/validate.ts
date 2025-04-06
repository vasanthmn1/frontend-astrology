
import { _utils } from "../../../../lib/utils/_utils";
import { AdminZodiacListState } from "../../../../redux/features/admin/zodiac/zodiacListSlice";
import { PageTostfication } from "../../../page/PageNotification";
import { HelperChild } from "./helper";

export class Validate extends HelperChild {




    validate = (signUpState: AdminZodiacListState): boolean => {


        if (_utils.isEmpty(_utils.trim(signUpState.add.title))) {
            console.log(signUpState);

            PageTostfication.pageError('title is required')
            return true
        }


        if (_utils.isEmpty(_utils.trim(signUpState.add.desc))) {

            PageTostfication.pageError('desc is required')
            return true

        }

        return false
    }

}