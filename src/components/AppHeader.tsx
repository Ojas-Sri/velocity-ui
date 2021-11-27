import React from "react";
import { Avatar, Box, Text } from "grommet";

export const AppHeader: React.FC = () => {
  return (
    <Box
      align="center"
      justify="between"
      background={{ color: "black" }}
      pad={{ vertical: "small", horizontal: "medium" }}
      direction="row"
    >
      <Text weight={500} size="large">
        V E L O C I T Y
      </Text>
      <Avatar background="white">
        <Text>OS</Text>
      </Avatar>
    </Box>
  );
};
