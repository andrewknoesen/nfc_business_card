import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Assignment';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AddBoxIcon from '@mui/icons-material/AddBox';
import menuImg from '../Images/menu.jpeg'
import ContactCard from './ContactCard';

export default function ContactCards() {
    const icons = new Map()
    icons.set('Instagram', { icon: InstagramIcon, url: "https://www.instagram.com/hideaway.beauty.salon/profilecard/?igsh=MTB2c252c2pub3Byeg==" })
    icons.set('WhatsApp', { icon: WhatsAppIcon, url: "https://wa.me/+27740327247" })
    icons.set('Menu', { icon: MenuIcon, url: menuImg })
    icons.set('Make Booking', {icon: AddBoxIcon,  url: "https://www.fresha.com/book-now/hideaway-atw0ase5/all-offer?share&pId=519426"})

    return (
        <>
            {Array.from(icons).map(([name, { icon: Icon, url }]) => (
                <ContactCard key={name} icon={Icon} text={name} url={url} />
            ))}
        </>
    )
}