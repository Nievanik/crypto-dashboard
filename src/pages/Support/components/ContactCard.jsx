import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow="1">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name..." type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Sur Name</FormLabel>
            <Input placeholder="Enter your surname..." type="text" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter your email..." type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message..." />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="xx">
            I agree with{" "}
            <Box as="span" color="P.purple">
              Terma & Conditions
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
