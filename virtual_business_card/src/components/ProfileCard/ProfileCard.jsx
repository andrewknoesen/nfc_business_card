import "./ProfileCard.css";

export default function ProfileCard({ profilePic, text }) {
  return (
    <div
      className="profile-card"
      style={{ backgroundImage: `url(${profilePic})` }}
    >
      {/* <img src={profilePic} className="profile" alt="Profile Picure" /> */}
      {text && <span className="name-title"> {text} </span>}
    </div>
  );
}
