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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: showcaseRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(showcaseRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.1,
    })
      .from(
        project1Ref.current,
        {
          opacity: 0,
          x: -50,
          duration: 1.1,
          ease: "expo.out",
        },
        "-=0.7" // overlap with the section fade so it doesn't feel like a separate beat
      )
      .from(
        [project2Ref.current, project3Ref.current],
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "expo.out",
          stagger: 0.2,
        },
        "-=0.6" // overlap with project1 for a continuous cascade instead of three discrete pops
      );
  }, []);

  return (
    <div id="work" className="app-showcase" ref={showcaseRef}>
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
            <div
              ref={project1Ref}
              className="image-wrapper bg-[#D5DFF8] rounded-xl will-change-transform"
            >
              <img
                className="h-full w-full object-contain"
                src="/images/pokemonpro.jpeg"
                alt="Pokémon Explorer Project"
              />
            </div>

            <div className="text-content">
              <h2>
                Explore the World of Pokémon with a Fast and Interactive Web App
              </h2>

              <p className="text-white-50 md:text-xl">
                A responsive Pokémon explorer built with React, Axios, and
                PokeAPI, featuring dynamic data fetching, reusable components,
                and an interactive user experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project2">
              <div
                ref={project2Ref}
                className="image-wrapper bg-black border-2 border-[#18181B] will-change-transform"
              >
                <img
                  className="h-full w-full object-cover"
                  src="/images/sona.png"
                  alt="Sonata Watch Website"
                />
              </div>

              <h2>
                Sonata — A Premium Watch Experience Crafted for the Modern
                Lifestyle
              </h2>
            </div>

            <div className="project3">
              <div
                ref={project3Ref}
                className="image-wrapper bg-black border-2 border-[#18181B] will-change-transform"
              >
                <img
                  className="h-full w-full object-cover"
                  src="/images/app.png"
                  alt="3D Developer Portfolio"
                />
              </div>

              <h2>
                Apple — An Immersive Product Experience Built with React & Three.js
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;