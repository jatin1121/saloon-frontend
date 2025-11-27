import React from "react";
import img1 from "../../public/beautiful-woman.jpg";
import img2 from "../../public/female.jpg";
import img3 from "../../public/great-haircut.jpg";

const EssentialElements = () => {
  return (
    <section  className="w-full bg-[#d9c426] py-24 relative overflow-hidden">
      
      {/* Heading */}
      <p className="text-center text-4xl font-light mb-24 relative z-10" style={{fontSize:"60px"}}>
        Essential Elements For <br /> Beauty Salon
      </p>

      {/* Image Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto h-[480px]">

        {/* LEFT IMAGE — moved UP */}
        <div
        data-aos="fade-left"
          className="
            absolute left-0 
            top-[35%]             /* 👈 earlier 50%, now UP */
            -translate-y-1/2 
            z-10 
            w-[420px] h-[290px] 
            shadow-lg rounded-xl overflow-hidden bg-white
          "
        >
          <img src={img1} className="w-full h-full object-cover" />
        </div>

        {/* CENTER MAIN IMAGE — moved DOWN */}
        <div
        data-aos="fade-down"
          className="
            absolute left-1/2 
            top-[58%]             /* 👈 earlier 50%, now DOWN */
            -translate-x-1/2 
            -translate-y-1/2 
            z-30 
            w-[600px] h-[360px] 
            shadow-2xl rounded-xl overflow-hidden bg-white
          "
        >
          <img src={img2} className="w-full h-full object-cover" />
        </div>

        {/* RIGHT IMAGE — stays overlapping */}
        <div
        data-aos="fade-right"
          className="
            absolute right-0 
            top-[45%]
            -translate-y-1/2 
            z-40 
            w-[420px] h-[290px] 
            shadow-xl rounded-xl overflow-hidden bg-white
          "
        >
          <img src={img3} className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default EssentialElements;
