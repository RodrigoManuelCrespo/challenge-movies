import { Link } from "react-router-dom";

export function Card({movie}){
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

    if(movie.poster_path && movie.title && movie.vote_average){ 
    return(
        <li>
            <Link to={"/home/" + movie.id}>
                <img width={230} height={345} src={imageUrl} alt={movie.title}/>
                <h3>{movie.title}</h3>
                <h5>{movie.vote_average}</h5>
            </Link>
        </li>
    )
    } else {
        return null;
    }
}