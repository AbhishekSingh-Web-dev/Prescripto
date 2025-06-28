import React from 'react';
import { assets } from '../assets/assets';
import { Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white md:mx-10 mt-40">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 text-sm text-gray-600">

        {/* Logo & Description */}
        <div>
          <img className="mb-5 w-36" src={assets.logo} alt="Prescripto Logo" />
          <p className="mb-2 leading-relaxed">
            Book trusted doctors instantly and manage your appointments with ease—anytime, anywhere.
          </p>
          <p className="mb-2 leading-relaxed">
            Your health, your schedule—get expert medical care on-demand with seamless booking.
          </p>
          <p className="leading-relaxed">
            Empowering patients with a smarter, faster, and more reliable way to access healthcare.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Get In Touch</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 7905357576</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>abhishek.2201151ec@iiitbh.ac.in</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li onClick={() => handleNavigation('/')} className="hover:text-primary transition cursor-pointer">Home</li>
            {/* <li onClick={() => handleNavigation('/appointment')} className="hover:text-primary transition cursor-pointer">Book Appointment</li> */}
            <li onClick={() => handleNavigation('/doctors')} className="hover:text-primary transition cursor-pointer">Doctors</li>
            <li onClick={() => handleNavigation('/contact')} className="hover:text-primary transition cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t pt-5 text-center text-xs text-gray-500">
        © 2025 Prescripto.com — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
