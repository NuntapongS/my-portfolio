import profile2 from "../image/15747616_1432756206764503_7783558084339154744_n.jpg";
import profile1 from "../image/S__8454147.jpg";
import {
  default as myBelieve,
  default as myInterview,
  default as myJob,
  default as myWebsite,
} from "../lang/word.json";

const WhoAmI = () => {
  const job: { myJob: string } = myJob;
  const believe: { myBelieve: string } = myBelieve;
  const site: { myWebsite: string } = myWebsite;
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
          <img src={profile1} className="img1" alt="profile1" />
        </div>
      </div>
      <div className="head-content flex-reverse">
        <div>
          About Me
          <h2 className="content">{interview.myInterview}</h2>
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
