import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { IPageNation } from '../../../interface/page/Ipage'
import { pageNationAction } from '../../../action/page/PageNationAction'
import { IZodiacRow } from '../../../interface/response/zodiac/IZodiacRow'

export interface ZodiacState extends IPageNation {
    isLoading: boolean
    internalErrorMessage: string,
    isInternalError: boolean,
    result: {
        list: Array<IZodiacRow>
    }
}

const initialState: ZodiacState = {
    internalErrorMessage: "",
    isInternalError: false,
    isLoading: true,
    result: {
        list: []
    },
    ...pageNationAction.intPage()
}

export const zodiacListSlice = createSlice({
    name: 'zodiacList',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<ZodiacState>) => {
            Object.assign(state, action.payload);
        },

    }
})

export const { changeState } = zodiacListSlice.actions;

export const selectCount = (state: RootState) => state.counter.value

export default zodiacListSlice.reducer

