import BrowseLayouts from "@layouts/BrowseLayouts"
import Jumbotron from "@mods/BrowsePage/Jumbotron"
import MovieList from "../components/modules/BrowsePage/MovieList"
import ModalBox from "../components/modules/BrowsePage/ModalBox"
import { useAtom } from "jotai"
import { SearchMoviesAtom } from "../jotai/atoms"
import SearchMovies from "../components/modules/BrowsePage/SearchMovies"


function Browse() {
    const [searchQuery] = useAtom(SearchMoviesAtom)
    return (
        <BrowseLayouts>
            {searchQuery ? <SearchMovies /> : (
                <>
                    <Jumbotron />
                    <MovieList title="Now Playing" moviesType={"now_playing"} />
                    <MovieList title="Populer Movies" moviesType={"popular"} />
                    <MovieList title="Top Rated Movies" moviesType={"top_rated"} />
                </>
            )}

            <ModalBox />
        </BrowseLayouts>
    )
}

export default Browse