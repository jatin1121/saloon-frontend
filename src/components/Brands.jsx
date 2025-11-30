export default function Brands() {
  const brands = [
    { name: "L'Oréal Professional", img: "/Loreal-PNG-Clipart.png" },
    { name: "Kérastase", img: "/paris.png" },
    { name: "Olaplex", img: "/olaplex3.webp" },
    { name: "Matrix", img: "/matrix.jpg" },
    { name: "Wella Professionals", img: "/wella.jpg" },
    { name: "Schwarzkopf", img: "/schwarzkopf.jpg" },
    { name: "Redken", img: "/redken.png" },
    { name: "Paul Mitchell", img: "/paul2.jpg" }
  ];

  return (
    <section
  data-aos="flip-left"
  className="py-20"
  style={{ background: "#ae755a" }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading Section */}
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        Premium Brand Partners
      </h2>
      <p className="text-xl text-purple-100 max-w-2xl mx-auto">
        We use only the finest professional products from leading international brands
      </p>
    </div>

    {/* Brand Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="
            bg-white/10 
            backdrop-blur-lg 
            border border-white/20
            rounded-xl p-8 
            shadow-lg 
            hover:shadow-2xl 
            transition 
            flex items-center justify-center 
            group
          "
        >
          <div className="text-center">

            {/* Circle with Image */}
            <div className="
              w-20 h-20 mx-auto mb-4 
              bg-white/20 
              backdrop-blur 
              rounded-full 
              flex items-center justify-center 
              shadow 
              group-hover:scale-110 
              transition 
              overflow-hidden
              border border-white/30
            ">
              <img
                src={brand.img}
                alt={brand.name}
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition">
              {brand.name}
            </h3>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA Section */}
    <div className="
      mt-16 
     
      rounded-2xl 
      p-12 
      text-center 
      text-white 
      shadow-2xl
    " style={{backgroundColor:"#000000"}}>
      <h3 className="text-3xl lg:text-4xl font-bold mb-4">
        Experience the Difference
      </h3>

      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        Join over 1 million satisfied customers who trust Looks Salon for their beauty and grooming needs
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="
          bg-white 
          text-[#8a5800] 
          px-8 py-4 
          rounded-lg 
          text-lg 
          font-semibold 
          hover:bg-gray-100 
          transition 
          shadow-xl
        ">
          Book Appointment
        </button>

        <button className="
          border-2 border-white 
          text-white 
          px-8 py-4 
          rounded-lg 
          text-lg 
          font-semibold 
          hover:bg-white 
          hover:text-[#8a5800] 
          transition 
          shadow-lg
        ">
          Find Nearest Salon
        </button>
      </div>
    </div>

  </div>
</section>

  );
}
