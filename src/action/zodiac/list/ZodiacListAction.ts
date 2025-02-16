import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../api/ApiClient";
import { IListResponse } from "../../../interface/response/IListResponse";
import { ServiceResponse } from "../../../interface/response/ServiceResponse";
import { IZodiacRow } from "../../../interface/response/zodiac/IZodiacRow";

import { HelperChild } from "./helper";



export class ZodiacListAction extends HelperChild {


    apiClient = new ApiClient()

    load = () => {
        this.triggerLoad(async () => {
            try {
                const response = await this.apiClient.webApi.postJson<ServiceResponse>("/pb/zodiac/list", {});

                if (response) {
                    this.updateSuccess(response.data.result)
                } else {
                    console.log('Error');

                }
            } catch (error: any) {
                console.log(error.message);

            }
        });
    }

    triggerLoad = async (callback: any) => {
        //
        // let currentState = store.getState().zodiacListSlice

        this.changeState({ isLoading: true });
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


        this.changeState({
            result: { list: response.list },
            isLoading: false
        });


    }
    updateError = () => {

    }

}
