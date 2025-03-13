import React, { useState } from 'react';
import Navbar from '../layout/NavBar';
import Footer from '../layout/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman form
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. Our team will contact you soon!'
    });
    
    // Reset form setelah berhasil
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <>
      <Navbar />
      
      <section className="pt-24 pb-12 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://static.vecteezy.com/system/resources/previews/011/348/023/large_2x/world-map-banner-concept-detailed-flat-map-of-continents-3d-rendering-photo.jpg')] bg-cover bg-top"></div>
                <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl text-blue-300 mb-6">
                    <i className="fa-solid fa-location-dot mr-3 text-xl"></i>
                    Reach out to us anytime!
                    </p>
                </div>
                </div>
        </section>
      
      <div className="container mx-auto py-16 px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Information */}
          <div className="md:w-1/3 bg-blue-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              <i className="fa-solid fa-location-dot mr-3 text-xl text-white"></i>
              Fleet Street, London, Britania Raya
            </p>
            <p className="text-gray-300 mb-4">
              <i className="fa-solid fa-phone mr-3 text-xl text-white"></i>
              +62 123 456 7890
            </p>
            <p className="text-gray-300 mb-4">
              <i className="fa-solid fa-envelope mr-3 text-xl text-white"></i>
              <a href="mailto:0Pv3U@example.com" className="text-gray-300 hover:underline">0Pv3U@example.com</a>
            </p>
            <p className="text-gray-300">
              <i className="fa-solid fa-clock mr-3 text-xl text-white"></i>
              Mon - Fri: 08:00 - 18:00
            </p>
          </div>
          
          
          {/* Contact Form */}
          <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Send Us a Message</h2>
            
            {formStatus.submitted ? (
              <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="Reservation">Reservation</option>
                      <option value="Charter Info">Charter Information</option>
                      <option value="Pricing">Pricing</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium flex items-center"
                  >
                    <i className="fa-solid fa-paper-plane mr-2"></i> Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200">
        {/* Placeholder untuk Google Maps */}
        <iframe 
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.122517824192!2d-0.1105416!3d51.5141926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b320b35d51%3A0xf57373ad7fc50b5a!2sFleet%20St%2C%20London%2C%20Britania%20Raya!5e0!3m2!1sen!2sid!4v1632455323084!5m2!1sen!2sid"
        className="w-full h-full"
        loading="lazy"
        ></iframe>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;