import React from "react";
import haircut from "../../public/haircut.jpg";
import women from "../../public/beautiful-woman.jpg";
import female from "../../public/female.jpg";
import greathaircut from "../../public/great-haircut.jpg";

const Demo = () => {
  return (
    <>
   <section
  data-aos="zoom-in"
  className="w-full py-20 
  
  text-center"

  style={{backgroundColor:"#000000"}}
>

  {/* Top Heading */}
  <h2 className="text-6xl md:text-7xl font-light text-orange-400">
    00+
  </h2>

  <p className="text-3xl md:text-5xl font-semibold mt-3 text-white">
    Creative And Unique Demos
  </p>

  {/* 4 Column Grid */}
  <div
    className="
      max-w-7xl mx-auto 
      mt-16 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-10 
      px-4
    "
  >
    {[
      { img: haircut, title: 'Home 01' },
      { img: women, title: 'Home 02' },
      { img: female, title: 'Home 03' },
      { img: greathaircut, title: 'Home 04' },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center">

        {/* Image Box */}
        <div
          className="
            border border-[#5B3B2E]
            rounded-md
            overflow-hidden
            w-full
            h-[400px]
            shadow-xl
          "
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Caption */}
        <p className="mt-4 text-xl md:text-2xl font-medium text-orange-200">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</section>


    </>
  );
};

export default Demo;
