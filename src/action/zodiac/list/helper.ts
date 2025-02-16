import { ReduxBaseHelper } from "../../../abstract/ReduxBaseHelper";
import { ZodiacState } from "../../../redux/features/zodiac/list/zodiacListSlice";

export class HelperChild extends ReduxBaseHelper<ZodiacState> {
    constructor() {
        super("zodiacListSlice");
    }
}