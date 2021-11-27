import { useContext, useState } from "react";
import { Box, Text, TextInput } from "grommet";
import { FormNextLink } from "grommet-icons";

import { UserContext } from "../contexts/UserContext";

export const NewUserPage: React.FC = () => {
  return (
    <Box
      fill
      background="black"
      align="center"
      gap="medium"
      pad={{ vertical: "large", horizontal: "medium" }}
    >
      <MainBox />
    </Box>
  );
};

const MainBox: React.FC = () => {
  const userContext = useContext(UserContext);
  const [textInput, setTextInput] = useState<string>();
  const registerUser = (textInput: string) => {
    localStorage.setItem("velocity-user-name", textInput);
    userContext?.setUser({ name: textInput });
  };
  return (
    <Box
      pad={{ top: "medium" }}
      height="medium"
      width="large"
      justify="center"
      gap="large"
      margin={{ top: "small" }}
    >
      <Box gap="medium">
        <Text size="4xl" weight="bold" textAlign="center">
          Welcome to Velocity!
        </Text>
        {/* <Text size="3xl" weight="bold" textAlign="center">
        Please enter your name
      </Text> */}
      </Box>
      <TextInput
        reverse
        icon={<FormNextLink color="black" />}
        placeholder=" Please enter your name"
        style={{ background: "white", color: "black" }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (textInput) {
              registerUser(textInput);
            } else {
              window.alert("Name can't be empty");
            }
          }
        }}
        onChange={(e) => setTextInput(e.target.value)}
        // style={{ background: "white", color: "darkgoldenrod" }}
      ></TextInput>
    </Box>
  );
};
