import { combineReducers } from 'redux';

// Reducer Lists
import mainReducer from './main'
import moviesReducer from './movies'

const rootReducer = combineReducers({
    main: mainReducer,
    movies: moviesReducer
})

export default rootReducer;