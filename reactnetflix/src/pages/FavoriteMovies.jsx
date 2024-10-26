import MovieCard from "../components/modules/BrowsePage/MovieCard"
import { LIST_VIDEO_RECOMMENDATION } from "../Constants/DummyVideo"
import EachUtils from "../utils/EachUtils"
import { useAtom } from "jotai"
import { idMoviesAtom } from "../jotai/atoms"
import { useState } from "react"
import BrowseLayouts from "../components/Layouts/BrowseLayouts"
const FavoriteMovies = () => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovies] = useAtom(idMoviesAtom)
    return (
        <BrowseLayouts>
            <div className="mt-20 px-8">
                <h3 className="text-white font-bold text-2xl">Favorite Movies</h3>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 p-8">
                <EachUtils
                    of={LIST_VIDEO_RECOMMENDATION}
                    render={(item, index) => (
                        <div
                            key={index}
                            className="h-72 mt-4"
                            onMouseLeave={() => {
                                setIsHover(false)
                                setIdMovies(null)
                            }}
                        >
                            <MovieCard
                                data={item}
                                isHover={isHover}
                                setIsHover={setIsHover}
                            />
                        </div>
                    )}
                />
            </div>
        </BrowseLayouts>
    )
}

export default FavoriteMovies