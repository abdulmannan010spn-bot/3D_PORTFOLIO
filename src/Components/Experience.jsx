import { useGSAP } from "@gsap/react";
import { expCards } from "../Constants";
import Glowcard from "./Glowcard";
import TitleHeader from "./TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  useGSAP(()=>{
    
  })
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <Glowcard card={card}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </Glowcard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="" />
                      </div>
                      <div>
                        <h1 className="text-bold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">{card.date}</p>
                        <p className="text-blue-50 italic"> Respnsibilities</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibilities) => (
                            <li key={responsibilities} className="text-lg">
                              {responsibilities}
                            </li>
                          ))}
                        </ul>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
