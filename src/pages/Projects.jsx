import financeImg from "../assets/finance-tracker.png";
import stockImg from "../assets/stock-analyzer.png";
import interviewImg from "../assets/interviewflow.png";
import owlImg from "../assets/owltrails.png";
import cookifyImg from "../assets/cookify.png";
function Projects() {
  const projects = [
  {
    title: "Finance Tracker",
    image: financeImg,
    tech: ["Java", "OOP", "ArrayList"],
    status: "Completed",
    github: "https://github.com/vedantmhatre054-maker/finance_app.git",
    description:
      "Personal finance management application.",
  },

  {
  title: "Cookify",
  image: cookifyImg,
  tech: ["React", "TypeScript", "Tailwind", "API"],
  status: "Completed",
  github: "https://github.com/vedantmhatre054-maker/cookify.git",
  description:
    "Cookify is smart recipe recommendation application that helps users to discover recipies based on available indregidents",
},

  {
    title: "Stock Analyzer",
    image: stockImg,
    tech: ["React", "JavaScript"],
    status: "Active",
    github: "#",
    description:
      "Stock market dashboard with analysis.",
  },

  {
    title: "InterviewFlow",
    image: interviewImg,
    tech: ["Flutter", "AI"],
    status: "Active",
    github: "https://github.com/vedantmhatre054-maker/interview_flow.git",
    description:
      "Interview preparation platform.",
  },

  {
    title: "OwlTrails",
    image: owlImg,
    tech: ["Flutter", "A*"],
    status: "Planned",
    github: "#",
    description:
      "Campus navigation application.",
  },
];
  return (
    <div className="page">

      <h1>Projects</h1>

      <div className="card-grid">

        {projects.map((project) => (
          <div
            className="card project-card"
            key={project.title}
          >

            <img
                src={project.image}
                alt={project.title}
                className="project-image"
                />
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <p className="status">
              Status: {project.status}
            </p>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                >
                <button className="github-btn">
                    GitHub ↗
                </button>
                </a>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Projects;