import axios from 'axios';

const { REACT_APP_API_KEY } = process.env

export const GET_MOVIES = 'GET_MOVIES'
export const GET_DETAILS = 'GET_DETAIL'
export const GET_NOW_PLAYING = 'GET_NOW_PLAYING'
export const GET_CREDITS = 'GET_CREDITS'

export function getMovies(){
    return async function(dispatch){
       
        const movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}`) 
        
        return dispatch({
            type: GET_MOVIES,
            payload: movies.data.results
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        
        const movieDetail = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API_KEY}`)

        return dispatch({
            type: GET_DETAILS,
            payload: movieDetail.data
        })
    }
}

export function getNowPlaying(){
    return async function(dispatch){
       
        const moviesNowPlaying = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`) 

        return dispatch({
            type: GET_NOW_PLAYING,
            payload: moviesNowPlaying.data.results
        })
    }
}

export function getCredits(id){
    return async function(dispatch){

        const creditsDetail = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${REACT_APP_API_KEY}&language=en-US`)

        return dispatch({
             type: GET_CREDITS,
             payload: creditsDetail.data.cast
         })
    }
}