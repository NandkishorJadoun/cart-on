function ProductCard({ cartItems, setCartItems, ...product }) {
  const addItemsInCart = (id) => {
    const itemExist = cartItems.find((cartItem) => cartItem.id === id);

    if (itemExist) {
      const updatedCart = cartItems.map((item) => {
        return item.id === id && item.cart < 5
          ? { ...item, cart: item.cart + 1 }
          : item;
      });
      setCartItems(updatedCart);
    } else {
      const addedItem = { ...product, cart: 1 };
      setCartItems([...cartItems, addedItem]);
    }
  };

  return (
    <div>
      <p>{product.title}</p>
      <img src={product.image} alt={product.title} height={200} />
      <div>
        <p>{product.price}</p>
        <p>{product.rating}</p>
      </div>
      <button onClick={() => addItemsInCart(product.id)}>Add to Cart</button>
      <hr />
    </div>
  );
}

export default ProductCard;
