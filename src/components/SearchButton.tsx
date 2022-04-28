import axios from "axios";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setNewsItems } from "../redux/newsItemsSlice";

function SearchButton() {

    const dispatch = useDispatch();

    function handleClick() {
        axios.get("https://newsapi.org/v2/everything?q=charged&page=1&pageSize=15&apiKey=d3786a3a626f4cf8a5edb668f8ab757d")
            .then(res => {
                const newsItems = res.data.articles;

                dispatch(setNewsItems(newsItems));
            });
    }

    return (
        <motion.button 
            onClick={() => handleClick()}
            whileTap={{
                borderColor: "#f97316",
                color: "#f97316",
                scale: 0.9
            }}
            className=" 
                inline-block
                rounded-xl
                border
                border-zinc-700
                bg-zinc-800
                px-5
        ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </motion.button>
    );
}

export default SearchButton;