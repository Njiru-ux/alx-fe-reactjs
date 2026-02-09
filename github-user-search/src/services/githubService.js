import axios from 'axios';

const BASE_URL = process.env.REACT_APP_GITHUB_API_URL || 'https://api.github.com';

const githubService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

// Advanced search function for multiple criteria
export const advancedUserSearch = async (params, page = 1, perPage = 10) => {
  try {
    let query = '';
    
    // Build query string based on parameters
    if (params.username) {
      query += `${params.username} `;
    }
    if (params.location) {
      query += `location:${params.location} `;
    }
    if (params.minRepos) {
      query += `repos:>${params.minRepos} `;
    }
    
    // Trim and replace spaces with +
    query = query.trim().replace(/\s+/g, '+');
    
    const response = await githubService.get(
      `/search/users?q=${query}&page=${page}&per_page=${perPage}&sort=followers`
    );
    return response.data;
  } catch (error) {
    console.error('Error in advanced user search:', error);
    throw error;
  }
};

// Get detailed user data
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