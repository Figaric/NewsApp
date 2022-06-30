import { motion, useAnimation } from "framer-motion";

function NewsItem() {
    const imageMotion = {
        hover: {
            backgroundSize: "100%",
        }
    };

    const newsItemMotion = {
        hover: {
            scale: 1.02
        }
    }

    return (
        <motion.div 
            variants={newsItemMotion}
            whileHover={"hover"}
            className="
                rounded-lg
                shadow-2xl
                overflow-hidden
                bg-zinc-800
            "
            >
            {/* Image container */}
            <motion.div 
                variants={imageMotion}
                className="
                    bg-[url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80')]
                    bg-[length:105%]
                    bg-center
                    h-60
                    ">
            </motion.div>
            <div className="space-y-3 p-4">
                <p className="font-serif font-extrabold text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, atque?
                </p>
                <p className="font-sans text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium fugit et alias voluptatum consequatur temporibus tenetur. Vero, tenetur possimus?
                </p>
            </div>
        </motion.div>
    );
}

export default NewsItem;