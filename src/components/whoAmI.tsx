import profile from "../image/S__8454147.jpg";
import {
  default as myBelieve,
  default as myInterview,
  default as myJob,
  default as mySkills,
  default as myWebsite,
} from "../lang/word.json";

const WhoAmI = () => {
  const job: { myJob: string } = myJob;
  const believe: { myBelieve: string } = myBelieve;
  const site: { myWebsite: string } = myWebsite;
  const skill: { mySkills: string } = mySkills;
  const interview: { myInterview: string } = myInterview;
  return (
    <div className="body">
      <div className="head-content">
        <div>
          Hello
          <h1 className="sub-content">I am Nuntapong Siripanyawong</h1>
          <h2 className="content">
            {job.myJob}
            {believe.myBelieve}
            {site.myWebsite}
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
          <h2 className="content">
            {interview.myInterview}
            {skill.mySkills}
          </h2>
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
