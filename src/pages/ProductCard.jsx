import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/products/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <p className="text-primary font-bold">KSh {product.price}</p>
        </div>
      </Link>
      <button 
        onClick={() => addToCart(product)}
        className="w-full bg-primary text-white py-2 hover:bg-primary-dark transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;