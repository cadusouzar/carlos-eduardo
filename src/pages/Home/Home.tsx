import { Buttons, Contacts, Texts } from "components"
import { Animation } from "objects"

export const Home = () => {
  return(
    <>
      <Texts/>
      <div className="flex items-center">
          <Animation variant="hi" transform="scaleX(-1)" cursor="default" className="lg:w-animation-1024 lg:h-animation-1024 xl:w-animation-1366 xl:h-animation-1366 bigxl:w-animation-1600 bigxl:h-animation-1600 3xl:w-animation-1080 3xl:h-animation-1080 3xl:mt-6" />
        <div className="relative h-full flex flex-col items-center lg:top-4 lg:right-6 biglg:top-9 bigxl:top-9 3xl:top-10 ">
          <Buttons/>
          <Contacts/>
        </div>
      </div>
    </>
  )
}