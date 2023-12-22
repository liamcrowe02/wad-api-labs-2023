import React from "react";
import { useQuery } from 'react-query';
import { getMovies} from "../api/movies-api";

const PublicPage = () => {
    <h1>Public Page</h1>
    const { data: moviesData, error: moviesError, isLoading: moviesLoading, isError: moviesIsError } = useQuery('discover', getMovies);

    if (moviesLoading) {
        return <h1>Loading...</h1>
    }

    if (moviesIsError) {
        return <h1>{moviesError?.message}</h1>
    }

    const movies = moviesData.results;

    const moviesDisplay = (
        <div>
            <h2>Public Movie List</h2>
            {movies.map(movie => (
                <li key={movie.id}>
                    <b>{movie.id}, {movie.title},</b><br />
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/><br />
                    {movie.overview}<br /><br />
                </li>
            ))}
        </div>
    );

    return (
        <div>
            {moviesDisplay}
        </div>
    );
}


 export default PublicPage;