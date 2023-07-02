import { Animation, Row } from "objects"

export const Contacts = () => {
  return(
    <Row>
      <Animation variant="github" width="100px" height="100px" link="https://github.com/cadusouzar"/>
      <Animation variant="linkedin" width="100px" height="100px" marginLeft="50px" link="https://www.linkedin.com/in/cadusouzar/"/>
      <Animation variant="email" width="100px" height="100px"  marginLeft="50px" link="mailto:cesrwork01@gmail.com"/>
    </Row>
  )
}