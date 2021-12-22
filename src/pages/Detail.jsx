import React from "react";
import { Header } from "../components/Header";
import { MovieDetail } from "../components/MovieDetail";
import { useParams } from "react-router";
import { CreditDetail } from "../components/CreditDetail";
import { Footer } from "../components/Footer";

export function Detail(){
    
    const {id} = useParams();
    
    return(
        <div>
            <Header />
            <MovieDetail movieId={id} />
            <CreditDetail movieId={id} />
            <Footer />
        </div>
    )
}