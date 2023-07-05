import { Animation, Row } from "objects"

export const Contacts = () => {
  return(
    <Row marginTop="2xl:mt-14 xl:mt-8">
      <Animation className="lg:w-20 2xl:w-24" variant="github" link="https://github.com/cadusouzar"/>
      <Animation className="lg:w-20 2xl:w-24" variant="linkedin" marginLeft="50px" link="https://www.linkedin.com/in/cadusouzar/"/>
      <Animation className="lg:w-20 2xl:w-24" variant="email" marginLeft="50px" link="mailto:cesrwork01@gmail.com"/>
    </Row>
  )
}