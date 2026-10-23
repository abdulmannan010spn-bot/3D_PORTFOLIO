import { socialImgs } from "../Constants";

const Footer = () => {
  const email = "abdulmannan010spn@gmail.com";

  return (
    <footer className="footer">
     
      <div className="footer-container flex flex-wrap justify-between items-center gap-6 p-4">
        
        <div className="flex flex-col justify-center w-full md:w-auto text-center md:text-left">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex justify-center w-full md:w-auto gap-4">
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

       
        <div className="flex flex-col justify-center items-center lg:items-end gap-2 w-full lg:w-auto">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              "Contact from your Portfolio"
            )}`}
        
            className="text-center lg:text-end hover:underline break-all px-2"
          >
            Contact Me : {email}
          </a>

          <p className="text-center lg:text-end text-sm">
            © {new Date().getFullYear()} Abdul Mannan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;