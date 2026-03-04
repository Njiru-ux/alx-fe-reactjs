import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div className="App" style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <WelcomeMessage />
      <Header />
      <MainContent />
      
      <h2 style={{
        color: '#34495e',
        textAlign: 'center',
        fontSize: '2rem',
        margin: '30px 0 20px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>User Profiles</h2>
      
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography. Enjoys exploring national parks and capturing beautiful landscapes."
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys cooking and traveling. Has visited over 20 countries and loves trying local cuisines."
      />
      <UserProfile 
        name="Charlie" 
        age="28" 
        bio="Passionate about coding and music. Plays guitar in a local band and works as a full-stack developer."
      />
      
      {/* Add the Counter component here */}
      <Counter />
      
      <Footer />
    </div>
  )
}

export default App