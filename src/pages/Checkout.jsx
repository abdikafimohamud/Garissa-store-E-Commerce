import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment here
    alert('Order placed successfully!');
    clearCart();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            
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
              <label className="block mb-1">Phone</label>
              <input 
                type="tel" 
                className="w-full border rounded-lg px-4 py-2" 
                required 
              />
            </div>
            
            <div>
              <label className="block mb-1">Address</label>
              <textarea 
                className="w-full border rounded-lg px-4 py-2" 
                rows="3" 
                required
              ></textarea>
            </div>
            
            <div>
              <label className="block mb-1">Payment Method</label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>MPesa</option>
                <option>Credit Card</option>
                <option>Cash on Delivery</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>
        
        <div className="md:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>KSh {item.price}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>KSh {total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;