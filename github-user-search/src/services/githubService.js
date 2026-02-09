import axios from 'axios';

const BASE_URL = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';

const githubService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await githubService.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export default githubService;