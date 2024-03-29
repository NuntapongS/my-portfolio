import profile2 from "../image/15747616_1432756206764503_7783558084339154744_n.jpg";
import profile1 from "../image/S__8454147.jpg";
import skills from "../lang/word.json";
import "../styles/portfolio.css";
import MySkills, { IMySkills } from "./mySkills";

const WhoAmI = () => {
  const word: IMySkills = skills;
  return (
    <div className="portfolio-body">
      <div id="about-me" className="landing-1">
        <div className="text-content">
          <h1 className="title-greeting">👋 Hello, World!</h1>
          <h1 className="title-name">
            I'm Nuntapong Siripanyawong
            <span className="blink">|</span>
          </h1>
          <h2 className="title-content">
            <i className="fa-sharp fa-solid fa-ghost fa-fw fa-beat fa-2xs"></i>
            About Me
            <i className="fa-sharp fa-solid fa-ghost fa-fw fa-beat fa-2xs"></i>
          </h2>
          <p className="content">
            {word.myInterview1}
            <br />
            {word.myInterview2}
            <br />
            {word.myInterview3}
            <br />
            {word.myInterview4}
          </p>
        </div>
        <div className="image-content">
          <img src={profile1} className="circle-image" alt="profile1" />
        </div>
      </div>
      <div className="landing-2 row-reverse" id="education-interesting">
        <div className="text-content">
          <h2 className="title-content">
            <i className="fa-solid fa-file fa-fw fa-beat fa-2xs"></i>Education
            Record
            <i className="fa-solid fa-file fa-fw fa-beat fa-2xs"></i>
          </h2>
          <p className="content">
            {word.educationRecord1}
            <br />
            {word.educationRecord2}
            <br />
          </p>
          <h2 className="title-content">
            <i className="fa-sharp fa-solid fa-lightbulb fa-fw fa-beat fa-2xs"></i>
            My Interesting
            <i className="fa-sharp fa-solid fa-lightbulb fa-fw fa-beat fa-2xs"></i>
          </h2>
          <div className="content">
            <li> Full-stack Development</li>
            <li> UX/UI</li>
            <li> Communication Skill</li>
            <li> Scrum & Agile</li>
            <li> Mobile Development</li>
            <li> Automate Test</li>
          </div>
        </div>
        <div className="image-content">
          <img src={profile2} className="circle-image" alt="profile2" />
        </div>
      </div>
      <MySkills />
    </div>
  );
};

export default WhoAmI;
