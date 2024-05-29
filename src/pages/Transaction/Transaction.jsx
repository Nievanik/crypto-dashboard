import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./Components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const Transaction = () => {
  const tabs = [
    {
      tabname: "All",
      count: 349,
    },
    {
      tabname: "Deposite",
      count: 114,
    },
    {
      tabname: "Withdraw",
      count: 55,
    },
    {
      tabname: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt={4} display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.tabname} display="flex" gap="2" pb="4">
                  {tab.tabname}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
