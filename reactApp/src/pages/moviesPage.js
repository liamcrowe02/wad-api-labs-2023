import React from "react";
import { useQuery } from 'react-query';
import { getMovies, getUpcomingMovies} from "../api/movies-api";

const MoviesPage = () => {
    // Fetching movies
    const { data: moviesData, error: moviesError, isLoading: moviesLoading, isError: moviesIsError } = useQuery('discover', getMovies);

    // Fetching upcoming
    const { data: upcomingData, error: upcomingError, isLoading: upcomingLoading, isError: upcomingIsError } = useQuery('upcoming', getUpcomingMovies);

    if (moviesLoading || upcomingLoading) {
        return <h1>Loading...</h1>
    }

    if (moviesIsError || upcomingIsError) {
        return <h1>{moviesError?.message || upcomingError?.message}</h1>
    }

    const movies = moviesData.results;
    const upcoming = upcomingData.results;

    const moviesDisplay = (
        <div>
            <h2><b>Movies</b></h2>
            {movies.map(movie => (
                <li key={movie.id}>
                    <b>{movie.id}, {movie.title},</b><br />
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/><br />
                    <b>Movie Release Date:</b> {movie.release_date}<br />
                    <b>Movie Overview:</b> {movie.overview}<br /><br />
                </li>
            ))}
        </div>
    );

    const upcomingDisplay = (
        <div>
            <h1><b>Upcoming</b></h1>
            {upcoming.map(upcoming => (
                <li key={upcoming.id}>
                    <b>{upcoming.id}, {upcoming.title},</b><br />
                    <img src={`https://image.tmdb.org/t/p/w200/${upcoming.poster_path}`} alt={upcoming.title}/><br />
                    <b>Movie Release Date:</b> {upcoming.release_date}<br />
                    <b>Movie Overview:</b> {upcoming.overview}<br /><br />
                </li>
            ))}
        </div>
    );
    return (
        <div>
            {moviesDisplay}
            {upcomingDisplay}
        </div>
    );
}

export default MoviesPage;
