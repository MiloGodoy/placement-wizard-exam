import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-3 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
          <div className="mb-2 lg:mb-0 text-center lg:text-left">
            <p className="text-sm lg:text-base font-bold mb-1">Seguinos en las redes:</p>
            <div className="flex justify-center lg:justify-start space-x-3">
              <a href="#" className="text-white hover:text-gray-300 text-lg lg:text-xl"><FaFacebook /></a>
              <a href="#" className="text-white hover:text-gray-300 text-lg lg:text-xl"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-gray-300 text-lg lg:text-xl"><FaYoutube /></a>
              {/* Agregar el ícono de TikTok aquí */}
            </div>
          </div>
          <div className="mb-2 lg:mb-0">
            <div className="flex flex-col lg:flex-row items-center mt-1 lg:mt-0">
              <div className="flex items-center mb-1 lg:mb-0 lg:mr-4">
                <FaPhoneAlt className="mr-2 text-base lg:text-lg" />
                <span className="text-sm lg:text-base">021-7294900</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 text-base lg:text-lg" />
                <span className="text-sm lg:text-base">0982 – 753.647</span>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-xs lg:text-sm">&copy; 2024 Wizard by Pearson | Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
