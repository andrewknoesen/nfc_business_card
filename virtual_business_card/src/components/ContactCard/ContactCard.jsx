import "./ContactCard.css";

export default function ContactCard({ icon: Icon, text, url }) {
  return (
    <div key={text} className="parent-div">
      <a href={url} target="_blank" className="logo-card">
        <Icon className="logo" fontSize="large" />
        {text}
      </a>
    </div>
  );
}

