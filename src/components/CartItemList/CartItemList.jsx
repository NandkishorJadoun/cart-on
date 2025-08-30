import CartItem from "../CartItem/CartItem";

function CartItemList({ cartItems, setCartItems }) {
  const removeItemHandler = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, cart: item.cart + 1 } : item
    );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, cart: item.cart - 1 } : item
    );

    setCartItems(updatedCart);
  };

  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          removeItemHandler={removeItemHandler}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
}

export default CartItemList