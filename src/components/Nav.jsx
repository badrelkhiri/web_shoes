import { headerLogo } from "../assets/images";
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="text-slate-gray leading-normal font-montserrat text-lg" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden cursor-pointer">
          <img src= {hamburger} alt="Hamburger" width={24}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
