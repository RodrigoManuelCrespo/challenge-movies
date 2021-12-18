import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCredits } from "../actions";

export function CreditDetail({movieId}){
    const dispatch = useDispatch()

    const credit = useSelector((state) => state.credits)

    useEffect(()=>{
        dispatch(getCredits(movieId))
    }, [dispatch, movieId])
    
    return (
        <div>
            <ul>
                {credit.map((actor, key)=> {
                    if(actor.profile_path) 
                    return(  
                        <li key={key}>
                            <p>{actor.name}</p>
                            <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} weight={'150px'} height={'250px'} />
                        </li>
                    ) 
                    return null;
                })}
            </ul>
        </div>
    )
}