import { useEffect, useState } from "react";
import "./Skills.css";

const skills = [
  { name: "React", percent: 80, color: "#61dafb" },
  { name: "JavaScript", percent: 76, color: "#f7df1e" },
  { name: "CSS", percent: 98, color: "#2965f1" },
  { name: "HTML", percent: 99, color: "#e34c26" },
  { name: "SQL", percent: 40, color: "#00ffcc" },
];

const SkillRing = ({ percent, color }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let interval;
    let timeout1;
    let timeout2;

    const startAnimation = () => {
      let current = 0;

      interval = setInterval(() => {
        current += 1;
        setValue(current);

        if (current >= percent) {
          clearInterval(interval);

          // HOLD AT 80% FOR 10s
          timeout1 = setTimeout(() => {
            setValue(0);

            // WAIT 10s THEN RESTART
            timeout2 = setTimeout(() => {
              startAnimation();
            }, 10000);
          }, 10000);
        }
      }, 40);
    };

    startAnimation();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [percent]);

  return (
    <div
      className="ring"
      style={{
        "--value": value,
        "--color": color,
      }}
    >
      <span>{value}%</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <SkillRing percent={s.percent} color={s.color} />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
