import { useContext } from "react";
import { Avatar, Box, Text } from "grommet";
import { UserContext } from "../contexts/UserContext";

const avatarName = (inp: string) => {
  let words = inp.split(" ");
  let str = words[0][0].toUpperCase();
  if (words[1]) {
    str = str + words[1][0].toUpperCase();
  }
  return str;
};

export const AppHeader: React.FC = () => {
  const userContext = useContext(UserContext);
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
      {userContext?.user && (
        <Avatar background="white">
          <Text>{avatarName(userContext.user.name)}</Text>
        </Avatar>
      )}
    </Box>
  );
};
