import "./App.css";
import MySkills from "./components/mySkills";
import WhoAmI from "./components/whoAmI";
function App() {
  return (
    <>
      <div className="header">My Portfolio</div>
      <div className="topnav">
        <b>
          <a href="#who-am-i">Intro</a>
        </b>
        <b>
          <a href="#about-me">About Me</a>
        </b>
        <b>
          <a href="#my-interesting">My Interesting</a>
        </b>
        <b>
          <a href="#my-skills">My Skills</a>
        </b>
      </div>
      <WhoAmI />
      <MySkills />
      <div className="footer">
        <div className="social">
          <a
            href="https://www.facebook.com/bloodzlu5t/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-facebook fa-2xl"></i>
            <span></span>
          </a>
          <a
            href="https://github.com/NuntapongS"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-2xl"></i> <span></span>
          </a>
          <a
            href="https://www.instagram.com/nuntapong.sr/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram fa-2xl"></i> <span></span>
          </a>
          <a
            href="mailto:nuntapong.sr@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-regular fa-envelope fa-2xl"></i> <span></span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
