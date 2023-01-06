import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="nav-items">
          <li className="nav-link">
            <a href="#about-me">About Me</a>
          </li>
          <li className="nav-link">
            <a href="#my-interesting">My Intersting</a>
          </li>
          <li className="nav-link">
            <a href="#my-skills">My Skills</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
