import React, { useState } from "react";
import { fetchMovies } from "../Services/Searchdb";

import { Link } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await fetchMovies(searchTerm);
      setMovies(results);
      if (results.length === 0) {
        alert("No movies found. Try a different search term.");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Failed to search movies. Please try again.");
    } finally {
      setLoading(false);
      console.log(movies);
    }
  };

  return (
    <div class=" bg-black p-14 ">
      <div class="flex justify-center gap-2 mb-6">
        <input
          class="h-10 w-64 px-4 rounded border-none outline-none f"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
        />
        <button
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {movies.length > 0 && (
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div class="bg-black">
              <div
                key={movie.imdbID}
                class="bg-gray-800 rounded-lg overflow-hidden"
              >
                <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                  {movie.Poster && movie.Poster !== "N/A" && (
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      class="w-full h-64 object-cover"
                    />
                  )}

                  <div class="p-4">
                    <h3 class="text-lg font-bold text-white">{movie.Title}</h3>
                    <p class="text-white">{movie.Year}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
