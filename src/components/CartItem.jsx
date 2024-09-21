import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 mb-4">
      {/* Product Image */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0  ">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover h-full w-full md:h-48 md:w-48 rounded-lg fit-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col w-full md:w-2/3 md:ml-4">
        <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
        <p className="text-gray-600 mt-2">{item.description}</p>

        {/* Price and Remove Button */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-green-600">${item.price}</p>

          <button
            onClick={removeFromCart}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            <FcDeleteDatabase size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
