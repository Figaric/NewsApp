import Head from "next/head";

const Layout: React.FC = ({ children }) => {
    return (
        <main>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>NewsApp - Homepage</title>
            </Head>

            <div className="
                flex
                justify-center
                pt-5
            ">
                {children}
            </div>
        </main>
    );
}

export default Layout;