import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    city: '',
    gender: '',
    service: '',
    date: '',
    time: ''
  });

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
  const services = ['Hair Cut', 'Hair Styling', 'Hair Coloring', 'Facial', 'Makeup', 'Bridal Services'];

  const handleSubmit = () => {
    if (!formData.city || !formData.gender || !formData.service || !formData.date || !formData.time) {
      alert('Please fill all fields');
      return;
    }
    console.log('Booking submitted:', formData);
    alert('Booking confirmed! Check console for details.');
  };

  return (
    <section  className="min-h-screen relative py-20 px-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://www.lookssalon.in/public/images/formBg.webp")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content Container */}
      <div data-aos="slide-left" className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Book Your Appointment
          </h2>
          <p className="text-xl text-white/90 drop-shadow-md">
            Choose your preferred salon, service, and time slot
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="space-y-6">
            
            {/* City and Gender Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Select City
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition"
                >
                  <option value="">Choose your city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <User className="inline w-4 h-4 mr-2" />
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition"
                >
                  <option value="">Select gender</option>
                  <option value="ladies">Ladies</option>
                  <option value="gents">Gents</option>
                </select>
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Service Type
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition"
              >
                <option value="">Choose service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Date and Time Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <Clock className="inline w-4 h-4 mr-2" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}