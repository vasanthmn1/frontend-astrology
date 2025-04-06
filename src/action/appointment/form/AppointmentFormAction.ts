import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ApiClient } from "../../../api/ApiClient";
import { AppointMentMain } from "../../../component/client/appointment/AppointMentMain";
import { AppointmentFormState, changeState } from "../../../redux/features/appointment/AppointmentFormSlice";
import { store } from "../../../redux/store";
import { Request } from "./Request";
import { Submit } from "./Submit";
import { Validate } from "./Validate";



export class AppointmentFormAction extends ReduxBaseHelper<AppointmentFormState, AppointMentMain> {


    constructor(ctx: AppointMentMain) {
        super("appointmentForm", changeState, ctx);
    }

    apiClient = new ApiClient()
    request = new Request(this)
    submit = new Submit(this)
    validate = new Validate(this)


    getDefaultState = (): AppointmentFormState => {
        let state = store.getState().appointmentForm
        return state
    }
}