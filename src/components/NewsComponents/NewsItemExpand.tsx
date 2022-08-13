import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function NewsItemExpand() {
    const selectedItem = useSelector((state: RootState) => state.newsItems.selectedItem);

    return (
        <>
            {selectedItem.layoutId && (
                <div className="
                    absolute
                    min-h-screen
                    w-full
                    left-0
                    top-0
                    bg-zinc-900/50
                    flex
                    justify-center
                    items-center
                ">
                    <motion.div 
                        layoutId={selectedItem.layoutId}
                        className="
                            shadow-xl
                            bg-transparent
                            w-2/5
                            grid
                            grid-cols-2
                    ">
                        <motion.div 
                            className="
                                rounded-l-xl
                                bg-[url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80')]
                                bg-center
                                bg-cover
                                ">
                        </motion.div>
                        <div className="
                            rounded-r-xl 
                            space-y-2 
                            p-4 
                            shadow-[inset_7px_0_9px_-7px_rgba(0,0,0,0.4)] 
                            border
                            border-zinc-700 
                            bg-zinc-800
                        ">
                            <p className="font-serif font-extrabold text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, atque?
                            </p>
                            <p className="font-sans text-[1.063rem] font-[450]">
                                Good morning. David Meyer here in Berlin, filling in for Alan.Im not going to get into the compromises that were made to get to this point, or indeed the many parts of the bill that dont relate to cl
                            </p>
                            <p className="font-sans text-sm font-medium text-zinc-600">
                                by Tikhon
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}

export default NewsItemExpand;