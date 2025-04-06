
import { IListResponse } from "../../../../interface/response/IListResponse";
import { ServiceResponse } from "../../../../interface/response/ServiceResponse";
import { IZodiacRow } from "../../../../interface/response/zodiac/IZodiacRow";
import { HelperChild } from "./helper";

export class Request extends HelperChild {
    load = () => {
        this.triggerLoad(async () => {
            try {
                const response = await this.p.apiClient.webApi.postJson<ServiceResponse>("/pb/zodiac/list", this.setParams());

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
    togglePopup = () => {
        this.p.changeState({ showPopup: !this.p.getState().showPopup });
        // console.log('togglePopup', this.p.getState().showPopup);

    }

    setParams = () => {
        let state = this.p.getState()

        return {
            pageNumber: state.page_no,
            pageLimit: state.page_limit
        }

    }

    private triggerLoad = async (callback: any) => {


        this.p.changeState({ isLoading: true });

        await callback()

    }

    updateSuccess = (response: IListResponse<IZodiacRow>) => {

        this.p.changeState({
            list: response.list,
            page_total_count: response.count,
            isLoading: false
        });
        console.log('====');


    }
    updateError = (error: string) => {
        this.p.changeState({
            isInternalError: true,
            internalErrorMessage: error,
            isLoading: false
        });
    }
}