import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function Header(){
    return(
        <div>
            <Link to='/home'>
                <label>Home</label>
            </Link>
            <SearchBar />
        </div>
    )
}