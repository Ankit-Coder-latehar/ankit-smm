import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Section: Logo & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="path_to_logo" // Replace with your logo path
              alt="Hyperlink InfoSystem Logo"
              className="h-12"
            />
            <p className="text-gray-400 max-w-xs">
              Top IT Consulting Company Delivering Custom Innovative Solutions
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Social Media</h3>
            <p className="text-gray-400 mb-4">Don't Miss To Follow Us On Our Social Networks Accounts.</p>
            <div className="flex justify-center space-x-6">
              <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagEV_YM3mUzM03Vf1KoP5Qnq1vFurqfv_Iw&s" alt="Facebook" className="h-6" /></a>
              <a href="#"><img src="data:image/png;base64,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" alt="Twitter" className="h-6" /></a>
              <a href="#"><img src="data:image/png;base64,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" alt="LinkedIn" className="h-6" /></a>
              <a href="#"><img src="data:image/jpeg;base64,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" alt="Instagram" className="h-6" /></a>
              <a href="#"><img src="path_to_youtube_icon" alt="YouTube" className="h-6" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Who We Are</a></li>
              <li><a href="#" className="hover:text-gray-400">Career</a></li>
              <li><a href="#" className="hover:text-gray-400">Events</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">Industries</a></li>
              <li><a href="#" className="hover:text-gray-400">Case Study</a></li>
              <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-400">Sitemap</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Mobile App Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Mobile App</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Android Apps</a></li>
              <li><a href="#" className="hover:text-gray-400">iPhone Apps</a></li>
              <li><a href="#" className="hover:text-gray-400">Hybrid Apps</a></li>
              <li><a href="#" className="hover:text-gray-400">Flutter</a></li>
              <li><a href="#" className="hover:text-gray-400">React Native</a></li>
              <li><a href="#" className="hover:text-gray-400">Kotlin</a></li>
              <li><a href="#" className="hover:text-gray-400">Ionic</a></li>
              <li><a href="#" className="hover:text-gray-400">Swift</a></li>
              <li><a href="#" className="hover:text-gray-400">Xamarin</a></li>
            </ul>
          </div>

          {/* Web Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Web</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">PHP</a></li>
              <li><a href="#" className="hover:text-gray-400">Java</a></li>
              <li><a href="#" className="hover:text-gray-400">Python</a></li>
              <li><a href="#" className="hover:text-gray-400">WordPress</a></li>
              <li><a href="#" className="hover:text-gray-400">Drupal</a></li>
              <li><a href="#" className="hover:text-gray-400">Laravel</a></li>
              <li><a href="#" className="hover:text-gray-400">CodeIgniter</a></li>
              <li><a href="#" className="hover:text-gray-400">CakePHP</a></li>
              <li><a href="#" className="hover:text-gray-400">TypeScript</a></li>
            </ul>
          </div>

          {/* Ecommerce Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ecommerce</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Magento</a></li>
              <li><a href="#" className="hover:text-gray-400">Shopify</a></li>
              <li><a href="#" className="hover:text-gray-400">Ubercart</a></li>
              <li><a href="#" className="hover:text-gray-400">Prestashop</a></li>
              <li><a href="#" className="hover:text-gray-400">CS Cart</a></li>
              <li><a href="#" className="hover:text-gray-400">VirtueMart</a></li>
              <li><a href="#" className="hover:text-gray-400">BigCommerce</a></li>
              <li><a href="#" className="hover:text-gray-400">WooCommerce</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
