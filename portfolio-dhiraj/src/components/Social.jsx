import "./Social.css";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourprofile", name: "LinkedIn" },
  { icon: <FaGithub />, link: "https://github.com/yourusername", name: "GitHub" },
  { icon: <FaInstagram />, link: "https://instagram.com/yourusername", name: "Instagram" },
  { icon: <FaTwitter />, link: "https://twitter.com/yourusername", name: "Twitter" },
  { icon: <FaYoutube />, link: "https://youtube.com/yourchannel", name: "YouTube" },
];

const Social = () => {
  return (
    <section className="social-section">
      <h2>Connect With Me</h2>
      <p>Follow me on social media or reach out directly!</p>

      <div className="social-icons">
        {socials.map((s, i) => (
          <a href={s.link} target="_blank" rel="noopener noreferrer" key={i} title={s.name}>
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
