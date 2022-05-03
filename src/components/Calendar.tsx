import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import "react-datepicker/dist/react-datepicker.css";
import { setDate } from "../redux/requestInfoSlice";

function Calendar() {
    const requestInfo = useSelector((state: RootState) => state.requestInfo);
    const dispatch = useDispatch();

    const InputField = forwardRef(({ value, onClick }: any, ref: any) => (
        <button 
            className="
                border
                border-zinc-700
                bg-zinc-800
                shadow-xl
                px-4
                py-2
                rounded-xl
                w-full
                focus:border-orange-500
                duration-300
            "
            onClick={onClick}
            ref={ref}>
          {value}
        </button>
    ));

    return (
        <DatePicker
            dateFormat={"dd MMM yyyy"}
            onChange={(newDate) => dispatch(setDate(newDate.toDateString()))}
            selected={new Date(requestInfo.date)}
            customInput={<InputField />}
            withPortal
        />
    );
}

export default Calendar;