import { default as backendSkills } from "../lang/word.json";

const mySkills = () => {
  const backend: { backendSkills: string } = backendSkills;
  return (
    <div className="body">
      <div className="skill">My Skills</div>
      <li className="head-language">
        Backend Skills : {backend.backendSkills}
      </li>
      <li className="head-language">Frontend Kills : </li>
    </div>
  );
};

export default mySkills;
