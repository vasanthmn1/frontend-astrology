import { ApiClient } from "../../../api/ApiClient";
import { ServiceResponse } from "../../../interface/response/ServiceResponse";
import { store } from "../../../redux/store";
import { HelperChild } from "./helper";
import { SignupAction } from "./SignupAction";

export class Submit extends HelperChild {

    submit = () => {
        this.triggerLoad(async () => {
            let currentState = store.getState().register
            try {
                const response = await this.p.apiClient.webApi.postJson<ServiceResponse>("/acc/signup/", {
                    email: currentState.email,
                    password: currentState.password
                });

                if (response) {
                    this.updateSuccess(response.data.result)
                } else {
                    console.log('Error');

                }
            } catch (error: any) {
                this.updateError(error.message)

            }
        });
    }

    triggerLoad = async (callback: any) => {

        this.p.changeState({ isSubmitting: true });

        await callback()

    }

    updateSuccess = (response: string) => {
        // let currentState = store.getState().zodiacListSlice

        // const newState = {...changeState}
        // const newState = {
        //     ...currentState,
        //     result: { list: response.list },
        //     isLoading: false
        // };
        // currentState.isLoading = false

        console.log(response);

        this.p.changeState({
            isSubmitting: false
        });


    }
    updateError = (error: string) => {
        this.p.changeState({
            isInternalError: true,
            internalErrorMessage: error,
            isLoading: false
        });
    }

}