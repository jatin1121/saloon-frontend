import { Award, Users, MapPin, Star } from 'lucide-react';

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
          <div>
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

          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-gray-100 rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="text-6xl font-bold text-red-600">1+</div>
                  <div className="text-2xl font-semibold text-gray-900">Branches</div>
                  <div className="text-gray-600">Serving customers across Agra</div>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Stylists</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-gray-900">1M+</div>
                      <div className="text-sm text-gray-600">Customers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition group"
              >
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}