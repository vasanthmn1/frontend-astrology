import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPageNation, PageHandle } from '../../../../interface/page/Ipage'
import { IZodiacRow } from '../../../../interface/response/zodiac/IZodiacRow'
import { PageAction } from '../../../../action/page/PageAction'
import { RootState } from '../../../store'

export interface AdminZodiacListState extends PageHandle, IPageNation {

    list: Array<IZodiacRow>


    showPopup: boolean

    add: {
        title: string
        desc: string
        photo: string | ArrayBuffer | null

    }
}

const initialState: AdminZodiacListState = {

    list: [],
    add: {
        desc: "",
        photo: "",
        title: "",
    },
    page_no: 0,
    page_total_count: 10,
    page_limit: 10,

    showPopup: false,
    ...PageAction.defaultPage()
}

export const AdminZodiacListSlice = createSlice({
    name: 'adminZodiacList',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<AdminZodiacListState>) => {
            Object.assign(state, action.payload);
        },

    }
})

export const { changeState } = AdminZodiacListSlice.actions;

export const selectRegisterState = (state: RootState) => state.adminZodiacListSlice;


export default AdminZodiacListSlice.reducer

