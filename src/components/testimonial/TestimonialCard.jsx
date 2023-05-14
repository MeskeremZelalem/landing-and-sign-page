import React from "react";
import { IoMdQuote } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
export default function TestimonialCard({ image, name, desc, rating }) {
  return (
    <div className="bg-white rounded-3xl mx-2.5 p-4 flex flex-col gap-10 text-start ">
      <div className="flex justify-between">
        <img
          className="object-cover rounded-lg w-28 h-28"
          src={image}
          alt="profile"
        />
        <IoMdQuote size={40} color="lightgray"></IoMdQuote>
      </div>

      <h1 className="font-bold tracking-wide text-lg">{name}</h1>
      <p class="">{desc}</p>

      <div className="flex gap-1 text-xs font-medium items-center">
        <AiFillStar size={24} color="gold"></AiFillStar>
        <span></span>
        {rating}
        <span>From play store</span>
      </div>
    </div>
  );
}
