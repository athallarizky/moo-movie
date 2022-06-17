const initialState = {
    movieLists:false,
    movieDetail:false,
    activePage:1,
    totalMovies:0,
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_MOVIES":
            return { ...state, movieLists: action.data}
        case "SET_DETAIL_MOVIE":
            return { ...state, movieDetail:action.data}
        case "SET_PAGE":
            return { ...state, activePage:action.data}
        case "SET_TOTAL_MOVIES":
            return { ...state, totalMovies:action.data}
        default:
            return state
    }
}

export default moviesReducer