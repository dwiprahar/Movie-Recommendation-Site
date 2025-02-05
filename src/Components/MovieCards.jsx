import "../CSS/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContext";

function MovieCards({ movie }) {
    const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext()

    const favourite = isFavourite(movie.id)

    function onFavClick(event) {
        //alert("clicked")
        event.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
        else
            addToFavourites(movie)
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                {/*<p>{movie.release_date}</p>*/}
                <p>
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>

            </div>
        </div>
    );
}

export default MovieCards