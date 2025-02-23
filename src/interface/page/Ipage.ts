
export interface IPageNation {
    page_total_count: number
    page_limit: number,
    page_no: number
}


export interface PageHandle {

    isLoading: boolean;
    
    isInternalError: boolean;
    internalErrorMessage: string;
 
    isSubmitting: boolean;
    submittingMessage: string;


}