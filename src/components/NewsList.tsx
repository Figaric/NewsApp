import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsList() {
    // const [newsItems, setNewsItems] = useState([]);

    // useEffect(() => {
    //     axios.get("https://newsapi.org/v2/everything?q=charged&page=1&pageSize=15&apiKey=d3786a3a626f4cf8a5edb668f8ab757d")
    //         .then(res => {
    //             console.log();
    //         });
    // });

    return (
        <motion.div
            initial={{
                y: 100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 2
            }}
            className="
                grid
                gap-4
                grid-cols-1
                2xl:grid-cols-2
        ">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </motion.div>
    );
}

export default NewsList;