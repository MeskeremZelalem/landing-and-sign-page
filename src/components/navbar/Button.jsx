import React from "react";

export default function Button({ text, url }) {
  return (
    <div className="flex">
      <a
        href={url}
        style={{ textAlign: "end" }}
        className="px-8 xl:px-14 py-2 xl:py-4 ml-5 font-semibold md:text-normal lg:text-xl text-black  transition-colors duration-300 transform bg-[#DAA624] rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        {text}
      </a>
    </div>
  );
}
