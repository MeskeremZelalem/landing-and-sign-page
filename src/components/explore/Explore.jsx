import React from "react";
import Intro from "../common/Intro";
import Account from "./Account";
import socialAccount from "../../assets/images/social_account.png";
import professionalAccount from "../../assets/images/professional_account.png";
import businessAccountImage from "../../assets/images/business_account_image.png";

export default function Explore() {
  return (
    <div>
      <Intro
        headerText={"Explore"}
        descriptionText={
          "we offer a range of account options, choose the account that is right for you and start achieving your career dream"
        }
      ></Intro>
      <Account
        swap={false}
        image={socialAccount}
        title={"Social Account"}
        description={
          "Connect with friends, join interest groups, and discover opportunities in a casual and fun environment. "
        }
        url={"#"}
      ></Account>
      <Account
        swap={true}
        image={professionalAccount}
        title={"Professional account"}
        description={
          "Showcase your skills, network with peers, and advance your career with tools and resources tailored for professionals"
        }
        url={"#"}
      ></Account>
      <Account
        swap={false}
        image={businessAccountImage}
        title={"business Account"}
        description={
          "Build your brand, access powerful business tools, and connect with potential customers and partners to grow your business. "
        }
        url={"#"}
      ></Account>
    </div>
  );
}
