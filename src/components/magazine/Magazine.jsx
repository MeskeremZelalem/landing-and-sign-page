import React from "react";
import Intro from "../common/Intro";
import ubuntu_magazine from "../../assets/images/ubuntu_magazine.png";
import ubuntu_magazine_right from '../../assets/images/ubuntu_magazine_right.png'
import MagazineCard from "./MagazineCard";
export default function Magazine() {
  return (
    <div className="mb-40">
      <Intro
        headerText={"The Hotplatform Magazine"}
        descriptionText={
          "Explore our selection of digital magazines that cover a range of topics, from business to lifestyle."
        }
      ></Intro>
      <MagazineCard
        swap={true}
        image={ubuntu_magazine}
        title={"The Hot Platform: Ubuntu edition"}
        description={
          "Discover the latest trends and insights on the future of social media in our special edition magazine. Explore expert opinions, case studies, and success stories on how businesses can leverage social media to grow and expand their reach."
        }
        url={"#"}
      ></MagazineCard>
      <MagazineCard
        swap={false}
        image={ubuntu_magazine_right}
        title={"The Hot Platform: First edition"}
        description={
          "Our inaugural issue features exclusive interviews with industry experts, in-depth guides on maximizing your social media presence, and insider tips on using the Hot Platform to take your brand to the next level."
        }
        url={"#"}
      ></MagazineCard>
    </div>
  );
}
