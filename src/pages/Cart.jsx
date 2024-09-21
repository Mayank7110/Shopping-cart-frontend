import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {cart.length > 0 ? (
        <div className="w-full max-w-4xl p-4">
          {/* Cart Items */}
          <div className="mb-8">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
              <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>
            </div>

            <p className="text-gray-600">
              <span className="font-medium">Total Items: </span>
              {cart.length}
            </p>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-bold text-gray-900">
                Total Amount: <span className="text-green-600">${totalAmount}</span>
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3 xl font-bold text-gray-800 mb-4">Cart is Empty</h1>
          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
