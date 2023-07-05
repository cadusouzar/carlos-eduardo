import { Buttons, Contacts, Texts } from "components"
import { Animation} from "objects"

export const Home = () => {
  return(
    <>
      <Texts/>
      <div className="flex items-center">
          <Animation variant="hi" transform="scaleX(-1)" position="relative" cursor="default" className="2xl:w-animation-1080 2xl:h-animation-1080 2xl:top-6 lg:w-animation-1366 lg:h-animation-1366" />
        <div className="relative 2xl:top-10 h-full flex flex-col items-center">
          <Buttons/>
          <Contacts/>
        </div>
      </div>
    </>
  )
}