import {
  default as backendSkills,
  default as frontendSkills,
} from "../lang/word.json";

const mySkills = () => {
  const backend: { backendSkills: string } = backendSkills;
  const frontend: { frontendSkills: string } = frontendSkills;
  return (
    <div className="body">
      <div className="skill">My Skills</div>
      <li className="backend-language">
        Backend Skills : {backend.backendSkills}
      </li>
      <li className="frontend-language">
        Frontend Skills : {frontend.frontendSkills}
      </li>
    </div>
  );
};

export default mySkills;
