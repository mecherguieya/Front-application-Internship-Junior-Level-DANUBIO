import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (query = "") => {
  try {
    const response = await axios.get(`${BASE_URL}?name=${query}`);
    return response.data.results.slice(0, 10); 
  } catch (error) {
    console.error("Error fetching characters:", error);
    return []; 
  }
};
