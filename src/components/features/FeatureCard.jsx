import React from "react";
export default function FeatureCard({ imageUrl, headerText, descriptionText }) {
  return (
    <div
      className={`flex flex-col justify-center px-6 py-4 max-w-md gap-y-5 overflow-hidden font-Montserrat`}
    >
      <img
        className="mx-auto my-auto"
        src={imageUrl}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-4 ">
        <div className="font-bold  text-2xl md:text-3xl">{headerText}</div>
      </div>
      <p className="font-medium">{descriptionText}</p>
    </div>
  );
}
