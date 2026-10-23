import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { showcaseProjects as projects } from "../Constants";

gsap.registerPlugin(ScrollTrigger);

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const ProjectCard = ({ project, featured = false }) => {
  const { title, description, image, bg, tags, live, github } = project;

  return (
    <article
      className={`project-card group overflow-hidden rounded-2xl border border-[#27272A] bg-[#0c0c0e] transition-colors duration-300 hover:border-[#52525B] ${
        featured ? "grid lg:grid-cols-2" : "flex flex-col"
      }`}
    >
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} live demo`}
        className={`block overflow-hidden ${bg} ${focusRing}`}
      >
        <div
          className={`w-full ${
            featured ? "h-full min-h-72" : "aspect-16/10"
          }`}
        >
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </a>

      <div
        className={`flex flex-col gap-5 p-6 ${
          featured ? "md:p-10 lg:justify-center" : "md:p-8 flex-1"
        }`}
      >
        <h3
          className={`font-semibold leading-tight ${
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>

        <p className="text-white-50 md:text-lg max-w-prose">{description}</p>

        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#27272A] bg-[#18181B] px-3 py-1 text-sm text-white-50"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg bg-white px-5 py-2.5 text-black transition-opacity hover:opacity-85 ${focusRing}`}
          >
            View live site
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg border border-[#3F3F46] px-5 py-2.5 transition-colors hover:bg-[#18181B] ${focusRing}`}
            >
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Showcase = () => {
  const sectionRef = useRef(null);
  const [featured, ...rest] = projects;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray(".project-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 48,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full flex flex-col gap-8">
        <ProjectCard project={featured} featured />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;