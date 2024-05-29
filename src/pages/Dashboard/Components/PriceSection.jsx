import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timeStamps = ["7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM", "8:00 PM"];
  return (
    <CustomCard h="full">
      <Flex justify="space-between" align="start">
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
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>{" "}
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1Hr", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="graph.svg" w="100%" mt="3rem" />

            <HStack justify="space-between">
              {timeStamps.map((timeStamp) => (
                <Text key={timeStamp} fontSize="sm" color="black.80">
                  {timeStamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>1 day</p>
          </TabPanel>
          <TabPanel>
            <p>1 Week</p>
          </TabPanel>
          <TabPanel>
            <p>1 Month</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
