import profile from "../image/S__8454147.jpg";
import {
  default as myBelieve,
  default as myJob,
  default as mySkills,
} from "../lang/word.json";

const WhoAmI = () => {
  const job: { myJob: string } = myJob;
  const believe: { myBelieve: string } = myBelieve;
  const skill: { mySkills: string } = mySkills;
  return (
    <div className="body">
      <div className="head-content">
        <div>
          Hello
          <h1 className="sub-content">I am Nuntapong Siripanyawong</h1>
          <h2 className="content">
            {job.myJob}
            {believe.myBelieve}
            {skill.mySkills}
          </h2>
        </div>
        <div>
          {" "}
          <img src={profile} className="img" alt="profile" />
        </div>
      </div>
      <div className="head-content flex-reverse">
        <div>
          About Me
          <h1 className="sub-content">I am Nuntapong Siripanyawong</h1>
          <h2 className="content">eiei</h2>
        </div>
        <div>
          {" "}
          <img src={profile} className="img" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
