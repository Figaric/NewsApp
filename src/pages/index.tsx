function Index() {

    return (
        <div className="
            w-1/4
            flex
            flex-row
            space-x-3
        ">
            <div className="
                bg-zinc-800
                shadow-2xl
                p-5
                border-b
                border-zinc-700
                relative
            ">
                <img className="
                    absolute
                    rounded-2xl
                    h-full
                    w-full
                    object-cover
                    -z-10
                    opacity-50
                    border
                    border-zinc-600
                " src={"https://www.stereophile.com/images/061222-Aavik-600.jpg"} />
                <div className="
                    space-y-3
                ">
                    <p className="
                        font-serif
                        font-[700]
                        text-2xl
                    ">
                        Breakpoints and media queries
                    </p>
                    <p className="
                        font-[450]
                        font-sans
                        ">
                        You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:font-serif to apply the font-serif utility at only medium screen sizes and above.
                    </p>
                    <p className="text-sm text-zinc-700">
                        by Tikhon
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Index;