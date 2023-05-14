import React, { useState } from "react";
import Intro from "../common/Intro";
import Question from "./Question";
import { accordionData } from "./question_and_answer";

export default function FAQ() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="mb-40">
      <Intro
        headerText={"Frequently asked Questions"}
        descriptionText={
          "Explore some of the most common questions we received from users. "
        }
      ></Intro>

      {accordionData.map((data, index) => {
        return (
          <Question
            key={index}
            open={index === open}
            title={data.title}
            desc={data.desc}
            toggle={() => toggle(index)}
          ></Question>
        );
      })}
    </div>
  );
}
