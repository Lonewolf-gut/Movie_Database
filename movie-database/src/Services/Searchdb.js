import axios from "axios";

const API_KEY = "5899199"; // Note: Should be moved to environment variables
const BASE_URL = "http://www.omdbapi.com";

export const fetchMovies = async (titles) => {
  const values = await axios.get(
    `${BASE_URL}/?s=${encodeURIComponent(titles)}&apikey=${API_KEY}`
  );
  const another = values.data.Search;
  console.log(another);
  return another;
};
