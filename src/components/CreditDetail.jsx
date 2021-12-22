import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCredits } from "../actions";
import { Card } from "react-bootstrap";

export function CreditDetail({movieId}){
    const dispatch = useDispatch()

    const credit = useSelector((state) => state.credits)

    const topBilled = credit.slice(0,12)

    useEffect(()=>{
        dispatch(getCredits(movieId))
    }, [dispatch, movieId])

    return (
        <div className="container">
            <h5 className="mb-4">Top Billed Cast</h5>
            <div className="row">
                {topBilled.map((actor, key)=> {
                    if(actor.name && actor.profile_path) 
                    return(
                        <div className="col-6 col-md-3 col-lg-2 pb-4 d-flex justify-content-center" key={key}>  
                            <Card className="border-0">
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} weight={'75px'} height={'175px'} className="mb-2"/>
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