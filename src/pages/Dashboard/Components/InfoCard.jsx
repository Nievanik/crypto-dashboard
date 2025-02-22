import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ text, tagText, imgUrl, inverted }) => {
  return (
    <CustomCard
      h="full"
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        textStyle="h5"
        fontWeight="medium"
        mt="4"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
