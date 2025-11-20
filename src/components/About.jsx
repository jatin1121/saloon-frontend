import { Award, Users, MapPin, Star } from 'lucide-react';
import makeup from "../../public/HD-makeup.jpg";

export default function About() {
  const features = [
    {
      icon: MapPin,
      title: "162+ Branches",
      description: "Conveniently located across major cities in India"
    },
    {
      icon: Users,
      title: "Expert Professionals",
      description: "Highly trained and certified beauty experts"
    },
    {
      icon: Award,
      title: "Premium Products",
      description: "Using only the finest international brands"
    },
    {
      icon: Star,
      title: "Quality Service",
      description: "Committed to excellence in every service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Ruchi Mishra 
            </h2>

            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Ruchi Mishra is a certified bridal and beauty expert in Agra. Learn more about her journey, experience, and her passion for redefining beauty in Agra.
              </p>

              <p>
                Hi, I’m Ruchi Mishra, a certified makeup and beauty professional based in Agra with years of experience in bridal makeovers and salon services. From elegant brides to everyday clients, I’ve helped hundreds of women across Agra look flawless for their special moments.
              </p>

              <h5 className="text-red-600 font-semibold text-lg">
                ✨ Why Choose Us:
              </h5>

              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Located conveniently in Agra city center</li>
                <li>Premium international beauty products</li>
                <li>Expert bridal consultation & trial sessions</li>
                <li>Customized beauty packages for every occasion</li>
                <li>Friendly and comfortable environment</li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition shadow-lg">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — ONLY IMAGE */}
      {/* RIGHT SIDE — ONLY IMAGE WITH BIG HEIGHT */}
<div data-aos="fade-left" className="relative">
  <div className="rounded-2xl overflow-hidden shadow-xl h-[600px] w-full">
    <img
      src={makeup}
      alt="Makeup Artist"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        </div>

      </div>
    </section>
  );
}
