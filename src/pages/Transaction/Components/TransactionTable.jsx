import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tabelData = [
    {
      id: "HD82NA2H",
      date: "2024-02-27",
      time: "9:40PM",
      type: {
        name: "USD Deposite",
        tag: "E-transer",
      },
      amount: "+$21",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2024-02-27",
      time: "9:40PM",
      type: {
        name: "USD Withdraw",
        tag: "Wire Transfer",
      },
      amount: "-$55",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2024-02-27",
      time: "9:40PM",
      type: {
        name: "Buy",
      },
      amount: "+12.48 BTC",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2024-02-27",
      time: "9:40PM",
      type: {
        name: "Sell",
      },
      amount: "-0.364016 BTC",
      status: "Completed",
    },
  ];
  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Cancelled: "#DC2626",
    Completed: "#059669",
  };
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tabelData.map((data) => (
            <tr key={data.id}>
              <td fontSize="sm" fontWeight="medium">
                {data.id}
              </td>
              <td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </td>
              <td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </td>
              <td fontSize="sm" fontWeight="medium">
                {data.amount}
              </td>
              <td fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
