import ReactPlayer from "react-player"
import { GoPlay, GoChevronDown, GoPlusCircle } from "react-icons/go"
import { motion } from "framer-motion"
const MovieCard = ({ data, isHover, idMovies, setIdMovies, setIsHover }) => {
    return (
        <>
            {isHover && idMovies === data.id ? (
                <motion.div
                    className="relative shadow-md cursor-pointer transition-all w-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: 0 }}
                >
                    <ReactPlayer
                        url={data.videoURL}
                        playing={false}
                        muted={true}
                        loop={true}
                        width="100%"
                        height="180px"
                        controls={false}
                    />
                    <div className="h-auto p-2 bg-[#141414] flex flex-col gap-1.5">
                        <section className="mt-1 flex justify-between">
                            <div className="flex gap-2">
                                <button>
                                    <GoPlay size={32} />
                                </button>
                                <button>
                                    <GoPlusCircle size={32} />
                                </button>
                            </div>
                            <div>
                                <button className="p-1 border rounded-full">
                                    <GoChevronDown size={20} />
                                </button>
                            </div>
                        </section>
                        <section className="text-left">
                            <h2 className="font-semibold">{data.title}</h2>
                            <p className="text-green-400">Popularity : {data.popularity}</p>
                        </section>
                    </div>
                </motion.div>
            ) : (
                <img
                    onMouseEnter={() => {
                        setIsHover(true)
                        setIdMovies(data.id)
                    }}
                    src={data.image}
                    alt={data.title}
                    className="max-h-48 w-full cursor-pointer"
                />
            )}
        </>
    )
}

export default MovieCard