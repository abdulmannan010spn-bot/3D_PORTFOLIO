import { socialImgs } from "../Constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials">
          {socialImgs.map(({ name, url, icon: Icon }) => (
            <div key={name} className="icon">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex items-center justify-center w-full h-full"
              >
                <Icon size={24} color="white" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abdul Mannan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;