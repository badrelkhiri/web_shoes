import { copyrightSign } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-center items-start flex-wrap gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <img src={headerLogo} width={150} height={46} alt="Shoesy Logo" />
          <p className="mt-6 text-base leading-7 text-white-400 font-montserrat sm:max-w-sm">
            Get shoes ready for the new terrn at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((sm) => (
              <a
                href={sm.href}
                key={sm.alt}
                className="p-2 rounded-full flex justify-center items-center bg-white"
              >
                <img src={sm.src} alt={sm.alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl font-medium leading-normal font-montserrat ">
                {section.title}
              </h4>
              <ul className="mt-6 flex flex-col gap-2">
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-white-400 font-montserrat text-base leading-normal hover:text-coral-red"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright sign"
            className="rounded-full m-0"
            width={20}
            height={20}
          />
          <p> Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
