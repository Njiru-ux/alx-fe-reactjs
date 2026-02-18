import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './context/UserContext';  // ← Updated path
import './App.css';

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com",
    age: "28",
    bio: "Loves hiking and photography. Enjoys exploring national parks and capturing beautiful landscapes."
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;