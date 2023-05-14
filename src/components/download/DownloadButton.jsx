import React from "react";

export default function DownloadButton({text, url, Icon}) {
  return (
    <div className="flex font-Poppins w-full">
      <a href={url}
        style={{ textAlign: "end" }}
        className="w-full  py-4 flex justify-center items-center font-semibold text-lg tracking-widest	 text-white  transition-colors duration-300 transform bg-black rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        <span className="mr-4">{Icon}</span>
        {text}
      </a>
    </div>
  );
}
