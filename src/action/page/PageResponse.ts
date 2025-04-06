import { useNavigate } from "react-router-dom";
import { ServiceResponse } from "../../interface/response/ServiceResponse";
import { static_const } from "../../utils/const/static";
import { localStorageAction } from "../localStorage/localStorageAction";

export let PageResponse = {

    validateResponse: (response: ServiceResponse, props: any): boolean => {

        if (response.status === static_const.api_response.success) {
            return true
        }

        if (response.status === static_const.api_response.error) {

            return false
        }

        if (response.status === static_const.api_response.authError) {


            localStorageAction.clearStorage()
            props.navigate('/login')

            return false
        }
        return false

    },

    isSuccess: () => {

    },


    isError: () => {

    }
}