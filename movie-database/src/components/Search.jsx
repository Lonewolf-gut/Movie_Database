import React, { useState, useEffect } from "react";
import { fetchMovies } from "../Services/movieService";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const results = await fetchMovies(searchTerm);
      setMovies(results);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="p-4">
      <div class="flex gap-2 mb-6">
        <input
          class="h-10 w-64 px-4 rounded border-none outline-none"
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
            <div
              key={movie.imdbID}
              class="bg-gray-800 rounded-lg overflow-hidden"
            >
              {movie.Poster && movie.Poster !== "N/A" && (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  class="w-full h-64 object-cover"
                />
              )}
              <div class="p-4">
                <h3 class="text-lg font-bold">{movie.Title}</h3>
                <p class="text-gray-400">{movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
