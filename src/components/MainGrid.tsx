import { useState, useEffect, useContext } from "react";
import { Grid, Box } from "grommet";
import { UserContext } from "./../contexts/UserContext";
import { AppHeader } from "./AppHeader";
import { NewUserPage } from "./NewUserPage";

export const MainGrid: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  useEffect(() => {
    const userNameCookie = localStorage.getItem("velocity-user-name");
    if (userNameCookie) {
      userContext?.setUser({ name: userNameCookie });
      setInitialLoad(true);
    } else {
      setInitialLoad(true);
    }
  }, []);
  return (
    <>
      {initialLoad ? (
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
      ) : (
        <></>
      )}
    </>
  );
};
