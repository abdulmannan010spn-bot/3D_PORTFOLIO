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
      duration: 1,
    });

    gsap.from(
      [project1Ref.current, project2Ref.current, project3Ref.current],
      {
        opacity: 0,
        y: 50,
        delay: 0.3,
        stagger: 0.6,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div id="work" className="app-showcase" ref={showcaseRef}>
      <div className="w-full">
        <div className="showcaselayout">

     
          <div className="first-project-wrapper">
            <div ref={project1Ref} className="image-wrapper">
              <img className="h-full w-full object-cover"
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

          
            <div className="project">
              <div
                ref={project2Ref}
                className="image-wrapper bg-[#050609]"
              >
                <img className="h-full w-full object-cover"
                  src="/images/so.png"
                  alt="Sonata Watch Website"
                />
              </div>

              <h2>
                Sonata — A Premium Watch Experience Crafted for the Modern
                Lifestyle
              </h2>
            </div>

          
            <div className="project">
              <div
                ref={project3Ref}
                className="image-wrapper bg-[#0B0C0F]"
              >
                <img className="h-full w-full object-cover"
                  src="/images/ap.png"
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