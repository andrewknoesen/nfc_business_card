import './App.css'
import ContactCards from './assets/ContactCard/ContactCards';
import ProfileCard from './assets/ProfileCard/ProfileCard'

function App() {

  return (
    <div style={{ width: "80vw", minHeight: "80vh" }}>
      <ProfileCard />
      <ContactCards />
    </div>
  )
}

export default App
