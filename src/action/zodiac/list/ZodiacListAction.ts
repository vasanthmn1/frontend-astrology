import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../api/ApiClient";
import { changeState, ZodiacState } from "../../../redux/features/zodiac/zodiacListSlice";
import { Request } from "./request";



export class ZodiacListAction extends ReduxBaseHelper<ZodiacState> {

    constructor() {
        super("zodiacListSlice", changeState);
    }

    apiClient = new ApiClient()

    request = new Request(this)

}
