import { GoSearch } from "react-icons/go"
import { useState } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { SearchMoviesAtom } from "@/jotai/atoms";

const InputSearchMovies = () => {
    const [isShow, setIsShow] = useState(false)
    const [, setSearchMovies] = useAtom(SearchMoviesAtom)

    const handleShow = () => {
        setIsShow(!isShow)
    }

    const handleChange = (e) => {
        if (e.target.value.length > 3) {
            setSearchMovies(e.target.value)
        } else {
            setSearchMovies(null)
        }
    }
    return (
        <div className="relative cursor-pointer">
            <motion.input className="bg-black corder py-2 pl-12 rounded"
                initial={{ translateX: -20 }}
                animate={{ translateX: isShow ? 0 : -20 }}
                style={{ display: isShow ? "block" : "none" }}
                placeholder="Title, People, Genre....."
                onChange={handleChange}
            />
            <GoSearch className={isShow ? "absolute top-1/2 -translate-y-1/2 left-3 z-10" : null} size={24} onClick={handleShow} />
        </div>
    )
}

export default InputSearchMovies;