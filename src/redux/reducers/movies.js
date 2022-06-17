const initialState = {
    loading:false,
    error:false,
    movies:[],
    totalResult:0,

    searchKey:"",
    activePage:1,
    movieDetail:false
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_MOVIES":
            return { ...state, movies: action.data}
        case "SET_LOADING":
            return { ...state, loading:action.data}
        case "SET_ERROR":
            return { ...state, error:action.data}
        case "SET_TOTAL_RESULT":
            return { ...state, totalResult:action.data}
        case "SET_SEARCH_KEY":
            return { ...state, searchKey:action.data}
        case "SET_DETAIL_MOVIE":
            return { ...state, movieDetail:action.data}
        case "SET_PAGE":
            return { ...state, activePage:action.data}
        default:
            return state
    }
}

export default moviesReducer