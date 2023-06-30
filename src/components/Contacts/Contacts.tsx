import { Animation, Row } from "objects"

export const Contacts = () => {
  return(
    <Row>
      <Animation variant="github" width="100px" height="100px"/>
      <Animation variant="linkedin" width="100px" height="100px" marginLeft="50px"/>
      <Animation variant="email" width="100px" height="100px"  marginLeft="50px"/>
    </Row>
  )
}