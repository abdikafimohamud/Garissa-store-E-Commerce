import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">First Name</label>
              <input 
                type="text" 
                className="w-full border rounded-lg px-4 py-2" 
                required 
              />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input 
                type="text" 
                className="w-full border rounded-lg px-4 py-2" 
                required 
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border rounded-lg px-4 py-2" 
              required 
            />
          </div>
          
          <div>
            <label className="block mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border rounded-lg px-4 py-2" 
              required 
            />
          </div>
          
          <div>
            <label className="block mb-1">Confirm Password</label>
            <input 
              type="password" 
              className="w-full border rounded-lg px-4 py-2" 
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Register
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;