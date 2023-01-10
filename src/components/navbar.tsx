import { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
        <div className="logo">PAT</div>
        <ul className="nav-items">
          <li className="nav-link">
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="my-interesting"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              My Intersting
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="my-skills"
              spy={true}
              smooth={true}
              offset={10}
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
