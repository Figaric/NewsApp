import axios from "axios";
import NewsItem from "./NewsItem";
import motion from "framer-motion";

function NewsList({ newsItems }) {
    return (
        <div className="
            grid
            grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]
            auto-rows-fr
            gap-4
            
        ">
            {/* {newsItems.map((ni, index) => (
                <NewsItem key={index} />
            ))} */}
            <NewsItem />
            <NewsItem />
        </div>
    );
}

export default NewsList;