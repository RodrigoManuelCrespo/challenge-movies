import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export function MovieCard({movie}){
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

    if(movie.poster_path && movie.title && movie.vote_average){ 
    return(
        <div className="col-12 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
            <Link to={"/" + movie.id}>
                <Card style={{ width: '12rem' }} className="border-0">
                    <Card.Img variant="top" src={imageUrl} className="rounded-3 cardLink"/>
                    <Card.Body>
                        { movie.vote_average > 7 ? 
                            <label className="h6 p-2 bg-opacity-75 border border-success border-3 bg-dark text-light rounded-circle">{movie.vote_average}</label> :  
                            <label className="h6 p-2 bg-opacity-75 border border-warning border-3 bg-dark text-light rounded-circle">{movie.vote_average}</label>
                        } 
                        <Card.Title>
                            <label className="text-decoration-none fw-bold text-dark">{movie.title}</label>
                        </Card.Title>
                        <Card.Text>
                            <label className="text-decoration-none fw-lighter text-dark">{movie.release_date}</label>   
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
    } else {
        return null;
    }
}