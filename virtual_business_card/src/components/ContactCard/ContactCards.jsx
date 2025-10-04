import ContactCard from "./ContactCard";
import "./ContactCards.css";

export default function ContactCards({ icons }) {
  return (
    <div className="contact-cards">
      {Array.from(icons).map(([name, { icon: Icon, url }]) => (
        <ContactCard key={name} icon={Icon} text={name} url={url} />
      ))}
    </div>
  );
}

