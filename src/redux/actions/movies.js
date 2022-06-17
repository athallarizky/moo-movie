import axios from 'utils/axios'

export const set_movies = (key, data) => ({
    type: "SET_MOVIES",
    key,
    data,
});

export const set_detail_movie = (key, data) => ({
    type: "SET_DETAIL_MOVIE",
    key,
    data,
});

export const set_total_movie = (key, data) => ({
    type: "SET_TOTAL_MOVIES",
    key,
    data,
});

export const set_page = (key, data) => ({
    type: "SET_PAGE",
    key,
    data,
});

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY
// https://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=1
export const searchMovie = (key='batman', page = 1) => async (dispatch) => {
    try {
        const data = await axios.get(`?apikey=${OMDB_API}&s=${key}&page=${page}`)
        if(data.Response !== "False"){
            dispatch(set_movies("movieLists", data?.Search))
            dispatch(set_page("activePage", page))
            dispatch(set_total_movie("totalMovies", parseInt(data?.totalResults)))
        }else{
            dispatch(set_movies("movieLists", false))
        }
        console.log(data)
    } catch (error) {
        console.log({error})
        throw new Error(error)
    }
}

export const getMovieDetail = (imdbID) => async (dispatch) => {
    try {
        const data = await axios.get(`?apikey=${OMDB_API}&i=${imdbID}`)
        console.log({data})
        if(data.Response !== "False"){
            
            dispatch(set_detail_movie("movieDetail", data))
        }
    } catch (error) {
        console.log({error})
        throw new Error(error)
    }
}