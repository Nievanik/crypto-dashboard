import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./Components/PortfolioSection";
import PriceSection from "./Components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./Components/Transaction";
import InfoCard from "./Components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1r)",
          md: "repeat(2,1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            xl: 1,
          }}
        >
          <PriceSection />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            xl: 1,
          }}
        >
          <Transaction />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            xl: 1,
          }}
        >
          <InfoCard
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it"
            tagText="Loan"
            imgUrl={"dotBg.svg"}
            inverted={false}
          />
        </GridItem>
        <GridItem
          colSpan={{
            base: 2,
            xl: 1,
          }}
        >
          <InfoCard
            text="Learn more about our real estate, mortgage, and  corporate account services"
            tagText="Contact"
            imgUrl={"gridBg.svg"}
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
