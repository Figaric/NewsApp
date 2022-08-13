import axios from "axios";
import NewsItemType from "../types/NewsItemType";

async function sendNewsRequest(): Promise<NewsItemType[]> {
    const response = await axios.get("link");

    const articles = response.data.articles;

    return articles;
}

export default sendNewsRequest;