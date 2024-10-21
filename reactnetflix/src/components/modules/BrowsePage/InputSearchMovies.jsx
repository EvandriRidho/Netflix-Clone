import { GoSearch } from "react-icons/go"
import { useState } from "react";
import { motion } from "framer-motion"; "framer-motion"

const InputSearchMovies = () => {
    const [isShow, setIsShow] = useState(false)
    const handleShow = () => {
        setIsShow(!isShow)
    }
    return (
        <div className="relative">
            <motion.input className="bg-black corder py-2 pl-12 rounded"
                initial={{ translateX: -20 }}
                animate={{ translateX: isShow ? 0 : -20 }}
                style={{ display: isShow ? "block" : "none" }}
                placeholder="Title, People, Genre....."
            />
            <GoSearch className={isShow ? "absolute top-1/2 -translate-y-1/2 left-3 z-10" : null} size={24} onClick={handleShow} />
        </div>
    )
}

export default InputSearchMovies;