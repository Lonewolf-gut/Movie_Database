import axios from "axios";

export const DataFile = async () => {
  const Trending = [
    "Vincenzo",
    "Vincenzo",
    "Buried Hearts",
    "Escape",
    "Exhuma",
  ];

  const Korean = Trending.map(
    (name) =>
      `http://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=5899199`
  );

  try {
    const responses = await Promise.all(Korean.map((url) => axios.get(url)));
    return responses.map((response) => response.data);
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};
