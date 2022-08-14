import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../redux/newsItemSlice";
import NewsItemType from "../../types/NewsItemType";

interface NewsItemProps {
    title: string;
    description: string;
    imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
    
}) => {
    return (
        <div 
            className="
                flex
                box-border
                items-end
                relative
                rounded-lg
                shadow-2xl
                overflow-hidden
                bg-zinc-800
                bg-[url('https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=60%20100w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=60%20200w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60%20300w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60%20400w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60%20500w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60%20600w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60%20700w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60%20800w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60%20900w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60%201000w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=60%201100w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60%201200w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=60%201296w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=60%201400w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=60%201600w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=60%201800w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=60%202000w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=2200&q=60%202200w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=60%202400w,%20https://images.unsplash.com/photo-1660323992783-28a46810b936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=60%202592w')]
                bg-center
                bg-[length:105%_auto]
                h-[32rem]
                bg-no-repeat
                transition-all duration-300 ease-in-out
                hover:scale-105
                hover:bg-[length:100%_auto]
            "
            >
            <div className="
                flex
                items-end
                justify-start
                h-full
                bg-gradient-to-t from-black/50
            ">
                <div
                    className="
                        w-full
                        p-5
                        space-y-2
                    ">
                    
                    <h1 className="
                        font-bold
                        text-3xl
                    ">
                        Cantor executive, former Deutsche Bank Co-CEO Anshu Jain dies - Fox Business
                    </h1>
                    <p className="
                        font-normal
                        text-lg
                    ">
                        Anshu Jain, a veteran of the financial industry and Cantor Fitzgerald president and former co-CEO of Deutsche Bank, has died after a battle with cancer, according to his family.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;