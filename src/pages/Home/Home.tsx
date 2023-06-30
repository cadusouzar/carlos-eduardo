import { Buttons, Contacts, Texts } from "components"
import { Animation} from "objects"

export const Home = () => {
  return(
    <>
      <Texts/>
      <div className="flex items-center">
        <Animation variant="hi" width="1250px" height="800px" transform="scaleX(-1)" position="relative" top="25px"/>
        <div className="relative top-10 h-full flex flex-col items-center">
          <Buttons/>
          <Contacts/>
        </div>
      </div>

    </>
  )
}