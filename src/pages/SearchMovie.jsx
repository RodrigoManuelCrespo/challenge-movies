import React from "react";
import { useParams } from "react-router";
import { Header } from '../components/Header'
import { SearchDetail } from '../components/SearchDetail'

export function SearchMovie(){

    const {name} = useParams();

    return(
        <div>
            <Header />
            <SearchDetail name={name} />
        </div>
    )
}