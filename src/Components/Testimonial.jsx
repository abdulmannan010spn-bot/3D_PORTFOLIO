import Lanyard from "./Lanyard";
import TitleHeader from "./TitleHeader";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Who I am in Team OSS ?" sub="Highlights" />

        <div className="w-full h-dvh py-5">
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage="/images/front.png"
            backImage="/images/back.png"
            imageFit="cover"
          />
        </div>
        <div className="text-xl font-light text-center px-4 italic relative bottom-10 tracking-wide flex-center">
          <h1 className="lg:w-[80%]">My journey in Team OSS at AKGEC has been a transformation from a creative designer to a frontend developer. I started by designing posters, logos, and event creatives, then explored UI/UX through Figma and designathons. Over time, I shifted toward web development, learning React, Tailwind, GSAP, and Three.js while building real-world projects.</h1>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
