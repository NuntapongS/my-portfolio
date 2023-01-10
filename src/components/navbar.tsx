import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="nav-items">
          <li className="nav-link">
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              offset={30}
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
              offset={30}
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
              offset={30}
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
