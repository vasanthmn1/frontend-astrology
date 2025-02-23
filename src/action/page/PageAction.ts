import { PageHandle } from "../../interface/page/Ipage"

export class PageAction {


    static defaultPage = (): PageHandle => {
        return {
            internalErrorMessage: "",
            isInternalError: false,
            isLoading: false,
            isSubmitting: false,
            submittingMessage: ""
        }
    }


    static preRequestLoad = (): PageHandle => {
        return {
            internalErrorMessage: "",
            isInternalError: false,
            isLoading: true,
            isSubmitting: false,
            submittingMessage: ""
        }
    }
    static postRequest = (): PageHandle => {
        return {
            internalErrorMessage: "",
            isInternalError: false,
            isLoading: true,
            isSubmitting: false,
            submittingMessage: ""
        }
    }

    static preSubmitLoad = (): PageHandle => {
        return {
            internalErrorMessage: "",
            isInternalError: false,
            isLoading: false,
            isSubmitting: true,
            submittingMessage: ""
        }
    }
    static postSubmit = (): PageHandle => {
        return {
            internalErrorMessage: "",
            isInternalError: false,
            isLoading: false,
            isSubmitting: false,
            submittingMessage: ""
        }
    }

}