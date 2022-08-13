import { motion } from "framer-motion";

function SearchBtn() {
    return (
        <motion.button 
            whileHover={{
                backgroundColor: "#ea580c"
            }}
            className="
                text-sm
                rounded-r-full
                w-1/5
                flex
                items-center
                justify-center
                text-white
                bg-orange-500
                border
                border-transparent
        ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </motion.button>
    );
}

export default SearchBtn; 