import { Buttons, Contacts, Texts } from "components"
import { Animation } from "objects"
import { useState, useEffect } from "react";

export const Home = () => {
  const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setTamanhoTela(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Texts />
      <div className="mt-5 md:flex md:items-center md:-mt-11 md:-ml-16">
        <Animation variant="hi" transform="scaleX(-1)" cursor="default" className="relative w-animaton-cellphone h-animaton-cellphone md:w-animation-768 md:h-animation-768 lg:w-animation-1024 lg:h-animation-1024 xl:w-animation-1366 xl:h-animation-1366 bigxl:w-animation-1600 bigxl:h-animation-1600 3xl:w-animation-1080 3xl:h-animation-1080 3xl:mt-16" />
        <div className="flex justify-center md:relative md:h-full md:flex md:flex-col md:items-center md:right-16 md:top-5 lg:top-4 lg:right-6 biglg:top-9 bigxl:top-9 3xl:top-10 ">
          <Buttons />
          {
          tamanhoTela > 768? 
          <Contacts/> 
          : ""}
        </div>
      </div>
      {
      tamanhoTela <= 768? 
      <div className=" flex justify-center md:mt-10">
        <Contacts/>
      </div>  
      : ""}

    </>
  );
}
