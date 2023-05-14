import React, { useState } from "react";
import logo from "../../assets/images/larger_logo.png";
import Button from "./Button";
import Link from "./Link";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const changeOpenState = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative bg-[#0B081C] shadow">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between lg:ml-20">
        <a href="#">
                <img
                  className="object-cover w-auto h-20 md:h-28"
                  src={logo}
                  alt=""
                ></img>
              </a>

          <div className="flex md:hidden">
            <button
              x-cloak
              onClick={changeOpenState}
              type="button"
              className="text-white  mr-8 hover:text-gray-600  focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          x-cloak
          className={`${
            isOpen
              ? "translate-x-0 opacity-100 "
              : "opacity-0 -translate-x-full "
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#0B081C] md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:justify-between md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div
            style={{ fontFamily: "Montserrat" }}
            className="flex flex-col md:flex-row md:mx-auto"
          >
            <Link text={"Home"} url={"#"}></Link>
            <Link text={"Explore"} url={"#"}></Link>
            <Link text={"Magazine"} url={"#"}></Link>
            <Link text={"Get in Touch"} url={"#"}></Link>
          </div>
          <div className="flex lg:pr-16 items-center justify-center font-Montserrat">
            <Link text={"Login"} url={"/signup"}></Link>
            <Button text={"Sign up"} url={"/signup"}></Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
