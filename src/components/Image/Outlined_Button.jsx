import React from "react";

export default function OutlinedButton({ text, shallow, url }) {
  return (
  
    <div className="flex  w-full">
      <a
        href={url}
        style={{ textAlign: "end" }}
        className={`${
          shallow ? "bg-transparent text-[#DAA624] px-5 lg:px-8 " : "bg-[#DAA624] px-5 lg:px-10 "
        } w-full py-5 lg:py-6 xl-py-6  flex justify-center items-center font-semibold text-lg md:text-lg lg:text-2xl tracking-wide border border-[#DAA624] transition-colors duration-300 transform rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80`}
      >
        {text}
      </a>
    </div>
  );
}
