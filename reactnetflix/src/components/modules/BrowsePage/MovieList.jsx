import { useEffect, useState } from "react"
import EachUtils from "../../../utils/EachUtils"
import MovieCard from "./MovieCard"
import CarouselLayouts from "../../Layouts/CarouselLayouts"
import { useAtom } from 'jotai'
import { idMoviesAtom } from "@/jotai/atoms"
import { getMoviesByType } from "@/utils/getMoviesByType"
import { isFetchingAtom } from "@/jotai/atoms"
const MovieList = ({ title, moviesType }) => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovies] = useAtom(idMoviesAtom)
    const [moviesList, setMoviesList] = useState([])
    const [, setIsFetching] = useAtom(isFetchingAtom)

    useEffect(() => {
        if (moviesType) {
            getMoviesByType({ moviesType }).then((result) => {
                setIsFetching(true)
                setMoviesList(result)
            }).finally(() => {
                setTimeout(() => {
                    setIsFetching(false)
                }, 500)
            })
        }
    }, [])

    return (
        <section className="px-8 py-4">
            <h3 className="text-white text-3xl font-semibold mb-2">{title}</h3>
            <CarouselLayouts>
                <EachUtils
                    of={moviesList}
                    render={(item, index) => (
                        <div
                            key={index}
                            onMouseLeave={() => {
                                setIsHover(false)
                                setIdMovies(null)
                            }}
                            className="carousel-item h-72 w-1/4 mt-4"
                        >
                            <MovieCard data={item} isHover={isHover} setIsHover={setIsHover} />
                        </div>
                    )}
                />
            </CarouselLayouts>
        </section>
    )
}

export default MovieList