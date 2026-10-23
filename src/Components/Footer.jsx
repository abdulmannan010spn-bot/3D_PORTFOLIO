import { socialImgs } from "../Constants";

const Footer = () => {
  const email = "abdulmannan010spn@gmail.com";

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

        <div className="flex flex-col justify-center items-center md:items-end gap-2">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              "Contact from your Portfolio"
            )}`}
            className="text-center md:text-end hover:underline"
          >
            Contact Me : {email}
          </a>

          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abdul Mannan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;