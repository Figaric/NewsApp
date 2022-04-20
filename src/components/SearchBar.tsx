import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useSelector } from "react-redux";
import Calendar from "./Calendar";
import SearchButton from "./SearchButton";

function SearchBar() {
    const requestInfo = useSelector(state => state.requestInfo.value);

    return (
        <div className="
            flex
            flex-row
            gap-2
        ">
            {/* Keyword input field */}
            <div className="
                inline-block
                border
                px-4
                py-2
                border-zinc-700
                bg-zinc-800
                rounded-xl
                w-full
                shadow-xl
                focus-within:border-orange-500
                duration-300
            ">
                <input 
                    onBlur={}
                    className="
                        w-full
                        focus:outline-none
                        bg-transparent
                        placeholder:text-zinc-600
                " 
                placeholder="Keyword"
                type="text" />
            </div>
            {/* Date picker */}
            <Calendar />
            {/* Search button */}
            <SearchButton />
        </div>
    );  
}

export default SearchBar;