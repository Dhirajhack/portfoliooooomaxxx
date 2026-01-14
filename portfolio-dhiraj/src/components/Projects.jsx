import "./Projects.css";
import p1 from "../assets/Project1.png";
import p2 from "../assets/Project2.png";

const projects = [
  {
    title: "3D Portfolio Website",
    desc: "A cinematic 3D portfolio built with React, animations, and creative UI.",
    tech: ["React", "Three.js", "GSAP"],
    img: p1,
    live: "#",
    code: "#",
  },
  {
    title: "Color Trading Platform",
    desc: "Real-time color trading game with wallet system and admin control.",
    tech: ["React", "Node", "MongoDB"],
    img: p2,
    live: "#",
    code: "#",
  },
  {
    title: "Kammbazzr-worker",
    desc: "Real-time worker place where user can find the worker need in real time.",
    tech: ["React", "Node", "MongoDB", "HTML", "CSS"],
    img: p2,
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="project">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-img">
              <img src={p.img} alt={p.title} />
            </div>

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tech-stack">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={p.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
