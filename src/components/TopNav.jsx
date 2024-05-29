import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import React from "react";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="#fff">
      <HStack
        h="16"
        justify="space-between"
        maxW="70rem"
        fontWeight="medium"
        mx="auto"
      >
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
          cursor="pointer"
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon fontSize="24px" as={FaCircleUser} />
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Setting</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
