import "./App.css";
import MySkills from "./components/mySkills";
import WhoAmI from "./components/whoAmI";
function App() {
  return (
    <>
      <div className="header">My Portfolio</div>
      <div className="topnav">
        <b>
          <a href="Intro">Intro</a>
        </b>
        <b>
          <a href="Hello World">About Me</a>
        </b>
        <b>
          <a href="My Adventure">My Interesting</a>
        </b>
        <b>
          <a href="My Skills">My Skills</a>
        </b>
      </div>
      <WhoAmI />
      <MySkills />
      <div className="footer">
        <div className="social">
          <a href="https://web.facebook.com/bloodzlu5t/">Facebook</a>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/nuntapong.sr/">Instagram</a>
        </div>
        <div className="social">
          <a href="https://github.com/NuntapongS">GitHub</a>
        </div>
      </div>
    </>
  );
}

export default App;
