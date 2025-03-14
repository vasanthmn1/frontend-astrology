import { ServiceResponse } from "../../interface/response/ServiceResponse";
import { static_const } from "../../utils/const/static";

export let PageResponse = {

    validateResponse: (response: ServiceResponse): boolean => {

        if (response.status === static_const.api_response.success) {
            return true
        }

        if (response.status === static_const.api_response.error) {
            return false
        }
        return false

    },

    isSuccess: () => {

    },


    isError: () => {

    }
}