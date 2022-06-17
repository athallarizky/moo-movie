const initialState = {
    loader:false
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "PUT_DATA":
			return { ...state, [action.key]: action.data };
        case "TOGGLE_LOADER":
            return { ...state, loader: action.data} 
        default:
            return state
    }
}

export default mainReducer;