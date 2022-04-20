import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
    const [date, setDate] = useState(new Date());

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
            onChange={(newDate) => setDate(newDate)}
            selected={date}
            customInput={<InputField />}
            withPortal
        />
    );
}

export default Calendar;