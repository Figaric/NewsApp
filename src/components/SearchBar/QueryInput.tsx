import { motion } from "framer-motion";

interface QueryInputProps {
    onFocus: () => void;
}

const QueryInput: React.FC = () => {
    return (
        <motion.input
            placeholder="Word to search by..."
            className="
                w-full
                outline-offset-0
                outline-0
                outline-none
                p-2
                indent-2
                rounded-l-full
                bg-zinc-800
                border
                border-zinc-700
                placeholder:text-gray-600
                focus:border-orange-500
        " 
        whileFocus={{
            outline: "0.17rem solid #f97316"
        }}
        type="text" />
    );
}

export default QueryInput;