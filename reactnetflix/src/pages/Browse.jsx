import BrowseLayouts from "@layouts/BrowseLayouts"
import Jumbotron from "@mods/BrowsePage/Jumbotron"
import MovieList from "../components/modules/BrowsePage/MovieList"


function Browse() {
    return (
        <BrowseLayouts>
            <Jumbotron />
            <MovieList title="Populer Movies" />
            <MovieList title="Top Rated Movies" />
            <MovieList title="Upcoming Movies" />
        </BrowseLayouts>
    )
}

export default Browse