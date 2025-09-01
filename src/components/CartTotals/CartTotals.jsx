import { useNavigate } from "react-router-dom";
import styles from "./CartTotals.module.css"

function CartTotals({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const discount = 33;
  const subTotal =
    Math.round(
      cartItems.reduce((acc, curr) => acc + curr.price * curr.cart, 0) * 100
    ) / 100;

  const totalPrice =
    Math.round(((subTotal * (100 - discount)) / 100) * 100) / 100;

  return (
    <div className={styles.totals}>
      <h3>Order Summary</h3>
      <p>$ {totalPrice}</p>
      <div>
        <p>Subtotal</p>
        <p className={styles.number}>$ {subTotal}</p>
        <p>Discount</p>
        <p className={styles.number}>{discount}%</p>
        <hr />
        <p>Total</p>
        <p className={styles.number}>$ {totalPrice}</p>
      </div>
      <button
        onClick={() => {
          setCartItems([]);
          navigate("/checkout");
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default CartTotals;
