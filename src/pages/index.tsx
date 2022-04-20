import { motion } from "framer-motion";
import { useState } from "react";
import Calendar from "../components/Calendar";
import Divider from "../components/Divider";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

function Index() {

    return (
        <div className="
            sm:w-2/5
            2xl:w-1/3
        ">
            <SearchBar />
            <Divider />
            <NewsList />
        </div>
    );
}

export default Index;