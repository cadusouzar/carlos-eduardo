import { AnimationButton , Row } from "objects"

export const Contacts = () => {
  return(
    <Row marginTop="3xl:mt-14 xl:mt-8">
      <AnimationButton className="lg:w-16 biglg:w-18 xl:w-20 bigxl:w-24 3xl:w-24" variant="github" link="https://github.com/cadusouzar"/>
      <AnimationButton className="lg:w-16 biglg:w-18 xl:w-20 bigxl:w-24 3xl:w-24" variant="linkedin" marginLeft="50px" link="https://www.linkedin.com/in/cadusouzar/"/>
      <AnimationButton className="lg:w-16 biglg:w-18 xl:w-20 bigxl:w-24 3xl:w-24" variant="email" marginLeft="50px" link="mailto:cesrwork01@gmail.com"/>
    </Row>
  )
}