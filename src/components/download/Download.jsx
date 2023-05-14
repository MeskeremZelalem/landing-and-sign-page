import React from "react";
import DownloadButton from "./DownloadButton";
import { AiFillApple } from "react-icons/ai";
import {IoLogoGooglePlaystore} from 'react-icons/io5'
export default function Download() {
  return (
    <div className="bg-[#DAA624] py-28 mx-8 md:mx-20 rounded-3xl font-Montserrat">
      <div className="flex flex-col mx-10 lg:md-28 xl:mx-60 2xl:mx-80 lg:px-12 gap-12 justify-center items-center">
        <div className="flex justify-center w-full sm:w-auto">
          <button
            style={{ textAlign: "end" }}
            className="px-5  py-4 md:ml-5 text-sm md:text-normal font-semibold tracking-wide text-white  transition-colors duration-300 transform bg-[#B78B1E] rounded-xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Get started with our web app
          </button>
        </div>

        <p className="text-2xl md:text-3xl text-white font-semibold leading-10 md:leading-12">
          
           Download Hot Platform Website To Get digital skill and career
          opportunity{" "}
        </p>
        <div className="flex flex-col md:flex-row  justify-center items-center w-full gap-8">
          <DownloadButton Icon = {<AiFillApple size={40}></AiFillApple>} text={"App Store"}></DownloadButton>
          <DownloadButton Icon={<IoLogoGooglePlaystore size={40}></IoLogoGooglePlaystore>} text={"Google Playstore"}></DownloadButton>
        </div>
      </div>
    </div>
  );
}
