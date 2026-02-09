import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

const UserCard = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData(username);
        setUserData(data);
      } catch (err) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [username]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-200 h-16 w-16"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="text-center text-gray-500">
          <p>Could not load user: {username}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-start space-x-4">
        <img
          src={userData.avatar_url}
          alt={`${userData.login}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-gray-100"
        />
        
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800">
            {userData.name || userData.login}
          </h3>
          <p className="text-gray-600 text-sm mb-2">@{userData.login}</p>
          
          {userData.bio && (
            <p className="text-gray-700 text-sm mb-3 line-clamp-2">{userData.bio}</p>
          )}
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <div className="font-bold text-gray-800">{userData.public_repos}</div>
              <div className="text-xs text-gray-500">Repos</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800">{userData.followers}</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-800">{userData.following}</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
          </div>
          
          <div className="space-y-1 text-sm">
            {userData.location && (
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {userData.location}
              </div>
            )}
            
            {userData.company && (
              <div className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {userData.company}
              </div>
            )}
          </div>
          
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full bg-gray-900 text-white text-center py-2 rounded-lg font-semibold hover:bg-black transition"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;