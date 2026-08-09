import { logoIconsList } from "../Constants";

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-egde" />
      <div className="gradient-egde" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
            
          {logoIconsList.map((icon) => (
            <div className="flex-none flex-center marquee-item">
              <img src={icon.imgPath} alt={icon.name} />
            </div>
          ))}

          {logoIconsList.map((icon) => (
            <div className="flex-none flex-center marquee-item">
              <img src={icon.imgPath} alt={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LogoSection;
