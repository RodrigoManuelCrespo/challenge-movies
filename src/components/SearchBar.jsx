import React from "react";

export function SearchBar(){
    return(
        <div>
            <input type='text' placeholder='Search for a movie...'></input>
            <button type='submit'>Search</button>
        </div>
    )
}