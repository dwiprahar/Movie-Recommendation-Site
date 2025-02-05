import "../CSS/Favorites.css"
import { useMovieContext } from "../Contexts/MovieContext"
import MovieCards from "../Components/MovieCards"

function Favourites() {

    const { favourites } = useMovieContext();

    if (favourites) {
        return (
            <div className="favourites">
                <h2>Your Favourite Movies Are...</h2>
                <div className="movies-grid">
                    {favourites.map((movie, index) => (
                        //movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCards movie={movie} key={index} />
                        //)
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding movies to your favourites and they will appear here</p>
        </div>
    )
}

export default Favourites