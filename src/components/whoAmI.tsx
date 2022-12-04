import profile from "../image/S__8454147.jpg";

const WhoAmI = () => {
  return (
    <div className="body">
      <div className="head-content">
        Hello
        <div className="content">Pat</div>
      </div>
      <img src={profile} className="img" alt="profile" />
    </div>
  );
};

export default WhoAmI;
