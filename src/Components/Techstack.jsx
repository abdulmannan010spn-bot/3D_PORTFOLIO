import { techStackIcons } from "../Constants";
import TitleHeader from "./TitleHeader";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackIcons.map(({ name, imagePath }) => (
            <div
              key={name}
              className="card-border tech-card overflow-hidden group xl:rounded-2xl rounded-lg"
            >
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img
                    src={imagePath}
                    alt={`${name} icon`}
                    loading="lazy"
                    className="h-[70%] w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="padding-x w-full">
                  <p className="text-lg whitespace-nowrap">{name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;