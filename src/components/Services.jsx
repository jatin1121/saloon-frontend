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

import { Brush, Scissors, Flower2, Hand, Sun, Sparkles, Package } from "lucide-react";

const servicesData = [
  {
    category: "Makeup Services",
    icon: Brush,
    color: "bg-pink-100",
    iconColor: "text-pink-600",
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
    icon: Scissors,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
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
    icon: Flower2,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
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
    icon: Hand,
    color: "bg-red-100",
    iconColor: "text-red-600",
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
    icon: Sun,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    services: [
      "Full Body Waxing",
      "Eyebrow Threading",
      "Upper Lip Threading",
      "Rica Wax"
    ]
  },
  {
    category: "Spa & Relaxation",
    icon: Sparkles,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    services: [
      "Body Spa",
      "Head Massage",
      "Back Massage",
      "Pre-Bridal Spa Packages"
    ]
  },
  {
    category: "Packages",
    icon: Package,
    color: "bg-green-100",
    iconColor: "text-green-600",
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
    <section className="relative bg-[#FFF6F2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold">
            WHAT WE DO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Best Salon Services in Agra – Makeup, Hair, Skin & Spa
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
              >
                {/* Icon with dot */}
                <div className={`mx-auto mb-5 w-20 h-20 ${category.color} rounded-full flex items-center justify-center relative`}>
                  <div className="absolute top-3 right-3 w-6 h-6 bg-orange-400 rounded-full"></div>
                  <Icon className={`w-10 h-10 ${category.iconColor}`} strokeWidth={1.5} />
                </div>

                {/* Category Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {category.category}
                </h3>

                {/* Services List */}
                <ul className="space-y-2 mb-5">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Read More Button */}
                <button className="text-orange-400 font-semibold text-sm flex items-center justify-center mx-auto gap-1 hover:text-orange-500 transition">
                  READ MORE <span className="text-orange-300">⊕</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <button className="bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 transition shadow-lg hover:shadow-xl">
            Book Your Appointment
          </button>
        </div> */}
      </div>
    </section>
  );
}