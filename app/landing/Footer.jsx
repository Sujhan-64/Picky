const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-soft-blue-dark to-soft-green-dark bg-clip-text text-transparent">
              PickyArtZ
            </h3>
            <p className="text-gray-600 text-sm">
              Your trusted destination for quality products and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">About</a></li>
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-soft-blue-dark transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: support@pickyartz.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 PickyArtZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
