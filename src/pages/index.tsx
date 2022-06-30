import axios from "axios";
import NewsList from "../components/NewsList";

function Index({ newsItems }) {
    return (
        <div className="
            p-4
            w-2/3
            mx-auto
        ">
            <NewsList newsItems={newsItems} />
        </div>
    );
}

// export async function getStaticProps() {
//     const response = await axios.get("");

//     const articles = response.data.articles;

//     return {
//         props: {
//             newsItems: articles
//         }
//     }
// }

export default Index;