import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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

      {/* Category or About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 font-serif">
            Why Shop With Us?
          </h3>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Authentic Products</h4>
              <p className="text-gray-600">Each item is sourced directly from local artisans in Garissa.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Affordable Prices</h4>
              <p className="text-gray-600">We offer fair pricing while supporting our local community.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-700">Fast Delivery</h4>
              <p className="text-gray-600">Your orders are delivered safely and quickly to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 max-w-xl mx-auto">Sign up for our newsletter to get the latest updates and deals.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-md text-gray-800 w-full sm:w-auto"
              required
            />
            <button 
              type="submit" 
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
