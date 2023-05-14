import React from "react";

export default function MagazineCard({ swap, image, title, description, url }) {
  return (
    <section class="bg-white font-Montserrat">
      <div class="container  py-4 mx-auto">
        <div class=" lg:flex lg:items-center">
          <img
            class={`${
              swap ? "order-last " : " "
            } object-fill  sm:w-full sm:h-[80vh] lg:w-[40vw] lg:h-[40rem] w-full h-96 rounded-lg `}
            src={image}
            alt="The social account"
          ></img>

          <div class="mt-8 px-8 lg:w-1/2 lg:px-20 lg:mt-0 text-start">
            <h1 class="text-2xl font-semibold text-gray-800 lg:text-4xl lg:w-96 mt-10">
              {title}
            </h1>

            <p class="max-w-lg mt-6 my-4 text-base md:text-xl tracking-wide">
              {description}
            </p>
            <div className="flex mb-28">
              <a
                href={url}
                style={{ textAlign: "end" }}
                className="text-xl tracking-wide text-[#DAA624]  transition-colors duration-300 transform bg-transparent rounded-xl hover:text-blue focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
