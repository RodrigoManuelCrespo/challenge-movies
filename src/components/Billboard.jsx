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

    const nowPlaying = useSelector((state) => state.nowPlaying) 

    const firstMovies = nowPlaying.slice(0,4)

    console.log(firstMovies)

    return(
        <div className="container mt-5 mb-5">
        <Carousel>
        {
            firstMovies.map((movie)=> {
                return (
                    <Carousel.Item>
                        <img
                        className="opacity-50 d-block w-100"
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                        alt={movie.title}
                        height={300}
                        />
                        <Carousel.Caption>
                            <div className="bg-black opacity-50">
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
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