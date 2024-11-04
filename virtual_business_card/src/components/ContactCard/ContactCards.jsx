import ContactCard from './ContactCard';

export default function ContactCards({icons}) {
    return (
        <>
            {Array.from(icons).map(([name, { icon: Icon, url }]) => (
                <ContactCard key={name} icon={Icon} text={name} url={url} />
            ))}
        </>
    )
}