import DatePicker from "react-datepicker";
import { forwardRef, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
        <button className="
            bg-zinc-800
            border
            border-zinc-700
            px-4
            py-2
            rounded-full
            shadow-lg
            outline-2
            outline-offset-2
            outline
            outline-transparent
            transition-[outline-color] duration-150
            focus:outline-orange-500
        " onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
            />
            {/* <p>
                Sample text

            </p> */}
        </div>
    );
}

export default Calendar;