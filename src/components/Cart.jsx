import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../actions/cartActions";
import ProductCard from "./ProductCard";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAllClear = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>TOTAL: {parseInt(total).toFixed(2)}</h1>
      <div className="grid-col-1 gap-1">
        {cart.map((cartItem) => {
          return <ProductCard  key={cartItem?.id} product={cartItem}  />;
        })}
      </div>
      { total != 0 && (
        <button onClick={handleAllClear} className="border-2 border-red-200 hover:border-red-600 rounded-lg p-2 flex items-center">Clear the cart</button>
      )}
    </div>
  );
};

export default Cart;
