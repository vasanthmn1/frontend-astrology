import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../api/ApiClient";
import { ZodiacList } from "../../../component/client/home/ZodiacList";
import { changeState, ZodiacListState, } from "../../../redux/features/zodiac/zodiacListSlice";
import { store } from "../../../redux/store";
import { Request } from "./request";



export class ZodiacListAction extends ReduxBaseHelper<ZodiacListState, ZodiacList> {

    constructor(ctx: ZodiacList) {
        super("zodiacListSlice", changeState, ctx);
    }



    getDefaultState = (): ZodiacListState => {
        let state = store.getState().zodiacListSlice

        return state
    }


    apiClient = new ApiClient()

    request = new Request(this)

}
