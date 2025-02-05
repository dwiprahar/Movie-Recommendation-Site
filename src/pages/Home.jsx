import MovieCards from "../Components/MovieCards"
import React, { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../Services/api";
import "../CSS/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...Try to refresh the page")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    function handleInputChange(event) {
        setSearchQuery(event.target.value);

    }

    /*const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The Matrix", release_date: "1998" }
    ];*/

    const handleSearch = async (event) => {
        event.preventDefault();
        //alert(searchQuery);
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...Try to refresh the page")
        } finally {
            setLoading(false)
        }

    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form" >
                <input
                    type="text"
                    placeholder="Search for movies..." className="search-input"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-form">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...Please wait</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie, index) => (
                        //movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCards movie={movie} key={index} />
                        //)
                    ))}
                </div>
            )}

            <footer className="footer">
                <p>© {new Date().getFullYear()} Made by Dwiprahar</p>
            </footer>

        </div>
    );
}
export default Home