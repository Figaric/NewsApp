import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setKeyword } from "../redux/requestInfoSlice";
import { RootState } from "../redux/store";

function KeywordInputField() {
    const dispatch = useDispatch();

    return (
        <div className="
            inline-block
            border
            px-4
            py-2
            border-zinc-700
            bg-zinc-800
            rounded-xl
            w-full
            shadow-xl
            focus-within:border-orange-500
            duration-300
        ">
            <input 
                onBlur={e => dispatch(setKeyword(e.target.value))}
                className="
                    w-full
                    focus:outline-none
                    bg-transparent
                    placeholder:text-zinc-600
            " 
            placeholder="Keyword"
            type="text" />
        </div>
    );
}

export default KeywordInputField;