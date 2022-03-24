import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mx="4" textAlign="right">
        <Text>Robert Garcia</Text>
        <Text color="gray.300" fontSize="small">
          robert.garcia@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Robert Garcia" src="http://github.com/Rob30Garcia.png"/>
    </Flex>
);
}