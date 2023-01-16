import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import mainLogo from "../image/Pat-Water-Logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <div className="navbar">
        <div>
          <img src={mainLogo} alt="PAT" width={50} />
        </div>
        <ul className="nav-items">
          <li className="nav-link">
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="education-interesting"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Education Record & Interesting
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="my-skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              My Skills
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
