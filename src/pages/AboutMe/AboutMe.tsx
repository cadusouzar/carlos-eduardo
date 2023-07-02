import { NavTop } from "components";
import { timelineData } from "data";
import { ButtonText, TimeLine } from "objects";

export const AboutMe = () => {
  return (
    <>
      <NavTop variantIcon="react" textLabel="Sobre mim"/>
      <div>
        <TimeLine timeLine={timelineData} />
      </div>
      <div className="flex justify-center space-x-20 mb-7">
        <ButtonText variant="skills" text="Habilidades" />
        <ButtonText variant="project" text="Projetos" />
      </div>
    </>
  );
};