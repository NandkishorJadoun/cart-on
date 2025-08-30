import { useOutletContext } from "react-router-dom";
import EmptyCart from "../EmptyCart/EmptyCart";
import CartSummary from "../CartSummary/CartSummary";

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  return (
    <div>
      <h1>Shopping bag</h1>
      {cartItems.length > 0 ? (
        <CartSummary cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;



