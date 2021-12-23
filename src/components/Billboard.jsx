import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNowPlaying } from "../actions";
import { Carousel } from "react-bootstrap";

export function Billboard(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getNowPlaying());
    }, [dispatch])

    const nowPlaying = useSelector((state) => state.nowPlaying); 

    const firstMovies = nowPlaying.slice(0,4);

    return(
        <div className="container mt-5 d-none d-md-block">
        <Carousel>
        {
            firstMovies.map((movie, key)=> {
                return (
                    <Carousel.Item key={key}>
                        <img
                        className="opacity-50 ps-4 pe-4 w-100"
                        height={275}
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                        alt={movie.title}
                        />
                        <Carousel.Caption>
                            <div className="bg-black opacity-75">
                                <h3>{movie.title}</h3>
                                <p className="fs-6">{movie.overview}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
      </Carousel>
      </div>
    )
}