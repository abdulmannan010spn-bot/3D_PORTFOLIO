import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const showcaseRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.from(showcaseRef.current, {
      scrollTrigger: {
        trigger: showcaseRef.current,
        start: "top 30%",
      },

      opacity: 0,
    });

    gsap.from([project1Ref.current, project2Ref.current, project3Ref.current], {
      opacity: 0,
      delay: 0.3,
      stagger: 0.6,
    });
  });
  return (
    <div
      id="work"
      className="
    app-showcase"
      ref={showcaseRef}
    >
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper">
            <div ref={project1Ref} className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div ref={project2Ref} className="image-wrapper bg-zinc-600">
                <img
                  src="/images/project2.png"
                  alt="Library management system"
                />
              </div>
              <h2>Library management system</h2>
            </div>

            <div className="project">
              <div ref={project3Ref} className="image-wrapper bg-zinc-300">
                <img src="/images/project3.png" alt="YC" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Showcase;
