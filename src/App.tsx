import { Grommet } from "grommet";
import { velocityTheme } from "./themes/velocity-theme";
import { UserContextProvider, UserContext } from "./contexts/UserContext";
import { MainGrid } from "./components/MainGrid";

export const App: React.FC = () => {
  return (
    <Grommet theme={velocityTheme} full>
      <UserContextProvider>
        <MainGrid />
      </UserContextProvider>
    </Grommet>
  );
};

export default App;
