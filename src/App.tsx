import { Grommet, Grid, Box } from "grommet";
import { AppHeader } from "./components/AppHeader";
import { NewUserPage } from "./components/NewUserPage";
import { velocityTheme } from "./themes/velocity-theme";

function App() {
  return (
    <Grommet theme={velocityTheme} full>
      <Grid
        fill
        areas={[
          { name: "header", start: [0, 0], end: [0, 0] },
          { name: "main", start: [0, 1], end: [0, 1] },
        ]}
        rows={["auto", "flex"]}
        columns={["flex"]}
      >
        <Box gridArea="header">
          <AppHeader />
        </Box>
        <Box gridArea="main">
          <NewUserPage />
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
