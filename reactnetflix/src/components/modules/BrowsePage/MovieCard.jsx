import ReactPlayer from "react-player"
import { GoPlay, GoChevronDown, GoPlusCircle } from "react-icons/go"
import { motion } from "framer-motion"
import { useAtom } from "jotai"
import { idMoviesAtom } from "@/jotai/atoms"
import { isOpenModalAtom, isFetchingAtom } from "@/jotai/atoms"
import { useEffect, useState } from "react"
import { getVideoUrl } from "@/utils/getVideoUrl"
import Skeleton from "./Skeleton"
import { useNavigate } from "react-router-dom"

const MovieCard = ({ data, isHover, setIsHover }) => {
    const navigate = useNavigate()

    const [idMovies, setIdMovies] = useAtom(idMoviesAtom)
    const [, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [isFetching] = useAtom(isFetchingAtom)
    const [videoUrl, setVideoUrl] = useState(null)

    useEffect(() => {
        if (idMovies && data) {
            getVideoUrl({ movie_id: data.id }).then((result) => setVideoUrl(result))
        }
    }, [idMovies, data])

    if (isFetching) return <Skeleton />

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
                        url={`https://www.youtube.com/watch?v=${videoUrl}`}
                        playing={true}
                        muted={true}
                        loop={true}
                        width="100%"
                        height="180px"
                        controls={false}
                    />
                    <div className="h-auto p-2 bg-[#141414] flex flex-col gap-1.5">
                        <section className="mt-1 flex justify-between">
                            <div className="flex gap-2">
                                <button onClick={() => navigate(`/watch/${videoUrl}`)}>
                                    <GoPlay size={32}
                                    />
                                </button>
                                <button>
                                    <GoPlusCircle size={32} />
                                </button>
                            </div>
                            <div>
                                <button
                                    className="p-1 border rounded-full"
                                    onClick={() => setIsOpenModal(true)}
                                >
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
                        src={`${import.meta.env.VITE_BASE_URL_IMAGE_TMBD}${data.backdrop_path}`}
                        alt={data.title}
                        className="max-h-48 w-full cursor-pointer"
                    />
            )}
        </>
    )
}

export default MovieCard