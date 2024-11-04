import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import ContactCards from '../../components/ContactCard/ContactCards';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

import { changeRootBackgroundImage } from '../../components/Utils/BackgroundManager'

import ProfilePic from './assets/Images/profile.jpeg';

function App() {

  const icons = new Map()
  icons.set('LinkedIn', { icon: LinkedInIcon, url: "https://www.linkedin.com/in/andrew-knoesen-781886109/" })
  icons.set('Email', { icon: EmailIcon, url: "mailto:andrewknoesen@gmail.com" })
  icons.set('GithHub', { icon: GitHubIcon, url: "https://github.com/andrewknoesen" })

  changeRootBackgroundImage(ProfilePic)

  return (
    <div style={{ width: "80vw", minHeight: "80vh" }}>
      <ProfileCard profilePic={ProfilePic} text={"Andrew Knoesen"} />
      <ContactCards icons={icons} />
    </div>
  )
}

export default App
