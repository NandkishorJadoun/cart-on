import { useOutletContext } from "react-router-dom";
import EmptyCart from "../EmptyCart/EmptyCart";
import CartSummary from "../CartSummary/CartSummary";
import styles from "./Cart.module.css"

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Shopping bag</h2>
      {cartItems.length > 0 ? (
        <CartSummary cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;



