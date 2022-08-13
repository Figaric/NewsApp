import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import NewsItem from "../components/NewsComponents/NewsItem";
import NewsList from "../components/NewsComponents/NewsList";
import NewsItemExpand from "../components/NewsComponents/NewsItemExpand";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SearchBar from "../components/SearchBar/SearchBar";
import MainCard from "../components/MainCard";
import Calendar from "../components/SearchBar/Calendar";

const imageUrl = "https://images.unsplash.com/photo-1659938255169-cedcf43c27be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

type DivType = {
    new (): HTMLDivElement; prototype: HTMLDivElement;
}

function Index({ newsItems }) {
    // const selectedItem = useSelector((state: RootState) => state.newsItems.selectedItem);

    // const [imageHeight, setImageHeight] = useState(0);

    // useEffect(() => {
    //     const img = new Image();

    //     img.src = "https://images.unsplash.com/photo-1659938255169-cedcf43c27be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

    //     console.log("Image Height: " + img.height);

    //     setImageHeight(img.height);
    // }, [imageHeight]);s

    return (
        <>
            <div className="
                pt-5
                w-1/2
            ">
                {/* <div className={`
                    overflow-hidden
                    flex
                    items-end
                    w-1/3
                    h-[750px]
                    max-h-[500px]
                    rounded-lg
                    shadow-2xl
                    bg-[url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80')]
                    bg-cover
                    bg-center
                    
                    hover:scale-105
                    hover:bg-[length:120%]
                `}>
                    <div
                        className="
                            flex
                            flex-col
                            items-start
                            justify-center
                            h-1/3
                            w-full
                            p-4
                            bg-gradient-to-t from-black/[.9]
                            space-y-2
                        ">
                        
                        <h1 className="
                            font-bold
                            text-3xl
                        ">
                            Luv U
                        </h1>
                        <p className="
                            font-normal
                            text-lg
                        ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                </div> */}
                <div 

                    id="main-img"
                    className="
                        flex
                        box-border
                        items-end
                        relative
                        rounded-lg
                        shadow-2xl
                        overflow-hidden
                        bg-zinc-800
                        w-1/3
                        bg-[url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80')]
                        bg-center
                        bg-[length:auto_105%]
                        h-[28rem]
                        bg-no-repeat
                        transition-all duration-300 ease-in-out
                        hover:scale-105
                        hover:bg-[length:auto_100%]
                    "
                    >
                    <div
                        style={{
                            

                        }}
                        className="
                            flex
                            flex-col
                            items-start
                            justify-center
                            w-[calc(100%+0px)]
                            p-5
                            bg-gradient-to-t from-black/[.95]
                            space-y-2
                            absolute
                            h-[45%]
                            -bottom-1
                            right-0

                        ">
                        
                        <h1 className="
                            font-bold
                            text-3xl
                        ">
                            Luv U
                        </h1>
                        <p className="
                            font-normal
                            text-lg
                        ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;