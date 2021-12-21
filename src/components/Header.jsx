import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header(){
    
    const [searchMovie, setSearchMovie] = useState('');

    return(
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/home">
                        <label className="navbar-brand">Movies</label>
                    </Link>
                    <form class="d-flex">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search for a movie..." 
                            aria-label="Search" 
                            type='text' 
                            placeholder='Search for a movie...'
                            onChange={((e)=>setSearchMovie(e.target.value))}
                        />
                        <Link to={`/home/search/${searchMovie}`}>
                            <button className="btn btn-outline-light">Search</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}