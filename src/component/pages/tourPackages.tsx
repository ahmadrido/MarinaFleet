import React, { useState } from "react";
import Navbar from "../layout/NavBar";
import ctaButton from "../fragment/ctaButton";
import { TourPackageDetails, tourPackages } from "../lib/data";

const TourPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<TourPackageDetails | null>(null);
  const [Image, setImage] = useState(0);

  // Open package details modal
  const openPackageDetails = (tourPackage: TourPackageDetails) => {
    setSelectedPackage(tourPackage);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Close package details modal
  const closePackageDetails = () => {
    setSelectedPackage(null);
    document.body.style.overflow = "auto"; // Restore scrolling
    setImage(0);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Unforgettable Maritime Experiences</h1>
            <p className="text-xl text-blue-100 mb-6">
              Discover our carefully crafted tour packages designed to showcase the best experiences on the water.
            </p>
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-compass text-blue-300 text-xl"></i>
              <p className="text-blue-200">Professional guides and exceptional service on every tour</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Package Filters - can be expanded for actual filtering functionality */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-filter text-blue-800"></i>
              <h3 className="font-medium text-gray-700">Filter by:</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full border border-blue-800 text-blue-800 hover:bg-blue-50 transition-colors">
                All Packages
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Half Day
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Full Day
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Family Friendly
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Adventure
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tour Packages Listing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tourPackage) => (
              <div 
                key={tourPackage.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-800 text-white px-3 py-1 m-3 rounded text-sm font-medium z-10">
                    {tourPackage.duration}
                  </div>
                  <img
                    src={tourPackage.images[0] || "/images/placeholder-tour.jpg"}
                    alt={tourPackage.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tourPackage.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="fa-solid fa-location-dot mr-2"></i>
                    <span>{tourPackage.destinations.length} destinations</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="fa-solid fa-users mr-2"></i>
                    <span>Max: {tourPackage.maxParticipants} people</span>
                  </div>
                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {tourPackage.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-800 font-bold text-xl">{tourPackage.price}</div>
                    <button 
                      onClick={() => openPackageDetails(tourPackage)}
                      className="px-4 py-2 bg-blue-800 text-white cursor-pointer rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <span>View Details</span>
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it – hear from travelers who have experienced our tours firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-between">
              <div className="flex items-center text-yellow-400 mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The Island Hopping Adventure exceeded all our expectations. The crew was incredibly knowledgeable and went above and beyond to ensure we had an amazing day. The snorkeling spots were stunning!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3">
                <img
                    src="https://randomuser.me/api/portraits/women/19.jpg"
                    alt="Avatar"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Sarah M.</h4>
                  <p className="text-sm text-gray-600">Island Hopping Adventure</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-between">
              <div className="flex items-center text-yellow-400 mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <p className="text-gray-700 italic mb-4">
                "My wife and I celebrated our anniversary on the Romantic Sunset Cruise and it couldn't have been more perfect. The champagne, the views, the music – everything created a magical evening that we'll never forget."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="Avatar"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">James & Lisa T.</h4>
                  <p className="text-sm text-gray-600">Romantic Sunset Cruise</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-between">
              <div className="flex items-center text-yellow-400 mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The Deep Sea Fishing Expedition was the highlight of our vacation! The captain knew exactly where to find the fish, and we caught more than we expected. They cleaned our catch and even recommended a local restaurant that cooked it for us!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3">
                <img
                    src="https://randomuser.me/api/portraits/men/23.jpg"
                    alt="Avatar"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Mike R.</h4>
                  <p className="text-sm text-gray-600">Deep Sea Fishing Expedition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our tour packages.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>
                What should I bring on a tour?</h3>
              <p className="text-gray-700">
                We recommend bringing sunscreen, a hat, sunglasses, a light jacket, and a camera. For water activities, a swimsuit and a towel are essential. All safety equipment and other necessities are provided as part of your package.
              </p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>
                Are your tours suitable for children?</h3>
              <p className="text-gray-700">
                Many of our tours are family-friendly, but age restrictions may apply for certain activities. The Island Hopping Adventure and Eco Marine Safari are particularly suitable for children. Please check the specific tour details or contact us for more information.
              </p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>
                What happens in case of bad weather?</h3>
              <p className="text-gray-700">
                Safety is our priority. If weather conditions are unsuitable for your scheduled tour, we'll offer to reschedule for another day or provide a full refund. We monitor conditions closely and will notify you of any changes as soon as possible.
              </p>
            </div>
            
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>
                Do I need prior experience for activities like fishing or diving?</h3>
              <p className="text-gray-700">
                No prior experience is necessary for most of our tours. Our professional guides provide comprehensive instruction and support. For scuba diving, we offer options for both certified divers and beginners (with a quick introductory lesson).
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>
                Can you accommodate dietary restrictions?</h3>
              <p className="text-gray-700">
                Yes, we can accommodate most dietary requirements. Please inform us of any allergies or restrictions when booking, and we'll ensure appropriate food and beverages are provided during your tour.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Maritime Adventure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your tour today and create unforgettable memories on the water. Special discounts available for group bookings!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Book Now
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Contact for Custom Tour
            </button>
          </div>
        </div>
      </section>
      
      {/* Tour Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedPackage.name}</h2>
                <button onClick={closePackageDetails} className="text-gray-500 hover:text-gray-700">
                  <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
                </button>
              </div>
              
              {/* Image Gallery */}
              <div className="mb-6">
                <div className="h-80 overflow-hidden rounded-lg mb-2">
                  <img 
                    src={selectedPackage.images[Image] || "https://moreishmarketing.com/app/uploads/2020/09/img_placeholder_1024x768.jpg"} 
                    alt={selectedPackage.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {selectedPackage.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedPackage.images.map((image, index) => (
                      <div key={index} className="w-24 h-16 flex-shrink-0">
                        <img 
                          src={image} 
                          alt={`${selectedPackage.name} view ${index + 1}`}
                          className="w-full h-full object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500"
                          onClick={() => setImage(index)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Package Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-clock"></i>
                      </div>
                      <span className="text-gray-700"><strong>Duration:</strong> {selectedPackage.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-users"></i>
                      </div>
                      <span className="text-gray-700"><strong>Max Participants:</strong> {selectedPackage.maxParticipants}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-tag"></i>
                      </div>
                      <span className="text-gray-700"><strong>Price:</strong> {selectedPackage.price}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-gauge-high"></i>
                      </div>
                      <span className="text-gray-700"><strong>Difficulty:</strong> {selectedPackage.difficulty}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Destinations</h3>
                  <ul className="space-y-2">
                    {selectedPackage.destinations.map((destination, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fa-solid fa-location-dot text-blue-600 mt-1 mr-2"></i>
                        <span className="text-gray-700">{destination}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {selectedPackage.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Highlights</h3>
                  <p className="text-gray-700">{selectedPackage.highlights}</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700">{selectedPackage.description}</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <ctaButton.ctaBooking text="Book This Package" />
                <ctaButton.ctaQuestion text="Ask a Question?" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPackages;