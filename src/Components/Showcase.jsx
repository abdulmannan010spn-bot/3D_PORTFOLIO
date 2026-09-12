import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Button from "./Button";

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
        "-=0.8",
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
        "-=0.8",
      );
  }, []);

  return (
    <div id="work" className="app-showcase" ref={showcaseRef}>
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
            <a
              href="https://pokedex-three-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                ref={project1Ref}
                className="image-wrapper bg-[linear-gradient(to_bottom,#ede7ff_0%,#f5f1ff_40%,#ffffff_100%)] rounded-xl will-change-transform"
              >
                <img
                  className="h-full w-full object-contain"
                  src="/images/first.png"
                  alt="Pokémon Explorer Project"
                />
              </div>

              <div className="text-content">
                <h2>
                  Explore the World of Pokémon with a Fast and Interactive Web
                  App
                </h2>
              </div>
            </a>

            <div className="text-content">
              <p className="text-white-50 md:text-xl">
                A responsive Pokémon explorer built with React, Axios, and
                PokeAPI, featuring dynamic data fetching, reusable components,
                and an interactive user experience.
              </p>

              <a
                href="https://github.com/abdulmannan010spn-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="md:w-80 md:h-16 w-60 h-12" text="See More" />
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project2">
              <a
                href="https://sonata-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  ref={project2Ref}
                  className="image-wrapper bg-black border-2 border-[#18181B] will-change-transform"
                >
                  <img
                    className="h-full w-full object-contain"
                    src="/images/second.png"
                    alt="Sonata Watch Website"
                  />
                </div>

                <h2>
                  Sonata — A Premium Watch Experience Crafted for the Modern
                  Lifestyle
                </h2>
              </a>
            </div>

            <div className="project3">
              <a
                href="https://apple-theta-ochre.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  ref={project3Ref}
                  className="image-wrapper bg-black border-2 border-[#18181B] will-change-transform"
                >
                  <img
                    className="h-full w-full object-contain"
                    src="/images/third.png"
                    alt="Apple 3D Product Experience"
                  />
                </div>

                <h2>
                  Apple — An Immersive Product Experience Built with React &
                  Three.js
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
