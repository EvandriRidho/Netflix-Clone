import { useState } from "react"
import { LIST_VIDEOS } from "../../../Constants/DummyVideo"
import EachUtils from "../../../utils/EachUtils"
import MovieCard from "./MovieCard"
import CarouselLayouts from "../../Layouts/CarouselLayouts"

const MovieList = ({ title }) => {
    const [isHover, setIsHover] = useState(false)
    const [idMovies, setIdMovies] = useState(null)
    return (
        <section className="px-8 py-4">
            <h3 className="text-white text-3xl font-semibold mb-2">{title}</h3>
            <CarouselLayouts>
                <EachUtils
                    of={LIST_VIDEOS}
                    render={(item, index) => (
                        <div
                            key={index}
                            onMouseLeave={() => {
                                setIsHover(false)
                                setIdMovies(null)
                            }}
                            className="carousel-item h-72 w-1/4 mt-4"
                        >
                            <MovieCard data={item} isHover={isHover} idMovies={idMovies} setIdMovies={setIdMovies} setIsHover={setIsHover} />
                        </div>
                    )}
                />
            </CarouselLayouts>
        </section>
    )
}

export default MovieList