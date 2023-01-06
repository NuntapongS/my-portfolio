import skills from "../lang/word.json";

export interface IMySkills {
  backendSkills: string;
  frontendSkills: string;
  myInterview1: string;
  myInterview2: string;
  myInterview3: string;
  myInterview4: string;
}

const MySkills = () => {
  const word: IMySkills = skills;
  return (
    <div className="landing-3">
      <h1 className="title-landing">My Skills</h1>
      <div className="text-content">
        <p>{word.backendSkills}</p>
        <p>{word.frontendSkills}</p>
      </div>
    </div>
  );
};

export default MySkills;
