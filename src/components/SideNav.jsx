import { Box, Stack, HStack, Icon, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const SideNav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return link === location.pathname;
  };
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      justifyContent="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      width={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      bg="#fff"
    >
      <Box>
        <Heading as="h1" fontSize="20px" pt="3.5rem" textAlign="Center">
          @DoSomeCoding
        </Heading>

        <Box mx="3" mt="6">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                py="3"
                px="4"
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                _hover={{
                  bg: "#F3F3F7",
                  cursor: "pointer",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mx="3" mt="6" mb="6">
        <Link to="/support">
          <HStack
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            borderRadius="10px"
            _hover={{
              bg: "#F3F3F7",
              cursor: "pointer",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
