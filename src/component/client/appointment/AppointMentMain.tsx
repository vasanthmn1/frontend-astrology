import { Component } from "react"
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HookParams } from "../../../interface/HookParams";
import { AppointmentFormState } from "../../../redux/features/appointment/AppointmentFormSlice";
import { AppointmentFormAction } from "../../../action/appointment/form/AppointmentFormAction";
import { CustomDatePicker } from "../../../reuseable/datePicker/CustomDatePicker";
import { _utils } from "../../../lib/utils/_utils";


export class AppointMentMain extends Component<HookParams<AppointmentFormState>> {


    action = new AppointmentFormAction(this)
    state = this.action.getDefaultState();

    componentDidMount(): void {


        this.action.request.load()
    }
    componentDidUpdate(prevProps: HookParams<AppointmentFormState>) {
        console.log(this.props.state.form);
        if (prevProps.state !== this.props.state) {
            this.setState({ ...this.props.state });
        }
    }

    datePicker = (value: any) => {

        if (!value) {
            this.action.changeState({
                ...this.state,
                form: {
                    ...this.state.form,
                    available_date: "",
                }
            })
        }

        const timestamp = value.getTime();

        this.action.changeState({
            ...this.state,
            form: {
                ...this.state.form,
                available_date: timestamp,
            }
        })


    }

    render() {

        return (
            <div className="appointment">
                <div className="form">
                    <div className="wrapper">
                        <div className="input">
                            <label className="label" htmlFor="">Email</label>
                            <input type="text" defaultValue={this.state.email} disabled />
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="">Name</label>
                            <input
                                type="text" disabled defaultValue={this.state.name} name="name" />
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="">Available Date</label>
                            <CustomDatePicker date={this.state.form.available_date} onchange={(value) => this.datePicker(value)} />
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="">Address</label>
                            <input name="address" onChange={(e) => this.action.nestedChangeInput(e, "form")} type="text" defaultValue={this.state.form.address} />
                        </div>
                        <div className="input">
                            <label className="label" htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="xxxx xxxx xxxx xxxx"
                                onInput={(e: any) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                maxLength={15}
                                name="phone"
                                onChange={(e) => this.action.nestedChangeInput(e, "form")}
                            />
                        </div>
                        <div className="button">
                            <button onClick={this.action.submit.submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}






export const AppointMentMainFn = () => {
    const currentState = useSelector((state: RootState) => state.appointmentForm);

    return <AppointMentMain
        state={currentState}
        navigate={useNavigate()}
        params={useParams()} location={useLocation()} />
}
