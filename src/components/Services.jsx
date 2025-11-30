import haircut from "../../public/haircut.jpg";

export default function ServicesSection() {
  

const servicesData = [
  {
    category: "Makeup Services",
    image: haircut,
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
    image: ".././../public/hairservice.jpg",
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
    image: "../../public/face-treatment.jpg",
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
    image: "../../public/nail-treatment.jpg",
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
    image: "../../public/young-beauty-saloon.jpg",
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
    image: "../../public/spa.jpg",
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
    image: "../../public/packages.jpg",
    color: "bg-green-100",
    services: [
      "Bridal Package",
      "Party Package",
      "Pre-Bridal Package",
      "Customized Combos"
    ]
  }
];
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
