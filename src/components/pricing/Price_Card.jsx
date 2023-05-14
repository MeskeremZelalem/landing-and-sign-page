import React from "react";
import ListItem from "./List_Item";

export default function PriceCard({ type, price, description, actions, url }) {
  return (
    <div className="w-full flex flex-col justify-between items-start max-w-sm p-5 bg-white rounded-lg drop-shadow-[0_4px_10px_rgba(0,0,0,0.08)] sm:p-7 font-Montserrat mx-3  min-h-fit">
      <div className="mb-40">
        <h5 className="mb-4 text-xl font-semibold text-start ">{type}</h5>
        <div className="flex items-baseline text-gray-900 ">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-3xl font-extrabold tracking-tight">
            {price}
          </span>
          <span className="ml-1 text-xl font-bold">/Monthly</span>
        </div>
        <p className="my-4 text-gray-600 text-start text-sm">{description}</p>
        <ul role="list" className="space-y-5 my-7">
          {actions.map((text, key) => {
            return (
              <ListItem text={text}></ListItem>
            );
          })}
        </ul>
      </div>
      <div style={{ textAlign: "end" }} className="w-full self-end mb-10">
        <a
          href={url}
          type="button"
          className=" text-white bg-[#DAA624] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-2xl text-base px-5 py-3.5 inline-flex justify-center w-full text-center"
        >
          Choose
        </a>
      </div>
    </div>
  );
}
