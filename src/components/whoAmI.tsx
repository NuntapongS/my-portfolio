import profile2 from "../image/15747616_1432756206764503_7783558084339154744_n.jpg";
import profile1 from "../image/S__8454147.jpg";
import skills from "../lang/word.json";
import "../styles/portfolio.css";
import MySkills, { IMySkills } from "./mySkills";

const WhoAmI = () => {
  const word: IMySkills = skills;
  return (
    <div className="portfolio-body">
      <div className="landing-1" id="about-me">
        <div className="text-content">
          <h1 className="title-greeting">👋 Hello, World!</h1>
          <h1 className="title-name">I'm Nuntapong Siripanyawong</h1>
          <h2 className="title-about-me">
            <i className="fa-sharp fa-solid fa-ghost fa-fw fa-beat"></i>About Me
            <i className="fa-sharp fa-solid fa-ghost fa-fw fa-beat"></i>
          </h2>
          <p className="about-content">
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
      <div className="landing-2 row-reverse" id="my-interesting">
        <div id="my-interesting" className="text-content">
          <h1>My Interesting</h1>
          <div className="interest-content">
            <li>- Full-stack Development</li>
            <li>- UX/UI</li>
            <li>- Communication Skill</li>
            <li>- Scrum & Agile</li>
            <li>- Mobile Development</li>
            <li>- Automate Test</li>
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
