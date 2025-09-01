import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

function Products() {
  const [cartItems, setCartItems, products, error, loading] =
    useOutletContext();

  if (loading) return <p className={styles.load}>Loading...</p>;
  if (error)
    return <p className={styles.load}>A network error was encountered</p>;

  return (
    <div className={styles.container}>
      <h2>Products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard
            className={styles.product}
            key={product.id}
            cartItems={cartItems}
            setCartItems={setCartItems}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
