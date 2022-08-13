import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../redux/newsItemSlice";
import NewsItemType from "../../types/NewsItemType";

const imageMotion = {
    hover: {
        backgroundSize: "100.4%",
    }
};

const newsItemMotion = {
    hover: {
        scale: 1.05
    }
}

const NewsItem: React.FC<NewsItemType> = (props) => {
    const dispatch = useDispatch();
    // const [item, setItem] = useState("");

    return (
        <motion.div 
            layoutId={props.layoutId}
            onClick={() => { 
                console.log("Props: ", (props.layoutId));
                dispatch(setSelectedItem({ ...props }));
                // setItem(props.layoutId);
            }} 
            variants={newsItemMotion}
            whileHover={"hover"}
            className="
                rounded-lg
                shadow-2xl
                overflow-hidden
                bg-zinc-800
                w-full
            "
            >
            {/* Image container */}
            <motion.div 
                variants={imageMotion}
                className="
                    bg-[url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80')]
                    bg-[length:105%]
                    bg-center
                    h-60
                    ">
            </motion.div>
            <div className="space-y-2 p-4 shadow-[inset_0_7px_9px_-7px_rgba(0,0,0,0.4)]">
                <p className="font-serif font-extrabold text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, atque?
                </p>
                <p className="font-sans text-sm font-medium text-zinc-600">
                    by Tikhon
                </p>
            </div>
        </motion.div>
    );
}

export default NewsItem;