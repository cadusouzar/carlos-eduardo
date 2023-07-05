import { NavTop } from "components";
import { timelineData } from "data";
import { ButtonText, TimeLine } from "objects";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <>
      <NavTop variantIcon="react" textLabel="Sobre mim"/>
      <div>
        <TimeLine timeLine={timelineData} />
      </div>
      <div className="flex justify-center space-x-20 mb-7">
        <Link to='/skills'>
          <ButtonText variant="skills" text="Habilidades" />
        </Link>
        <Link to='/projects'>
          <ButtonText variant="project" text="Projetos" />
        </Link>
      </div>
    </>
  );
};