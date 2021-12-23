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
    
    return(
        <div className= "detailColor text-light">
            <div className="container mb-5 pb-4">
                <div className="row pt-5">
                    <div className="col-12 col-lg-4 d-flex justify-content-center">
                        {
                            detail.poster_path ? <img src={'https://image.tmdb.org/t/p/w300' + detail.poster_path} alt={detail.title} className="pb-4 rounded-3"/> : <p>Loading...</p>
                        }
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="mb-4">
                            <h2>{detail.title}</h2>
                            <h5>{detail.release_date}</h5>
                            {
                                detail.genres ? detail.genres.map((e)=>e.name).join(', ') : null
                            }
                        </div>
                        <div>
                            <h6>User Score:</h6>
                            { 
                                detail.vote_average > 7 ? 
                                <label className="h3 p-2 bg-opacity-75 border border-success border-3 bg-dark text-light rounded-circle">{detail.vote_average}</label> :  
                                <label className="h3 p-2 bg-opacity-75 border border-warning border-3 bg-dark text-light rounded-circle">{detail.vote_average}</label>
                            } 
                            <h6>Overview:</h6>
                            <p>{detail.overview}</p>
                        </div>
                        <Link to='/'>
                            <button className="btn btn-success mb-5 mt-5">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}