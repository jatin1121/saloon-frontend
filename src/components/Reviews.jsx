import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      date: "2 weeks ago",
      review: "Ruchi did my bridal makeup and it was absolutely stunning! She understood exactly what I wanted and made me feel like a princess on my special day. Highly recommend!",
      service: "Bridal Makeup"
    },
    {
      id: 2,
      name: "Anjali Verma",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      date: "1 month ago",
      review: "Amazing experience! The makeup lasted throughout the entire wedding ceremony. Ruchi is very professional and uses top quality products. Worth every penny!",
      service: "Wedding Makeup"
    },
    {
      id: 3,
      name: "Neha Gupta",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      date: "3 weeks ago",
      review: "Best makeup artist in Agra! She is so talented and patient. Took time to understand my preferences and the result was flawless. Will definitely book again!",
      service: "Party Makeup"
    },
    {
      id: 4,
      name: "Divya Singh",
      image: "https://i.pravatar.cc/150?img=16",
      rating: 5,
      date: "1 week ago",
      review: "Ruchi made me look gorgeous for my engagement. Her attention to detail is incredible. The makeup was perfect and stayed fresh for hours. Truly an artist!",
      service: "Engagement Makeup"
    }
  ];

  return (
    <div data-aos="fade-right" className="w-full  py-16 px-4" style={{backgroundColor:"#000000"}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
              ★ Client Reviews ★
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real experiences from our valued clients across Agra
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-red-500 text-red-500" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 font-medium">150+ Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-700 hover:border-red-500/50"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-red-500 shadow-lg shadow-red-500/30"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? 'fill-red-500 text-red-500'
                        : 'fill-gray-600 text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block bg-red-500/20 text-red-400 text-xs font-semibold px-3 py-1 rounded-full border border-red-500/30">
                  {review.service}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        
 
      </div>
    </div>
  );
}