import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNowPlaying } from "../actions";

export function Billboard(){
    const dispatch = useDispatch();

    const nowPlaying = useSelector((state) => state.nowPlaying)

    useEffect(()=>{
        dispatch(getNowPlaying());
    }, [dispatch])
    
    return(
        <div>
            <h2>Billbord</h2>
            <ul>
                {nowPlaying.map((movie, key) => <p key={key}>{movie.title}</p>)}
            </ul>
        </div>
    )
}