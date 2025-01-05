import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 shadow-lg mt-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Left Section - Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:info@perspectify.com" className="hover:underline text-blue-400">info@perspectify.com</a></li>
          <li>Phone: <span className="text-gray-400">+1 (123) 456-7890</span></li>
          <li>Address: <span className="text-gray-400">1234 Main St, Anytown, USA</span></li>
        </ul>
      </div>

      {/* Center Section - Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      {/* Right Section - Social Media */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>
    </div>

    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Perspectify. All rights reserved.
    </div>

    {/* Footer Bottom Section */}
    <div className="mt-6 border-t border-gray-600 pt-2 text-center">
      <p className="text-sm">© 2024 Perspectify. All Rights Reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
