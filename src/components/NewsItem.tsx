function NewsItem() {
    return (
        <div className="
            bg-zinc-800
            shadow-2xl
            p-5
            space-y-2
            border-b
            border-zinc-700
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
            <div className="text-sm text-zinc-700">
                by Tikhon
            </div>
        </div>
    );
}

export default NewsItem;