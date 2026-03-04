import React, { useState } from 'react';
import { advancedUserSearch } from '../services/githubService';
import UserCard from './UserCard';

const AdvancedSearch = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const perPage = 9;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await performSearch(1);
  };

  const performSearch = async (page) => {
    // Check if at least one field is filled
    if (!searchParams.username && !searchParams.location && !searchParams.minRepos) {
      setError('Please enter at least one search criteria (username, location, or minimum repos)');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const result = await advancedUserSearch(searchParams, page, perPage);
      setSearchResults(page === 1 ? result.items : [...searchResults, ...result.items]);
      setTotalResults(result.total_count);
      setHasMore(page * perPage < result.total_count);
      setCurrentPage(page);
    } catch (err) {
      setError('Error searching users. Please try different search criteria.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    performSearch(currentPage + 1);
  };

  const resetSearch = () => {
    setSearchParams({ username: '', location: '', minRepos: '' });
    setSearchResults([]);
    setError(null);
    setCurrentPage(1);
    setTotalResults(0);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          GitHub Advanced User Search
        </h1>
        <p className="text-gray-600 text-lg">
          Search developers by username, location, and repository count
        </p>
      </div>

      {/* Advanced Search Form */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={searchParams.username}
                onChange={handleInputChange}
                placeholder="e.g., octocat"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-lg"
              />
              <p className="text-sm text-gray-500">Partial names work too</p>
            </div>

            {/* Location Field */}
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                placeholder="e.g., San Francisco"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-lg"
              />
              <p className="text-sm text-gray-500">City, country, or region</p>
            </div>

            {/* Min Repositories Field */}
            <div className="space-y-2">
              <label htmlFor="minRepos" className="block text-sm font-semibold text-gray-700">
                Minimum Repositories
              </label>
              <input
                type="number"
                id="minRepos"
                name="minRepos"
                value={searchParams.minRepos}
                onChange={handleInputChange}
                placeholder="e.g., 100"
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-lg"
              />
              <p className="text-sm text-gray-500">Filter by repository count</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching GitHub...
                </span>
              ) : (
                '🔍 Search Users'
              )}
            </button>
            
            <button
              type="button"
              onClick={resetSearch}
              className="px-8 py-4 border-2 border-gray-300 rounded-xl font-bold text-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Results Summary */}
      {searchResults.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Found {totalResults.toLocaleString()} developer{totalResults !== 1 ? 's' : ''}
              </h2>
              {searchParams.location && (
                <p className="text-gray-600 mt-1">
                  in {searchParams.location}
                </p>
              )}
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-gray-600">
                Showing {searchResults.length} of {totalResults.toLocaleString()} results
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results Grid */}
      {searchResults.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {searchResults.map((user) => (
              <UserCard key={user.id} username={user.login} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && !loading && (
            <div className="text-center mb-12">
              <button
                onClick={loadMore}
                className="bg-gray-800 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition shadow-lg hover:shadow-xl"
              >
                Load More Users ({totalResults - searchResults.length} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {/* Loading More Indicator */}
      {loading && currentPage > 1 && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          <p className="mt-3 text-gray-600">Loading more users...</p>
        </div>
      )}

      {/* Initial/Empty State */}
      {!loading && searchResults.length === 0 && !error && (
        <div className="text-center py-16">
          <div className="text-gray-300 mb-6">
            <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-3">Start Your Search</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Enter a username, location, or minimum repository count to find GitHub developers
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Try Username</h4>
              <p className="text-blue-600 text-sm">"torvalds" for Linus Torvalds</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Try Location</h4>
              <p className="text-green-600 text-sm">"San Francisco" for SF developers</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Try Repos</h4>
              <p className="text-purple-600 text-sm">"100" for 100+ repositories</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;