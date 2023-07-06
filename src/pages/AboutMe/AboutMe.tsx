import { NavTop } from "components";
import { timelineData } from "data";
import { ButtonText, LinkTo, TimeLine } from "objects";

export const AboutMe = () => {
  return (
    <>
      <NavTop variantIcon="react" textLabel="Sobre mim"/>
      <div>
        <TimeLine timeLine={timelineData} />
      </div>
      <div className="flex justify-center mb-4 mt-10 space-x-8 lg:space-x-20 lg:mb-8">
        <LinkTo to='/skills'>
          <ButtonText variant="skills" text="Habilidades" />
        </LinkTo>
        <LinkTo to='/projects'>
          <ButtonText variant="project" text="Projetos" />
        </LinkTo>
      </div>
    </>
  );
};