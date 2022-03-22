import { Flex } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}