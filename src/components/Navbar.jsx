import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-white p-2 rounded-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-blue-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold font-serif tracking-tight group-hover:text-blue-200 transition-colors">
                Garissa Market
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/cart" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors">
                Cart
              </Link>
              <Link to="/login" className="bg-white text-blue-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-serif">
            Welcome to <span className="text-blue-600">Garissa Market</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover authentic products handcrafted by artisans from Garissa County.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Shop Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-serif">
              Featured <span className="text-blue-600">Products</span>
            </h3>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Handpicked selection of our finest products from Garissa
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9uZXl8ZW58MHx8MHx8fDA%3D" 
                  alt="Garissa Honey" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Garissa Honey</h4>
                <p className="text-gray-600 mb-4">Pure natural honey from Garissa</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-blue-600">KSh 1200</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src="https://media.istockphoto.com/id/2203140062/photo/colorful-handcrafted-bags-and-baskets-displayed-at-an-artisan-market.webp" 
                  alt="Handwoven Basket" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Handwoven Basket</h4>
                <p className="text-gray-600 mb-4">Traditional handwoven basket</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-blue-600">KSh 800</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src="https://media.istockphoto.com/id/463651383/photo/mangoes-composition.webp" 
                  alt="Mangoes" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Mangoes (1kg)</h4>
                <p className="text-gray-600 mb-4">Fresh, juicy mangoes from Garissa</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-blue-600">KSh 300</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-yellow-500 mx-auto mb-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" 
              />
            </svg>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              "Garissa Market brings the authentic taste and craftsmanship of our region right to your doorstep. Quality you can trust!"
            </blockquote>
            <p className="font-semibold text-blue-600">— Local Artisan Cooperative</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-bold font-serif mb-4">Garissa Market</h5>
              <p className="text-gray-300">
                Your premier e-commerce platform for authentic products from Garissa and beyond.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-bold font-serif mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold font-serif mb-4">Contact</h5>
              <p className="text-gray-300">Email: info@garissamarket.com</p>
              <p className="text-gray-300">Phone: +254 712 345 678</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Garissa Market. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;