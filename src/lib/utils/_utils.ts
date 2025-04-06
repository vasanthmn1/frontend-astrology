

export let _utils = {

    isNumberKey: (evt: { which: any; keyCode: any; }): boolean => {
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },

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

    isInteger: (value: any): boolean => {

        let number = _utils.isParseInt(value)

        if (number) {
            if (typeof number === "number") {
                return true
            }
        }

        return false
    },


    parseBoolean: (boolValue: any) => {
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
