import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>NewsApp - Homepage</title>
            </Head>

            <main
                className="
                    min-h-screen
                    flex
                    justify-center
                    items-center
                    
                ">
                {children}
            </main>
        </div>
    );
}

export default Layout;