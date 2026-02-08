import axios from 'axios';

const BASE_URL = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';

const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export default githubApi;