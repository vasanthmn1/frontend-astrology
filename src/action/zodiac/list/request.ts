import { IListResponse } from "../../../interface/response/IListResponse";
import { ServiceResponse } from "../../../interface/response/ServiceResponse";
import { IZodiacRow } from "../../../interface/response/zodiac/IZodiacRow";
import { HelperChild } from "./helper";

export class Request extends HelperChild {
    load = () => {
        this.triggerLoad(async () => {
            try {
                const response = await this.p.apiClient.webApi.postJson<ServiceResponse>("/pb/zodiac/list", {});

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
        //
        // let currentState = store.getState().zodiacListSlice

        this.p.changeState({ isLoading: true });
        // const newState = { ...currentState, isLoading: true };

        // store.dispatch(changeState(newState));
        await callback()

    }

    updateSuccess = (response: IListResponse<IZodiacRow>) => {
        // let currentState = store.getState().zodiacListSlice

        // const newState = {...changeState}
        // const newState = {
        //     ...currentState,
        //     result: { list: response.list },
        //     isLoading: false
        // };
        // currentState.isLoading = false


        this.p.changeState({
            result: { list: response.list },
            isLoading: false
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