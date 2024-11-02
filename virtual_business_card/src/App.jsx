import { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" className="logo-card">
          <InstagramIcon className="logo" fontSize="large" alt="Instagram Icon" />
          Follow us on Instagram
        </a>
      </div>
    </>
  )
}

export default App
