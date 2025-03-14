

export let _utils = {


    validateEmail: (value: any): boolean => {
        value = _utils.trim(value)
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return true
        }
        return false
    },

    isParseInt: (value: any): number => {
        if (typeof value === "number") {
            return parseInt(_utils.trim(value.toString()))
        }
        return parseInt(_utils.trim(value))
    },

    parseBooleam: (boolValue: any) => {
        if (!boolValue) {
            return false
        }

        boolValue = (boolValue + "").trim()
        return (boolValue == 'true')
    },

    trim: (value: any): string => {
        value = value || ""
        value = value + ''
        return value.trim()
    },

    isEmptyStrict: (input: any) => {
        input = _utils.trim(input)
        return _utils.isEmpty(input)
    },

    isEmpty: (input: any) => {
        return input === undefined || input === null || input === '';
    },
}
