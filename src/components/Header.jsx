import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header(){
    
    const [searchMovie, setSearchMovie] = useState('');

    return(
        <div className="navbarColor">
            <nav className="navbar">
                <div className="container-fluid">
                    <Link to="/">
                        <label className="navbar-brand fw-bold logoColor ps-4">MoviesDB</label>
                    </Link>
                    <form className="d-flex pe-4">
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder="Search for a movie..." 
                            aria-label="Search" 
                            onChange={((e)=>setSearchMovie(e.target.value))}
                        />
                        <Link to={`/search/${searchMovie}`}>
                            <button className="btn fw-bold submitHeader border-0 btn-outline-light">Search</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}