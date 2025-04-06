import { Component, ReactNode, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { HookParams } from "../../../interface/HookParams";
import { ZodiacListState } from "../../../redux/features/zodiac/zodiacListSlice";
import { ZodiacListAction } from "../../../action/zodiac/list/ZodiacListAction";


export class ZodiacList extends Component<HookParams<ZodiacListState>> {

    action = new ZodiacListAction(this)
    state = this.action.getDefaultState();


    componentDidUpdate(prevProps: HookParams<ZodiacListState>) {
        if (prevProps.state !== this.props.state) {
            this.setState({ ...this.props.state });
        }
    }
    componentDidMount(): void {
        this.action.request.load()
    }



    render() {

        let { isLoading, isInternalError, internalErrorMessage } = this.state

        return (


            <div>
                <h2>Zodiac List</h2>
                {isLoading && <p>Loading...</p>}
                {isInternalError && <p style={{ color: "red" }}>{internalErrorMessage}</p>}
                <ul>
                    {/* {list.length > 0 ? (
                    list.map((item: any, index: number) => <li key={index}>{item.name}</li>) // Assuming each item has a 'name' property
                ) : (
                    !isLoading && <p>No data available</p>
                )} */}
                </ul>
            </div>

        )
    }
}
// export const ZodiacList = () => {

//     const { isLoading, isInternalError, internalErrorMessage, list } = useAppSelector((state) => state.zodiacListSlice);
//     const zodiacListAction = new ZodiacListAction();

//     useEffect(() => {
//         zodiacListAction.request.load();
//     }, []);


//     return (


//         <div>
//             <h2>Zodiac List</h2>
//             {isLoading && <p>Loading...</p>}
//             {isInternalError && <p style={{ color: "red" }}>{internalErrorMessage}</p>}
//             <ul>
//                 {/* {list.length > 0 ? (
//                     list.map((item: any, index: number) => <li key={index}>{item.name}</li>) // Assuming each item has a 'name' property
//                 ) : (
//                     !isLoading && <p>No data available</p>
//                 )} */}
//             </ul>
//         </div>

//     )
// }

export const ZodiacListFn = () => {


    const currentState = useSelector((state: RootState) => state.zodiacListSlice);


    return <ZodiacList state={currentState}
        navigate={useNavigate()}
        params={useParams()} location={useLocation()} />
}