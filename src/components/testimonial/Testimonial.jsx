import React from "react";
import TestimonialCard from "./TestimonialCard";
import image1 from "../../assets/images/testimonial_1.png";
import image2 from "../../assets/images/testimonial_2.png";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
export default function Testimonial() {
  return (
    <div className="bg-[#F5F7F9] py-40 mb-24">
      <div className="lg:flex py-16">
        <div className="w-full">
          <section className="">
            <div className=" px-6 py-10 mx-auto">
              <div className="flex items-center mx-auto px-6">
                <button
                  title="left arrow"
                  className="absolute right-[90%] sm:right-[87%] md:right-[90%] lg:right-[92%] xl:right-[94%]  p-3 text-gray-800 bg-[#EDEDED] transition-colors duration-300  rounded-full rtl:-scale-x-100  lg:block hover:bg-gray-100"
                >
                  <HiOutlineArrowSmallLeft size={25}></HiOutlineArrowSmallLeft>
                </button>
                <div className="flex flex-col sm:flex-row gap-y-10 items-center justify-center">
                  <div className="pl-5">
                    <TestimonialCard
                      image={image1}
                      name={"Ebere Mosses"}
                      desc={
                        "Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text "
                      }
                      rating={4.2}
                    ></TestimonialCard>
                  </div>
                  <div>
                    <TestimonialCard
                      image={image2}
                      name={"John Peter"}
                      desc={
                        "Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text "
                      }
                      rating={4.2}
                    ></TestimonialCard>
                  </div>
                </div>

                <button
                  title="right arrow"
                  className="absolute  z-100 left-[90%] md:left-[93%] lg:left-[42%] xl:left-[44%]  p-3 text-gray-800 bg-[#EDEDED] transition-colors duration-300  rounded-full rtl:-scale-x-100  lg:block hover:bg-gray-100"
                >
                  <HiOutlineArrowSmallRight
                    size={25}
                  ></HiOutlineArrowSmallRight>
                </button>
              </div>
            </div>
          </section>

          <div class="w-full my-8">
            <div class=" flex items-center px-6 py-5 mx-auto space-y-6 justify-center sm:space-y-0 ">
              <div class="-mx-2">
                <a
                  href="#"
                  class="bg-[#B7B7B7] inline-flex items-center justify-center p-2.5 mx-2 text-gray-700 transition-colors duration-300 transform rounded-xl "
                ></a>

                <a
                  href="#"
                  class="bg-[#B7B7B7] inline-flex items-center justify-center p-2.5 mx-2 text-gray-700 transition-colors duration-300 transform rounded-xl hover:bg-gray-100 "
                ></a>

                <a
                  href="#"
                  class="bg-[#515151] inline-flex items-center justify-center px-5 p-2.5 mx-2 text-gray-700 transition-colors duration-300 transform rounded-xl hover:bg-gray-100 "
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full font-Montserrat px-10">
          <div className="flex">
            <button
              style={{ textAlign: "end" }}
              className="px-5 py-2 font-bold text-lg tracking-wide text-[#DAA624]  transition-colors duration-300 transform bg-[#F5EFDE] rounded-xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Testimonies From Client
            </button>
          </div>
          <div class="mt-8 lg:w-full lg:pr-20 lg:mt-0 text-start">
            <h1 class="text-2xl font-semibold text-gray-800 lg:text-4.5xl lg:w-full my-10 pr-4 leading-12">
              What our client say about us
            </h1>

            <p class=" mt-6 my-10 text-xl tracking-wide">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s..
            </p>
            <div className="flex mb-28">
              <a
                href="#"
                style={{ textAlign: "end" }}
                className="px-14 py-2  font-semibold text-xl tracking-wide text-white  transition-colors duration-300 transform bg-[#DAA624] rounded-xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
