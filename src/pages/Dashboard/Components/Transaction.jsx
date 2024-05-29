import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";

const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: FaDollarSign,
      text: "INR Deposite",
      amount: "+ $1200",
      timeStamp: "2022-05-12 7:05PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC sell",
      amount: "- $100",
      timeStamp: "2022-05-12 7:05PM",
    },
    {
      id: "3",
      icon: FaDollarSign,
      text: "INR Deposite",
      amount: "+ $1200",
      timeStamp: "2022-05-12 7:05PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb={6} fontSize="sm" color="black.80">
        Recent Transaction
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap={4}>
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justifyContent="space-between" width="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.80">
                    {transaction.timeStamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button width="full" colorScheme="gray" mt="6">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transaction;
