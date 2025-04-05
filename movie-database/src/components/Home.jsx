import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Page from "./Page";
import Americann from "./Americann";
import Footer from "./Footer";
import {
  fetchKoreanMovies,
  fetchAmericanMovies,
} from "../Services/movieService";
import LoadingSpinner from "./LoadingSpinner";

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
      <Navbar />
      <div class="min-h-screen bg-[url('./assets/front.jpg')] text-white bg-cover bg-center bg-no-repeat"></div>

      <Page data={koreanMovies} />
      <Americann data={americanMovies} />
    </div>
  );
}

export default Home;
