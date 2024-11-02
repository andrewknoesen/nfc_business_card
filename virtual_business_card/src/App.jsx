import { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" className="logo-card">
          <InstagramIcon className="logo" fontSize="large" alt="Instagram Icon" />
          Instagram
        </a>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank" className="logo-card">
          <WhatsAppIcon className="logo" fontSize="large" alt="WhatsApp Icon" />
          WhatsApp
        </a>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank" className="logo-card">
          <MenuIcon className="logo" fontSize="large" alt="Menu Icon" />
          Menu
        </a>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank" className="logo-card">
          <MenuIcon className="logo" fontSize="large" alt="Menu Icon" />
          Menu
        </a>
      </div>
    </>
  )
}

export default App
