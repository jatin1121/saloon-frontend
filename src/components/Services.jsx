// import { Scissors, Sparkles } from 'lucide-react';

// const ladiesServices = [
//   { name: "Hair Cut & Styling", icon: Scissors },
//   { name: "Hair Coloring", icon: Sparkles },
//   { name: "Hair Treatments", icon: Sparkles },
//   { name: "Bridal Services", icon: Sparkles },
//   { name: "Facial & Cleanup", icon: Sparkles },
//   { name: "Makeup Services", icon: Sparkles }
// ];

// const gentsServices = [
//   { name: "Hair Cut", icon: Scissors },
//   { name: "Hair Styling", icon: Scissors },
//   { name: "Hair Coloring", icon: Sparkles },
//   { name: "Beard Styling", icon: Scissors },
//   { name: "Facial", icon: Sparkles },
//   { name: "Head Massage", icon: Sparkles }
// ];

// export default function Services() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Premium beauty and grooming services tailored for ladies and gents
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div id="ladies-services" className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
//             <div className="text-center mb-8">
//               <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Sparkles className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-2">Ladies Services</h3>
//               <p className="text-gray-600">Exclusive treatments for women</p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {ladiesServices.map((service, index) => {
//                 const Icon = service.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl p-6 hover:shadow-lg transition cursor-pointer group"
//                   >
//                     <Icon className="w-8 h-8 text-red-600 mb-3 group-hover:scale-110 transition" />
//                     <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
//                   </div>
//                 );
//               })}
//             </div>

//             <button className="w-full mt-8 bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
//               View All Ladies Services
//             </button>
//           </div>

//           <div id="gents-services" className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
//             <div className="text-center mb-8">
//               <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Scissors className="w-10 h-10 text-white" />
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900 mb-2">Gents Services</h3>
//               <p className="text-gray-600">Professional grooming for men</p>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {gentsServices.map((service, index) => {
//                 const Icon = service.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl p-6 hover:shadow-lg transition cursor-pointer group"
//                   >
//                     <Icon className="w-8 h-8 text-gray-900 mb-3 group-hover:scale-110 transition" />
//                     <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
//                   </div>
//                 );
//               })}
//             </div>

//             <button className="w-full mt-8 bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
//               View All Gents Services
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// REMOVE lucide-react imports
// import { Brush, Scissors, Flower2, Hand, Sun, Sparkles, Package } from "lucide-react";

const servicesData = [
  {
    category: "Makeup Services",
    image: "/beautysalloon.jpg",
    color: "bg-pink-100",
    services: [
      "Bridal Makeup",
      "Party Makeup",
      "HD & Airbrush",
      "Engagement & Reception",
      "Makeup Trials"
    ]
  },
  {
    category: "Hair Services",
    image: "/hairservice.jpg",
    color: "bg-purple-100",
    services: [
      "Haircut",
      "Hair Spa",
      "Keratin & Smoothening",
      "Hair Coloring & Highlights",
      "Bridal Hair Styling"
    ]
  },
  {
    category: "Skin & Facial",
    image: "/face-treatment.jpg",
    color: "bg-orange-100",
    services: [
      "Facials",
      "Cleanups",
      "Body Polishing",
      "Bleach",
      "Anti-aging Treatments",
      "Bridal Glow Packages"
    ]
  },
  {
    category: "Nail & Hand-Foot Care",
    image: "/nail-treatment.jpg",
    color: "bg-red-100",
    services: [
      "Manicure",
      "Pedicure",
      "Nail Art",
      "Nail Extensions",
      "Gel & Acrylic Nails"
    ]
  },
  {
    category: "Waxing & Threading",
    image: "/young-beauty-saloon.jpg",
    color: "bg-yellow-100",
    services: [
      "Full Body Waxing",
      "Eyebrow Threading",
      "Upper Lip Threading",
      "Rica Wax"
    ]
  },
  {
    category: "Spa & Relaxation",
    image: "/spa.jpg",
    color: "bg-blue-100",
    services: [
      "Body Spa",
      "Head Massage",
      "Back Massage",
      "Pre-Bridal Spa Packages"
    ]
  },
  {
    category: "Packages",
    image: "/packages.jpg",
    color: "bg-green-100",
    services: [
      "Bridal Package",
      "Party Package",
      "Pre-Bridal Package",
      "Customized Combos"
    ]
  }
];


export default function ServicesSection() {
  return (
 <section
  data-aos="zoom-out"
  className="relative py-24 
  "
  style={{backgroundColor:"#ae755a"}}
>
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-16">
      <p className="text-white uppercase tracking-[0.3em] text-xs font-semibold">
        WHAT WE DO
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
        Our Services
      </h2>

      <p className="text-white mt-4 max-w-2xl mx-auto text-lg">
        Best Salon Services in Agra – Makeup, Hair, Skin & Spa
      </p>
    </div>

    {/* SERVICES GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {servicesData.map((category, index) => (
        <div
          key={index}
          className="
            bg-white 
            border border-[#E0D6FF] 
            rounded-2xl p-6 
            shadow-md 
            hover:shadow-xl 
            hover:border-[#7C5CF4] 
            transition-all duration-300 group
          "
        >
          {/* Image Box */}
          <div
            className={`
              mx-auto mb-6 w-20 h-20 ${category.color} 
              rounded-full flex items-center justify-center 
              relative overflow-hidden
              ring-2 ring-[#C8B8FF]
            `}
          >
            <div className="absolute top-2 right-2 w-5 h-5 bg-[#A28CFF] rounded-full opacity-80"></div>

            <img
              src={category.image}
              alt={category.category}
              className="w-full h-full object-cover rounded-full z-10"
            />
          </div>

          {/* Category Name */}
          <h3 className="text-lg font-bold text-[#2E1F55] mb-4 text-center">
            {category.category}
          </h3>

          {/* Services List */}
          <ul className="space-y-2 mb-6">
            {category.services.map((service, idx) => (
              <li key={idx} className="text-sm text-[#4F427A] flex items-start">
                <span className="text-[#7C5CF4] mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>

          {/* Read More Button */}
          <button className="text-[#7C5CF4] font-semibold text-sm flex items-center justify-center mx-auto gap-1 hover:text-[#6A4CC3] transition">
            READ MORE <span className="text-[#A48BFF]">⊕</span>
          </button>
        </div>
      ))}
    </div>
  </div>
</section>



  );
}
