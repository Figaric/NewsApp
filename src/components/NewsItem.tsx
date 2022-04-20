import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import getRandomGradient from "../utils/getRandomGradient";

interface NewsItemProps {
    imageUri: string,
    title: string,
    author: string
};

const NewsItem: React.FC = () => {
    const [gradient, setGradient] = useState(String);

    useEffect(() => {
        setGradient(getRandomGradient());
    }, []);

    return (
        <motion.div
            whileHover={{
                scale: 1.03
            }}
            className=" 
                bg-zinc-800
                rounded-xl
                shadow-xl
            ">
            <div className="
                h-36
                2xl:h-40
            ">
                <img className="
                    rounded-t-xl
                    h-full
                    w-full
                    object-cover
                " src="https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?k=20&m=1288385045&s=612x612&w=0&h=kcZXuKvLsEbbGakLlcZpolhBT7PyC9AQWiv2kZ7aHfQ=" />
            </div>
            <div className="
                border
                border-zinc-700
                rounded-b-xl
                p-4
                pt-0
            ">
                <p className="
                    mt-2
                    font-medium
                    text-sm
                    text-zinc-600
                ">
                    by Tikhon
                </p>
                <p className="
                    font-semibold
                ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusantium est officia? Illo voluptatum ipsam provident consequuntur recusandae obcaecati rem.
                </p>
            </div>
        </motion.div>
    );  
}

export default NewsItem;