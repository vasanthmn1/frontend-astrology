import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { _utils } from "../../lib/utils/_utils";
import { date_utils } from "../../lib/utils/date_utils";

type Value = Date | null;

interface ThisProps {
    onchange: (date: Value | null) => void;
    date: string; // Ensure date is a string that can be parsed to Date
}

export function CustomDatePicker(props: ThisProps) {
    const { date, onchange } = props;
    const datePickerRef = useRef<any>(null);


    const clear = () => {
        onchange(null);
    };

    const handleDateChange = (date: Date | null) => {
        if (date) {
            onchange(date);
        } else {
            onchange(null);
        }
    };

    const parsedDate = date ? new Date(_utils.isParseInt(date)) : null;

    const handleOpenDatePicker = () => {
        // Programmatically open the DatePicker popup
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);

        }
    };

    const handleCloseDatePicker = () => {
        // Close the DatePicker popup
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(false);

        }
    };

    return (
        <div>
            {/* Trigger the DatePicker to open on click */}
            <div onClick={handleOpenDatePicker}>
                <input
                    readOnly
                    value={parsedDate ? date_utils.timestampToDate(parsedDate.getTime()) : ""}
                    placeholder="Click to select a date"
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <DatePicker
                // calendarClassName="po"
                // wrapperClassName="top-30"
                // popperClassName="top-30"
                className="d-none"
                ref={datePickerRef}
                selected={parsedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                onClickOutside={handleCloseDatePicker}

            />

            {/* <button onClick={clear}>Clear Date</button> */}
        </div>
    );
}
