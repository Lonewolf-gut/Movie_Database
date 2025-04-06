import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Page from "./Page";
import Americann from "./Americann";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  fetchKoreanMovies,
  fetchAmericanMovies,
} from "../Services/movieService";
import LoadingSpinner from "./LoadingSpinner";
import front from "../assets/r.jpg";

function Home() {
  const [koreanMovies, setKoreanMovies] = useState([]);
  const [americanMovies, setAmericanMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [korean, american] = await Promise.all([
          fetchKoreanMovies(),
          fetchAmericanMovies(),
        ]);
        setKoreanMovies(korean);
        setAmericanMovies(american);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center p-8">{error}</div>;

  return (
    <div>
      <div
        class="lg:min-h-screen bg-cover bg-center bg-no-repeat pt-48 pl-28  text-white"
        style={{ backgroundImage: `url(${front})` }}
      >
        <div class="lg:pb-32 md:pt-44 sm:pr-5 mt-24">
          <h1 class="lg:text-5xl font-extrabold mb-4 text-red-500 sm: text-2">
            🎬 MovieHub
          </h1>
          <p class="text-xl mb-6 text-gray-300 text-center max-w-xl">
            Discover thousands of movies, explore your favorites, and get
            detailed info about cast, ratings, and more. Your ultimate movie
            destination.
          </p>
          <Link to="/search">
            <button class="bg-red-600 hover:bg-red-700 transition-all px-6 py-3 rounded-lg text-lg font-semibold">
              Start Exploring
            </button>
          </Link>
        </div>
      </div>

      <Page data={koreanMovies} />
      <Americann data={americanMovies} />
    </div>
  );
}

export default Home;
