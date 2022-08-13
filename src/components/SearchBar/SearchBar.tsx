import { motion } from "framer-motion";
import { useState } from "react";

function SearchBar() {
    const [btnShown, setBtnShown] = useState(false);
    const [delay, setDelay] = useState("");

    return (
        <div className="
            group
            flex-1
            shadow-lg
            rounded-full
            relative
            outline-2
            outline-offset-2
            outline
            outline-transparent
            transition-[outline-color] duration-150
            focus-within:outline-orange-500
        ">
                <input
                    onChange={(e) => {
                        const value = e.currentTarget.value;

                        setDelay(value === ""
                            ? "delay-300"
                            : "");

                        setBtnShown(value !== "");
                    }}
                    placeholder="Word to seach by..."
                    className={`
                        z-10
                        relative
                        outline-none
                        w-full
                        rounded-full
                        bg-zinc-800
                        border
                        border-zinc-700
                        py-2    
                        px-4
                        placeholder:text-gray-500
                        transition-[width,_border-radius] duration-300 ease-in-out
                        ${btnShown && `
                            w-4/5
                            rounded-r-none
                        `}
                    `}
                />
                <button
                    className={`
                        z-0
                        absolute
                        bg-orange-500
                        border-zinc-700
                        right-1
                        top-0
                        rounded-r-full
                        h-full
                        w-1/5
                        ${delay}
                        ${btnShown && "right-0"}
                    `}>
                </button>
        </div>
    );
}

export default SearchBar;