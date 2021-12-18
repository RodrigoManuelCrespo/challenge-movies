import { GET_DETAILS, GET_MOVIES, GET_NOW_PLAYING, GET_CREDITS, GET_SEARCH } from "../actions";
 
const initialState = {
    movies: [],
    details: [],
    nowPlaying: [],
    credits: [],
    search: [],
}

function rootReducer(state=initialState, action){
    switch(action.type) {
        case GET_MOVIES: return {
            ...state,
            movies: action.payload
        };
        case GET_DETAILS: return {
            ...state,
            details: action.payload
        };
        case GET_NOW_PLAYING: return {
            ...state,
            nowPlaying: action.payload
        };
        case GET_CREDITS: return {
            ...state,
            credits: action.payload
        };
        case GET_SEARCH: return {
            ...state,
            search: action.payload
        };
        default: return state;
    }
}

export default rootReducer;