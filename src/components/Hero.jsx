import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import beautypalar from "../../public/ruchi.png";

const slides = [
  {
    title: " Best Makeup Artist & Salon in Agra",
    subtitle: "Looking for the best makeover & salon in Agra? Visit Ruchi Mishra ",
    description: "Makeover Studio for bridal makeup, hair spa, facials, nail art & beauty services in Agra."
  },
  {
    title: "Agra’s Most Loved Makeover & Salon Studio ",
    subtitle: "From everyday beauty to bridal glamour — where style meets confidence.",
    description: "Welcome to Ruchi Mishra Makeover Studio, Agra’s favourite destination for beauty, makeup, and self-care."
  },
  {
    title: "Ruchi Mishra Makeover Services",
    subtitle: "For Ladies & Gents",
    description: "We offer professional makeovers, hair styling, facials, nail extensions, body polishing, and spa treatments — all designed to make you look and feel your best. Located in the heart of Agra, our salon blends modern techniques with premium products and a warm, friendly vibe."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
//     <section id="home"  className="relative bg-gradient-to-br from-red-50 to-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//          <div className="space-y-6" data-aos="fade-right">

//             <div className="overflow-hidden">
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className={`transition-all duration-700 ${
//                     index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 absolute translate-x-full'
//                   }`}
//                 >
//                   <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//                     {slide.title}
//                   </h2>
//                   <p className="text-2xl text-red-600 font-semibold mb-4">
//                     {slide.subtitle}
//                   </p>
//                   <p className="text-lg text-gray-600 mb-8">
//                     {slide.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="flex items-center space-x-4">
//               <button className="bg-red-600 text-white px-8 py-4 rounded-md text-lg hover:bg-red-700 transition shadow-lg">
//                 Book Now
//               </button>
//               <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-md text-lg hover:bg-gray-900 hover:text-white transition">
//                 View Services
//               </button>
//             </div>

//             <div className="flex items-center space-x-2">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`h-2 rounded-full transition-all ${
//                     index === currentSlide ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//     <div className="relative" data-aos="fade-left">

//   <div className="bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">

//     {/* Background Image */}
//     <div
//       className="relative aspect-square rounded-xl bg-cover bg-center overflow-hidden"
//       style={{ backgroundImage: `url(${beautypalar})` }}
//     >
//       {/* Soft black gradient at bottom */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

//       {/* Bottom Section Container */}
//       <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between">

//         {/* 162+ Circle (Bottom-left) */}
//       <div className="
//   w-20 h-20
//   sm:w-24 sm:h-24
//   md:w-28 md:h-28
//   lg:w-32 lg:h-32
//   bg-red-600 rounded-full flex items-center justify-center shadow-2xl
// ">
//   <span className="
//     text-white font-extrabold
//     text-2xl
//     sm:text-3xl
//     md:text-4xl
//   ">
//     500+
//   </span>
// </div>


//         {/* Text (Bottom-right) */}
//    <div className="text-right space-y-1">
//   <p
//     className="
//       font-semibold text-white drop-shadow-xl
//       text-xl
//       sm:text-2xl
//       md:text-3xl
//       lg:text-4xl
//     "
//   >
//     Beauty Experts Agra
//   </p>

//   <p
//     className="
//       text-gray-200 drop-shadow
//       text-sm
//       sm:text-base
//       md:text-lg
//       lg:text-xl
//     "
//   >
//     Your trusted beauty partner
//   </p>
// </div>


//       </div>
//     </div>
//   </div>

//   {/* Decorative Circles */}
//   <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-sm"></div>
//   <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-900 rounded-full opacity-10 blur-sm"></div>
// </div>

//         </div>
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-900" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-900" />
//       </button>
//     </section>
<section id="home" className="relative overflow-hidden" style={{ backgroundColor: "#EF4444" }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6" data-aos="fade-right">

        <div className="overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 absolute translate-x-full'
              }`}
            >
              {/* MAIN HEADING */}
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h2>

              {/* SUBTITLE */}
              <p className="text-2xl text-white/90 font-semibold mb-4">
                {slide.subtitle}
              </p>

              {/* DESCRIPTION */}
              <p className="text-lg text-white/80 mb-8">
                {slide.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Primary Button */}
          <button className="bg-white text-red-600 px-8 py-4 rounded-md text-lg hover:bg-gray-100 transition shadow-lg">
            Book Now
          </button>

          {/* Secondary Button */}
          <button className="border-2 border-white text-white px-8 py-4 rounded-md text-lg hover:bg-white hover:text-red-600 transition">
            View Services
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/60'
              }`}
            />
          ))}
        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="relative" data-aos="fade-left">
        <div className="bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
          <div
            className="relative aspect-square rounded-xl bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${beautypalar})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between">

              {/* Circle */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-red-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl">
                  500+
                </span>
              </div>

              {/* Text */}
              <div className="text-right space-y-1">
                <p className="font-semibold text-white drop-shadow-xl text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Beauty Experts Agra
                </p>
                <p className="text-white/80 drop-shadow text-sm sm:text-base md:text-lg lg:text-xl">
                  Your trusted beauty partner
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full opacity-20 blur-sm"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black rounded-full opacity-10 blur-sm"></div>
      </div>
    </div>
  </div>

  {/* Navigation Buttons */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
  >
    <ChevronLeft className="w-6 h-6 text-red-600" />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
  >
    <ChevronRight className="w-6 h-6 text-red-600" />
  </button>
</section>

  );
}