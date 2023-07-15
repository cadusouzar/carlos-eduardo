import {ResetStyles} from "components";
import { Rotas } from "routes";
import { Tema } from "theme";
import { Analytics } from '@vercel/analytics/react'
export const App = () =>  {
  return (
    <>
    <Tema>
      <ResetStyles/>
      <Rotas/>
    </Tema>
    <Analytics debug={true}/>
    </>
  );
}
