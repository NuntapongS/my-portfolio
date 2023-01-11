import skills from "../lang/word.json";

export interface IMySkills {
  backendSkills: string;
  frontendSkills: string;
  myInterview1: string;
  myInterview2: string;
  myInterview3: string;
  myInterview4: string;
  educationRecord1: string;
  educationRecord2: string;
}

const MySkills = () => {
  const word: IMySkills = skills;
  return (
    <div id="my-skills" className="landing-3">
      <h1 className="title-skills">My Skills</h1>
      <div className="content">
        <p>{word.backendSkills}</p>
        <p>{word.frontendSkills}</p>
      </div>
    </div>
  );
};

export default MySkills;
