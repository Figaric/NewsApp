import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NewsItemProps {
    imageUri: string,
    title: string,
    author: string
};

const NewsItem: React.FC<NewsItemProps> = ({
    imageUri,
    title,
    author
}) => {

    return (
        <motion.div
            whileHover={{
                scale: 1.03
            }}
            className=" 
                bg-zinc-800
                rounded-xl
                shadow-xl
            ">
            <div className="
                h-36
                2xl:h-40
            ">
                <img className="
                    rounded-t-xl
                    h-full
                    w-full
                    object-cover
                " src={imageUri} />
            </div>
            <div className="
                border
                border-zinc-700
                rounded-b-xl
                p-4
                pt-0
            ">
                <p className="
                    mt-2
                    font-medium
                    text-sm
                    text-zinc-600
                ">
                    by {author}
                </p>
                <p className="
                    font-semibold
                ">
                    {title}
                </p>
            </div>
        </motion.div>
    );  
}

export default NewsItem;