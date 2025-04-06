import axios from "axios";

const API_KEY = "5899199"; // Note: Should be moved to environment variables
const BASE_URL = "http://www.omdbapi.com";

export const fetchMovies = async (titles) => {
  try {
    const requests = titles.map((title) =>
      axios.get(`${BASE_URL}/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`)
    );
    const responses = await Promise.all(requests);
    return responses
      .map((res) => res.data)
      .filter((movie) => movie.Response === "True");
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch movies");
  }
};

export const fetchKoreanMovies = async () => {
  const titles = ["Vincenzo", "The Frog", "Buried Hearts", "Escape", "Exhuma"];
  return fetchMovies(titles);
};

export const fetchAmericanMovies = async () => {
  const titles = ["Dune", "Twisters", "Mufasa", "The Painter", "The Beekeeper"];
  return fetchMovies(titles);
};
