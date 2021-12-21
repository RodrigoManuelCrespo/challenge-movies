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
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <img src={imageUrl} alt={detail.title} className="pb-4"/>
                </div>
                <div className="col-12 col-md-6">
                    <h2>{detail.title}</h2>
                    <h5>{detail.vote_average}</h5>
                    <h6>Overview:</h6>
                    <p>{detail.overview}</p>
                    <Link to='/home'>
                        <button className="btn btn-primary d-flex justify-content-center">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}