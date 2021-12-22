import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../actions";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

export function SearchDetail({name}){

    const dispatch = useDispatch()

    const searchMovies = useSelector((state) => state.search);

    useEffect(()=>{
        dispatch(getSearch(name))
    },[dispatch, name])

    if(searchMovies.length>0){
    return(
        <div className="container">
            <h4 className="mt-4 mb-4">Search for: "{name}"</h4>
            <div className="row">
                {searchMovies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
    } else {
        return (
            <div className="container">
                <div className="container">
                    <h4 className="mt-5">Sorry! Movie not found...</h4>
                </div>
                <Link to='/'>
                    <button className="btn btn-success mt-3 ms-2">Back</button>
                </Link>
            </div>
        )
    }
}