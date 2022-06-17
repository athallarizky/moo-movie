const initialState = {
    // movieLists:false,
    // movieDetail:false,
    // activePage:1,
    // totalMovies:0,
    // searchKey:""
    loading:false,
    error:false,
    movies:[],
    totalResult:0,

    searchKey:"",
    activePage:1,
    movieDetail:false
}

// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(false);
// const [movies, setMovies] = useState([]);
// const [totalResult, setTotalResult] = useState(0);


const moviesReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_MOVIES":
            console.log("SERTTING", action.data)
            return { ...state, movies: action.data}
        case "SET_LOADING":
            return { ...state, loading:action.data}
        case "SET_ERROR":
            return { ...state, error:action.data}
        case "SET_TOTAL_RESULT":
            return { ...state, totalResult:action.data}
        case "SET_SEARCH_KEY":
            return { ...state, searchKey:action.data}
        // case "SET_MOVIES":
        //     return { ...state, movieLists: action.data}
        case "SET_DETAIL_MOVIE":
            return { ...state, movieDetail:action.data}
        case "SET_PAGE":
            return { ...state, activePage:action.data}
        // case "SET_TOTAL_MOVIES":
        //     return { ...state, totalMovies:action.data}
        // case "SET_SEARCH_KEY":
        //     return { ...state, searchKey:action.data}
        default:
            return state
    }
}

export default moviesReducer