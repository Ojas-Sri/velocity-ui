import { Box, Text, TextInput } from "grommet";

export const LandingPage: React.FC = () => {
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
        justify="center"
        gap="large"
        margin={{ top: "small" }}
      >
        <Box gap="medium">
          <Text size="3xl" weight="bold" textAlign="center">
            Welcome to Velocity!
          </Text>
          <Text size="3xl" weight="bold" textAlign="center">
            Please enter your name
          </Text>
        </Box>
        <TextInput size="2xl" style={{ background: "white" }}></TextInput>
      </Box>
    </Box>
  );
};
