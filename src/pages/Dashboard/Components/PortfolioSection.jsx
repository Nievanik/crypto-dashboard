import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            $ 112,32.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack color="black.80">
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack color="black.80">
              <Text textStyle="h2" fontWeight="medium">
                $ 1,300.0
              </Text>
              <Tag colorScheme="gray">USD</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={FaArrowDown} />}>Deposite</Button>
        <Button leftIcon={<Icon as={FaArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
