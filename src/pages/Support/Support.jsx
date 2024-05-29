import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/Components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="5rem">
        <SupportCard
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to"
          icon={IoMdMail}
        />
        <SupportCard
          leftComponent={
            <InfoCard
              text="Chat with us now"
              tagText="Chatbot"
              imgUrl={"gridBg.svg"}
              inverted={true}
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={AiTwotoneMessage}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
