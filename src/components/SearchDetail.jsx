import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../actions";
import { Card } from "../components/Card";

export function SearchDetail({name}){

    const dispatch = useDispatch()

    const searchMovies = useSelector((state) => state.search);

    useEffect(()=>{
        dispatch(getSearch(name))
    },[dispatch, name])

    if(searchMovies.length>0){
    return(
        <div>
            <ul>
                {searchMovies.map((movie)=><Card key={movie.id} movie={movie}/>)}
            </ul>
        </div>
    )
    } else {
        return <p>Movie not found</p>
    }
}