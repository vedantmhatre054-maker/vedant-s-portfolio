import { useEffect } from "react";

function SkillTrail() {

  useEffect(() => {

   const skills = [
  "{}",
  "</>",
  "Java",
  "React",
  "Flutter",
  "AI",
  "#",
  "()",
  "DSA",
  "API"
];

    const createTrail = (e) => {

      const trail =
        document.createElement("span");

      trail.innerText =
        skills[
          Math.floor(
            Math.random() * skills.length
          )
        ];

      trail.style.position = "fixed";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;

      trail.style.pointerEvents = "none";

      trail.style.fontSize = "17px";
      trail.style.fontWeight = "bold";

      trail.style.color = "#60a5fa";

      trail.style.zIndex = "9999";

      trail.style.transition =
        "all 3s ease-out";

      document.body.appendChild(trail);

      setTimeout(() => {

        trail.style.opacity = "0";

        trail.style.transform =
          "translateY(-100px)";

      }, 50);

      setTimeout(() => {
        trail.remove();
      }, 5000);

    };

    let lastTime = 0;

        const throttledTrail = (e) => {

        const now = Date.now();

        if (now - lastTime > 80) {
            createTrail(e);
            lastTime = now;
        }
        };

        window.addEventListener(
        "mousemove",
        throttledTrail
        );

    return () =>
      window.removeEventListener(
        "mousemove",
        throttledTrail
        );

  }, []);

  return null;
}

export default SkillTrail;