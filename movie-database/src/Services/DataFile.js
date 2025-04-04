import axios from "axios";

//getting the url
const URL = "http://www.omdbapi.com/?t=avengers&apikey=5899199";

export const DataFile = async () => {
  try {
    const response = await axios.get(URL);
    return response.data; // Updated to return the full response object
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};
