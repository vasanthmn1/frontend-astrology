import { useEffect } from "react";
import { ZodiacListAction } from "../../../action/zodiac/list/ZodiacListAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export const ZodiacList = () => {

    const { result, isLoading, isInternalError, internalErrorMessage } = useAppSelector((state) => state.zodiacListSlice);
    const zodiacListAction = new ZodiacListAction();

    useEffect(() => {
        zodiacListAction.request.load();
    }, []);

    console.log(result)

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
