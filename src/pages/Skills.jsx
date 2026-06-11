function Skills() {
  const skills = [
    {
      icon: "☕",
      title: "Java",
      desc: "Core Java, OOP, Collections"
    },

    {
      icon: "⚛",
      title: "React",
      desc: "Components, Routing, Hooks"
    },

    {
      icon: "📱",
      title: "Flutter",
      desc: "UI Development, Firebase"
    },

    {
      icon: "💻",
      title: "JavaScript",
      desc: "ES6, DOM, APIs"
    },

    {
      icon: "🔧",
      title: "Git",
      desc: "Version Control"
    },

    {
      icon: "🐙",
      title: "GitHub",
      desc: "Repositories & Collaboration"
    },

    {
      icon: "🖥",
      title: "VS Code",
      desc: "Development Environment"
    }
  ];

  return (
    <div className="page">
      <h1>My Skills</h1>

      <div className="card-grid">
        {skills.map((skill) => (
          <div className="card skill-card" key={skill.title}>
            <h2>{skill.icon}</h2>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;