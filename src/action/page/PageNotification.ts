import { ToastContainer, toast } from 'react-toastify';


export let PageTostfication = {



    pageError: (message: any) => {
        toast.error(message,)
    },
    pageSuccess: (message: any) => {
        toast.success(message,)
    }

}