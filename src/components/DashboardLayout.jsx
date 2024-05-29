import React, { Children } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <SideNav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="70rem"
          mx="auto"
          px="4"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
