import { timelineData } from "data";
import { ButtonText, TimeLine } from "objects";

export const AboutMe = () => {
  return (
    <>
      <div>
        <TimeLine timeLine={timelineData} />
      </div>
      <div className="flex justify-center space-x-20 -mt-10">
        <ButtonText variant="skills" text="habilidades" />
        <ButtonText variant="project" text="projetos" />
      </div>
    </>
  );
};