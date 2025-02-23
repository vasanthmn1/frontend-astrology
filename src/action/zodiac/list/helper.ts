import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { SimpleHelper } from "../../../abstract/SimpleHelper";
import { changeState, ZodiacState } from "../../../redux/features/zodiac/zodiacListSlice";
import { ZodiacListAction } from "./ZodiacListAction";

export class HelperChild extends SimpleHelper<ZodiacListAction> {

}