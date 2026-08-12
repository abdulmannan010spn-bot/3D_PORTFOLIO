import Lanyard from "./Lanyard";
import TitleHeader from "./TitleHeader";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Who I am in Team OSS ?" sub="Highlights" />

        <div className="w-full h-dvh">
          <Lanyard
          cardFrontTextureUrl="/images/front.png"
          cardBackTextureUrl="/images/back.png"

            cardGlbUrl="/models/card.glb"
            strapColor="#1a1a1a"
            position={[0, 4, 0]}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;