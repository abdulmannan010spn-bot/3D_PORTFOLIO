import { logoIconsList } from "../Constants";

const LogoSection = () => {
  // Repeat the icon list N times to create a seamless marquee loop
  const repeatCount = 6;

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-egde" />
      <div className="gradient-egde" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {Array.from({ length: repeatCount }).map((_, repeatIndex) =>
            logoIconsList.map((icon, iconIndex) => (
              <div
                key={`${repeatIndex}-${icon.name}-${iconIndex}`}
                className="flex-none flex-center marquee-item h-10 w-10"
              >
                <img src={icon.imgPath} alt={icon.name} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;