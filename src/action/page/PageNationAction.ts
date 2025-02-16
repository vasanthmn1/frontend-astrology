import { IPageNation } from "../../interface/page/Ipage";

export let pageNationAction = {


    intPage: (): IPageNation => {
        return {
            page_limit: 1,
            page_no: 1,
            page_total_count: 0
        }
    }

}