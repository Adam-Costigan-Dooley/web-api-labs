import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovieRecommendations } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieRecommendations from "../components/movieRecommendations";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const MovieRecommendationsPage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["recommendations", { id: id }],
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <MovieRecommendations 
          recommendations={movie} 
          title="Similar people watch:"
          action={(movie) => {
            return <AddToMustWatchIcon movie={movie} />
          }}
           />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieRecommendationsPage;