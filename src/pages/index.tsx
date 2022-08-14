import axios from "axios";
import NewsItem from "../components/NewsComponents/NewsItem";

export async function getStaticProps() {
    const request = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.apiKEY}`);
    const articles = request.data.articles;

    return {
        props: { newsItems: articles }
    };
}

function Index({ newsItems }) {

    return (
            <div className="
                pt-5
                grid
                grid-cols-2
                gap-4
                w-[900px]
            ">
                {newsItems.map((ni, i) => (
                    <NewsItem
                        key={i}
                        title={ni.title}
                        description={ni.description}
                        imageUrl={ni.urlToImage} />
                ))}
            </div>
    );
}

export default Index;