import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = "http://www.omdbapi.com";
const API_KEY = "5899199"; // Fallback if env var not set

export default function Detail() {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/?i=${id}&apikey=${API_KEY}`
        );
        if (response.data.Response === "False") {
          throw new Error(response.data?.Error || "Invalid API response");
        }

        // Validate we have at least some movie data
        if (!response.data.Title) {
          throw new Error("No movies title found");
        }

        // Set movie data with defaults for missing fields
        const movieData = {
          Title: response.data.Title,
          Year: response.data.Year,
          Rated: response.data.Rated,
          Released: response.data.Released,
          Runtime: response.data.Runtime,
          Genre: response.data.Genre,
          Director: response.data.Director,
          Actors: response.data.Actors,
          Plot: response.data.Plot,
          Poster: response.data.Poster,
          imdbRating: response.data.imdbRating,
        };

        setDetailMovie(movieData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error(err);
        setDetailMovie(null);
      } finally {
        setLoading(false);
      }
    };

    movieDetails();
  }, [id]);

  //checking the error, loading state and the detailmovie
  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!detailMovie)
    return <div className="text-white">No movie data found</div>;

  return (
    <div className="bg-black flex text-white p-10">
      <div className="w-1/3 pr-8">
        {detailMovie.Poster && (
          <img
            src={detailMovie.Poster}
            alt={detailMovie.Title}
            className="w-full rounded-lg shadow-lg"
          />
        )}
      </div>
      <div className="w-2/3 space-y-4">
        <h1 className="text-3xl font-bold">{detailMovie.Title}</h1>
        <p>
          <strong>Year:</strong> {detailMovie.Year}
        </p>
        <p>
          <strong>Rated:</strong> {detailMovie.Rated}
        </p>
        <p>
          <strong>Released:</strong> {detailMovie.Released}
        </p>
        <p>
          <strong>Runtime:</strong> {detailMovie.Runtime}
        </p>
        <p>
          <strong>Genre:</strong> {detailMovie.Genre}
        </p>
        <p>
          <strong>Director:</strong> {detailMovie.Director}
        </p>
        <p>
          <strong>Actors:</strong> {detailMovie.Actors}
        </p>
        <p>
          <strong>Plot:</strong> {detailMovie.Plot}
        </p>
        <p>
          <strong>Rating:</strong> {detailMovie.imdbRating}
        </p>
      </div>
    </div>
  );
}
