import {ResetStyles} from "components";
import { Rotas } from "routes";
import { Tema } from "theme";

export const App = () =>  {
  return (
    <Tema>
      <ResetStyles/>
      <Rotas/>
    </Tema>
  );
}
