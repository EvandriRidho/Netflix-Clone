import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { GoPlay, GoMute, GoUnmute } from "react-icons/go"; import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { getMoviesByType } from "@/utils/getMoviesByType";
import { getVideoUrl } from "@/utils/getVideoUrl";
import { isOpenModalAtom, idMoviesAtom } from "@/jotai/atoms";


const Jumbotron = () => {
    const navigate = useNavigate()
    const [, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [, setIdMovieAtom] = useAtom(idMoviesAtom)
    const [idMovie, setIdMovie] = useState(null)
    const [isMuted, setIsMuted] = useState(true)
    const [topMovie, setTopMovie] = useState([])
    const [videoUrl, setVideoUrl] = useState(null)

    useEffect(() => {
        getMoviesByType({ moviesType: "top_rated" }).then((result) => {
            setTopMovie(result[0])
            setIdMovie(result[0].id)
        }).finally(() => {
            getVideoUrl({ movie_id: idMovie }).then(result => setVideoUrl(result))
        })
    }, [idMovie])


    return (
        <div className="relative h-[60vw] w-full">
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoUrl}`}
                height={"100%"}
                width={"100%"}
                playing={true}
                muted={isMuted}
                controls={true}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-md">
                <div className="flex flex-col gap-4 text-white">
                    <h1 className="text-3xl sm:text-5xl font-black">{topMovie.title}</h1>
                    <p>{topMovie.desc}</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-1 bg-gray-200 py-2 px-8 rounded-md text-xl font-bold text-black"
                        onClick={() => {
                            navigate(`/watch/${videoUrl}`)
                            setIsMuted(true)
                        }}

                    >
                        <GoPlay /> Play
                    </button>
                    <button className="bg-stone-600/80 py-2 px-8 rounded-md text-white
                    "
                        onClick={() => {
                            setIdMovieAtom(idMovie)
                            setIsOpenModal(true)
                        }}
                    >Detail Movie</button>
                </div>
            </div>
            <div className="absolute bottom-1/2 -translate-y-1/2 right-6 p-8 text-white">
                <div
                    className="border rounded-full p-2 cursor-pointer"
                    onClick={() => setIsMuted(!isMuted)}
                >
                    {isMuted ? <GoMute size={24} /> : <GoUnmute size={24} />}
                </div>
            </div>
        </div >
    )
}

export default Jumbotron;