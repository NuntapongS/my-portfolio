import profile from "../image/S__8454147.jpg";

const WhoAmI = () => {
  return (
    <div className="body">
      <div className="head-content">
        Hello
        <h1 className="sub-content">I am Nuntapong Siripanyawong</h1>
      </div>

      <img src={profile} className="img" alt="profile" />
    </div>
  );
};

export default WhoAmI;
