import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import Navbar from "../layout/NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { boats as fleets, BoatDetails as Fleet, tourPackages, TourPackageDetails as TourPackage } from "../lib/data";

interface BookingDetails {
  packageId: string;
  fleetId: string;
  date: Date | null;
  time: string;
  participants: number;
  customRequests: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  totalPrice: number;
}

const Booking: React.FC = () => {
  // Replace Next.js router with React Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  const targetRef = useRef<HTMLDivElement>(null);
  
  // Parse query parameters from URL
  const queryParams = new URLSearchParams(location.search);
  const packageId = queryParams.get('packageId') || '';
  const fleetId = queryParams.get('fleetId') || '';
  
  // Get price as number from string format
  const getPriceValue = (priceString: string): number => {
    return parseFloat(priceString.replace(/[$,]/g, '').split('/')[0]);
  };
  
  // Get duration in hours from string format
  const getDurationHours = (durationString: string): number => {
    if (durationString.includes('hours')) {
      return parseInt(durationString.split(' ')[0]);
    } else if (durationString.includes('Full Day')) {
      return 8; // Assuming Full Day is 8 hours
    } else {
      return 4; // Default fallback
    }
  };

  const [booking, setBooking] = useState<BookingDetails>({
    packageId: typeof packageId === 'string' ? packageId : '',
    fleetId: typeof fleetId === 'string' ? fleetId : '',
    date: null,
    time: '10:00',
    participants: 2,
    customRequests: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    totalPrice: 0
  });

  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedFleet, setSelectedFleet] = useState<Fleet | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Update selected package and fleet when IDs change
  useEffect(() => {
    if (booking.packageId) {
      const foundPackage = tourPackages.find(p => p.id === booking.packageId);
      setSelectedPackage(foundPackage || null);
    }
    
    if (booking.fleetId) {
      const foundFleet = fleets.find(f => f.id === booking.fleetId);
      setSelectedFleet(foundFleet || null);
    }
  }, [booking.packageId, booking.fleetId]);

  // Calculate total price whenever relevant fields change
  useEffect(() => {
    if (selectedPackage && selectedFleet) {
      const packagePrice = getPriceValue(selectedPackage.price) * booking.participants;
      const packageHours = getDurationHours(selectedPackage.duration);
      const fleetPrice = selectedFleet.price.includes('/day')
        ? getPriceValue(selectedFleet.price)
        : getPriceValue(selectedFleet.price) * packageHours;
  
      setBooking(prev => ({
        ...prev,
        totalPrice: packagePrice + fleetPrice
      }));
    }
  }, [selectedPackage, selectedFleet, booking.participants]);
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBooking(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setBooking(prev => ({
      ...prev,
      date: date
    }));
  };

  const handleParticipantsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setBooking(prev => ({
        ...prev,
        participants: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    // In a real application, you would send this data to your backend
    console.log("Booking details:", booking);
  };

  const nextStep = () => {
    if ((bookingStep === 1 && booking.packageId && booking.fleetId) || 
        (bookingStep === 2 && booking.date && booking.time) ||
        bookingStep === 3) {
      setBookingStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setBookingStep(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://i.ytimg.com/vi/0EiGyRVvBAs/maxresdefault.jpg')] bg-cover bg-bottom"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Book Your Perfect Maritime Experience</h1>
            <p className="text-xl text-blue-300 mb-6">
            <i className="fa-solid fa-globe mr-3 text-xl"></i>
               Customize your adventure by combining our premium vessels with exciting tour packages
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Booking Steps */}
            <div className="bg-blue-800 text-white p-4">
              <div className="flex justify-between">
                <div className={`flex flex-col items-center ${bookingStep >= 1 ? 'text-white' : 'text-blue-200'}`}>
                  <div className={`w-10 h-10 rounded-full ${bookingStep >= 1 ? 'bg-blue-600' : 'bg-blue-700'} flex items-center justify-center mb-1`}>
                    <span className="font-bold">1</span>
                  </div>
                  <span className="text-sm hidden md:block">Select Options</span>
                </div>
                <div className="flex-1 flex items-center mx-2">
                  <div className={`h-1 w-full ${bookingStep > 1 ? 'bg-blue-600' : 'bg-blue-700'}`}></div>
                </div>
                <div className={`flex flex-col items-center ${bookingStep >= 2 ? 'text-white' : 'text-blue-200'}`}>
                  <div className={`w-10 h-10 rounded-full ${bookingStep >= 2 ? 'bg-blue-600' : 'bg-blue-700'} flex items-center justify-center mb-1`}>
                    <span className="font-bold">2</span>
                  </div>
                  <span className="text-sm hidden md:block">Date & Time</span>
                </div>
                <div className="flex-1 flex items-center mx-2">
                  <div className={`h-1 w-full ${bookingStep > 2 ? 'bg-blue-600' : 'bg-blue-700'}`}></div>
                </div>
                <div className={`flex flex-col items-center ${bookingStep >= 3 ? 'text-white' : 'text-blue-200'}`}>
                  <div className={`w-10 h-10 rounded-full ${bookingStep >= 3 ? 'bg-blue-600' : 'bg-blue-700'} flex items-center justify-center mb-1`}>
                    <span className="font-bold">3</span>
                  </div>
                  <span className="text-sm hidden md:block">Group Details</span>
                </div>
                <div className="flex-1 flex items-center mx-2">
                  <div className={`h-1 w-full ${bookingStep > 3 ? 'bg-blue-600' : 'bg-blue-700'}`}></div>
                </div>
                <div className={`flex flex-col items-center ${bookingStep >= 4 ? 'text-white' : 'text-blue-200'}`}>
                  <div className={`w-10 h-10 rounded-full ${bookingStep >= 4 ? 'bg-blue-600' : 'bg-blue-700'} flex items-center justify-center mb-1`}>
                    <span className="font-bold">4</span>
                  </div>
                  <span className="text-sm hidden md:block">Confirmation</span>
                </div>
              </div>
            </div>
            
            {/* Form Content */}
            <form onSubmit={handleSubmit}>
              <div className="p-6">
                {/* Step 1: Select Tour Package and Fleet */}
                {bookingStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Experience</h2>
                    
                    {/* Tour Package Selection */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Choose a Tour Package</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tourPackages.map((pkg) => (
                          <div 
                            key={pkg.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${booking.packageId === pkg.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                            onClick={() => {
                              setBooking({...booking, packageId: pkg.id});
                              targetRef.current?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <img src={pkg.images[0]} alt={pkg.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-gray-900">{pkg.name}</h4>
                                <p className="text-sm text-gray-600">{pkg.duration}</p>
                              </div>
                              <span className="text-blue-800 font-bold">{pkg.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{pkg.description}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <i className="fa-solid fa-users mr-1"></i>
                              <span>Up to {pkg.maxParticipants} people</span>
                              <span className="mx-2">•</span>
                              <span>{pkg.difficulty}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Fleet Selection */}
                    <div ref={targetRef} className="pt-20">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Your Vessel</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fleets.map((fleet) => (
                          <div 
                            key={fleet.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${booking.fleetId === fleet.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                            onClick={() => setBooking({...booking, fleetId: fleet.id})}
                          >
                            <div className="flex">
                              <div className="w-20 h-20 mr-4 overflow-hidden rounded-lg">
                                <img 
                                  src={fleet.images[0]}
                                  alt={fleet.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900">{fleet.name}</h4>
                                <p className="text-sm text-gray-600">{fleet.type}</p>
                                <div className="flex items-center mt-1 text-sm text-gray-500">
                                  <i className="fa-solid fa-users mr-1"></i>
                                  <span>Capacity: {fleet.capacity}</span>
                                </div>
                                <div className="text-blue-800 font-bold mt-1">{fleet.price}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Date and Time Selection */}
                {bookingStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Date & Time</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Select Date</label>
                        <DatePicker
                          selected={booking.date}
                          onChange={handleDateChange}
                          minDate={new Date()}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholderText="Pick a date"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Select Time</label>
                        <select
                          name="time"
                          value={booking.time}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="07:00">7:00 AM</option>
                          <option value="08:00">8:00 AM</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          {selectedPackage?.id === "sunset-cruise" && (
                            <>
                              <option value="18:00">6:00 PM (Sunset)</option>
                              <option value="19:00">7:00 PM (Sunset)</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>
                    
                    {selectedPackage && selectedFleet && (
                      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-bold text-gray-900 mb-2">Your Selection</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <img src={selectedPackage.images[0]} className="w-full h-40 object-cover rounded-lg mb-2" alt="" />
                            <p className="text-sm text-gray-600"><strong>Package:</strong> {selectedPackage.name}</p>
                            <p className="text-sm text-gray-600"><strong>Duration:</strong> {selectedPackage.duration}</p>
                            <p className="text-sm text-gray-600"><strong>Includes:</strong> {selectedPackage.includes.slice(0, 3).join(", ")}...</p>
                          </div>
                          <div>
                            <img src={selectedFleet.images[0]} className="w-full h-40 object-cover rounded-lg mb-2" alt="" />
                            <p className="text-sm text-gray-600"><strong>Vessel:</strong> {selectedFleet.name} ({selectedFleet.type})</p>
                            <p className="text-sm text-gray-600"><strong>Capacity:</strong> Up to {selectedFleet.capacity} people</p>
                            <p className="text-sm text-gray-600"><strong>Features:</strong> {selectedFleet.features.slice(0, 3).join(", ")}...</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Step 3: Group Details and Contact Information */}
                {bookingStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Group Details & Contact Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Number of Participants</label>
                        <input
                          type="number"
                          name="participants"
                          value={booking.participants}
                          min="1"
                          max={selectedFleet?.capacity || 20}
                          onChange={handleParticipantsChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                        {selectedFleet && (
                          <p className="text-sm text-gray-500 mt-1">Maximum capacity: {selectedFleet.capacity} people</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
                        <textarea
                          name="customRequests"
                          value={booking.customRequests}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-32"
                          placeholder="Any dietary requirements, special occasions, or other requests..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            name="contactName"
                            value={booking.contactName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                          <input
                            type="email"
                            name="contactEmail"
                            value={booking.contactEmail}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="contactPhone"
                            value={booking.contactPhone}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 4: Booking Summary & Payment */}
                {bookingStep === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h2>
                    
                    {selectedPackage && selectedFleet && booking.date && (
                      <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <div className="flex flex-col md:flex-row justify-between mb-6">
                          <div className="mb-4 md:mb-0">
                            <h3 className="font-bold text-xl text-gray-900">{selectedPackage.name}</h3>
                            <p className="text-gray-600">with {selectedFleet.name} ({selectedFleet.type})</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-800">${booking.totalPrice.toFixed(2)}</div>
                            <p className="text-gray-600">Total Price</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Booking Details</h4>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <i className="fa-solid fa-calendar text-blue-600 mt-1 mr-2 w-5"></i>
                                <span className="text-gray-700">
                                  {booking.date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                              </li>
                              <li className="flex items-start">
                                <i className="fa-solid fa-clock text-blue-600 mt-1 mr-2 w-5"></i>
                                <span className="text-gray-700">
                                  {booking.time} ({selectedPackage.duration})
                                </span>
                              </li>
                              <li className="flex items-start">
                                <i className="fa-solid fa-users text-blue-600 mt-1 mr-2 w-5"></i>
                                <span className="text-gray-700">{booking.participants} participants</span>
                              </li>
                              {booking.customRequests && (
                                <li className="flex items-start">
                                  <i className="fa-solid fa-message text-blue-600 mt-1 mr-2 w-5"></i>
                                  <span className="text-gray-700">{booking.customRequests}</span>
                                </li>
                              )}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Contact Information</h4>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <i className="fa-solid fa-user text-blue-600 mt-1 mr-2 w-5"></i>
                                <span className="text-gray-700">{booking.contactName}</span>
                              </li>
                              <li className="flex items-start">
                                <i className="fa-solid fa-envelope text-blue-600 mt-1 mr-2 w-5"></i>
                                <span className="text-gray-700">{booking.contactEmail}</span>
                              </li>
                              <li className="flex items-start">
                                <i className="fa-solid fa-phone text-blue-600 mt-1 mr-2 w-5"></i>
                                <span className="text-gray-700">{booking.contactPhone}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h4 className="font-bold text-gray-900 mb-2">Price Breakdown</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-gray-700">
                              <span>{selectedPackage.name} ({booking.participants} x {getPriceValue(selectedPackage.price)})</span>
                              <span>${(getPriceValue(selectedPackage.price) * booking.participants).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                              <span>{selectedFleet.name} ({selectedFleet.price})</span>
                              <span>${parseFloat(selectedFleet.price.replace(/[^0-9.]/g, "")).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-300">
                              <span>Total</span>
                              <span>${booking.totalPrice.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-2">Payment Method</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div 
                          className="border rounded-lg p-4 cursor-pointer border-blue-500 bg-blue-50 flex items-center"
                        >
                          <div className="w-12 h-8 mr-3 flex items-center justify-center">
  <i className="fa-solid fa-credit-card text-2xl text-blue-600"></i>
</div>
<div>
  <div className="font-bold">Credit Card</div>
  <div className="text-sm text-gray-600">Visa, Mastercard, AMEX</div>
</div>
</div>

<div 
  className="border rounded-lg p-4 cursor-pointer hover:border-blue-300 flex items-center"
>
  <div className="w-12 h-8 mr-3 flex items-center justify-center">
    <i className="fa-brands fa-paypal text-2xl text-blue-700"></i>
  </div>
  <div>
    <div className="font-bold">PayPal</div>
    <div className="text-sm text-gray-600">Pay with your PayPal account</div>
  </div>
</div>

<div 
  className="border rounded-lg p-4 cursor-pointer hover:border-blue-300 flex items-center"
>
  <div className="w-12 h-8 mr-3 flex items-center justify-center">
    <i className="fa-solid fa-building-columns text-2xl text-gray-700"></i>
  </div>
  <div>
    <div className="font-bold">Bank Transfer</div>
    <div className="text-sm text-gray-600">Pay via bank transfer</div>
  </div>
</div>
</div>
</div>

{/* Credit Card Form */}
<div className="mt-6">
  <div className="border rounded-lg p-6 bg-white">
    <h4 className="font-bold text-gray-900 mb-4">Card Details</h4>
    
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">Card Number</label>
      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Expiration Date</label>
        <input
          type="text"
          placeholder="MM/YY"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">CVV</label>
        <input
          type="text"
          placeholder="123"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
    
    <div className="mt-4">
      <label className="block text-gray-700 font-medium mb-2">Name on Card</label>
      <input
        type="text"
        placeholder="John Doe"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </div>
</div>

<div className="mt-6">
  <div className="flex items-center">
    <input 
      type="checkbox" 
      id="agree-terms" 
      className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500"
      required
    />
    <label htmlFor="agree-terms" className="text-gray-700">
      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Cancellation Policy</a>
    </label>
  </div>
</div>
</div>
)}
                </div>
{/* Confirmation Screen */}
{showConfirmation && (
<div className="p-6 text-center">
  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <i className="fa-solid fa-check text-3xl text-green-600"></i>
  </div>
  <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
  <p className="text-lg text-gray-600 mb-6">
    Thank you for your booking. A confirmation has been sent to your email.
  </p>
  <div className="mb-8">
    <div className="text-gray-700">Booking Reference: <span className="font-bold">MAR-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span></div>
  </div>
  <button
    type="button"
    onClick={() => navigate('/')}
    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
  >
    Return to Home
  </button>
</div>
)}

{/* Navigation Buttons */}
<div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
  {bookingStep > 1 && !showConfirmation && (
    <button
      type="button"
      onClick={prevStep}
      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center"
    >
      <i className="fa-solid fa-arrow-left mr-2"></i>
      Previous
    </button>
  )}
  {bookingStep < 4 && (
    <button
      type="button"
      onClick={nextStep}
      className={`px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ml-auto flex items-center ${
        (bookingStep === 1 && (!booking.packageId || !booking.fleetId)) || 
        (bookingStep === 2 && !booking.date) ? 
        'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={(bookingStep === 1 && (!booking.packageId || !booking.fleetId)) || (bookingStep === 2 && !booking.date)}
    >
      Continue
      <i className="fa-solid fa-arrow-right ml-2"></i>
    </button>
  )}
  {bookingStep === 4 && !showConfirmation && (
    <button
      type="submit"
      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ml-auto flex items-center"
    >
      Complete Booking
      <i className="fa-solid fa-check ml-2"></i>
    </button>
  )}
</div>
</form>
</div>
</div>
</section>

{/* Additional Information */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Booking Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-600 text-3xl mb-4">
            <i className="fa-solid fa-calendar-check"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Cancellation Policy</h3>
          <p className="text-gray-600">
            Free cancellation up to 48 hours before your scheduled departure. Cancellations within 48 hours will incur a 50% fee.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-600 text-3xl mb-4">
            <i className="fa-solid fa-umbrella-beach"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">What to Bring</h3>
          <p className="text-gray-600">
            Sunscreen, hat, swimwear, towel, and a valid ID. All safety equipment and refreshments are provided by us.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-600 text-3xl mb-4">
            <i className="fa-solid fa-life-ring"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Information</h3>
          <p className="text-gray-600">
            All passengers must follow safety instructions. Children under 12 must be accompanied by an adult. Life jackets are provided.
          </p>
        </div>
      </div>
      
      <div className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-1"><i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>Are food and drinks included?</h4>
            <p className="text-gray-600">
              Most of our packages include refreshments. The Island Hopping and Fishing Expedition packages include a full lunch. You're welcome to bring your own snacks and drinks as well.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-1"><i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>What happens in case of bad weather?</h4>
            <p className="text-gray-600">
              In case of inclement weather, we'll offer you the option to reschedule or receive a full refund. Our team will contact you 24 hours before your scheduled trip if weather conditions are unfavorable.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-1"><i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>Do I need any prior experience?</h4>
            <p className="text-gray-600">
              Most of our tours are suitable for beginners with no prior experience. For activities like scuba diving, prior certification may be required. Please check the difficulty level listed for each package.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-1"><i className="fa-solid fa-circle-question mr-3 text-blue-600"></i>Is transportation to the marina included?</h4>
            <p className="text-gray-600">
              Transportation is not included in the standard package price. However, we can arrange pickup and drop-off for an additional fee. Please mention this in your special requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
);
};

export default Booking;