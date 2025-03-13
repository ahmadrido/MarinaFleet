import React, { useState } from "react";
import Navbar from "../layout/NavBar";
import { BoatDetails, boats } from "../lib/data";


const OurFleet: React.FC = () => {
  const [selectedBoat, setSelectedBoat] = useState<BoatDetails | null>(null);
  const [Image, setImage] = useState(0);
  

  // Open boat details modal
  const openBoatDetails = (boat: BoatDetails) => {
    setSelectedBoat(boat);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Close boat details modal
  const closeBoatDetails = () => {
    setSelectedBoat(null);
    document.body.style.overflow = "auto"; // Restore scrolling
    setImage(0);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('http://img2.chinadaily.com.cn/images/202007/28/5f1f8019a3108348fce0b4a5.jpeg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Fleet</h1>
            <p className="text-xl text-blue-100 mb-6">
              Discover our collection of meticulously maintained vessels ready for your next adventure on the water.
            </p>
            <div className="flex gap-4 items-center">
              <i className="fa-solid fa-anchor text-blue-300 text-xl"></i>
              <p className="text-blue-200">All vessels come with professional crew options</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fleet Filters - can be expanded for actual filtering functionality */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-filter text-blue-800"></i>
              <h3 className="font-medium text-gray-700">Filter by:</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full border border-blue-800 text-blue-800 hover:bg-blue-50 transition-colors">
                All Vessels
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Yachts
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Sailboats
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Catamarans
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                Speedboats
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fleet Listing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boats.map((boat) => (
              <div 
                key={boat.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-800 text-white px-3 py-1 m-3 rounded text-sm font-medium z-10">
                    {boat.type}
                  </div>
                  <img
                    src={boat.images[0] || "/images/placeholder-boat.jpg"}
                    alt={boat.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{boat.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="fa-solid fa-users mr-2"></i>
                    <span>Capacity: {boat.capacity} people</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="fa-solid fa-ruler-horizontal mr-2"></i>
                    <span>Length: {boat.length}</span>
                  </div>
                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {boat.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-800 font-bold text-xl">{boat.price}</div>
                    <button 
                      onClick={() => openBoatDetails(boat)}
                      className="px-4 py-2 cursor-pointer bg-blue-800 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
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
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Marina Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on offering premium vessels with exceptional service to ensure your time on the water is unforgettable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-800 mb-4">
                <i className="fa-solid fa-shield-halved text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">
                All vessels regularly inspected and equipped with comprehensive safety equipment.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-800 mb-4">
                <i className="fa-solid fa-broom text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pristine Condition</h3>
              <p className="text-gray-600">
                Meticulously maintained fleet that undergoes thorough cleaning between each charter.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-800 mb-4">
                <i className="fa-solid fa-compass text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Crew</h3>
              <p className="text-gray-600">
                Optional professional crew members with extensive local knowledge.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-800 mb-4">
                <i className="fa-solid fa-headset text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance for any questions or needs during your rental.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Set Sail?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and book your perfect vessel for an unforgettable maritime experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Check Availability
            </button>
            <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Contact for Custom Vessel
            </button>
          </div>
        </div>
      </section>
      
      {/* Boat Details Modal */}
      {selectedBoat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedBoat.name}</h2>
                <button onClick={closeBoatDetails} className="text-gray-500 cursor-pointer hover:text-gray-700">
                  <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
                </button>
              </div>
              
              {/* Image Gallery */}
              <div className="mb-6">
                <div className="h-80 overflow-hidden rounded-lg mb-2">
                  <img 
                    src={selectedBoat.images[Image] || 'https://moreishmarketing.com/app/uploads/2020/09/img_placeholder_1024x768.jpg'} 
                    alt={selectedBoat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {selectedBoat.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedBoat.images.map((image, index) => (
                      <div key={index} className="w-24 h-16 flex-shrink-0">
                        <img 
                          src={image} 
                          alt={`${selectedBoat.name} view ${index + 1}`}
                          className="w-full h-full object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500"
                          onClick={() => setImage(index)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Boat Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Vessel Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-ship"></i>
                      </div>
                      <span className="text-gray-700"><strong>Type:</strong> {selectedBoat.type}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-users"></i>
                      </div>
                      <span className="text-gray-700"><strong>Capacity:</strong> {selectedBoat.capacity} people</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-ruler-horizontal"></i>
                      </div>
                      <span className="text-gray-700"><strong>Length:</strong> {selectedBoat.length}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 text-blue-800">
                        <i className="fa-solid fa-tag"></i>
                      </div>
                      <span className="text-gray-700"><strong>Rate:</strong> {selectedBoat.price}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                  <ul className="space-y-2">
                    {selectedBoat.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700">{selectedBoat.description}</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 cursor-pointer bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>Book This Vessel</span>
                </button>
                <button className="px-6 py-3 cursor-pointer border border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-question-circle"></i>
                  <span>Ask a Question</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurFleet;