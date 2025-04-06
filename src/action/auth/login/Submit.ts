import { ILoginResponse } from "../../../interface/auth/ILoginResponce";
import { ServiceResponse } from "../../../interface/response/ServiceResponse";
import { localStorageAction } from "../../localStorage/localStorageAction";
import { PageTostfication } from "../../page/PageNotification";
import { PageResponse } from "../../page/PageResponse";
import { HelperChild } from "./helper";

export class Submit extends HelperChild {

    login = () => {
        this.triggerLoad(async () => {
            let state = this.p.getState()


            try {
                const response = await this.p.apiClient.webApi.postJson<ServiceResponse>("/acc/login/", {
                    email: state.email,
                    password: state.password
                });

                if (PageResponse.validateResponse(response.data, this.p.ctx.props)) {
                    this.updateSuccess(response.data.result)
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

        if (!this.p.validate.validate(state)) {
            await callback()
        }


    }

    updateSuccess = (data: ILoginResponse) => {

        PageTostfication.pageSuccess("Login Success")

        this.p.changeState({
            isLoading: false,
            isSubmitting: false
        });
        localStorageAction.setAuthUser(data)

        this.p.ctx.props.navigate('/')



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