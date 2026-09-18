function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "90%"
    },
    {
      name: "CSS",
      level: "85%"
    },
    {
      name: "JavaScript",
      level: "80%"
    },
    {
      name: "React",
      level: "75%"
    },
    {
      name: "Node.js",
      level: "70%"
    },
    {
      name: "MongoDB",
      level: "70%"
    }
  ];

  return (
    <section id="skills" className="section">

      <div className="section-title">
        <p>WHAT I WORK WITH</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;