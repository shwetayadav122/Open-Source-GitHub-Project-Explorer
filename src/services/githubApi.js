import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchRepositories = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/repositories?q=stars:>5000&sort=stars`
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};