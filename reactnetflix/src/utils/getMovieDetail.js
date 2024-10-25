import { apiInstance } from "./apiInstance"

export const getMovieDetail = async ({ movie_id }) => {
    try {
        let movies = await apiInstance.get("movie/" + movie_id)
        return movies.data
    } catch (error) {
        console.log(error)
    }
}