import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SearchBar(){
    
    const [searchMovie, setSearchMovie] = useState('');

    return(
        <div>
            <input 
                type='text' 
                placeholder='Search for a movie...'
                onChange={((e)=>setSearchMovie(e.target.value))}
            />
            <div>
                <Link to={`/home/search/${searchMovie}`}>Search</Link>
            </div>
        </div>
    )
}