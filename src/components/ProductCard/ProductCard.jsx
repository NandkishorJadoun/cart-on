import styles from "./ProductCard.module.css";
import { Star } from "lucide-react";

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
    <div className={styles.card}>
      <p>{product.title}</p>
      <img className={styles.image} src={product.image} alt={product.title} />
      <div>
        <p>$ {product.price}</p>
        <p className={styles.rating}>
          {product.rating} <Star />{" "}
        </p>
      </div>
      <button onClick={() => addItemsInCart(product.id)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
