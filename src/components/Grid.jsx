import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions";
import { Card } from "./Card";

export function Grid(){

    const dispatch = useDispatch()
    //traigo todo lo que esta en el estado de movies = a map.stateToProps
    const allMovies = useSelector((state) => state.movies);

    useEffect(()=>{
        //despacho la accion = a map.dispatchToProps
        dispatch(getMovies())
    }, [dispatch])

    return(
        <div>
            <div>
                <h2>Peliculas</h2>
                <ul>
                    {allMovies.map((movie)=><Card key={movie.id} movie={movie}/>)}
                </ul>
            </div>
        </div>
    )
}

       