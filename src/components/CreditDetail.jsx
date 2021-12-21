import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCredits } from "../actions";
import { Card } from "react-bootstrap";

export function CreditDetail({movieId}){
    const dispatch = useDispatch()

    const credit = useSelector((state) => state.credits)

    useEffect(()=>{
        dispatch(getCredits(movieId))
    }, [dispatch, movieId])

    return (
        <div className="container">
            <div className="row">
                {credit.map((actor, key)=> {
                    if(actor.name && actor.profile_path) 
                    return(
                        <div className="col-6 col-md-3 col-lg-2 pb-4 d-flex justify-content-center" key={key}>  
                            <Card>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} weight={'75px'} height={'175px'}/>
                                <Card.Text>{actor.name}</Card.Text>
                            </Card>
                        </div>
                    ) 
                    return null;
                })}
            </div>
        </div>
    )
}