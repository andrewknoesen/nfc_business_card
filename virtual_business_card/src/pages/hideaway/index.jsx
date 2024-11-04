import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Assignment';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AddBoxIcon from '@mui/icons-material/AddBox';
import menuImg from './assets/Images/menu.jpeg'

import ContactCards from '../../components/ContactCard/ContactCards';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

import { changeRootBackgroundImage } from '../../components/Utils/BackgroundManager'

import ProfilePic from './assets/Images/profile.jpeg';

function App() {

  const icons = new Map()
  icons.set('Instagram', { icon: InstagramIcon, url: "https://www.instagram.com/hideaway.beauty.salon/profilecard/?igsh=MTB2c252c2pub3Byeg==" })
  icons.set('WhatsApp', { icon: WhatsAppIcon, url: "https://wa.me/+27740327247" })
  icons.set('Menu', { icon: MenuIcon, url: menuImg })
  icons.set('Make Booking', {icon: AddBoxIcon,  url: "https://www.fresha.com/book-now/hideaway-atw0ase5/all-offer?share&pId=519426"})

  changeRootBackgroundImage(ProfilePic)

  return (
    <div style={{ width: "80vw", minHeight: "80vh" }}>
      <ProfileCard profilePic={ProfilePic}/>
      <ContactCards icons={icons}/>
    </div>
  )
}

export default App
