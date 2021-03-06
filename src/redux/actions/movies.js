import axios from 'utils/axios'

export const set_movies = (data) => ({
    type: "SET_MOVIES",
    data,
});
export const set_loading = (data) => ({
    type: "SET_LOADING",
    data,
});
export const set_error = (data) => ({
    type: "SET_ERROR",
    data,
});
export const set_total_result = (data) => ({
    type: "SET_TOTAL_RESULT",
    data,
});

export const set_detail_movie = (data) => ({
    type: "SET_DETAIL_MOVIE",
    data,
});

export const set_page = (data) => ({
    type: "SET_PAGE",
    data,
});

export const set_search_key = (data) => ({
    type: "SET_SEARCH_KEY",
    data,
});

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY
// https://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=1
// export const searchMovie = (key='batman', page = 1) => async (dispatch) => {
//     try {
//         const data = await axios.get(`?apikey=${OMDB_API}&s=${key}&page=${page}`)
//         if(data.Response !== "False"){
//             dispatch(set_movies("movieLists", data?.Search))
//             dispatch(set_page("activePage", page))
//             dispatch(set_total_result("totalMovies", parseInt(data?.totalResults)))
//         }else{
//             dispatch(set_movies("movieLists", false))
//         }
//         console.log(data)
//     } catch (error) {
//         console.log({error})
//         throw new Error(error)
//     }
// }

export const getMovieDetail = (imdbID) => async (dispatch) => {
    try {
        const data = await axios.get(`?apikey=${OMDB_API}&i=${imdbID}`)
        if(data.Response !== "False"){
            dispatch(set_detail_movie(data))
        }
    } catch (error) {
        // console.log({error})
        throw new Error(error)
    }
}