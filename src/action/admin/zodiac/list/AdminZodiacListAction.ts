import { ReduxBaseHelper } from "../../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../../api/ApiClient";
import { ZodiacMain } from "../../../../component/admin/zodic/list/ZodiacMain";
import { AdminZodiacListState, changeState } from "../../../../redux/features/admin/zodiac/zodiacListSlice";


import { store } from "../../../../redux/store";
import { Request } from "./request";
import { Submit } from "./submit";
import { Validate } from "./validate";

export class AdminZodiacListAction extends ReduxBaseHelper<AdminZodiacListState, ZodiacMain> {


    constructor(ctx: ZodiacMain) {
        super("adminZodiacListSlice", changeState, ctx);
    }

    request = new Request(this)
    apiClient = new ApiClient()
    validate = new Validate(this)
    submit = new Submit(this)
    getDefaultState = (): AdminZodiacListState => {
        let state = store.getState().adminZodiacListSlice

        return state
    }



}