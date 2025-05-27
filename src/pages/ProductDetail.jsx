import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-primary font-bold mb-4">KSh {product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;