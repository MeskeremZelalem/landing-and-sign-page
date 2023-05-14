import React from "react";
import FeatureCard from "./FeatureCard";
import smartDesigner from "../../assets/images/smart_designer.png";
import jobConnector from "../../assets/images/job_connector.png";
import businessAccount from "../../assets/images/business_account.png";
import digitalMagazine from "../../assets/images/digital_magazine.png";
import Intro from "../common/Intro";
export default function Features() {
  return (
    <div className="mb-40">
      <Intro
        headerText={"Features"}
        descriptionText={
          "ready to take your career or business to the next level with our amazing features"
        }
      ></Intro>

      <div className="items-center lg:flex  rounded-3xl px-6 py-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-40 sm:gap-x-10 xl:gap-x-60 gap-y-10 sm:gap-y-28 mx-auto items-center">
          <FeatureCard
            imageUrl={smartDesigner}
            headerText="Smart Designer"
            descriptionText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
            }
          ></FeatureCard>
          <FeatureCard
            imageUrl={jobConnector}
            headerText="Job Connector"
            descriptionText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
            }
          ></FeatureCard>
          <FeatureCard
            imageUrl={businessAccount}
            headerText="Business Account"
            descriptionText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
            }
          ></FeatureCard>
          <FeatureCard
            imageUrl={digitalMagazine}
            headerText="Digital Magazine"
            descriptionText={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
            }
          ></FeatureCard>
        </div>
      </div>
    </div>
  );
}
