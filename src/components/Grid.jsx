import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions";
import { MovieCard } from "./MovieCard";

export function Grid(){

    const dispatch = useDispatch()
    //traigo todo lo que esta en el estado de movies = a map.stateToProps
    const allMovies = useSelector((state) => state.movies);

    useEffect(()=>{
        //despacho la accion = a map.dispatchToProps
        dispatch(getMovies())
    }, [dispatch])

    return(
        <div className="container">
            <h4 className="mb-4">What's Popular</h4>
            <div className="row">
                {allMovies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

       