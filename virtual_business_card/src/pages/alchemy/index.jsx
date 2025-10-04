import InstagramIcon from '@mui/icons-material/Instagram';
import WebsiteIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AddBoxIcon from '@mui/icons-material/AddBox';

import ContactCards from '../../components/ContactCard/ContactCards';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

import { changeRootBackgroundImage } from '../../components/Utils/BackgroundManager'
import '../../App.css';
import ProfilePic from './assets/Images/profile.png';

function App() {

  const icons = new Map()
  icons.set('Webpage', { icon: WebsiteIcon, url: "https://alchemyhair.co.za" })
  icons.set('Instagram', { icon: InstagramIcon, url: "https://www.instagram.com/alchemy_hs/" })
  icons.set('WhatsApp', { icon: WhatsAppIcon, url: "https://wa.me/+27680702280" })
  icons.set('Make Booking', { icon: AddBoxIcon, url: "https://www.fresha.com/book-now/alchemy-hair-studio-d5njalgl/all-offer?share&pId=512488" })
  changeRootBackgroundImage(ProfilePic)

  return (
    <div className="app-container">
      <ProfileCard profilePic={ProfilePic} />
      <ContactCards icons={icons} />
    </div>
  )
}

export default App
