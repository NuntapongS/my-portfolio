import skills from "../lang/word.json";

export interface IMySkills {
  backendSkills: string;
  frontendSkills: string;
  myInterview1: string;
  myInterview2: string;
  myInterview3: string;
  myInterview4: string;
}

const mySkills = () => {
  const word: IMySkills = skills;
  return (
    <div className="body">
      <div className="skill">My Skills</div>
      <div id="my-skills">
        <li className="backend-language">
          Backend Skills : {word.backendSkills}
        </li>
        <li className="frontend-language">
          Frontend Skills : {word.frontendSkills}
        </li>
      </div>
    </div>
  );
};

export default mySkills;
