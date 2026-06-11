import { useEffect, useState } from "react";
import developer from "../assets/developer.png";

function Home() {
  const texts = [
    "Java Developer",
    "Flutter Developer",
    "React Learner",
    "Problem Solver",
    "DSA Learner",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentText = texts[index];
    let charIndex = 0;

    const interval = setInterval(() => {
      setText(currentText.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentText.length) {
        clearInterval(interval);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="hero">

      <div className="hero-left">

        <p className="hero-intro">HELLO 👋</p>

        <h1>
          I'm <span>Vedant</span>
        </h1>

        <h2>Building Software Solutions with Java, React & Flutter</h2>

        <p className="typing">{text}</p>

        <div className="hero-buttons">
          <button>View Projects</button>
          <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          📄 Download Resume
        </a>
        </div>

        <div className="focus-card">
          <h3>Current Focus</h3>

          <p>✓ DSA with Java</p>
          <p>✓ React Development</p>
          <p>✓ Portfolio Building</p>
          <p>✓ Placement Preparation</p>
        </div>

      </div>

      <div className="hero-right">

  <div className="image-bg"></div>

    <img
        src={developer}
        alt="Developer"
        className="developer-image"
    />

    </div>

      

    </div>
  );
}

export default Home;