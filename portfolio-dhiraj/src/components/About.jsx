import "./About.css";
import avatar from "../assets/avatar.png"; // your photo

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I’m a dedicated <span>Full Stack Web Developer</span> with a passion for building interactive,
            user-focused digital experiences. I believe that great software is a blend of
            <b> clean code, thoughtful design, and smooth interactions</b> — everything
            that turns a good website into a great one.
          </p>

          <p>
            My toolkit includes <b>React, JavaScript (ES6+), HTML5, CSS3</b>, and
            modern frameworks like <b>Next.js</b>. I build responsive, accessible
            apps that work beautifully on all devices, with a focus on performance and polish.
          </p>

          <p>
            I love solving problems, learning new tech, and turning ideas into products
            that users enjoy. Whether I’m optimizing performance or adding animations,
            I’m always seeking elegance in every line of code.
          </p>

          <p>
            I’m currently open to opportunities where I can grow, contribute, and
            help build impactful software. Let’s create something amazing together 💡🚀
          </p>

          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>

        <div className="about-image">
          <img src={avatar} alt="About Me" />
        </div>
      </div>
    </section>
  );
};

export default About;
