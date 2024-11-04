import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactCard from './ContactCard';

export default function ContactCards() {
    const icons = new Map()
    icons.set('LinkedIn', { icon: LinkedInIcon, url: "https://www.linkedin.com/in/andrew-knoesen-781886109/" })
    icons.set('Email', { icon: EmailIcon, url: "mailto:andrewknoesen@gmail.com" })
    icons.set('GithHub', { icon: GitHubIcon, url: "https://github.com/andrewknoesen" })

    return (
        <>
            {Array.from(icons).map(([name, { icon: Icon, url }]) => (
                <ContactCard key={name} icon={Icon} text={name} url={url} />
            ))}
        </>
    )
}