import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageHandle } from '../../../interface/page/Ipage'

import { IZodiacRow } from '../../../interface/response/zodiac/IZodiacRow'
import { PageAction } from '../../../action/page/PageAction'
import { RootState } from '../../store'

export interface ZodiacListState extends PageHandle {

    list: Array<IZodiacRow>


    showPopup: boolean

    add: {
        title: string
        desc: string
        photo: string

    }
}

const initialState: ZodiacListState = {

    list: [],
    add: {
        desc: "",
        photo: "",
        title: "",
    },

    showPopup: false,
    ...PageAction.defaultPage()
}

export const zodiacListSlice = createSlice({
    name: 'zodiacList',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<ZodiacListState>) => {
            Object.assign(state, action.payload);
        },

    }
})

export const { changeState } = zodiacListSlice.actions;

export const selectRegisterState = (state: RootState) => state.zodiacListSlice;


export default zodiacListSlice.reducer

