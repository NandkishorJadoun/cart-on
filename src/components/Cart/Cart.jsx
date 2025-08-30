import { useOutletContext } from "react-router-dom";
import EmptyCart from "../EmptyCart/EmptyCart";
import CartSummary from "../CartSummary/CartSummary";

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  return (
    <>
      <h2>Shopping bag</h2>
      {cartItems.length > 0 ? (
        <CartSummary cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;



