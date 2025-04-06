import { IApplicationParams } from "../../../interface/parms/IApplicationParams";
import { ServiceResponse } from "../../../interface/response/ServiceResponse";
import { PageTostfication } from "../../page/PageNotification";
import { PageResponse } from "../../page/PageResponse";
import { HelperChild } from "./helper";

export class Submit extends HelperChild {


    submit = () => {
        this.triggerLoad(async () => {
            let state = this.p.getState()

            try {
                const response = await this.p.apiClient.webApi.postJson<ServiceResponse>("/user/apply/", this.paramsField());

                if (PageResponse.validateResponse(response.data,this.p.ctx.props)) {
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

        let state = this.p.getState()

        if (!this.p.validate.checkValidateParams(state)) {
            await callback()
        }


    }

    updateSuccess = (message: string) => {

        PageTostfication.pageSuccess(message)

        this.p.changeState({
            isLoading: false,
            isSubmitting: false
        });

        this.p.ctx.props.navigate('/')
    }

    paramsField = (): IApplicationParams => {

        let form = this.p.getState().form;
        return {
            address: form.address,
            available_date: form.available_date,
            phone: form.phone
        }
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