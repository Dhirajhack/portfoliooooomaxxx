import "./Hero.css";
import profile from "../assets/profile.png"; // put your photo here

const Hero = () => {
  return (
    <section className="hero shake">
      <div className="hero-left">
        <h1 className="typing-text">
          Hi, I’m <span>Dhiraj</span>
        </h1>

        <p className="typing-para">
          Welcome To My Portfolio Here You Can find my All Work Done By Me.
        </p>
      
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
