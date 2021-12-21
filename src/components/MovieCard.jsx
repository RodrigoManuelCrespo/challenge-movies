import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export function MovieCard({movie}){
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

    if(movie.poster_path && movie.title && movie.vote_average){ 
    return(
        <div className="col-12 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
            <Link to={"/home/" + movie.id}>
                <Card style={{ width: '12rem' }} >
                  <Card.Img variant="top" src={imageUrl} />
                  <Card.Body>
                    <Card.Text>{movie.vote_average}</Card.Text>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.release_date}</Card.Text>
                  </Card.Body>
                </Card>
            </Link>
        </div>
    )
    } else {
        return null;
    }
}