import axios from "axios";

export const DataFile = async () => {
  const American = [
    "Dune",
    "Twisters",
    "Mufasa",
    "The Painter",
    "The Beekeeper",
  ];
  const America = American.map(
    (name) =>
      `http://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=5899199`
  );

  try {
    const responses = await Promise.all(America.map((url) => axios.get(url)));

    return responses.map((response) => response.data);
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};
