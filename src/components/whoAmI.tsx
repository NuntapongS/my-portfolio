import profile from "../image/S__8454147.jpg";
import eiei from "../lang/word.json";

const WhoAmI = () => {
  const word: { eiei: string } = eiei;
  return (
    <div className="body">
      <div className="head-content">
        Hello
        <h1 className="sub-content">I am Nuntapong Siripanyawong</h1>
        <h2 className="content">{word.eiei}</h2>
      </div>

      <img src={profile} className="img" alt="profile" />
    </div>
  );
};

export default WhoAmI;
