import { ServiceResponse } from "../../../interface/response/ServiceResponse";
import { PageTostfication } from "../../page/PageNotification";
import { PageResponse } from "../../page/PageResponse";
import { HelperChild } from "./helper";

export class Request extends HelperChild {



    load = () => {
        this.triggerLoad(async () => {
            try {
                const response = await this.p.apiClient.webApi.postJson<ServiceResponse>("/user/info/", {
                });
                console.log(response);

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
        this.p.changeState({ isLoading: true });
        await callback()
    }

    updateSuccess = (data: any) => {
        this.p.changeState({
            ...data,
            isLoading: false,
            isSubmitting: false,

        });

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