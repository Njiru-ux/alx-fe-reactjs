import React from 'react';
import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub User Search
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Advanced search for GitHub developers with filters by location, repositories, and more
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              🔍 Search by Username
            </span>
            <span className="bg-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
              📍 Filter by Location
            </span>
            <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-medium">
              📊 Minimum Repositories
            </span>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="py-8 md:py-12">
        <AdvancedSearch />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">GitHub User Search</h3>
              <p className="text-gray-400">Find developers worldwide</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">Built with modern technologies</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-3">
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">React</span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">Tailwind CSS</span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">GitHub API</span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">Axios</span>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                © {new Date().getFullYear()} GitHub User Search Application
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              This application uses the official GitHub API. Rate limits may apply for unauthenticated requests.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Search and discover developers based on multiple criteria for your projects and collaborations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;