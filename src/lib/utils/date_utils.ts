import { format, parseISO } from "date-fns";
export let date_utils = {


    getTimeStamp: () => {
        return Date.now()
    },

    timestampToDate: (timestamp: number) => {

        const date = new Date(timestamp);
        return format(date, "yyyy-MM-dd");
    },

    dateToTimestamp: (dateStr: string) => {
        const date = new Date(dateStr);

        return date.getTime();
    }
}