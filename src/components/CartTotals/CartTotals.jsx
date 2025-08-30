import { Link } from "react-router-dom";

function CartTotals({ cartItems, setCartItems }) {
  const discount = 33;
  const subTotal =
    Math.round(
      cartItems.reduce((acc, curr) => acc + curr.price * curr.cart, 0) * 100
    ) / 100;

  const totalPrice =
    Math.round(((subTotal * (100 - discount)) / 100) * 100) / 100;

  return (
    <div>
      <h3>Order Summary</h3>
      <p>$ {totalPrice}</p>
      <div>
        <p>Subtotal</p>
        <p>$ {subTotal}</p>
        <p>Discount</p>
        <p>{discount}%</p>
        <hr />
        <p>Total</p>
        <p>$ {totalPrice}</p>
      </div>
      <button onClick={() => setCartItems([])}>
        <Link to={"/checkout"}>Checkout</Link>
      </button>
    </div>
  );
}

export default CartTotals;
