export default function Brands() {
  const brands = [
    "L'Oréal Professional",
    "Kérastase",
    "Olaplex",
    "Matrix",
    "Wella Professionals",
    "Schwarzkopf",
    "Redken",
    "Paul Mitchell"
  ];

  return (
    <section data-aos="flip-left" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Premium Brand Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use only the finest professional products from leading international brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition flex items-center justify-center group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-100 to-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <span className="text-2xl font-bold text-red-600">
                    {brand.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition">
                  {brand}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Experience the Difference
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join over 1 million satisfied customers who trust Looks Salon for their beauty and grooming needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition">
              Find Nearest Salon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}