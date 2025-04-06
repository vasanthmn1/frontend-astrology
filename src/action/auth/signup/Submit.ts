import { ServiceResponse } from "../../../interface/response/ServiceResponse";
import { store } from "../../../redux/store";
import { PageTostfication } from "../../page/PageNotification";
import { PageResponse } from "../../page/PageResponse";
import { HelperChild } from "./helper";

export class Submit extends HelperChild {

    submit = () => {
        this.triggerLoad(async () => {
            let currentState = store.getState().register

            try {
                const response = await this.p.apiClient.webApi.postJson<ServiceResponse>("/acc/signup/", {
                    email: currentState.email,
                    password: currentState.password,
                    name: currentState.name
                });

                if (PageResponse.validateResponse(response.data, this.p.ctx.props)) {
                    this.updateSuccess(response.data.message)
                } else {
                    this.updateError(response.data.result)
                }
            } catch (error: any) {
                this.updateError(error.message)

            }
        });
    }

    triggerLoad = async (callback: any) => {

        this.p.changeState({ isSubmitting: true });

        let state = store.getState().register

        if (!this.p.validate.validate(state)) {


            await callback()

        }


    }

    updateSuccess = (message: string) => {

        PageTostfication.pageSuccess(message)

        this.p.changeState({
            isLoading: false,
            isSubmitting: false
        });
        this.p.ctx.props.navigate('/login')

    }
    updateError = (error: string) => {

        PageTostfication.pageError(error)

        this.p.changeState({
            isInternalError: true,
            internalErrorMessage: error,
            isLoading: false
        });
    }

}