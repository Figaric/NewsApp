import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";

function NewsList() {
    const newsItems = useSelector((state: RootState) => state.newsItems.items);

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
            {newsItems.map(i => (
                <NewsItem
                    author={i.author}
                    title={i.title}
                    imageUri={i.urlToImage} />
            ))}
        </motion.div>
    );
}

export default NewsList;