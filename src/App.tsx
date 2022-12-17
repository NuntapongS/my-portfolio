import "./App.css";
import MySkills from "./components/mySkills";
import WhoAmI from "./components/whoAmI";
function App() {
  return (
    <>
      <div className="header">My Identity</div>
      <div className="topnav">
        <b>
          <a href="Intro">Intro</a>
        </b>
        <b>
          <a href="Hello World">Hello World</a>
        </b>
        <b>
          <a href="My Adventure">My Adventure</a>
        </b>
      </div>
      <WhoAmI />
      <MySkills />
      <div className="footer">Hello</div>
    </>
  );
}

export default App;
