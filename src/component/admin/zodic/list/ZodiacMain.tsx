import { Component } from "react";
import { HookParams } from "../../../../interface/HookParams";
import { ZodiacListState } from "../../../../redux/features/zodiac/zodiacListSlice";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AdminZodiacListState } from "../../../../redux/features/admin/zodiac/zodiacListSlice";
import { AdminZodiacListAction } from "../../../../action/admin/zodiac/list/AdminZodiacListAction";
import { Result } from "./Result";
import { Header } from "./Header";
import { AddPopup } from "./popup/AddPopup";
import { Footer } from "./Footer";


export class ZodiacMain extends Component<HookParams<AdminZodiacListState>> {



    action = new AdminZodiacListAction(this)
    state = this.action.getDefaultState();

    componentDidMount(): void {
        this.action.request.load()
    }
    componentDidUpdate(prevProps: Readonly<HookParams<AdminZodiacListState>>) {

        if (prevProps.state !== this.props.state) {
            this.setState({ ...this.props.state });
        }
    }

    render() {


        if (this.state.isLoading) {
            return <h1>loading</h1>
        }
        // if (this.state.isInternalError) {
        //     return <h1>isInternalError</h1>
        // }


        return <div>
            <Header parent={this} />
            <Result parent={this} />
            <Footer parent={this} />
            <AddPopup parent={this} option={{ show: this.state.showPopup }} />


        </div>
    }

}



export const ZodiacMainFn = () => {
    const currentState = useSelector((state: RootState) => state.adminZodiacListSlice);

    return <ZodiacMain
        state={currentState}
        navigate={useNavigate()}
        params={useParams()} location={useLocation()}

    />
}