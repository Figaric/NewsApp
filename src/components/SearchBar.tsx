import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useSelector } from "react-redux";
import Calendar from "./Calendar";
import KeywordInputField from "./KeywordInputField";
import SearchButton from "./SearchButton";

function SearchBar() {
    return (
        <div className="
            flex
            flex-row
            gap-2
        ">
            {/* Keyword input field */}
            <KeywordInputField />
            {/* Date picker */}
            <Calendar />
            {/* Search button */}
            <SearchButton />
        </div>
    );  
}

export default SearchBar;