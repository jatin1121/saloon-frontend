import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Offers', href: '#offers' }
  ];

  const services = [
    { name: 'Ladies Services', href: '#ladies-services' },
    { name: 'Bridal Services', href: '#bridal' },
    { name: 'Hair Treatments', href: '#treatments' },
    { name: 'Makeup Services', href: '#makeup' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Ruchi Mishra <span className="text-red-600">Makeover Studio</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Premium ladies’ makeover studio in Agra — Makeup, Hair, Skin & Bridal Makeovers.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-red-600 transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-400 hover:text-red-600 transition">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                <span className="text-gray-400">Ruchi Mishra Makeover Studio, [Locality], Agra, Uttar Pradesh</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-600 mt-1" />
                <span className="text-gray-400">Call / WhatsApp: [Number]</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-600 mt-1" />
                <span className="text-gray-400">Email: [Email ID]</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gray-400">🕒 Timings: 10 AM – 8 PM (All Days)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            “We’re just minutes from Taj Mahal and Sanjay Place – easy to find, easier to fall in love with!”
          </p>

          <div className="text-center text-gray-500 text-sm mt-4">
            <p>&copy; {new Date().getFullYear()} Ruchi Mishra Makeover Studio. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
