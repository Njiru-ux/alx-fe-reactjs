import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <Header />
      <MainContent />
      
      <h2>User Profiles:</h2>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys cooking and traveling" 
      />
      <UserProfile 
        name="Charlie" 
        age="28" 
        bio="Passionate about coding and music" 
      />
      
      <Footer />
    </div>
  )
}

export default App