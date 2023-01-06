import profile2 from "../image/15747616_1432756206764503_7783558084339154744_n.jpg";
import profile1 from "../image/S__8454147.jpg";
import skills from "../lang/word.json";
import { IMySkills } from "./mySkills";

const WhoAmI = () => {
  const word: IMySkills = skills;
  return (
    <div id="who-am-i" className="body">
      <div className="head-content">
        <div>
          Hello World !
          <h1 className="sub-content">I am Nuntapong Siripanyawong</h1>
          <h2 className="content">
            <h2 className="interest">
              <i className="fa-solid fa-user fa-fw fa-beat"></i>About Me
            </h2>
            <h2 className="content">{word.myInterview1}</h2>
            <h2 className="content">{word.myInterview2}</h2>
          </h2>
        </div>
        <div>
          {" "}
          <img src={profile1} className="img1" alt="profile1" />
        </div>
      </div>
      <div id="about-me" className="head-content flex-reverse">
        <div>
          <div id="my-interesting">
            <h2 className="interest">
              <i className="fa-regular fa-lightbulb fa-fw fa-beat"></i>My
              Interesting
            </h2>
            <li className="content">Full-stack Development</li>
            <li className="content">UX/UI</li>
            <li className="content">Communication Skill</li>
            <li className="content">Scrum & Agile</li>
            <li className="content">Mobile Development</li>
            <li className="content">Automate Test</li>
          </div>
        </div>
        <div>
          {" "}
          <img src={profile2} className="img2" alt="profile2" />
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
