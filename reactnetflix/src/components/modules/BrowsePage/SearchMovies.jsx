import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { idMoviesAtom, SearchMoviesAtom, isFetchingAtom } from "@/jotai/atoms"
import { searchMovies } from "@/utils/searchMovies"
import EachUtils from "@/utils/EachUtils"
import MovieCard from "./MovieCard"
const SearchMovies = () => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovies] = useAtom(idMoviesAtom)
    const [moviesList, setMoviesList] = useState([])
    const [searchQuery] = useAtom(SearchMoviesAtom)
    const [, setIsFetching] = useAtom(isFetchingAtom)

    useEffect(() => {
        if (searchQuery) {
            searchMovies({ query: searchQuery }).then((result) => {
                setIsFetching(true)
                setMoviesList(result)
            }).finally(() => {
                setTimeout(() => {
                    setIsFetching(false)
                }, 500)
            })
        }
    }, [searchQuery])
    return (
        <div className="grid grid-cols-4 gap-4 mt-10 p-8">
            <EachUtils
                of={moviesList}
                render={(item, index) => (
                    <div
                        key={index}
                        onMouseLeave={() => {
                            setIsHover(false)
                            setIdMovies(null)
                        }}
                        className="h-72 mt-4"
                    >
                        <MovieCard data={item} isHover={isHover} setIsHover={setIsHover} />
                    </div>
                )}
            />
        </div>
    )
}

export default SearchMovies