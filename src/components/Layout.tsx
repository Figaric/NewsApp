import NextHead from "next/head";

function Layout({ children }) {
    return (
        <div className="
            bg-zinc-900

        ">
            <NextHead>
                <meta name="viewport" content="width=device-width, initial-scale=1"  />
                <title>News app</title>
            </NextHead>

            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;