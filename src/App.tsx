import "./App.css";
import profile from "./image/S__8454147.jpg";

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
      <div className="body">
        <div className="head-content">
          Hello<div className="content">sawaddee</div>
        </div>
        <img src={profile} className="img" alt="" />
      </div>
      <div className="footer">Hello</div>
    </>
  );
}

export default App;
