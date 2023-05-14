import React from "react";
import Intro from "../common/Intro";
import PriceCard from "./Price_Card";

export default function Pricing() {
  const socialAccountActions = [
    "Access to Analytics (premium only)",
    "Priority Customer Support (premium only)",
  ];
  const professionalAccountActions = [
    "access to analytics",
    "Instant job Matching",
    "Priority Customer Support",
  ];
  const businessAccountActions = [
    "Access to lead Generation tools",
    "Unlimited Business Promotions",
    "priority customer support",
  ];
  const jointAccountActions = [
    "unlimited access to analytics, job connector, lead generation tool, digital magazine",
    "unlimited business promotion",
    "priority customer support",
  ];

  return (
    <div className="mb-40">
      <Intro
        headerText={"Pricing"}
        descriptionText={
          "we offer a range of pricing options, designed to meet the diverse needs of out clients"
        }
      ></Intro>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-20 px-10 xl:px-16 py-5">
        <PriceCard
          type={"Social"}
          price={8}
          description={
            "It offers a reliable and cost-effective hosting solution with all the essentials you need to get started."
          }
          actions={socialAccountActions}
          url={"#"}
        ></PriceCard>
        <PriceCard
          type={"Professional"}
          price={10}
          description={
            "It offers a reliable and cost-effective hosting solution with all the essentials you need to get started."
          }
          actions={professionalAccountActions}
          url={"#"}
        ></PriceCard>
        <PriceCard
          type={"Business"}
          price={12}
          description={
            "It offers a reliable and cost-effective hosting solution with all the essentials you need to get started."
          }
          actions={businessAccountActions}
          url={"#"}
        ></PriceCard>
        <PriceCard
          type={"Joint"}
          price={18}
          description={
            "It offers a reliable and cost-effective hosting solution with all the essentials you need to get started."
          }
          actions={jointAccountActions}
          url={"#"}
        ></PriceCard>
      </div>
    </div>
  );
}
