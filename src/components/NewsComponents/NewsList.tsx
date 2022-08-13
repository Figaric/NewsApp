import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NewsItem from "./NewsItem";

function NewsList() {
    const newsItems = useSelector((state: RootState) => state.newsItems.newsItems);

    return (
        <div className="
            columns-2
            gap-4
            space-y-4
        ">
            {/* {newsItems.map((ni, i) => (
                <NewsItem
                    key={i}
                    title={ni.title}
                />
            ))} */}
            <NewsItem
                title={"Hello World"}
                description={"This article is about Hello World statement"}
                imageUrl={"https://unsplash.com/photos/8WcKK4S553E"}
                layoutId={"1"}/>
            <NewsItem
                title={"Hello World"}
                description={"This article is about Hello World statement"}
                imageUrl={"https://unsplash.com/photos/8WcKK4S553E"}
                layoutId={"2"}/>
            <NewsItem
                title={"Hello World"}
                description={"This article is about Hello World statement"}
                imageUrl={"https://unsplash.com/photos/8WcKK4S553E"}
                layoutId={"3"}/>
            <NewsItem
                title={"Hello World"}
                description={"This article is about Hello World statement"}
                imageUrl={"https://unsplash.com/photos/8WcKK4S553E"}
                layoutId={"4"}
            />
        </div>
    );
}

export default NewsList;

