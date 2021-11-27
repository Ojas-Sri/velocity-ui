import { Box, Text, TextInput } from "grommet";
import { FormNextLink } from "grommet-icons";

export const NewUserPage: React.FC = () => {
  return (
    <Box
      fill
      background="black"
      align="center"
      gap="medium"
      pad={{ vertical: "large", horizontal: "medium" }}
    >
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
          // style={{ background: "white", color: "darkgoldenrod" }}
        ></TextInput>
      </Box>
    </Box>
  );
};
