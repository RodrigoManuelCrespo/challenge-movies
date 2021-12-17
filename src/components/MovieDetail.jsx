import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { Link } from "react-router-dom";

export function MovieDetail({movieId}){

    const dispatch = useDispatch()

    const detail = useSelector((state)=> state.details) 

    useEffect(()=>{
        dispatch(getDetail(movieId))
    }, [dispatch, movieId])

    
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + detail.poster_path

    return(
        <div>
            <div>
                <img src={imageUrl} alt={detail.title}/>
            </div>
            <div>
                <h2>{detail.title}</h2>
                <h5>{detail.vote_average}</h5>
                <p>{detail.overview}</p>
            </div>
            <div>
                <Link to='/home'>
                    <button>Back</button>
                </Link>
            </div>
        </div>
    )
}