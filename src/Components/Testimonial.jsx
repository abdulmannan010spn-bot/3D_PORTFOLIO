import Lanyard from "./Lanyard";
import TitleHeader from "./TitleHeader";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Who I am in Team OSS ?" sub="Highlights" />

        <div className="w-full h-dvh">
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage="/images/front.png"
            backImage="/images/back.png"
            imageFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
