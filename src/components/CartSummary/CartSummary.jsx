import CartItemList from "../CartItemList/CartItemList";
import CartTotals from "../CartTotals/CartTotals";

function CartSummary({ cartItems, setCartItems }) {
  return (
    <div>
      <CartItemList cartItems={cartItems} setCartItems={setCartItems} />
      <CartTotals cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default CartSummary;
