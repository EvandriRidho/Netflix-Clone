import { useAtom } from "jotai";
import { isOpenModalAtom } from "@/jotai/atoms";
import { MdClose } from "react-icons/md"
import { GoPlay, GoPlusCircle } from "react-icons/go"
import Recommendation from "./Recommendation";
import { useEffect, useState } from "react";
import { getMovieDetail } from "@/utils/getMovieDetail";
import { idMoviesAtom } from "@/jotai/atoms";
import ReactPlayer from "react-player";
import { getVideoUrl } from "@/utils/getVideoUrl";
import { useNavigate } from "react-router-dom";
const ModalBox = () => {
    const navigate = useNavigate()
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [movieDetail, setMovieDetail] = useState([])
    const [videoUrl, setVideoUrl] = useState(null)
    const [idMovie, setIdMovie] = useAtom(idMoviesAtom)

    useEffect(() => {
        if (idMovie && isOpenModal) {
            getMovieDetail({ movie_id: idMovie }).then(result => setMovieDetail(result))
            getVideoUrl({ movie_id: idMovie }).then(result => setVideoUrl(result))
        }
    }, [idMovie, isOpenModal])

    const mappingGenres = (genres) => {
        if (genres) {
            let result = ""
            genres.map((genre, index) => {
                if (index === genres.length - 1) {
                    result += genre.name
                } else {
                    result += genre.name + ", "
                }
            })
            return result
        }
    }

    return (
        <dialog className={`modal ${isOpenModal ? 'modal-open' : ""}`}>
            <div className="modal-box w-full max-w-screen-md p-0">
                <div className="relative">
                    <div className="h-[450px] w-full">
                        <ReactPlayer
                            height={"100%"}
                            width={"100%"}
                            playing={true}
                            muted={true}
                            loop={true}
                            url={`https://www.youtube.com/watch?v=${videoUrl}`}
                        />
                    </div>
                    <button
                        className="absolute right-0 top-0 p-1 border rounded-full"
                        onClick={() => setIsOpenModal(false)}
                    >
                        <MdClose size={24} />
                    </button>
                    <div className="absolute bottom-1/2 left-10">
                        <h2 className="text-4xl font-black text-white">{movieDetail?.title}</h2>
                    </div>
                    <div className="absolute bottom-1/2 translate-y-14 left-10">
                        <div className="flex gap-4">
                            <button className="bg-slate-50 text-black w-32 flex items-center justify-center gap-1 p-1.5 rounded-md font-bold text-xl"
                                onClick={() => {
                                    navigate(`/watch/${videoUrl}`)
                                    setIsOpenModal(false)
                                    setIdMovie(null)
                                    setVideoUrl(null)
                                    setMovieDetail([])
                                }}
                            >
                                <GoPlay size={32} /> Play
                            </button>
                            <button className="text-slate-200 hover:text-white">
                                <GoPlusCircle size={44} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 px-4 py-2 text-white">
                    <div>
                        <div className="flex gap-2">
                            <p>{movieDetail.release_date}</p>
                            <p className="text-green-400/90">{movieDetail?.runtime} min</p>
                        </div>
                        <p>{movieDetail?.overview}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p>Genre : {mappingGenres(movieDetail?.genres)} </p>
                        <p>Popularity : {movieDetail?.popularity}</p>
                    </div>
                </div>
                <Recommendation />
            </div>
        </dialog>
    )
}

export default ModalBox;