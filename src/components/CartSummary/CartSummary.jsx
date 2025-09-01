import CartItemList from "../CartItemList/CartItemList";
import CartTotals from "../CartTotals/CartTotals";
import styles from "./CartSummary.module.css"

function CartSummary({ cartItems, setCartItems }) {
  return (
    <div className={styles.summary}>
      <CartItemList cartItems={cartItems} setCartItems={setCartItems} />
      <CartTotals cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default CartSummary;
